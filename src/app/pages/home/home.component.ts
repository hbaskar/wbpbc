import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  OnDestroy,
  ViewChild,
  ElementRef,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  currentReviewIndex = signal(0);
  visibleImages = signal<Set<number>>(new Set());
  showVideo = signal(false);
  lightboxOpen = signal(false);
  lightboxImageIndex = signal(0);
  @ViewChild('heroVideo', { static: false }) heroVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('welcomeVideo', { static: false }) welcomeVideo?: ElementRef<HTMLVideoElement>;
  private carouselInterval?: ReturnType<typeof setInterval>;
  private imageObserver?: IntersectionObserver;
  private keyboardListener?: (e: KeyboardEvent) => void;

  constructor(public contentService: ContentService) {
    // Effect to adjust review wrapper height on mobile when review changes
    effect(() => {
      // Access currentReviewIndex to trigger effect
      const index = this.currentReviewIndex();
      
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        setTimeout(() => {
          this.adjustReviewHeight();
        }, 50);
      }
    });
  }

  ngOnInit(): void {
    this.startReviewCarousel();
    // Initialize all gallery images as visible
    const galleryImages = this.contentService.getGalleryImages();
    const initialVisibleSet = new Set<number>();
    for (let i = 0; i < galleryImages.length; i++) {
      initialVisibleSet.add(i);
    }
    this.visibleImages.set(initialVisibleSet);
  }

  ngAfterViewInit(): void {
    this.setupImageObserver();
    
    // IMMEDIATELY mute videos before any playback can occur
    if (typeof window !== 'undefined') {
      // Mute hero video immediately if it exists
      if (this.heroVideo?.nativeElement) {
        const heroVideo = this.heroVideo.nativeElement;
        heroVideo.muted = true;
        heroVideo.volume = 0;
        heroVideo.loop = true;
        heroVideo.playsInline = true;
        // Prevent autoplay from HTML attribute
        heroVideo.removeAttribute('autoplay');
      }
      
      // Mute welcome video immediately if it exists
      if (this.welcomeVideo?.nativeElement) {
        const welcomeVideo = this.welcomeVideo.nativeElement;
        welcomeVideo.muted = true;
        welcomeVideo.volume = 0;
        welcomeVideo.loop = true;
        welcomeVideo.playsInline = true;
        // Prevent autoplay from HTML attribute
        welcomeVideo.removeAttribute('autoplay');
      }
    }
    
    // Show hero video after 800ms delay with slide-in effect
    setTimeout(() => {
      this.showVideo.set(true);
      // Setup videos after they become visible
      setTimeout(() => {
        this.setupVideo();
        this.setupWelcomeVideo();
      }, 100);
    }, 800);

    // Set initial review height on mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        this.adjustReviewHeight();
      }, 300);
    }
  }

  private setupVideo(): void {
    if (typeof window === 'undefined' || !this.heroVideo?.nativeElement) {
      return;
    }

    const video = this.heroVideo.nativeElement;
    
    // CRITICAL: Ensure muted and volume 0 BEFORE any playback
    video.muted = true;
    video.volume = 0;
    video.loop = true;
    video.playsInline = true;

    // Add event listeners to enforce muting on any play attempt
    const enforceMute = () => {
      video.muted = true;
      video.volume = 0;
    };
    
    video.addEventListener('play', enforceMute, { passive: true });
    video.addEventListener('playing', enforceMute, { passive: true });
    video.addEventListener('loadstart', enforceMute, { passive: true });

    // Play the video after ensuring it's muted
    const playVideo = () => {
      // Double-check muted before playing
      video.muted = true;
      video.volume = 0;
      video.play().catch((error) => {
        // If autoplay fails, try again when video can play
        console.log('Autoplay prevented, will retry:', error);
      });
    };

    // Try to play when video is ready
    if (video.readyState >= 2) {
      // Video is already loaded
      playVideo();
    } else {
      // Wait for video to be ready
      video.addEventListener('canplay', playVideo, { once: true });
      video.addEventListener('loadeddata', playVideo, { once: true });
    }
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.imageObserver) {
      this.imageObserver.disconnect();
    }
    this.removeKeyboardNavigation();
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = '';
    }
  }

  private startReviewCarousel(): void {
    const reviews = this.contentService.getReviews();
    if (reviews.length > 1) {
      this.carouselInterval = setInterval(() => {
        this.currentReviewIndex.update((index) => (index + 1) % reviews.length);
      }, 5000);
    }
  }

  private setupWelcomeVideo(): void {
    if (typeof window === 'undefined' || !this.welcomeVideo?.nativeElement) {
      return;
    }

    const video = this.welcomeVideo.nativeElement;
    
    // CRITICAL: Ensure muted and volume 0 BEFORE any playback
    video.muted = true;
    video.volume = 0;
    video.loop = true;
    video.playsInline = true;

    // Add event listeners to enforce muting on any play attempt
    const enforceMute = () => {
      video.muted = true;
      video.volume = 0;
    };
    
    video.addEventListener('play', enforceMute, { passive: true });
    video.addEventListener('playing', enforceMute, { passive: true });
    video.addEventListener('loadstart', enforceMute, { passive: true });

    // Play the video after ensuring it's muted
    const playVideo = () => {
      // Double-check muted before playing
      video.muted = true;
      video.volume = 0;
      video.play().catch((error) => {
        // If autoplay fails, try again when video can play
        console.log('Autoplay prevented, will retry:', error);
      });
    };

    // Try to play when video is ready
    if (video.readyState >= 2) {
      // Video is already loaded
      playVideo();
    } else {
      // Wait for video to be ready
      video.addEventListener('canplay', playVideo, { once: true });
      video.addEventListener('loadeddata', playVideo, { once: true });
    }
  }

  private setupImageObserver(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(
                entry.target.getAttribute('data-index') || '0'
              );
              this.visibleImages.update((set) => {
                const newSet = new Set(set);
                newSet.add(index);
                return newSet;
              });
              this.imageObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      setTimeout(() => {
        const images = document.querySelectorAll('.gallery-image');
        images.forEach((img) => this.imageObserver?.observe(img));
      }, 100);
    }
  }

  goToReview(index: number): void {
    this.currentReviewIndex.set(index);
    // Adjust height after review change
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        this.adjustReviewHeight();
      }, 50);
    }
  }

  nextReview(): void {
    const reviews = this.contentService.getReviews();
    this.currentReviewIndex.update((index) => (index + 1) % reviews.length);
    // Adjust height after review change
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        this.adjustReviewHeight();
      }, 50);
    }
  }

  prevReview(): void {
    const reviews = this.contentService.getReviews();
    this.currentReviewIndex.update(
      (index) => (index - 1 + reviews.length) % reviews.length
    );
    // Adjust height after review change
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        this.adjustReviewHeight();
      }, 50);
    }
  }

  /**
   * Adjusts the height of the review content wrapper to match the active review's height
   * This ensures smooth height transitions on mobile
   * Adds 100px extra height on mobile to ensure all content is visible
   */
  private adjustReviewHeight(): void {
    if (typeof window === 'undefined') return;

    const wrapper = document.querySelector('.review-content-wrapper') as HTMLElement;
    const activeReview = document.querySelector('.review-content.active') as HTMLElement;

    if (wrapper && activeReview) {
      // Calculate height and add 100px extra for mobile to ensure all content is visible
      const currentHeight = activeReview.scrollHeight;
      const extraHeight = 100; // Additional 100px for mobile
      wrapper.style.height = `${currentHeight + extraHeight}px`;
    }
  }

  openLightbox(index: number): void {
    this.lightboxImageIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
    this.setupKeyboardNavigation();
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
    this.removeKeyboardNavigation();
  }

  nextLightboxImage(): void {
    const images = this.contentService.getGalleryImages();
    this.lightboxImageIndex.update((index) => (index + 1) % images.length);
  }

  prevLightboxImage(): void {
    const images = this.contentService.getGalleryImages();
    this.lightboxImageIndex.update(
      (index) => (index - 1 + images.length) % images.length
    );
  }

  downloadImage(): void {
    const images = this.contentService.getGalleryImages();
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = images[currentIndex];
    
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `gallery-image-${currentIndex + 1}.${imageUrl.split('.').pop()?.split('?')[0] || 'jpg'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error('Download failed:', err));
  }

  shareImage(): void {
    const images = this.contentService.getGalleryImages();
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = images[currentIndex];
    const fullUrl = window.location.origin + imageUrl;

    if (navigator.share) {
      navigator
        .share({
          title: 'Gallery Image',
          text: 'Check out this image from We Build Pickleball Courts',
          url: fullUrl,
        })
        .catch((err) => console.error('Share failed:', err));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard
        .writeText(fullUrl)
        .then(() => {
          alert('Image URL copied to clipboard!');
        })
        .catch((err) => console.error('Copy failed:', err));
    }
  }

  private setupKeyboardNavigation(): void {
    this.keyboardListener = (e: KeyboardEvent) => {
      if (!this.lightboxOpen()) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        this.nextLightboxImage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        this.prevLightboxImage();
      } else if (e.key === 'Escape') {
        this.closeLightbox();
      }
    };
    document.addEventListener('keydown', this.keyboardListener);
  }

  private removeKeyboardNavigation(): void {
    if (typeof window === 'undefined' || !this.keyboardListener) {
      return;
    }
    document.removeEventListener('keydown', this.keyboardListener);
    this.keyboardListener = undefined;
  }
}

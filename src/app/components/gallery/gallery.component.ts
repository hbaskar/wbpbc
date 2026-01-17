import {
  Component,
  Input,
  signal,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() title: string = 'Gallery';
  
  visibleImages = signal<Set<number>>(new Set());
  lightboxOpen = signal(false);
  lightboxImageIndex = signal(0);
  private imageObserver?: IntersectionObserver;
  private keyboardListener?: (e: KeyboardEvent) => void;

  ngOnInit(): void {
    // Initialize all images as visible
    const initialSet = new Set<number>();
    this.images.forEach((_, index) => initialSet.add(index));
    this.visibleImages.set(initialSet);
  }

  ngAfterViewInit(): void {
    this.setupImageObserver();
  }

  ngOnDestroy(): void {
    this.imageObserver?.disconnect();
    this.removeKeyboardNavigation();
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = '';
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

  openLightbox(index: number): void {
    this.lightboxImageIndex.set(index);
    this.lightboxOpen.set(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    this.setupKeyboardNavigation();
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = '';
    }
    this.removeKeyboardNavigation();
  }

  nextLightboxImage(): void {
    this.lightboxImageIndex.update((index) => (index + 1) % this.images.length);
  }

  prevLightboxImage(): void {
    this.lightboxImageIndex.update(
      (index) => (index - 1 + this.images.length) % this.images.length
    );
  }

  downloadImage(): void {
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = this.images[currentIndex];
    
    if (typeof window === 'undefined') return;
    
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
    if (typeof window === 'undefined') return;
    
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = this.images[currentIndex];
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
    if (typeof window === 'undefined') return;
    
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


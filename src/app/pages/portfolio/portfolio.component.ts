import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, Nl2brPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, OnDestroy {
  activeTab = signal<'images' | 'videos'>('images');
  lightboxOpen = signal(false);
  lightboxImageIndex = signal(0);
  private keyboardListener?: (e: KeyboardEvent) => void;

  constructor(public contentService: ContentService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.removeKeyboardNavigation();
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = '';
    }
  }

  setActiveTab(tab: 'images' | 'videos'): void {
    this.activeTab.set(tab);
  }

  openLightbox(index: number): void {
    this.lightboxImageIndex.set(index);
    this.lightboxOpen.set(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      this.setupKeyboardNavigation();
    }
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = '';
      this.removeKeyboardNavigation();
    }
  }

  nextLightboxImage(): void {
    const images = this.contentService.getPortfolioImages();
    this.lightboxImageIndex.update((index) => (index + 1) % images.length);
  }

  prevLightboxImage(): void {
    const images = this.contentService.getPortfolioImages();
    this.lightboxImageIndex.update(
      (index) => (index - 1 + images.length) % images.length
    );
  }

  downloadImage(): void {
    const images = this.contentService.getPortfolioImages();
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = images[currentIndex];
    
    if (typeof window === 'undefined') return;
    
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-image-${currentIndex + 1}.${imageUrl.split('.').pop()?.split('?')[0] || 'jpg'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error('Download failed:', err));
  }

  shareImage(): void {
    const images = this.contentService.getPortfolioImages();
    const currentIndex = this.lightboxImageIndex();
    const imageUrl = images[currentIndex];
    
    if (typeof window === 'undefined') return;
    
    const fullUrl = window.location.origin + imageUrl;

    if (navigator.share) {
      navigator
        .share({
          title: 'Portfolio Image',
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

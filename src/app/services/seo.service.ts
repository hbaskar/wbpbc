import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoMetaData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMetaTags(metadata: SeoMetaData): void {
    if (metadata.title) {
      this.updateTitle(metadata.title);
    }

    if (metadata.description) {
      this.meta.updateTag({ name: 'description', content: metadata.description });
      this.meta.updateTag({ property: 'og:description', content: metadata.description });
    }

    if (metadata.keywords) {
      this.meta.updateTag({ name: 'keywords', content: metadata.keywords });
    }

    if (metadata.image) {
      this.meta.updateTag({ property: 'og:image', content: metadata.image });
    }

    if (metadata.url) {
      this.meta.updateTag({ property: 'og:url', content: metadata.url });
    }

    if (metadata.type) {
      this.meta.updateTag({ property: 'og:type', content: metadata.type });
    }
  }
}


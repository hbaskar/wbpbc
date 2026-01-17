import { RenderMode, ServerRoute } from '@angular/ssr';
import { ContentService } from './services/content.service';

// Create a service instance to get blog slugs
const contentService = new ContentService();

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const blogPosts = contentService.getBlogPosts();
      return blogPosts.map((post) => ({
        slug: post.slug,
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

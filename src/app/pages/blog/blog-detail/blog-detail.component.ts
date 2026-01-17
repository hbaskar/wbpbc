import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../../services/content.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  blogPost: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogPost = this.contentService.getBlogPostBySlug(slug);
      if (!this.blogPost) {
        // Redirect to blog listing if post not found
        this.router.navigate(['/blog']);
      }
    }
  }
}


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-residential',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">Residential Services</h1>
      <p class="page-description">
        Transform your backyard into a professional-grade court with our residential services.
      </p>
      <div class="services-grid">
        @for (link of residentialLinks; track link.route) {
          <a [routerLink]="link.route" class="service-card">
            <h3>{{ link.label }}</h3>
          </a>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .page-container {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #333;
      }

      .page-description {
        font-size: 1.25rem;
        color: #666;
        margin-bottom: 3rem;
        line-height: 1.6;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
      }

      .service-card {
        background-color: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 0.5rem;
        padding: 2rem;
        text-decoration: none;
        color: #333;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-color: #007bff;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }
      }
    `,
  ],
})
export class ResidentialComponent {
  residentialLinks: { label: string; route: string }[] = [];

  constructor(private contentService: ContentService) {
    this.residentialLinks = this.contentService.getFooterResidentialLinks();
  }
}


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';

@Component({
  selector: 'app-tennis-court-resurfacing',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './tennis-court-resurfacing.component.html',
  styleUrl: './tennis-court-resurfacing.component.scss',
})
export class TennisCourtResurfacingComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getCommercialTennisCourtResurfacing();
  }
}

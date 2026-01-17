import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';
import { GalleryComponent } from '../../../components/gallery/gallery.component';

@Component({
  selector: 'app-pickleball-court-resurfacing',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe, GalleryComponent],
  templateUrl: './pickleball-court-resurfacing.component.html',
  styleUrl: './pickleball-court-resurfacing.component.scss',
})
export class PickleballCourtResurfacingComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getResidentialPickleballResurfacing();
  }
}

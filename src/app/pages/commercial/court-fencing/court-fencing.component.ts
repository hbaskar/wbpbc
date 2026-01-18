import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';
import { GalleryComponent } from '../../../components/gallery/gallery.component';

@Component({
  selector: 'app-commercial-court-fencing',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe, GalleryComponent],
  templateUrl: './court-fencing.component.html',
  styleUrl: './court-fencing.component.scss',
})
export class CommercialCourtFencingComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getCommercialCourtFencing();
  }
}

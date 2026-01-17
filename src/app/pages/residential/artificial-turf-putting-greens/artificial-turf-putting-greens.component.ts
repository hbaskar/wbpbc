import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';
import { GalleryComponent } from '../../../components/gallery/gallery.component';

@Component({
  selector: 'app-artificial-turf-putting-greens',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe, GalleryComponent],
  templateUrl: './artificial-turf-putting-greens.component.html',
  styleUrl: './artificial-turf-putting-greens.component.scss',
})
export class ArtificialTurfPuttingGreensComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getResidentialArtificialTurf();
  }
}

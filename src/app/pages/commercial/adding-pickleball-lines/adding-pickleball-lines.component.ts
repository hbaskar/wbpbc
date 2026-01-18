import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';
import { GalleryComponent } from '../../../components/gallery/gallery.component';

@Component({
  selector: 'app-adding-pickleball-lines',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe, GalleryComponent],
  templateUrl: './adding-pickleball-lines.component.html',
  styleUrl: './adding-pickleball-lines.component.scss',
})
export class AddingPickleballLinesComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getCommercialAddingPickleballLines();
  }
}

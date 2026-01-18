import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';

@Component({
  selector: 'app-indoor-pickleball-court',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './indoor-pickleball-court.component.html',
  styleUrl: './indoor-pickleball-court.component.scss',
})
export class IndoorPickleballCourtComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getCommercialIndoorPickleball();
  }
}

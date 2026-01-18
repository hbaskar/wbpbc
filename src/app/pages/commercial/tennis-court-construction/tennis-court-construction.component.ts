import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';

@Component({
  selector: 'app-tennis-court-construction',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './tennis-court-construction.component.html',
  styleUrl: './tennis-court-construction.component.scss',
})
export class TennisCourtConstructionComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getCommercialTennisCourtConstruction();
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';

@Component({
  selector: 'app-multi-sport-construction',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './multi-sport-construction.component.html',
  styleUrl: './multi-sport-construction.component.scss',
})
export class MultiSportConstructionComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getResidentialMultiSport();
  }
}

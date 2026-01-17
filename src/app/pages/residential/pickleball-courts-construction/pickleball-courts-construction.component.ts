import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, ResidentialPageContent } from '../../../services/content.service';
import { Nl2brPipe } from '../../../pipes/nl2br.pipe';

@Component({
  selector: 'app-pickleball-courts-construction',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './pickleball-courts-construction.component.html',
  styleUrl: './pickleball-courts-construction.component.scss',
})
export class PickleballCourtsConstructionComponent {
  pageContent: ResidentialPageContent;

  constructor(public contentService: ContentService) {
    this.pageContent = this.contentService.getResidentialPickleballConstruction();
  }
}

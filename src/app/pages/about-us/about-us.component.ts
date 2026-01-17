import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, CommonModule, Nl2brPipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  constructor(public contentService: ContentService) {}
}

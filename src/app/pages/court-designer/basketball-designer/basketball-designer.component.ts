import { Component, OnInit, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from '../../../components/color-picker/color-picker.component';
import { ColorOption } from '../court-designer.types';

@Component({
  selector: 'app-basketball-designer',
  standalone: true,
  imports: [CommonModule, FormsModule, ColorPickerComponent],
  templateUrl: './basketball-designer.component.html',
  styleUrl: './basketball-designer.component.scss',
})
export class BasketballDesignerComponent implements OnInit, AfterViewInit {
  @ViewChild('courtSvg') courtSvg?: ElementRef<SVGSVGElement>;

  // Default colors from sample
  mainCourtColor = signal('#47614c'); // Tournament Green
  keyColor = signal('#284d80'); // Kansas City Blue
  showHashMarks = signal(true);

  // Color options from sample
  mainCourtColorOptions: ColorOption[] = [
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#44584c', label: 'Dark Green', displayColor: '#44584c' },
    { value: '#74767a', label: 'Light Grey', displayColor: '#74767a', textColor: '#000' },
    { value: '#4a9cad', label: 'Oasis Blue', displayColor: '#4a9cad' },
    { value: '#002186', label: 'Kansas City Blue', displayColor: '#002186' },
    { value: '#2f4861', label: 'Tournament Blue', displayColor: '#2f4861' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  keyColorOptions: ColorOption[] = [
    { value: '#284d80', label: 'Kansas City Blue', displayColor: '#284d80' },
    { value: '#44584c', label: 'Dark Green', displayColor: '#44584c' },
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#74767a', label: 'Light Grey', displayColor: '#74767a', textColor: '#000' },
    { value: '#4a9cad', label: 'Oasis Blue', displayColor: '#4a9cad' },
    { value: '#2f4861', label: 'Tournament Blue', displayColor: '#2f4861' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  ngOnInit(): void {
    // Initialize
  }

  ngAfterViewInit(): void {
    this.initializeSVG();
  }

  initializeSVG(): void {
    if (!this.courtSvg?.nativeElement) return;
    
    this.updateColor('mainCourtRect', this.mainCourtColor());
    this.updateColor('keyRect', this.keyColor());
    this.updateColor('baselineArc', this.keyColor());
    this.updateHashMarksVisibility();
  }

  onMainCourtColorChange(color: string): void {
    this.mainCourtColor.set(color);
    this.updateColor('mainCourtRect', color);
  }

  onKeyColorChange(color: string): void {
    this.keyColor.set(color);
    this.updateColor('keyRect', color);
    this.updateColor('baselineArc', color);
  }

  onHashMarksChange(checked: boolean): void {
    this.showHashMarks.set(checked);
    this.updateHashMarksVisibility();
  }

  private updateColor(elementId: string, color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const element = this.courtSvg.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.setAttribute('fill', color);
    }
  }

  private updateHashMarksVisibility(): void {
    if (!this.courtSvg?.nativeElement) return;
    const hashMarksGroup = this.courtSvg.nativeElement.querySelector('#hashMarksGroup');
    if (hashMarksGroup) {
      hashMarksGroup.setAttribute('visibility', this.showHashMarks() ? 'visible' : 'hidden');
    }
  }
}


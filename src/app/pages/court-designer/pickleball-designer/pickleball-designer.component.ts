import { Component, OnInit, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from '../../../components/color-picker/color-picker.component';
import { ColorOption } from '../court-designer.types';

@Component({
  selector: 'app-pickleball-designer',
  standalone: true,
  imports: [CommonModule, ColorPickerComponent],
  templateUrl: './pickleball-designer.component.html',
  styleUrl: './pickleball-designer.component.scss',
})
export class PickleballDesignerComponent implements OnInit, AfterViewInit {
  @ViewChild('courtSvg') courtSvg?: ElementRef<SVGSVGElement>;

  // Default colors from sample
  courtSurfaceColor = signal('#47614c'); // Tournament Green
  kitchenColor = signal('#284d80'); // Kansas City Blue
  borderColor = signal('#44584c'); // Dark Green
  lineColor = signal('#ffffff'); // White

  // Color options from sample
  surfaceColorOptions: ColorOption[] = [
    { value: '#284d80', label: 'Kansas City Blue', displayColor: '#284d80' },
    { value: '#44584c', label: 'Dark Green', displayColor: '#44584c' },
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#2f4861', label: 'Tournament Blue', displayColor: '#2f4861' },
    { value: '#74767a', label: 'Light Gray', displayColor: '#74767a', textColor: '#000' },
    { value: '#4a9cad', label: 'Oasis Blue', displayColor: '#4a9cad' },
    { value: '#111', label: 'Black', displayColor: '#111' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
  ];

  lineColorOptions: ColorOption[] = [
    { value: '#ffffff', label: 'White (Recommended)', displayColor: '#ffffff', textColor: '#000' },
    { value: '#000000', label: 'Black', displayColor: '#000000' },
    { value: '#808080', label: 'Grey', displayColor: '#808080' },
  ];

  ngOnInit(): void {
    // Initialize colors
  }

  ngAfterViewInit(): void {
    this.initializeSVG();
  }

  initializeSVG(): void {
    if (!this.courtSvg?.nativeElement) return;
    
    this.updateColor('court-surface', this.courtSurfaceColor());
    this.updateColor('kitchen-surface', this.kitchenColor());
    this.updateColor('border-surface', this.borderColor());
    this.updateLineColor(this.lineColor());
  }

  onCourtSurfaceChange(color: string): void {
    this.courtSurfaceColor.set(color);
    this.updateColor('court-surface', color);
  }

  onKitchenChange(color: string): void {
    this.kitchenColor.set(color);
    this.updateColor('kitchen-surface', color);
  }

  onBorderChange(color: string): void {
    this.borderColor.set(color);
    this.updateColor('border-surface', color);
  }

  onLineColorChange(color: string): void {
    this.lineColor.set(color);
    this.updateLineColor(color);
  }

  private updateColor(zone: string, color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const element = this.courtSvg.nativeElement.querySelector(`#${zone}`);
    if (element) {
      element.setAttribute('fill', color);
    }
  }

  private updateLineColor(color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const lines = this.courtSvg.nativeElement.querySelectorAll('.court-line');
    lines.forEach(line => {
      line.setAttribute('stroke', color);
    });
  }
}


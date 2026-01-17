import { Component, OnInit, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from '../../../components/color-picker/color-picker.component';
import { TextSelectComponent } from '../../../components/text-select/text-select.component';
import { ColorOption } from '../court-designer.types';

@Component({
  selector: 'app-tennis-designer',
  standalone: true,
  imports: [CommonModule, ColorPickerComponent, TextSelectComponent],
  templateUrl: './tennis-designer.component.html',
  styleUrl: './tennis-designer.component.scss',
})
export class TennisDesignerComponent implements OnInit, AfterViewInit {
  @ViewChild('courtSvg') courtSvg?: ElementRef<SVGSVGElement>;

  // Default colors from sample
  courtColor = signal('#3e714b'); // Tournament Green
  borderColor = signal('#b33132'); // Red
  pickleballLayout = signal('No Pickleball Courts');

  // Color options from sample
  courtColorOptions: ColorOption[] = [
    { value: '#3e714b', label: 'Tournament Green', displayColor: '#3e714b' },
    { value: '#4e7b3e', label: 'Forest Green', displayColor: '#4e7b3e' },
    { value: '#92928b', label: 'Classic Grey', displayColor: '#92928b', textColor: '#000' },
    { value: '#2e93b3', label: 'Oasis Blue', displayColor: '#2e93b3' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  borderColorOptions: ColorOption[] = [
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#92928b', label: 'Classic Grey', displayColor: '#92928b', textColor: '#000' },
    { value: '#3e714b', label: 'Tournament Green', displayColor: '#3e714b' },
    { value: '#284d80', label: 'Tournament Blue', displayColor: '#284d80' },
  ];

  pickleballLayoutOptions: string[] = [
    'No Pickleball Courts',
    '1 Court (Center)',
    '1 Court (Left Baseline)',
    '2 Courts (Both Baselines)',
    '4 Courts (Each Corner)',
  ];

  ngOnInit(): void {
    // Initialize
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.initializeSVG();
    }
  }

  initializeSVG(): void {
    if (typeof document === 'undefined' || !this.courtSvg?.nativeElement) return;
    
    this.updateColor('court-surface', this.courtColor());
    this.updateColor('border-surface', this.borderColor());
    this.updatePickleballLayout(this.pickleballLayout());
  }

  onCourtColorChange(color: string): void {
    this.courtColor.set(color);
    this.updateColor('court-surface', color);
    // Also update service boxes
    const serviceBoxes = this.courtSvg?.nativeElement.querySelector('#service-boxes');
    if (serviceBoxes) {
      serviceBoxes.setAttribute('fill', color);
    }
  }

  onBorderColorChange(color: string): void {
    this.borderColor.set(color);
    this.updateColor('border-surface', color);
  }

  onPickleballLayoutChange(layout: string): void {
    this.pickleballLayout.set(layout);
    this.updatePickleballLayout(layout);
  }

  private updateColor(zone: string, color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const element = this.courtSvg.nativeElement.querySelector(`#${zone}`);
    if (element) {
      element.setAttribute('fill', color);
    }
  }

  private updatePickleballLayout(layout: string): void {
    if (typeof document === 'undefined' || !this.courtSvg?.nativeElement) return;
    
    // Remove existing pickleball courts
    const existing = this.courtSvg.nativeElement.querySelectorAll('.pickleball-court');
    existing.forEach(el => el.remove());

    const courtSurface = this.courtSvg.nativeElement.querySelector('#court-surface');
    if (!courtSurface) return;

    const courtX = 210;
    const courtY = 120;
    const courtWidth = 780;
    const courtHeight = 360;
    const pickleballWidth = 80;
    const pickleballHeight = 120;

    switch (layout) {
      case 'No Pickleball Courts':
        // No courts to add
        break;
      
      case '1 Court (Center)':
        // Center of the court
        this.addPickleballCourt(
          courtX + (courtWidth / 2) - (pickleballWidth / 2),
          courtY + (courtHeight / 2) - (pickleballHeight / 2),
          pickleballWidth,
          pickleballHeight
        );
        break;
      
      case '1 Court (Left Baseline)':
        // Left baseline
        this.addPickleballCourt(
          courtX + 20,
          courtY + (courtHeight / 2) - (pickleballHeight / 2),
          pickleballWidth,
          pickleballHeight
        );
        break;
      
      case '2 Courts (Both Baselines)':
        // Left baseline
        this.addPickleballCourt(
          courtX + 20,
          courtY + (courtHeight / 2) - (pickleballHeight / 2),
          pickleballWidth,
          pickleballHeight
        );
        // Right baseline
        this.addPickleballCourt(
          courtX + courtWidth - pickleballWidth - 20,
          courtY + (courtHeight / 2) - (pickleballHeight / 2),
          pickleballWidth,
          pickleballHeight
        );
        break;
      
      case '4 Courts (Each Corner)':
        // Top-left
        this.addPickleballCourt(courtX + 20, courtY + 20, pickleballWidth, pickleballHeight);
        // Top-right
        this.addPickleballCourt(
          courtX + courtWidth - pickleballWidth - 20,
          courtY + 20,
          pickleballWidth,
          pickleballHeight
        );
        // Bottom-left
        this.addPickleballCourt(
          courtX + 20,
          courtY + courtHeight - pickleballHeight - 20,
          pickleballWidth,
          pickleballHeight
        );
        // Bottom-right
        this.addPickleballCourt(
          courtX + courtWidth - pickleballWidth - 20,
          courtY + courtHeight - pickleballHeight - 20,
          pickleballWidth,
          pickleballHeight
        );
        break;
    }
  }

  private addPickleballCourt(x: number, y: number, width: number, height: number): void {
    if (typeof document === 'undefined' || !this.courtSvg?.nativeElement) return;
    
    const svg = this.courtSvg.nativeElement;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'pickleball-court');
    
    // Court surface
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x.toString());
    rect.setAttribute('y', y.toString());
    rect.setAttribute('width', width.toString());
    rect.setAttribute('height', height.toString());
    rect.setAttribute('fill', '#47614c');
    rect.setAttribute('stroke', '#ffffff');
    rect.setAttribute('stroke-width', '2');
    g.appendChild(rect);
    
    // Center line
    const centerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    centerLine.setAttribute('x1', (x + width / 2).toString());
    centerLine.setAttribute('y1', y.toString());
    centerLine.setAttribute('x2', (x + width / 2).toString());
    centerLine.setAttribute('y2', (y + height).toString());
    centerLine.setAttribute('stroke', '#ffffff');
    centerLine.setAttribute('stroke-width', '2');
    g.appendChild(centerLine);
    
    svg.appendChild(g);
  }
}


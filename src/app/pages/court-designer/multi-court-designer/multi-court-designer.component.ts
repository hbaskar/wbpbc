import { Component, OnInit, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from '../../../components/color-picker/color-picker.component';
import { ColorOption } from '../court-designer.types';

@Component({
  selector: 'app-multi-court-designer',
  standalone: true,
  imports: [CommonModule, ColorPickerComponent],
  templateUrl: './multi-court-designer.component.html',
  styleUrl: './multi-court-designer.component.scss',
})
export class MultiCourtDesignerComponent implements OnInit, AfterViewInit {
  @ViewChild('courtSvg') courtSvg?: ElementRef<SVGSVGElement>;

  // Default colors from sample
  mainCourtColor = signal('#3e714b'); // Dark Green
  kitchenColor = signal('#1c315b'); // Tournament Blue
  borderColor = signal('#47614c'); // Tournament Green
  pickleballLineColor = signal('#ffffff'); // White
  basketballLineColor = signal('#ffffff'); // White

  // Color options from sample
  mainCourtColorOptions: ColorOption[] = [
    { value: '#3e714b', label: 'Dark Green', displayColor: '#3e714b' },
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#92928b', label: 'Light Grey', displayColor: '#92928b', textColor: '#000' },
    { value: '#2e93b3', label: 'Oasis Blue', displayColor: '#2e93b3' },
    { value: '#084d6e', label: 'Kansas City Blue', displayColor: '#084d6e' },
    { value: '#1c315b', label: 'Tournament Blue', displayColor: '#1c315b' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  kitchenColorOptions: ColorOption[] = [
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#92928b', label: 'Light Grey', displayColor: '#92928b', textColor: '#000' },
    { value: '#2e93b3', label: 'Oasis Blue', displayColor: '#2e93b3' },
    { value: '#084d6e', label: 'Kansas City Blue', displayColor: '#084d6e' },
    { value: '#1c315b', label: 'Tournament Blue', displayColor: '#1c315b' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  borderColorOptions: ColorOption[] = [
    { value: '#47614c', label: 'Tournament Green', displayColor: '#47614c' },
    { value: '#92928b', label: 'Classic Grey', displayColor: '#92928b', textColor: '#000' },
    { value: '#2e93b3', label: 'Oasis Blue', displayColor: '#2e93b3' },
    { value: '#084d6e', label: 'Kansas City Blue', displayColor: '#084d6e' },
    { value: '#1c315b', label: 'Tournament Blue', displayColor: '#1c315b' },
    { value: '#b33132', label: 'Red', displayColor: '#b33132' },
    { value: '#111111', label: 'Black', displayColor: '#111111' },
  ];

  lineColorOptions: ColorOption[] = [
    { value: '#ffffff', label: 'White', displayColor: '#ffffff', textColor: '#000' },
    { value: '#000000', label: 'Black', displayColor: '#000000' },
    { value: '#d2b48c', label: 'Tan', displayColor: '#d2b48c', textColor: '#000' },
    { value: '#808080', label: 'Grey', displayColor: '#808080' },
  ];

  ngOnInit(): void {
    // Initialize
  }

  ngAfterViewInit(): void {
    this.initializeSVG();
  }

  initializeSVG(): void {
    if (!this.courtSvg?.nativeElement) return;
    
    this.updateColor('court-surface', this.mainCourtColor());
    this.updateColor('kitchen-surface', this.kitchenColor());
    this.updateColor('border-surface', this.borderColor());
    this.updatePickleballLines(this.pickleballLineColor());
    this.updateBasketballLines(this.basketballLineColor());
  }

  onMainCourtColorChange(color: string): void {
    this.mainCourtColor.set(color);
    this.updateColor('court-surface', color);
  }

  onKitchenColorChange(color: string): void {
    this.kitchenColor.set(color);
    this.updateColor('kitchen-surface', color);
  }

  onBorderColorChange(color: string): void {
    this.borderColor.set(color);
    this.updateColor('border-surface', color);
  }

  onPickleballLineColorChange(color: string): void {
    this.pickleballLineColor.set(color);
    this.updatePickleballLines(color);
  }

  onBasketballLineColorChange(color: string): void {
    this.basketballLineColor.set(color);
    this.updateBasketballLines(color);
  }

  private updateColor(zone: string, color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    // Try class selector first, then ID
    let element = this.courtSvg.nativeElement.querySelector(`.${zone}`);
    if (!element) {
      element = this.courtSvg.nativeElement.querySelector(`#${zone}`);
    }
    if (element) {
      element.setAttribute('fill', color);
    }
  }

  private updatePickleballLines(color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const lines = this.courtSvg.nativeElement.querySelectorAll('.pickleball-line');
    lines.forEach(line => {
      line.setAttribute('stroke', color);
    });
  }

  private updateBasketballLines(color: string): void {
    if (!this.courtSvg?.nativeElement) return;
    const lines = this.courtSvg.nativeElement.querySelectorAll('.basketball-line');
    lines.forEach(line => {
      line.setAttribute('stroke', color);
    });
  }
}


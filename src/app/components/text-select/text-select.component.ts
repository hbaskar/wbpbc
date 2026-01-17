import { Component, Input, Output, EventEmitter, signal, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-select.component.html',
  styleUrl: './text-select.component.scss',
})
export class TextSelectComponent implements OnInit, OnDestroy {
  @Input() options: string[] = [];
  @Input() selectedValue: string = '';
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('selectElement') selectElement?: ElementRef<HTMLDivElement>;

  isOpen = signal(false);
  selectedOption = signal<string>('');
  private clickOutsideListener?: () => void;

  ngOnInit(): void {
    if (this.selectedValue) {
      this.selectedOption.set(this.selectedValue);
    } else if (this.options.length > 0) {
      this.selectedOption.set(this.options[0]);
    }
  }

  ngOnDestroy(): void {
    if (this.clickOutsideListener) {
      document.removeEventListener('click', this.clickOutsideListener);
    }
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen.update(value => !value);
    
    if (this.isOpen()) {
      setTimeout(() => {
        this.clickOutsideListener = () => {
          this.isOpen.set(false);
          if (this.clickOutsideListener) {
            document.removeEventListener('click', this.clickOutsideListener);
            this.clickOutsideListener = undefined;
          }
        };
        document.addEventListener('click', this.clickOutsideListener);
      }, 0);
    } else {
      if (this.clickOutsideListener) {
        document.removeEventListener('click', this.clickOutsideListener);
        this.clickOutsideListener = undefined;
      }
    }
  }

  selectOption(option: string, event: Event): void {
    event.stopPropagation();
    this.selectedOption.set(option);
    this.valueChange.emit(option);
    this.isOpen.set(false);
    
    if (this.clickOutsideListener) {
      document.removeEventListener('click', this.clickOutsideListener);
      this.clickOutsideListener = undefined;
    }
  }
}


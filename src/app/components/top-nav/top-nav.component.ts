import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ContentService, NavigationItem } from '../../services/content.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent implements OnInit {
  navigationItems: NavigationItem[] = [];
  isMobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);
  currentRoute = signal<string>('');

  constructor(
    private contentService: ContentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigationItems = this.contentService.getNavigationItems();
    this.updateActiveRoute();
    
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveRoute();
        this.isMobileMenuOpen.set(false);
        this.activeDropdown.set(null);
      });
  }

  private updateActiveRoute(): void {
    this.currentRoute.set(this.router.url);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);
    if (this.isMobileMenuOpen()) {
      this.activeDropdown.set(null);
    }
  }

  toggleDropdown(itemLabel: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (this.activeDropdown() === itemLabel) {
      this.activeDropdown.set(null);
    } else {
      this.activeDropdown.set(itemLabel);
    }
  }

  handleDropdownClick(item: NavigationItem, event: Event): void {
    const target = event.target as HTMLElement;
    const isArrowClick = target.closest('.dropdown-arrow') || target.closest('svg');
    
    // If clicking on arrow, toggle dropdown and prevent navigation
    if (isArrowClick) {
      event.preventDefault();
      this.toggleDropdown(item.label, event);
    }
    // If clicking on text, allow navigation (routerLink will handle it)
    // On desktop, dropdown shows on hover anyway
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  isActiveRoute(route: string | undefined): boolean {
    if (!route) return false;
    if (route === '/' && this.currentRoute() === '/') return true;
    if (route !== '/' && this.currentRoute().startsWith(route)) return true;
    return false;
  }

  hasChildren(item: NavigationItem): boolean {
    return !!item.children && item.children.length > 0;
  }
}


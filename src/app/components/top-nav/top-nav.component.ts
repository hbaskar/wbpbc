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

  handleLinkClick(item: NavigationItem, event: Event): void {
    // Check if we're on mobile (screen width <= breakpoint-lg)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 992; // $breakpoint-lg
    
    if (isMobile) {
      // On mobile: clicking the link text navigates to the page
      // Close mobile menu after navigation
      this.isMobileMenuOpen.set(false);
      this.activeDropdown.set(null);
      // Let routerLink handle navigation - don't prevent default
    } else {
      // On desktop: allow normal navigation, hover handles dropdown
      // Don't prevent default - let routerLink work normally
    }
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


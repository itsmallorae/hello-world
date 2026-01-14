import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header {
  title = "boopity";

  welcomeIn(): string {
    return 'welcome in to boopity';
  }

  navLinks = input.required<NavItem[]>();
}

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  headerLinks: string[] = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'ANGULAR',
  ];
}

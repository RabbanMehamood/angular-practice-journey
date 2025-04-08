import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

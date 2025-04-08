import { Component } from '@angular/core';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { SearchComponent } from '../topicontentcontainer/search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [NavLinksComponent],
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Angular Components Topics';
}

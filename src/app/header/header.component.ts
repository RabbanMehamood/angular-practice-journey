import { Component } from '@angular/core';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [NavLinksComponent, SearchComponent],
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Angular Components Topics';
}

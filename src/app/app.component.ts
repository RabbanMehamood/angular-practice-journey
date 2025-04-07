import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopicontentComponent } from './topicontentcontainer/topicontent.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TopicontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

import { Component } from '@angular/core';

const angularComponentTopics = [
  'Component Basics',
  'Component Metadata (@Component Decorator)',
  'Component Lifecycle Hooks',
  'Template Binding (Interpolation, Property Binding, Event Binding)',
  'Directives in Components (ngIf, ngFor, etc.)',
  'Component Communication (Input and Output)',
  'Component Styles and Encapsulation',
  'ViewEncapsulation Modes (Emulated, None, ShadowDom)',
  'Template Reference Variables',
  'ngContent and Content Projection',
  'Angular Forms (Template-driven and Reactive Forms)',
  'Change Detection Mechanism',
  'Component Interpolation and Expression Syntax',
  'Component Input/Output with @Input() and @Output()',
  'Dynamic Component Loading',
  'Nested Components and Component Hierarchy',
  'Lazy Loading Components',
  'Pipes in Components',
  'Custom Event Emitters in Components',
  'Angular Animations in Components',
  'Unit Testing Components',
  'Component Testing with TestBed',
  'Services and Dependency Injection in Components',
  'ViewChild and ContentChild Decorators',
  'Component Refactoring Best Practices',
  'Angular Material Components Integration',
  'Angular CLI and Component Generation',
];

let randomIndex = Math.floor(Math.random() * angularComponentTopics.length);

@Component({
  selector: 'app-topicontent',
  imports: [],
  templateUrl: './topicontent.component.html',
  styleUrl: './topicontent.component.css',
})
export class TopicontentComponent {
  listName = angularComponentTopics[0];

  onGenerateRandomTopic() {
    let randomIndex = Math.floor(Math.random() * angularComponentTopics.length);
    this.listName = angularComponentTopics[randomIndex];
  }
}

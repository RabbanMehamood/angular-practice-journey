import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TopiccardComponent } from './topiccard/topiccard.component';
import { FilterComponent } from './filter/filter.component';
const topicsObject = [
  // HTML Topics
  {
    id: 1,
    title: 'Introduction to HTML',
    description: 'Basics of HTML structure',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 2,
    title: 'HTML Elements',
    description: 'Understanding different HTML elements',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 3,
    title: 'HTML Attributes',
    description: 'Using attributes in HTML tags',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 4,
    title: 'Forms and Input',
    description: 'Creating forms and handling input',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },
  {
    id: 5,
    title: 'Semantic HTML',
    description: 'Using semantic elements for better structure',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },
  {
    id: 6,
    title: 'HTML5 Features',
    description: 'New features introduced in HTML5',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },
  {
    id: 7,
    title: 'HTML Entities',
    description: 'Using HTML entities for special characters',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 8,
    title: 'Media Elements',
    description: 'Embedding images, audio, and video in HTML',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },
  {
    id: 9,
    title: 'HTML Tables',
    description: 'Creating and styling tables in HTML',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },
  {
    id: 10,
    title: 'HTML Links',
    description: 'Creating hyperlinks and navigation',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 11,
    title: 'HTML Comments',
    description: 'Using comments in HTML for documentation',
    timeToLearn: '0.5 hours',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'HTML',
  },
  {
    id: 12,
    title: 'Accessibility in HTML',
    description: 'Making HTML content accessible to all users',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'HTML',
  },

  // CSS Topics
  {
    id: 13,
    title: 'Introduction to CSS',
    description: 'Basics of CSS and its syntax',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'CSS',
  },
  {
    id: 14,
    title: 'Selectors and Specificity',
    description: 'Understanding CSS selectors',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  {
    id: 15,
    title: 'Box Model',
    description: 'Understanding the box model in CSS',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  {
    id: 16,
    title: 'Flexbox',
    description: 'Using Flexbox for layout',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  {
    id: 17,
    title: 'Grid Layout',
    description: 'Creating layouts with CSS Grid',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  {
    id: 18,
    title: 'Responsive Design',
    description: 'Making designs responsive with media queries',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  {
    id: 19,
    title: 'CSS Animations',
    description: 'Creating animations with CSS',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'CSS',
  },
  // JavaScript Topics (continued)
  {
    id: 20,
    title: 'Introduction to JavaScript',
    description: 'Basics of JavaScript and its syntax',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 21,
    title: 'Variables and Data Types',
    description: 'Understanding variables and data types',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 22,
    title: 'Functions',
    description: 'Creating and using functions',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 23,
    title: 'Control Structures',
    description: 'Using if statements, loops, etc.',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 24,
    title: 'DOM Manipulation',
    description: 'Interacting with the Document Object Model',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 25,
    title: 'Events',
    description: 'Handling events in JavaScript',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'JavaScript',
  },
  {
    id: 26,
    title: 'ES6 Features',
    description: 'Understanding ES6 syntax and features',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'JavaScript',
  },

  // TypeScript Topics
  {
    id: 27,
    title: 'Introduction to TypeScript',
    description: 'Basics of TypeScript and its advantages',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'TypeScript',
  },
  {
    id: 28,
    title: 'Types and Interfaces',
    description: 'Understanding types and creating interfaces',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'TypeScript',
  },
  {
    id: 29,
    title: 'Classes and Inheritance',
    description: 'Using classes and inheritance in TypeScript',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'TypeScript',
  },
  {
    id: 30,
    title: 'Generics',
    description: 'Creating reusable components with generics',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Advanced',
    completed: false,
    language: 'TypeScript',
  },
  {
    id: 31,
    title: 'Modules',
    description: 'Understanding modules and namespaces',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'TypeScript',
  },
  {
    id: 32,
    title: 'TypeScript with JavaScript',
    description: 'Integrating TypeScript with existing JavaScript',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'TypeScript',
  },

  // Angular Topics
  {
    id: 33,
    title: 'Introduction to Angular',
    description: 'Basics of Angular framework',
    timeToLearn: '1 hour',
    price: 0,
    complexity: 'Beginner',
    completed: false,
    language: 'Angular',
  },
  {
    id: 34,
    title: 'Components',
    description: 'Creating and using components',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 35,
    title: 'Templates',
    description: 'Understanding Angular templates',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 36,
    title: 'Services and Dependency Injection',
    description: 'Creating services and using DI',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 37,
    title: 'Routing',
    description: 'Implementing routing in Angular applications',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 38,
    title: 'Forms in Angular',
    description: 'Working with reactive and template-driven forms',
    timeToLearn: '2.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 39,
    title: 'Pipes',
    description: 'Using pipes for data transformation',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 40,
    title: 'Directives',
    description: 'Creating and using directives in Angular',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 41,
    title: 'HTTP Client',
    description: 'Making HTTP requests in Angular',
    timeToLearn: '2 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 42,
    title: 'State Management',
    description: 'Managing application state with NgRx or services',
    timeToLearn: '3 hours',
    price: 0,
    complexity: 'Advanced',
    completed: false,
    language: 'Angular',
  },
  {
    id: 43,
    title: 'Testing in Angular',
    description: 'Writing unit tests and end-to-end tests',
    timeToLearn: '2.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
  {
    id: 44,
    title: 'Deployment',
    description: 'Deploying Angular applications to production',
    timeToLearn: '1.5 hours',
    price: 0,
    complexity: 'Intermediate',
    completed: false,
    language: 'Angular',
  },
];

@Component({
  selector: 'app-topicontent',
  standalone: true,
  imports: [NgFor, TopiccardComponent, FilterComponent],
  templateUrl: './topicontent.component.html',
  styleUrl: './topicontent.component.css',
})
export class TopicontentComponent {
  topics = topicsObject;
  all = topicsObject.length.toString();
}

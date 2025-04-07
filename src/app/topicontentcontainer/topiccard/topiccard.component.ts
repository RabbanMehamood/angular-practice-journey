import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topiccard',
  imports: [],
  templateUrl: './topiccard.component.html',
  styleUrl: './topiccard.component.css',
})
export class TopiccardComponent {
  @Input()
  item: {
    id: number;
    title: string;
    description: string;
    timeToLearn: string;
    price: number;
    complexity: string;
    completed: boolean;
    language: string;
  };
}

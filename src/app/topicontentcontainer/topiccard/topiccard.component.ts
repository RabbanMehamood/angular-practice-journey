import { Component, Input } from '@angular/core';

type NewType = boolean;

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
    completed: NewType;
    language: string;
  };
}

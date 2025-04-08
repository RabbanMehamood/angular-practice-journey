import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  allConcepts: string;

  @Input()
  completedConcepts: string;

  @Input()
  incompleteConcepts: string;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  selectedRadioButton: string = 'allConcepts';

  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedRadioButton);
  }
}

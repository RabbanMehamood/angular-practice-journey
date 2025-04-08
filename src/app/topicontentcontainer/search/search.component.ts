import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchInputString: string = '';

  //1.create an Event using viewChild
  @ViewChild('searchInput') searchInputEl: ElementRef;

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchInputString);
  }

  getInputValue() {
    this.searchInputEl = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchInputEl.nativeElement.value);
  }
}

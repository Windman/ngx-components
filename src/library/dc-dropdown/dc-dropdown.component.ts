import { Option } from './dc-dropdown-item/dc-dropdown-item.component';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lib-dc-dropdown',
  templateUrl: './dc-dropdown.component.html',
  styleUrls: ['./dc-dropdown.component.scss']
})
export class DcDropdownComponent implements OnInit {
  @Input() value: any;
  @Input() label: string;
  @Input() options: Observable<any[]>;
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();

  open = false;
  caption = 'select column';

  viewPortItems: any;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document: click', ['$event.target'])
  onClick(target: any) {
    let parentFound = false;
    while (target !== null && !parentFound) {
      if (target === this.elementRef.nativeElement) {
        parentFound = true;
      }
      target = target.parentElement;
    }
    if (!parentFound) {
      this.open = false;
    }
  }

  ngOnInit() {
    if (this.label) {
      this.caption = this.label;
    }
  }

  onItemClick(item: any): void {
    this.open = false;
  }

  onToggleClick(event: any): void {
    this.open = !this.open;
  }

  setValue(option: Option): void {
    this.caption = option.label;
    this.value = option.value;
    this.optionSelected.emit(this.value);
  }
}

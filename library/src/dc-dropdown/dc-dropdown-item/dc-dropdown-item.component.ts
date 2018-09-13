import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-dc-dropdown-item',
  // templateUrl: './dc-dropdown-item.component.html', // enableResourceInlining не работает из коробки
  // styleUrls: ['./dc-dropdown-item.component.css'],
  template: `<ng-container key="option-item"
  [context]="context"></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DcDropdownItemComponent implements OnInit {
  @Input() option: any;
  @Output() value: EventEmitter<Option> = new EventEmitter();

  context: any;

  constructor() {
    this.context = {
      $implicit: this
    };
  }

  ngOnInit() {
  }

  setValue(value: any, label?: string): void {
    const option: Option = {
      value: value,
      label: label
    };

    this.value.emit(option);
  }

}

export interface Option {
  value: any;
  label?: string;
}

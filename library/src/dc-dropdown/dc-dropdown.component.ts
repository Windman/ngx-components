import { Option } from './dc-dropdown-item/dc-dropdown-item.component';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lib-dc-dropdown',
  // templateUrl: './dc-dropdown.component.html',
  // styleUrls: ['./dc-dropdown.component.css']
  template: `<div class="dc-dropdown">
  <div class="dc-dropdown-caption">
    <div class="dc-dropdown-open"
         (click)="onToggleClick($event)">
      <span class="dc-dropdown-label">{{caption}}</span>
    </div>
  </div>
  <virtual-scroll class="dropdown-virtual-scroll"
                  *ngIf="open"
                  [items]="options | async"
                  (update)="viewPortItems = $event"
                  [childHeight]='50'>
    <ng-container *ngFor="let item of viewPortItems">
      <lib-dc-dropdown-item [option]="item"
                            (click)="onItemClick(item)"
                            (value)="setValue($event)">
      </lib-dc-dropdown-item>
    </ng-container>
  </virtual-scroll>
</div>`,
styles: [ `
virtual-scroll {
  display: block;
  min-width: 200px;
  max-height: 30vh;
}

.dropdown-virtual-scroll {
  position: absolute;
  background: white;
  z-index: 10;
  margin-top: 30px;
}

.dc-dropdown {
  width: 200px;
  display: flex;
  flex-direction: column;
  padding-bottom: 7px;
}

.dc-dropdown-caption {
  background-color: #E3E3E3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 25px;
  max-height: 25px;
  padding-top: 2px;
  font-weight: 400;
  padding-left: 5px;
  color:#808080;
}

.dc-dropdown-open {
  width: 100%;
  display: flex;
}

.dc-dropdown-label {
  user-select: none;
  line-height: 24px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

.dc-dropdown-caption:hover {
  color:black;
}
.dc-dropdown-caption-toggle {
	margin-right: 15px;
	user-select: none;
}

.dc-dropdown-caption-toggle:hover {
    cursor: pointer;
}

.dc-filter-dropdown-caption-active {
  background-color: rgba(5, 119, 189, 0.23);
  color:black;
}

.dc-dropdown-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

mat-form-field {
  width: 100%;
}`]
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

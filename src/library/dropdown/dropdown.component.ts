import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `<p>{{title}} dropdown works!</p>`
})
export class DropdownComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello';
  }

}

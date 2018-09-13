import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = 'a new drop down is here';

  options: Observable<any[]>;

  constructor() {
    const options = [];
    for (let i = 0; i < 100; i++) {
      options.push({'value': i, 'label': i});
    }

    this.options = of(options);
  }

  onSelect(event: any): void {
    alert(event);
  }
}

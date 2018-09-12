import { TemplateService } from './../services/template.service';
import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: 'ng-container[key]'
})
export class TemplateDirective implements DoCheck {
  // tslint:disable-next-line:no-input-rename
  @Input('key') key = '';
  @Input() context = null;


  private viewRef: EmbeddedViewRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private service: TemplateService) { }

  ngDoCheck() {
    if (!this.viewRef) {
      const template = this.service.template;
      const createView = this.viewFactory(this.context);
      this.viewRef = createView(template, this.viewContainerRef);
    }
  }

  private viewFactory(context: object) {
    return (template: any, viewContainerRef: ViewContainerRef) => {
      const locals = context;
      return viewContainerRef.createEmbeddedView(template, locals);
    };
  }
}

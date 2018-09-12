import { TemplateService } from './../services/template.service';
import { Directive, Input, OnInit, TemplateRef, Optional } from '@angular/core';

@Directive({
  selector: 'ng-template[identity]'
})
export class TemplateCacheDirective implements OnInit {
  @Input('identity') key = '';
  @Input() context = {};

  constructor(
    private templateRef: TemplateRef<any>,
    private service: TemplateService) { }

  ngOnInit() {
    this.service.template = this.templateRef;
    //this.templateCache.put(this.key, link);
  }
}

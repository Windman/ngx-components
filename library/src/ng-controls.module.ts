import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { TemplateService } from './dc-dropdown/services/template.service';
import { TemplateDirective } from './dc-dropdown/directives/template.directive';
import { TemplateCacheDirective } from './dc-dropdown//directives/template-cache.directive';

import { DcDropdownComponent } from './dc-dropdown/dc-dropdown.component';
import { DcDropdownItemComponent } from './dc-dropdown/dc-dropdown-item/dc-dropdown-item.component';

@NgModule({
  imports: [
    CommonModule,
    VirtualScrollModule
  ],
  providers: [
    TemplateService
  ],
  declarations: [
    TemplateCacheDirective,
    TemplateDirective,
    DcDropdownComponent,
    DcDropdownItemComponent
  ],
  exports: [
    TemplateCacheDirective,
    DcDropdownComponent
  ]
})
export class NgControlsModule { }

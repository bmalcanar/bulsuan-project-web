import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, ModulesRoutingModule],
  exports: [ModulesComponent],
})
export class ModulesModule {}

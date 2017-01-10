import { NgModule } from '@angular/core';

import { KumaranResumeComponent }   from './container/kumaran-resume.component'
import {KumaranHeaderComponent} from './components/header/kumaran-header.component'
import {KumaranProfessionalComponent} from './components/professional/kumaran-professional.component'
import {KumaranPersonalComponent} from './components/personal/kumaran-personal.component'

@NgModule({
  imports: [],
  exports: [KumaranResumeComponent],
  declarations: [KumaranResumeComponent, KumaranHeaderComponent, KumaranProfessionalComponent, KumaranPersonalComponent],
  providers: [],
})
export class KumaranResumeModule { }

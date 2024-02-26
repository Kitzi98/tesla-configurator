import { Routes } from '@angular/router';
import {ModelPickerComponent} from "./model-picker/model-picker.component";
import {ModelConfigurationComponent} from "./model-configuration/model-configuration.component";
import {SummaryComponent} from "./summary/summary.component";
import {step2Guard} from "./guards/step2.guard";
import {step3Guard} from "./guards/step3.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/step1',
    pathMatch: 'full'
  },
  {
    path: 'step1',
    component: ModelPickerComponent
  },
  {
    path: 'step2',
    component: ModelConfigurationComponent,
    canActivate: [step2Guard]
  },
  {
    path: 'step3',
    component: SummaryComponent,
    canActivate: [step3Guard]
  }
];

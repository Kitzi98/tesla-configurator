import {Component, inject} from '@angular/core';
import {FormService} from "../services/form.service";
import {FormValue} from "../interfaces/form-value";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CurrencyPipe,
    AsyncPipe
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  formService : FormService = inject(FormService);
  summary : FormValue = this.formService.getFormValue();
  total: number;

  constructor() {
    this.total = this.summary.step1.color.price + this.summary.step2.config.price + (this.summary.step2.yoke ? 1000 : 0) + (this.summary.step2.towHitch ? 1000 : 0);
  }
}

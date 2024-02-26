import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {FormService} from "../services/form.service";
import {Config} from "../interfaces/config";
import {OptionService} from "../services/option.service";
import {Model} from "../interfaces/model";
import {Option} from "../interfaces/option";
import {map, Observable, startWith} from "rxjs";
import {AsyncPipe, formatCurrency} from "@angular/common";

@Component({
  selector: 'app-model-configuration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './model-configuration.component.html',
  styleUrl: './model-configuration.component.scss'
})
export class ModelConfigurationComponent {
  optionService : OptionService = inject(OptionService);
  formService : FormService = inject(FormService);

  option?: Option;

  details$: Observable<string> = this.formService.step2Form.get('config')!.valueChanges.pipe(
    startWith(this.formService.step2Form.get('config')?.value),
    map((value: Config): string => value ? `Range: ${value.range} - Max speed: ${value.speed} - Cost: ${formatCurrency(value.price, 'en-us', '$')}` : '')
  );

  ngOnInit(): void {
    let model: Model = this.formService.step1Form.get('model')?.value as Model;
    this.optionService.getOptionForModel(model.code).subscribe((option: Option) => this.option = option)
  }

  compare(config1: Config, config2: Config): boolean {
    return config1?.id == config2?.id;
  }
}

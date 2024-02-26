import {Component, inject} from '@angular/core';
import {Model} from "../interfaces/model";
import {ModelService} from "../services/model.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormService} from "../services/form.service";
import {Observable, startWith, tap} from "rxjs";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-model-picker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    NgOptimizedImage
  ],
  templateUrl: './model-picker.component.html',
  styleUrl: './model-picker.component.scss'
})
export class ModelPickerComponent {
  modelService : ModelService = inject(ModelService);
  formService : FormService = inject(FormService);

  models?: Model[];
  selectedModel$?: Observable<Model> = this.formService.step1Form.get('model')?.valueChanges.pipe(
    tap((value: Model): void => {
      this.formService.step1Form.get('color')?.patchValue(value.colors[0]);
      this.formService.step2Form.patchValue({
        config: null,
        yoke: false,
        towHitch: false
      });
    }),
    startWith(this.formService.step1Form.get('model')?.value)
  );

  ngOnInit(): void {
    this.modelService.getAllModels().subscribe((models: Model[]) => this.models = models);
  }

  compare(model1: Model, model2: Model): boolean {
    return model1?.code == model2?.code;
  }
}

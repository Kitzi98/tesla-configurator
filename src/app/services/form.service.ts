import {inject, Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValue} from "../interfaces/form-value";
import {map, Observable} from "rxjs";
import {Color} from "../interfaces/color";
import {Model} from "../interfaces/model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formBuilder: FormBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    step1 : this.formBuilder.group({
      model: this.formBuilder.control(null, Validators.required),
      color: this.formBuilder.control(null, Validators.required)
    }),
    step2 : this.formBuilder.group({
      config: this.formBuilder.control(null, Validators.required),
      towHitch: this.formBuilder.control(null),
      yoke: this.formBuilder.control(null)
    })
  })

  step1Form: FormGroup = this.form.get('step1') as FormGroup;
  step2Form: FormGroup = this.form.get('step2') as FormGroup;

  image$: Observable<string> = this.step1Form.valueChanges.pipe(
    map((value: Step1): string => 'https://interstate21.com/tesla-app/images/' + value.model.code + '/' + value.color.code + '.jpg')
  );

  getFormValue() : FormValue {
    return this.form.value;
  }
}

export type Step1 = {
  model: Model;
  color: Color;
};

import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {FormService} from "../services/form.service";

export const step2Guard: CanActivateFn = (): UrlTree | boolean => {
  const formService: FormService = inject(FormService);
  const router: Router = inject(Router);
  if (!formService.step1Form.valid) {
    return router.parseUrl('/step1')
  }
  return true;
};

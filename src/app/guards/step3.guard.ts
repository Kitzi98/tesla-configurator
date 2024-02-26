import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {FormService} from "../services/form.service";
import {inject} from "@angular/core";

export const step3Guard: CanActivateFn = (): UrlTree | boolean => {
  const formService: FormService = inject(FormService);
  const router: Router = inject(Router);
  if (!formService.form.valid) {
    return router.parseUrl('/step1')
  }
  return true;
};

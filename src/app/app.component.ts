import {Component, inject} from '@angular/core';
import {AsyncPipe, JsonPipe, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormService} from "./services/form.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, RouterLink, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './app.component.html'
})
export class AppComponent {
  formService : FormService = inject(FormService);
}

import {inject, Injectable} from '@angular/core';
import {Model} from "../interfaces/model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  httpClient : HttpClient = inject(HttpClient);

  getAllModels(): Observable<Model[]> {
    return this.httpClient.get<Model[]>('/models');
  }
}

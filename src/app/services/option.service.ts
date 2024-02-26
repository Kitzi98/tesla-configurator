import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Option} from "../interfaces/option";

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  httpClient : HttpClient = inject(HttpClient);

  getOptionForModel(modelCode: string): Observable<Option> {
    return this.httpClient.get<Option>('/options/' + modelCode);
  }
}

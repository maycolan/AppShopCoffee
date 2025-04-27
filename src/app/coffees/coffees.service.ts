import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
                      private apiUrl = environment.baseUrl;

                      constructor(private http: HttpClient) { }

                      getCoffes():Observable<Coffee[]>{
                                                        return this.http.get<Coffee[]>(this.apiUrl);

                                                  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  Subject, tap} from 'rxjs';
import { Client } from '../interfaces/client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _refresh$ = new Subject<void>(); 

  // private baseUrl = 'http://localhost:3000';
  private baseUrl =  environment.endpoint;
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cliente/';
  constructor(private http: HttpClient) { }

  get refresh$(){
return this._refresh$;
  }

  getClients(): Observable<Client[]> {
    // return this.http.get<Client[]>(`${this.baseUrl}api/cliente`);
    return this.http.get<Client[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  addEditClient(postData: any, selectedPdt: any) {
    if (!selectedPdt) {
      // return this.http.post(`${this.baseUrl}api/cliente`, postData);
      return this.http.post<Client>(`${this.myAppUrl}${this.myApiUrl}`, postData);
    } else {
      // return this.http.put(`${this.baseUrl}api/cliente/${selectedPdt.id}`, postData);
      return this.http.put(`${this.myAppUrl}${this.myApiUrl}${selectedPdt.id}`, postData)
      .pipe(
        tap(() =>{
          this._refresh$.next();
        })
      );
    }

  }

  deleteClient(clientId: number) {
    // return this.http.delete(`${this.baseUrl}api/cliente/${clientId}`);
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${clientId}`);
  }
}

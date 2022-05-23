import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../model/persona.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://shopdond-default-rtdb.firebaseio.com'

  constructor(private HttpClient : HttpClient) {}
  
  registrar(persona: Persona){
      this.HttpClient.post(`${this.url}/clients.json`,persona).subscribe(response => console.log(response))
  }
}

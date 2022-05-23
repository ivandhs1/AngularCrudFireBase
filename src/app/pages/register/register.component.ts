import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  persona = new Persona();

  constructor() { }

  ngOnInit(): void {
  }

  registrar(form: NgForm){
    
    console.log(form);

  }

}

import Swal from 'sweetalert2';
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
  peticion: any;
  validacion: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  registrar(form: NgForm){
    this.validacion=false;

    this.persona = {
      cedula: form.value.cedula,
      nombre: form.value.nombre,
      edad: parseInt(form.value.edad),
      deuda: parseFloat(form.value.deuda) 
    };

    if(this.persona.cedula==="" || this.persona.nombre==="" || this.persona.edad===NaN || this.persona.edad===0 || this.persona.edad>100 ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'verifique Datos Ingresados',
        footer: 'Verifique si ya esta Registrado'
      })

    }else{
      this.peticion=this.firebaseService.registrar(this.persona);
      Swal.fire(
        'Registrado Correctamente!',
        'Dale Click al Boton para Continuar!',
        'success'
      )
    }

  }

}

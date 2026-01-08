import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})

export class Authentication {

  // variáveis
  protected signinForms!: UntypedFormGroup;

  // construtor
  constructor(private fb: UntypedFormBuilder) {
    this.signinForms = this.fb.nonNullable.group({
      email: ['',[Validators.required, Validators.email]], /**serve para validar o @ no email */
      password: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    });

  } // fim do construtor

  onSubmit(){
    this.signinForms.controls
    console.log("Controls",this.signinForms.controls['email'].value)
     console.log("Meu Forms", this.signinForms.value);

  }

} // fim da class Authentication

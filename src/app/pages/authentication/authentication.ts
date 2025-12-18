import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {

  protected signinForms!: UntypedFormGroup;
  protected signinFormsExemplo!: UntypedFormGroup; //* Exemplo didático *//
  constructor(private fb: UntypedFormBuilder) {
    this.signinForms = this.fb.nonNullable.group({
      email: [''],
      password: ['']
    });
/* exemplo didático */
    this.signinFormsExemplo = this.fb.nonNullable.group({
      email: ['paula'],
      password: ['vasco']
    });

    /*console.log("Zelito " , this.signinFormsExemplo.value);*/

  }

  onSubmit(){
      console.log("Meu Forms", this.signinForms.value);

    }

}

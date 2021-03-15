import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateEmail } from '../validators/email.validators';
import { ValidateURL } from '../validators/url.validators';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup;
  regpattern = '[a-z]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: ["Álvaro", [Validators.required, Validators.minLength(2), Validators.pattern(this.regpattern)]],
      password: ["", Validators.required],
      url: ["", [Validators.required, ValidateURL]],
      email: ["", [Validators.required, ValidateEmail]]
    })
  }

  onSubmit(_datosForm){
    console.log(_datosForm.value);
  }
}

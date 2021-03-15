import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioprimero',
  templateUrl: './formularioprimero.component.html',
  styleUrls: ['./formularioprimero.component.css']
})
export class FormularioprimeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(_datosForm){
    console.log(_datosForm.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit {

  @Input() product: Product;
  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter();
  public matricula: string = 'Matricularse';
  private disable: boolean;

  constructor() { }

  ngOnInit() {
    this.matricula = "Matricularse";
  }

  matricularse(){
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }

  isDisabled(){
    console.log(this.product.title);
    return this.disable;
  }

  mensaje(){
    alert("¿Estas intentado descargar la imagen?");
  }

}

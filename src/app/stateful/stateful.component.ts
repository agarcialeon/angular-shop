import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ConfirmComponent } from "../confirm/confirm.component";
import { Product } from "../interface/product";
import { Shop } from "../models/shop.model";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: "app-stateful",
  templateUrl: "./stateful.component.html",
  styleUrls: ["./stateful.component.css"],
})
export class StatefulComponent implements OnInit, OnDestroy {
  shopModel: any; //Shop = new Shop();
  boughtItems: Array<Product>;

  @ViewChild(ConfirmComponent)
  confirmChild: ConfirmComponent;

  private shopSubscription: Subscription;
  errorHttp: boolean;

  constructor(private http: HttpClient) {
    this.boughtItems = [];
    this.shopModel = { shopItems: [] };
  }

  ngOnInit() {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => {
        this.shopModel.shopItems = respuesta;
      },
      (respuesta: Response) => {
        this.errorHttp = true;
      })
    this.onGlobalKeyboard();
  }

  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }

  /**
   * Añade un curso a la lista de productos comprados
   * @param curso
   */
  comprarCurso(_curso) {
    this.boughtItems.push(_curso);
  }

  /**
   * Event listener para el evento de matricularse en un curso.
   * @param _event
   */
  cursoMatriculado(_event: Product) {
    this.comprarCurso(_event);
    this.onConfirm();
    this.confirmChild.isDisabled = false;
  }

  /**
   * Calcula el precio final de todos los productos comprados
   */
  precioFinal() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (resultado: number, item: Product) => resultado + item.price,
        0
      );
    }
  }

  onConfirm() {
    alert('Has añadido un nuevo curso');
  }

  /**
   *
   * @param _event
   */
  onKeyboard(_event) {
    console.log(_event);
    if (_event.key === "Enter") {
      alert("Has pulsado Enter");
    }
  }

  /**
   *  Captura el evento de pulsar la tecla Enter, de forma global en toda la aplicación.
   */
  onGlobalKeyboard() {
    document.addEventListener("keypress", (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    });
  }

}

import { AbstractControl } from "@angular/forms";

export function ValidateEmail(control: AbstractControl){
  if (control.value.endsWith('fuluj.com')) {
    return { invalidEmail: true };
  }
  return null;

}

import { AbstractControl } from "@angular/forms";

export function ValidateURL(control: AbstractControl){
  if (!control.value.startsWith('https') || control.value.includes('.es')) {
    return { invalidURL: true };
  }
  return null;

}

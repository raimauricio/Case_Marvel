import { AbstractControl } from "@angular/forms";

export function validatorCaracters(control: AbstractControl){

  const regEx = /^(?=.*['"@?!#$%^&+*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]/;

  const valor = control.value as string;

  if(regEx.test(valor)){
    return { carcters: true };
  }else{
    return null;
  }

}

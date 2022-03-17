import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function matchValidator(control:AbstractControl){
    const p1 = control.get('password');
    const p2 = control.get('confirm_password');
    if(p1?.pristine||p2?.pristine){
        return null;
    }
    return p1 && p2 && p1.value !== p2.value ? {'mismatch':true}:null;
}
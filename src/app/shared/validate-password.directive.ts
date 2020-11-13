import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const validatePasswordValidation: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    return password && repeatPassword && password?.value !== repeatPassword?.value ? { invalidPassword: true } : null;
};

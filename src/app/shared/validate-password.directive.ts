import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const validatePasswordValidation: ValidatorFn = (control: FormGroup): ValidationErrors => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    return password && repeatPassword && password.value === repeatPassword.value ? { invalidePassword: true } : null;
};

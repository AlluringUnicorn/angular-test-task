import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  strong = false;
  medium = false;
  easy = false;

  ngOnInit(): void {
    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      this.strong = this.medium = this.easy = false;

      if (this.loginForm.get('password')?.hasError('minlength') || !value ) {
        return;
      }

      const letterExists = /[a-zA-Z]/.test(value);
      const numberExists = /\d/.test(value);
      const specialExists = /[\W_]/.test(value);

      if (letterExists && numberExists && specialExists) {
        this.strong = true;
      }

      if ((letterExists && numberExists) || (letterExists && specialExists) || (numberExists && specialExists)) {
        this.medium = true;
      }

      if (letterExists || numberExists || specialExists) {
        this.easy = true;
      }
    });
  }


  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value);
  }
}

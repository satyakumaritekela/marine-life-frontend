import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLinear = true;
  loginFormGroup: FormGroup;
  email: String;
  password: String;


  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {

    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(5)]]

    });

  }

  onSubmit() {

    if (this.loginFormGroup.valid) {
      this.loginService.login(this.email, this.password).subscribe((data) => {
        if (data.token) {
          localStorage.setItem('fullname', data.user.fullname)
          localStorage.setItem('email', data.user.email);
          localStorage.setItem('type', data.user.type);
          localStorage.setItem('token', data.token);
          console.log(data.status);
          this.dialog.closeAll();
          this.snackBar.open('Login Succesful', '', {
            duration: 3000,
          });

        } else {
          console.log('error')
          this.loginFormGroup.markAsUntouched();
          this.snackBar.open('Invalid credentials', '', {
            duration: 3000
          })
        }
      })
    }

  }

}

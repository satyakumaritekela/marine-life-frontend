import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  registerFormGroup: FormGroup;
  name: String;
  email: String;
  password: String;


  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {

    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(5)]]

    });

  }

  onSubmit() {

    if (this.registerFormGroup.valid) {
      this.registerService.registerUser(this.name,this.email, this.password).subscribe((data) => {
        if (data.result) {
          this.dialog.closeAll();
          this.snackBar.open('Registration Successfull', '', {
            duration: 1000,
          });
          this.snackBar.open('Please Login now', '', {
            duration: 2000,
          });
          this.dialog.open(LoginComponent)

        } else {
          this.registerFormGroup.markAsUntouched();
          this.snackBar.open('Invalid details, Try Again', '', {
            duration: 3000
          })
        }
      }) 
    }

  }

}

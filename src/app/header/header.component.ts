import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    collapsed: Boolean = true;
    isLoggedIn: Boolean = false;
    notifications: any[];
    count: number;
    isVendor: boolean = false;
    isGuest: boolean = false;

    constructor(
        private dialog: MatDialog,
        private loginService: LoginService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        dialog.afterAllClosed.subscribe(() => {
            this.ngOnInit();
        })
    }

    ngOnInit(): void {
       // sessionStorage.clear();
        if (sessionStorage.getItem('token') !== null) {
            this.isLoggedIn = true;
            if (sessionStorage.getItem('type') === 'vendor') {
                this.isVendor = true;
            } else {
                this.isGuest = true;
            }
        }
    }

    openLoginPage = () => {
        this.dialog.open(LoginComponent);
    }

    openRegisterPage = () => {
        this.dialog.open(RegisterComponent);
    }

    logout = () => {

        console.log('logging out...')
        this.loginService.logout().subscribe(
            (data) => {

                if (data.success) {
                    this.isLoggedIn = false;
                    sessionStorage.clear();
                    this.snackBar.open('Logged Out', '', {
                        duration: 3000
                    })
                    this.router.navigate([''])
                } else {
                    this.isLoggedIn = false;
                    this.snackBar.open('Error while Logging out! Try again', '', {
                        duration: 3000
                    })
                }
            }
        )
    }

}

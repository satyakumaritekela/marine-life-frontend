import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class VendorGuard implements CanActivate {
    status: boolean = false;

    constructor(
        private snackBar: MatSnackBar) {
    }

    canActivate(): Promise<boolean> {

        return new Promise((resolve, reject) => {
            if (localStorage.getItem('token') && localStorage.getItem('type') === 'vendor') {
                resolve(true)
            }
            else {
                this.snackBar.open('Login as Vendor', '', {
                    duration: 2000
                })
                resolve(false)
            }
        })

    }

}

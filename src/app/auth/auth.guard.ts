import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  status: boolean = false;

  constructor(private dialog: MatDialog) {
  }

  canActivate(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token')) {
        resolve(true)
      }
      else {
        this.dialog.open(LoginComponent, { disableClose: true })
        resolve(false)
      }
    })

  }

}

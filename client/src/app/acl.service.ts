import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AclService {

  constructor() { }

  isLoggedIn() {
    //localStorage.getItem('acl');
    return false;
  }
}

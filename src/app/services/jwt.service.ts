import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  addJWTToLocalStorage(jwt:string){
    localStorage.setItem('jwt',jwt);
}
}

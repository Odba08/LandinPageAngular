import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

   getImage() {
    
  return this.http.get('https://api.escuelajs.co/api/v1/products?limit=10')
  

  
   }



   
}

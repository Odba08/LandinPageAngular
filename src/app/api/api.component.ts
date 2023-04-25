import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  resultados:any = [];

  constructor(private servicesService: ServicesService) {}


  ngOnInit(): void {
   this.servicesService.getImage()
   .subscribe((response)=> {
      this.resultados = response;
    

   });
    
  }
}

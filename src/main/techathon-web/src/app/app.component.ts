import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCatalogService } from './product-catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductCatalogService]
})
export class AppComponent implements OnInit{
  title = 'app';
   constructor(private productCatalogService: ProductCatalogService) { }
   public productsList = [];
   ngOnInit() {
   this.productCatalogService.getData().subscribe(data => this.productsList = data);
  }
  onSubmit(e){
  e.preventDefault();
  alert("User Added");
  }
  
 

}

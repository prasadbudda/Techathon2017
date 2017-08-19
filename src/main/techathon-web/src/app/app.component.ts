import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCatalogService } from './product-catalog.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductCatalogService]
})
export class AppComponent implements OnInit{
  title = 'app';
  user='';
   constructor(private productCatalogService: ProductCatalogService) { }
   public productsList = [];
   ngOnInit() {
   this.productCatalogService.getData().subscribe(data => this.productsList = data);
  }
  onSubmit(e){
  e.preventDefault();
  document.getElementById("1ta").classList.remove("active");
  document.getElementById("2ta").classList.add("active");
  document.getElementById("12a").classList.remove("active");
  document.getElementById("2a").classList.add("active");
  
  }
  
 

}

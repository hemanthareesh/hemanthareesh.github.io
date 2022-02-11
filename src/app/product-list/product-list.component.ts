import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  products = [1, 2, 3, 4, 5, 6, 7];
  product = {
    name: 'hemant',
  };
  ngOnInit(): void {}
}

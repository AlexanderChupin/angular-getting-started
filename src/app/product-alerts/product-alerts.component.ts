import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent  {
  @Input() product_child_prop!: Product;
  @Output() notify1 = new EventEmitter<Product>();

}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  productData: any = []
  checkoutBlnc: any
  checkoutsbtl: any
  checkOutData: any
  shipping: number = 400
  products: any = []
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productData = this.cartService.CartItemList
    console.log(this.productData);

    this.checkoutBlnc = this.cartService.checkoutBlnc
    this.checkoutsbtl = this.cartService.checkoutsbtl
    this.products = this.cartService.CartItemList
    if (this.products.length >= 1) {
      this.shipping = 50
    } else {
      this.shipping = 0
    }
  }
  hidewindow() {

  }
}

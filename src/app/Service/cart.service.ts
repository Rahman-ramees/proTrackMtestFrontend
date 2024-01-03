import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, bindCallback } from 'rxjs';
import { ModalComponentComponent } from '../Components/modal-component/modal-component.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  ProductList = new BehaviorSubject<any>([]);
  ProducwishtList = new BehaviorSubject<any>([]);
  CartItemList: any = []
  wishItemList: any = []
  grandtotalTest: number = 0
  checkoutBlnc: any
  checkoutsbtl: any


  constructor(private dialog: MatDialog) { }

  addToCart(product: any) {
    product.quantity = 1
    product.totalcamount = Math.floor(product.price)
    product.buttonName = 'Add to cart'

    if (!this.CartItemList.includes(product)) {
      const data = "Item added to cart successfull"
      this.CartItemList.push(product)
      this.processData(data)
    }
    else {
      const data = 'This item already exist!'
      this.processData(data)
    }

    this.ProductList.next(this.CartItemList)
    this.getTotalPrice(this.CartItemList.totalcamount)
    this.grandtotalTest += product.totalcamount

    product.buttonName = !this.CartItemList.includes(product) ? 'Add to cart' : 'Remove item';
  }

  addToWslist(product: any) {
    this.wishItemList.push(product)
    this.ProducwishtList.next(this.wishItemList)
    const data = 'Item add to wishlist'
    this.processData(data)
  }

  getTotalPrice(grand: any): number {
    let grandTotal = 0

    this.CartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal
  }

  getProducts() {
    return this.ProductList;
  }
  getWishlist() {
    return this.ProducwishtList;
  }
  removeCartItem(product: any) {
    this.CartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.CartItemList.splice(index, 1);
      }
    });
  }

  removeAllCart() {
    this.CartItemList = []
    this.ProductList.next(this.CartItemList);
  }

  checkoutData(balance: any, subTotal: any) {
    this.checkoutBlnc = balance
    this.checkoutsbtl = subTotal
  }

  processData(data: any) {
    this.dialog.open(ModalComponentComponent, {
      data: { inputData: data }
    });
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() count: any
  cartValue: any
  len: number = 0
  classs: any
  checkWindo = false
  public quantity: number = 0
  public products: any = [];
  public grandTotalll: number = 0
  subTotal: number = 0
  public balance: number = 0
  public shippingChrg: number = 400

  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.products = this.cartService.CartItemList
    this.len = this.products.length
    this.products.map((e: { totalcamount: any; }) => {
      this.grandTotalll += e.totalcamount
    })
    this.balance = this.grandTotalll + this.shippingChrg
    this.cartService.checkoutData(this.balance, this.grandTotalll)
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  EmtyCart() {
    this.cartService.removeAllCart()
  }

  addQnt(q: any) {
    q.quantity += 1
    q.totalcamount += q.price
    this.balance += q.price
    this.grandTotalll += q.price
    this.cartService.checkoutData(this.balance, this.grandTotalll)
  }

  lessQnt(q: any) {
    q.quantity -= 1
    q.totalcamount -= q.price
    this.grandTotalll -= q.price
    this.balance -= q.price
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() count: any
  cartValue: any
  classs: any
  checkWindo = false
  public quantity: number = 0
  public products: any = [];
  public grandTotalll: number = 0
  subTotal: number = 0
  public balance: number = 0
  public shippingChrg: number = 50

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.CartItemList
    this.products.map((e: { totalcamount: any; }) => {
      this.grandTotalll += e.totalcamount
    })
    this.balance = this.grandTotalll + this.shippingChrg
    this.cartService.checkoutData(this.balance, this.grandTotalll)
  }

  removeItem(item: any) {
    console.log(item);
    
    this.cartService.removeCartItem(item);
    this.grandTotalll -= item.totalcamount
    this.balance -=  item.totalcamount
  }

  EmtyCart() {
    this.cartService.removeAllCart()
  }

  addQnt(q: any) {
    q.quantity += 1
    q.totalcamount += Math.floor(q.price);   
    this.balance += Math.floor(q.price); 
    this.grandTotalll += Math.floor(q.price); 
    this.cartService.checkoutData(this.balance, this.grandTotalll)
  }

  lessQnt(q: any) {
    q.quantity -= 1
    q.totalcamount -= q.price
    this.grandTotalll -= q.price
    this.balance -= q.price
  }
}

import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/Service/backend-api.service';
import { CartService } from 'src/app/Service/cart.service';
import { ModalComponentComponent } from '../modal-component/modal-component.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ourproduct: any;

  constructor(
    private service: BackendApiService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      this.ourproduct = res;
      this.ourproduct.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: Math.floor(a.price), buttonName: 'Add to cart' });
      });
    });
  }


  addToWishlist(item: any) {
    this.cartService.addToWslist(item);
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {
  getProductSubscription$!: Subscription
  isMenuOpen = false;
  cartCount: number = 0
  wishlistCount: number = 0

  constructor(private cartService: CartService) {
    this.cartService.getProducts().subscribe((res) => {
      this.cartCount = res.length
    })

    this.getProductSubscription$ = this.cartService.getWishlist()
      .subscribe((res) => {
        this.wishlistCount = res.length
      })
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy(): void {
    this.getProductSubscription$.unsubscribe();
  }

}

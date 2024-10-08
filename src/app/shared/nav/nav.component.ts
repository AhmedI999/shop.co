import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBars, faMagnifyingGlass, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {NgOptimizedImage} from '@angular/common';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    NgbCollapse,
    RouterLink,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  protected readonly faBars = faBars;
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  isNavbarCollapsed = true;

  ngOnInit(): void {
  }



}

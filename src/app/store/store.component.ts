import {Component, OnInit, viewChild} from '@angular/core';
import {NavComponent} from '../shared/nav/nav.component';
import {RouterLink} from "@angular/router";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    NavComponent,
    RouterLink,
    FaIconComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit{
  protected readonly faMagnifyingGlass = faMagnifyingGlass;


  ngOnInit(): void {

  }


}

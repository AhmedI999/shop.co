import { Component } from '@angular/core';
import {NavComponent} from '../shared/nav/nav.component';
import {LandingHeroComponent} from './landing-hero/landing-hero.component';
import {LandingFooterComponent} from './landing-footer/landing-footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavComponent,
    LandingHeroComponent,
    LandingFooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {

}

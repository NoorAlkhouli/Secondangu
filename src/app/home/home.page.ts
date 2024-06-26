import { SecondPagePage } from './../second-page/second-page.page';
import { Component, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonFooter,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonNav,
} from '@ionic/angular/standalone';
import { AppComponent } from '../app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

  register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonNav,
    IonRouterOutlet,
    IonButtons,
    IonFooter,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    SecondPagePage,
    AppComponent,
    IonMenu,
    IonMenuButton,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  constructor() {}
  content = viewChild(IonContent);
  component = SecondPagePage;

  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content()?.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content()?.scrollToTop(500);
  }

  onScrollStart(): void {
    console.log('Scroll Start');
  }

  onScrollEnd(): void {
    console.log('Scroll End');
  }
}

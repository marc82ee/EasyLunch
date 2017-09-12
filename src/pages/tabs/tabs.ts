import { Component } from '@angular/core';
import { MenuPage}  from '../menu/menu';
import { BasketPage}  from '../basket/basket';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs selected-index="1"> 
        <ion-tab [root]="menuPage" tabTitle="Menu" tabIcon="cafex"> </ion-tab>
        <ion-tab [root]="basketPage" tabTitle="Basket" tabIcon="basket"> </ion-tab>
    <ion-tabs>
    `
})
export class TabsPage {
    menuPage = MenuPage;
    basketPage = BasketPage;
}


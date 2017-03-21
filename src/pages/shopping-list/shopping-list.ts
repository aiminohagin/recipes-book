import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ShoppingListService} from '../../services/shopping-list';
import {ShopItem} from '../../models/shop-item.interface';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  shoppingList: ShopItem[];

  constructor(private shoppingListSerivce: ShoppingListService){}

  ionViewWillLoad(){
    this.shoppingList = this.shoppingListSerivce.getShoppingList();
  }

  onSubmit(f: FormGroup){
    let shopItem:ShopItem = {itemName: f.value.itemName, 
      itemQuantity: f.value.itemQuantity};    
    this.shoppingListSerivce.addToShoppingList(shopItem);
    //this.shoppingListSerivce.addToShoppingList(f.value.itemName, f.value.itemQuantity);
    f.reset();
    this.loadList();
  }

onRemoveItem(shopItem: ShopItem) {
  this.shoppingListSerivce.removeFromShoppingList(shopItem);
  this.loadList();
}

private loadList() {
  this.shoppingList = this.shoppingListSerivce.getShoppingList();
}
}

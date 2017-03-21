import { Injectable } from '@angular/core';
import { ShopItem} from '../models/shop-item.interface';

@Injectable()
export class ShoppingListService {
    private shoppingList:ShopItem[] = [];

    constructor() { }

    addToShoppingList(shopItem:ShopItem){  
        const index = this.shoppingList.findIndex(
            item=>item.itemName === shopItem.itemName && item.itemQuantity===shopItem.itemQuantity);
        if (index < 0){            
            this.shoppingList.push(shopItem);
        }
        console.log(this.shoppingList);
    }

    updateShoppingList(shopItem:ShopItem){
        const index = this.shoppingList.findIndex(
            item=>item.itemName === shopItem.itemName)
        
        if (index > -1){
            this.shoppingList[index].itemQuantity = shopItem.itemQuantity;
        }
    }

    removeFromShoppingList(shopItem:ShopItem){
        const index = this.shoppingList.findIndex(
            item=>item.itemName === shopItem.itemName && item.itemQuantity===shopItem.itemQuantity);
        this.shoppingList.splice(index, 1);
    }

    getShoppingList(): ShopItem[]{
        return this.shoppingList.slice();
    }
}
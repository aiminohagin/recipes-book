import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EditRecipePage} from '../edit-recipe/edit-recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  constructor(private navCtrl: NavController){}

  onAddRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'New'});
  }
}

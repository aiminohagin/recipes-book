import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {ShoppingListPage} from '../pages/shopping-list/shopping-list';
import {RecipesPage} from '../pages/recipes/recipes';
import {EditRecipePage} from '../pages/edit-recipe/edit-recipe';
import {ShoppingListService} from '../services/shopping-list';


@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    TabsPage,
    EditRecipePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    TabsPage,
    EditRecipePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService]
})
export class AppModule {}

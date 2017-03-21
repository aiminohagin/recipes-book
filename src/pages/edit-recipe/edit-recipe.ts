import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html'
})
export class EditRecipePage implements OnInit {
  mode = 'New';
  difficultOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(private navParams: NavParams, private formBuilder: FormBuilder
    ,private actionSheet:ActionSheetController){}

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    this.initForm();
  }

  private initForm(){
    this.recipeForm = new FormGroup({ //this.formBuilder.group({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficult': new FormControl('Medium', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  onManageIngredients(){
    const actionSheet = this.actionSheet.create({
      title: 'What do you want to do?',
      buttons: [{
        text: 'Add Ingredient',
        handler: ()=>{
          this.addIngredient();
        }
      },
      {
        text: 'Remove Ingredient',
        role: 'destructive',
        handler: ()=>{}
      },
      {
        text: 'cancel',
        role: 'cancel'
      }
      ]
    });
    actionSheet.present();
  }

  private addIngredient(){
    
  }
}

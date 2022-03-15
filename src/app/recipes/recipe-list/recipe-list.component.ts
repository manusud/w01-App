import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A another Test Recipe','This another is a simply test','https://www.freeiconspng.com/thumbs/recipes-icon-png/free-recipe-sheet-clip-art-21.png'),
    new Recipe('A Test Recipe','This is a simply test','https://www.freeiconspng.com/thumbs/recipes-icon-png/free-recipe-sheet-clip-art-21.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

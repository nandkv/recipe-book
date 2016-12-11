import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRNhNA9ox48lhIH3m0IR2F07egfFkKTYwbACoKlMKxhqv2yewV_OEqVY8');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}

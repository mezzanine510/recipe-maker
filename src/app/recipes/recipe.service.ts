import { EventEmitter, Output, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";

@Injectable()

export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Ultradog', 
               'The ultimate hot dog for your belly.',
               'https://wallpaperscraft.com/image/hot_dog_sausage_biscuit_gravy_70392_3840x2160.jpg',
               [
                 new Ingredient('Hotdog', 1),
                 new Ingredient('Hotdog Bun', 1),
                 new Ingredient('Pickles', 1),
                 new Ingredient('Mayo', 1),
                 new Ingredient('Chopped Bacon Slices', 2)
               ]),
    new Recipe('Superburger', 
               'The most bestest burger you have ever tasted',
               'https://media.timeout.com/images/103483135/image.jpg',
               [
                 new Ingredient('Beef Patty', 2),
                 new Ingredient('Burger Bun', 1),
                 new Ingredient('Swiss Cheese', 3),
                 new Ingredient('Mayo', 1),
                 new Ingredient('Swiss Cheese', 3),
                 new Ingredient('Bacon Slices', 4)
               ])
  ];

  constructor(private slService: ShoppingListService) {}
  
  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  
}
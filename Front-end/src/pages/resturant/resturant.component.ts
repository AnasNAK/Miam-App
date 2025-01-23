import { Component, OnInit } from '@angular/core';
import { CartComponent } from "./components/cart/cart.component";
import { InformationComponent } from "./components/information/information.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { Meal } from '../../entities/meals/model/meals.model';

@Component({
  selector: 'app-resturant',
  imports: [CartComponent, InformationComponent, MenuComponent, TabsComponent],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent implements OnInit{
  categories = [
    {
      key: 'APPETIZER',
      label: 'Appetizer',
    },
    {
      key: 'MAIN_COURSE',
      label: 'Main Course',
    },

    {
      key: 'DESSERT',
      label: 'Dessert',
    },

    {
      key: 'BEVERAGE',
      label: 'Beverage',
    },

    {
      key: 'SIDE',
      label: 'Side',
    },
  ];
  meals: Meal[] = [

    {

      id: 1,
      name: 'Classic Margherita Pizza',
      preparationTime: new Date(),
      description: 'Traditional Italian pizza with fresh tomatoes and mozzarella',
      price: 12.99,
      quantity: 15,
      category: 'MAIN_COURSE',
      imageUrl: 'https://example.com/pizza.jpg'

    },

    {
      id: 2,
      name: 'Caesar Salad',
      preparationTime: new Date(),
      description: 'Fresh romaine lettuce with Caesar dressing and croutons',
      price: 8.50,
      quantity: 20,
      category: 'APPETIZER',
      imageUrl: 'https://example.com/caesar-salad.jpg'
    },

    {
      id: 3,
      name: 'Chocolate Lava Cake',
      preparationTime: new Date(),
      description: 'Warm chocolate cake with molten chocolate center',
      price: 6.99,
      quantity: 10,
      category: 'DESSERT',
      imageUrl: 'https://example.com/lava-cake.jpg'
    },

    {
      id: 4,
      name: 'Fresh Lemonade',
      preparationTime: new Date(),
      description: 'Homemade fresh lemonade with mint',
      price: 4.50,
      quantity: 25,
      category: 'BEVERAGE',
      imageUrl: 'https://example.com/lemonade.jpg'
    },

    {
      id: 5,
      name: 'Grilled Salmon',
      preparationTime: new Date(),
      description: 'Fresh salmon fillet with herbs and lemon',
      price: 18.99,
      quantity: 12,
      category: 'MAIN_COURSE',
      imageUrl: 'https://example.com/salmon.jpg'
    }

  ];
  filteredMeals : Meal[] = []
  selectedCategory = this.categories[0].key

  ngOnInit(): void {
    this.filteredMeals = this.filterByCategory(this.selectedCategory)
  }

  onTabChange(category : string ) : void {
    this.selectedCategory = category;
    this.filteredMeals = this.filterByCategory(this.selectedCategory)
  } 

  filterByCategory(category : string) : Meal[] {
    return this.meals.filter(meal => meal.category === category)
  }
  


  
}

import { Component, OnInit } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { InformationComponent } from './components/information/information.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { Meal } from '../../entities/meals/model/meals.model';

@Component({
  selector: 'app-resturant',
  imports: [CartComponent, InformationComponent, MenuComponent, TabsComponent],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css',
})
export class ResturantComponent implements OnInit {
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
      description:
        'Traditional Italian pizza with fresh tomatoes and mozzarella',
      price: 12.99,
      quantity: 15,
      category: 'MAIN_COURSE',
      imageUrl: 'https://example.com/pizza.jpg',
    },

    {
      id: 2,
      name: 'Caesar Salad',
      preparationTime: new Date(),
      description: 'Fresh romaine lettuce with Caesar dressing and croutons',
      price: 8.5,
      quantity: 20,
      category: 'APPETIZER',
      imageUrl: 'https://example.com/caesar-salad.jpg',
    },

    {
      id: 3,
      name: 'Chocolate Lava Cake',
      preparationTime: new Date(),
      description: 'Warm chocolate cake with molten chocolate center',
      price: 6.99,
      quantity: 10,
      category: 'DESSERT',
      imageUrl: 'https://example.com/lava-cake.jpg',
    },

    {
      id: 4,
      name: 'Fresh Lemonade',
      preparationTime: new Date(),
      description: 'Homemade fresh lemonade with mint',
      price: 4.5,
      quantity: 25,
      category: 'BEVERAGE',
      imageUrl: 'https://example.com/lemonade.jpg',
    },

    {
      id: 5,
      name: 'Grilled Salmon',
      preparationTime: new Date(),
      description: 'Fresh salmon fillet with herbs and lemon',
      price: 18.99,
      quantity: 12,
      category: 'MAIN_COURSE',
      imageUrl: 'https://example.com/salmon.jpg',
    },
  ];
  cart : Meal[] = [] 

  filteredMeals: Meal[] = [];
  selectedCategory = this.categories[0].key;
  searchTerm : string = ''
  ngOnInit(): void {
    this.performSearch()
  }

  onSearchInput(val: string): void {
    this.searchTerm = val.trim();
    this.performSearch()
  }

  addToCart(selectedMeal : Meal) : void {
    if (!this.cart.includes(selectedMeal)) {
      this.cart.push(selectedMeal);
    }
    this.updateStrorage();
  }

  updateStrorage() : void{
    window.localStorage.setItem('cart' , JSON.stringify(this.cart))
  }
  onTabChange(category: string): void {
    this.selectedCategory = category;
    this.performSearch()
  }

  performSearch(): void {
    let meals =  this.meals.filter((meal) => meal.category === this.selectedCategory);
    console.log(this.searchTerm);
    
    if (this.searchTerm) {
      meals =  this.meals.filter((meal) => {
        meal.name.toLocaleLowerCase() ===this.searchTerm.toLocaleLowerCase()
      });

    }
    
    this.filteredMeals= meals;
  }
}

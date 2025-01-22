import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealHolderOrderPageComponent } from "./components/meal-holder-order-page/meal-holder-order-page.component";


const orderData = {
  date_of_command: "2025-01-22T15:30:00",
  meals: [
    {
      name: "Caesar Salad",
      description: "Fresh romaine lettuce, croutons, and parmesan cheese",
      quantity: 2,
      price_per_unit: 12.99,
      preparationTime: "PT30M",
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737544108/CaesarSalad_inbize.jpg"
    },
    {
      name: "Tomato Soup",
      description: "Rich and creamy tomato soup with fresh basil",
      quantity: 1,
      price_per_unit: 9.99,
      preparationTime: "PT20M",
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737542962/TomatoSoup_zfrsml.jpg"
    },
    {
      name: "Grilled Chicken Sandwich",
      description: "Juicy grilled chicken with lettuce and tomato",
      quantity: 3,
      price_per_unit: 15.50,
      preparationTime: "PT45M",
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737543171/GrilledChickenSandwich_nin73g.jpg"
    }
  ],
  total_command_price: 82.47
}


@Component({
  selector: 'app-order-page',
  imports: [CommonModule, MealHolderOrderPageComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})

export class OrderPageComponent implements OnInit {

  OrderData :any;

  // ngOnInit(): void {
  //   localStorage.setItem("order" , JSON.stringify(orderData));
  // }

  ngOnInit(): void {
    const storedOrderDataString = localStorage.getItem("order");
    if(storedOrderDataString) {
      this.OrderData = JSON.parse(storedOrderDataString);
    }else{
      this.OrderData = null;
    }
  }


  formatDate(isoDate: string): string  {
    const date = new Date(isoDate);
    
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    const formattedHours = hours % 12 || 12; 
  
    return `${day} ${month.toLowerCase()} , ${formattedHours}:${minutes}${ampm}`;
  };

}

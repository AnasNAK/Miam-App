import { Routes, RoutesRecognized } from "@angular/router";
import { ResturantComponent } from "./resturant.component";


export const routes : Routes = [
    {path : 'resturant/:id' , component : ResturantComponent}
]
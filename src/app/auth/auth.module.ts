import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes:Routes=[
    {
        path:'register',
        component:RegisterComponent
    }
]

@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes),ReactiveFormsModule],
    declarations:[RegisterComponent]
})
export class AuthModule{

}
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { Step } from 'src/app/classes/step';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  description: string = "";
  recipeName: string = "";
  steps: number[] = [1];
  prepTime: number = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

  addStep() {
    this.steps.push(this.steps.length+1);
  }

  removeStep() {
    if(this.steps.length == 1) {
      alert("You must have at least one step");
      return;
    }
    this.steps.pop();
  }

}

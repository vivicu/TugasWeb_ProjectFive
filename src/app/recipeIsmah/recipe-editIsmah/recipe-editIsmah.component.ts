import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-editIsmah',
  templateUrl: './recipe-editIsmah.component.html',
  styleUrls: ['./recipe-editIsmah.component.css']
})
export class RecipeEditIsmahComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    );
  }
}

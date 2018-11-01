import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headerIsmah',
  templateUrl: './headerIsmah.component.html',
  styleUrls: ['./headerIsmah.component.css']
})
export class HeaderIsmahComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}

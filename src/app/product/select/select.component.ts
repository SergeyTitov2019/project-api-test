import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'select-component',
  templateUrl: './select.component.html',
  styleUrls: ['./select.componet.css']
})

export class SelectComponent{
  types = [
    {id: 'Холодильник', name: "Холодильник"},
    {id: "Микроволновая печь", name: "Микроволновая печь"},
    {id: "Посудомоечная машина", name: "Посудомоечная машина"},
    {id: "Варочная поверхность", name: "Варочная поверхность"},
    {id: "Стиральная машина", name: "Стиральная машина"}
  ];
  selectedValue = null;
}



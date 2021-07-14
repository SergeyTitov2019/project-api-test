
import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { Student} from "../student";
import {Product} from "../product";
import {StudentService } from "../student.service";

@Component({
  selector: 'app-list1',
  templateUrl: './list.component1.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent1 implements OnInit {

  students!: Student[];
  products!: Product[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents()
      .subscribe( data => {
        //console.log('data:', data)
        //console.log('data.result:', data.result)
        this.products = data;
      });
  }

  deleteStudent(product: Product): void {
    this.studentService.deleteStudent(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editStudent(product: Product): void {
    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", product.id.toString());
    this.router.navigate(['edit']);
  };

  addStudent(): void {
    this.router.navigate(['add']);
  };

}

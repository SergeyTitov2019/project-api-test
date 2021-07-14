import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Router} from "@angular/router";
import {StudentService } from "../student.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private studentService: StudentService) { }
   addForm!: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit() {
    this.studentService.createStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list']);
      });
  }
}

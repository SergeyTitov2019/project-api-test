
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Student} from "../student";
import {StudentService } from "../student.service";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student: Student;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    let studentId = window.localStorage.getItem("editStudentId");
    if(!studentId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.studentService.getStudentById(+studentId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.studentService.updateStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data) {
            alert('Student updated successfully.');
            this.router.navigate(['list']);
          }else {
            alert('somthing went to wrong!');
          }
        },
        error => {
          alert(error);
        });
  }

}

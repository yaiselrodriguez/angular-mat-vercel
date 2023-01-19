import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public ownerForm: FormGroup= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: 0,
  };
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) { }

 /* ngOnInit(): void {
  }*/

 ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  create(){
    this.studentService.create(this.studentForm).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}

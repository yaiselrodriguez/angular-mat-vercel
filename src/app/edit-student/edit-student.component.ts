import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id= Number(params.get('id'));
      this.getById(id);
    })
  }

  getById(id: number) {
    this.studentService.getById(id).subscribe((data) => {
      this.studentForm = data;
    })
  }
  update() {
    this.studentService.update(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}

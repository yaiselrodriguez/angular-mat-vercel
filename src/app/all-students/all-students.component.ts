import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogStudentComponent } from 'src/app/delete-dialog-student/delete-dialog-student.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  allStudentsSource: Student[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'age', 'actions'];

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.studentService.get().subscribe((data) => {
      this.allStudentsSource = data;
    });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogStudentComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allStudentsSource = this.allStudentsSource.filter(
          (_) => _.id !== id
        );
      }
    });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-delete-dialog-student',
  templateUrl: './delete-dialog-student.component.html',
  styleUrls: ['./delete-dialog-student.component.css']
})
export class DeleteDialogStudentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentsService,
  ) { }

  ngOnInit(): void {
  }
 confirmDelete(){
this.studentService.delete(this.data.id).subscribe(()=>{
  this.dialogRef.close(this.data.id);
});
 }
}

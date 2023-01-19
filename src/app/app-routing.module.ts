import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from 'src/app/all-students/all-students.component';
import { AddStudentComponent } from 'src/app/add-student/add-student.component';
import { EditStudentComponent } from 'src/app/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: '',
    component: AllStudentsComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';

@Component({
  selector: 'app-right-pannel',
  standalone: true,
  imports: [StudentComponent,TeacherComponent],
  templateUrl: './right-pannel.component.html',
  styleUrl: './right-pannel.component.css'
})
export class RightPannelComponent {

}

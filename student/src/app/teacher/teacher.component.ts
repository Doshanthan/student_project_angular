import { Component,inject } from '@angular/core';
import { Teacher } from '../teacher';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../services/teacher.service';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {


  teacherService:TeacherService=inject(TeacherService);
  mainService:MainService = inject(MainService);

}

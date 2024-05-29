import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';
import { MainService } from '../services/main.service';



@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  
  // constructor(private mainservice:MainService){
  //   // this.students=this.mainservice.details.student;
  // }
  ngOnInit(): void {
    // this.studentDetails = this.mainservice.details.student;
  }


  //  grade = ""


    // student= [
    //   {id:'1',first_name:'doshan',last_name:'krish',dob:'454545',gender:'male',address:'amparai',district:'amparai15454',contact_no:'565656',grade:'14'},
    //   {id:'1',first_name:'doshan',last_name:'krish',dob:'454545',gender:'male',address:'amparai',district:'amparai15454',contact_no:'565656',grade:'14'},
    // ]
    
    studentService:StudentService = inject(StudentService);
    mainService:MainService = inject(MainService);

    

}

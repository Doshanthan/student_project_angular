import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  isAddNew: boolean =true;
  editflag: boolean = false;
  index: number=1;



  studentObj :Student =  {
    id: '',
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
    address: "",
    district: "",
    contact_no: "",
    grade: ""
  }

  


addnew(){
  this.isAddNew=!this.isAddNew;
  
}

saveStudent(){
  if(this.editflag==false)
    {
      this.studentList.push(this.studentObj);  
    }
    else{
      this.studentList[this.index]= this.studentObj;
      this.editflag=false;
    }
  this.studentObj = {
    id: 'S5',
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
    address: "",
    district: "",
    contact_no: "",
    grade: ""
    }
}

editStudent(i:number):void{
  this.studentObj = this.studentList[i];
  this.isAddNew=!this.isAddNew;
  this.editflag = true;
  this.index = i;    
  }

deleteStudent(i:number):void{
  this.studentList.splice(i,1);
}

studentList:Student[] = [
    {
      id:"S0",
      first_name:"kamal",
      last_name:"kasan",
      dob:"1999.10.25",
      gender:"male",
      address:"panankadu",
      district:"kinochchi",
      contact_no:"0751234567",
      grade:"AL"
    },
    {
      id:"S1",
      first_name:"Amal",
      last_name:"Nathan",
      dob:"1999.11.25",
      gender:"male",
      address:"panankadu",
      district:"kinochchi",
      contact_no:"0751234567",
      grade:"AL"
    },
    {
      id:"S2",
      first_name:"Rathi",
      last_name:"Vathani",
      dob:"1999.10.25",
      gender:"female",
      address:"akkaraipattu",
      district:"Ampara",
      contact_no:"0751234567",
      grade:"Uni"
    },
    {
      id:"S3",
      first_name:"Arththi",
      last_name:"Jeni",
      dob:"1999.10.25",
      gender:"male",
      address:"panankadu",
      district:"kinochchi",
      contact_no:"0751234567",
      grade:"AL"
    },
    {
      id:"S4",
      first_name:"Roshan",
      last_name:"Karthi",
      dob:"2000.10.25",
      gender:"male",
      address:"panankadu",
      district:"Ampara",
      contact_no:"0751234567",
      grade:"Uni"
    },
    
    
  ]
}

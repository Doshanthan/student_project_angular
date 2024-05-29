import { Injectable } from '@angular/core';
import { Teacher } from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  // teacherList: Teacher[]=[];

  constructor() { }

  
  isAddNew: boolean =true;
  editflag: boolean =true;
  index: number =1;
  

  teacherObj :Teacher={
    id:'',
    first_name:'',
    last_name:'',
    dob:'',
    gender:'',
    address:'',
    district:'',
    contact_no:'',

  }

  saveTeacher(){
    
    if(this.editflag==false)
      {
        this.teacherList.push(this.teacherObj);  
      }
      else{
        this.teacherList[this.index]= this.teacherObj;
        this.editflag=false;
      }

    this.teacherObj={
      id:'',
      first_name:'',
      last_name:'',
      dob:'',
      gender:'',
      address:'',
      district:'',
      contact_no:'',
  

    }
  }
  editTeacher(i:number):void{
    this.teacherObj = this.teacherList[i];
    this.isAddNew=!this.isAddNew;
    this.editflag = true;
    this.index = i;    
    }
  
  deleteTeacher(i:number):void{
    this.teacherList.splice(i,1);
  }

  teacherList : Teacher[]=[
      {
        id:"T0",
        first_name:"kamal",
        last_name:"kasan",
        dob:"1990.10.25",
        gender:"male",
        address:"panankadu",
        district:"kinochchi",
        contact_no:"0751234567",
      },
      {
        id:"T1",
        first_name:"Ramal",
        last_name:"kasan",
        dob:"1985.10.25",
        gender:"male",
        address:"panankadu",
        district:"kinochchi",
        contact_no:"0751234567",
  
      },
      {
        id:"T2",
        first_name:"Pamal",
        last_name:"kasan",
        dob:"1975.10.25",
        gender:"Female",
        address:"panankadu",
        district:"kinochchi",
        contact_no:"0751234567",
  
      },
      {
        id:"T3",
        first_name:"kamal",
        last_name:"kasan",
        dob:"1990.10.25",
        gender:"Female",
        address:"panankadu",
        district:"kinochchi",
        contact_no:"0751234567"
      },
      {
        id:"T4",
        first_name:"Aamal",
        last_name:"kasan",
        dob:"1999.10.25",
        gender:"male",
        address:"panankadu",
        district:"kinochchi",
        contact_no:"0751234567"
      }
  ]
  
  addnew(){
    this.isAddNew=!this.isAddNew;
    
  }
  
}

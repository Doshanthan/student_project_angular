import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { }

  isMinimized:boolean =true;
  
  minimizedToggle(){
    this.isMinimized = !this.isMinimized;
  }


  dictricts = [
    { id: 1, list_value: "Kilinochchi" },
    { id: 2, list_value: "Mullaitivu" },
    { id: 3, list_value: "Vavuniya" },
    { id: 4, list_value: "Jaffna" },
    { id: 5, list_value: "Mannar" },
    { id: 6, list_value: "Batticaloa" },
    { id: 7, list_value: "Amparai" },
    { id: 8, list_value: "Tringo" }
    ];
  
  
  genders=[
    {id:1,list_vale:"male"},
    {id:2,list_vale:"female"}
  ];
  
  grades=[
    {id:1,list_vale:"1"},
    {id:2,list_vale:"2"},
    {id:3,list_vale:"3"},
    {id:4,list_vale:"4"},
    {id:5,list_vale:"5"},
    {id:6,list_vale:"6"}
  ];



//   details={
//     student:[
//       {
//         id:'',
//     first_name:'',
//     last_name:'',
//     dob:'',
//     gender:'',
//     address:'',
//     district:'',
//     contact_no:'',
//     grade:''
//       }
//     ],
//     teacher:[
//       {
//         id:'',
//       }
//     ]
//   }
 }

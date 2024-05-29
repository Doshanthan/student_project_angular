import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-left-pannel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-pannel.component.html',
  styleUrl: './left-pannel.component.css'
})
export class LeftPannelComponent {

  mainService:MainService=inject(MainService)

}

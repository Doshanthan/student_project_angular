import { Component, inject } from '@angular/core';
import { LeftPannelComponent } from '../left-pannel/left-pannel.component';
import { RightPannelComponent } from '../right-pannel/right-pannel.component';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftPannelComponent,RightPannelComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainService:MainService = inject(MainService);
}

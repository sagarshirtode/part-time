import { Component, OnInit, isDevMode } from '@angular/core';
import { CommonService } from '../../Services/common.service';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(private cs: CommonService) {}
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
  data: any = this.cs.getUserData().subscribe(
    (Response) => {
      console.log(Response);
    },
    (error) => {
      console.log(error);
    }
  );
}

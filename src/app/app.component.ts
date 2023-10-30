import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendAccessService } from './login/backend-access.service';
import { Router } from '@angular/router';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  constructor(private router: Router) {}

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.router.navigate(['']);
  }
}

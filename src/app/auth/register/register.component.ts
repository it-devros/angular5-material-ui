import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {
  test: Date = new Date();
  ngOnInit() {
  }
}

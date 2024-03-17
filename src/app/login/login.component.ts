import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { LoginDTO } from '../dtos/user/login.dto';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  phoneNumber: string = '012323456';
  password: string = '12345';
  onPhoneNumberChange() {
    console.log(`Phone typed: ${this.phoneNumber}`)
  }
  constructor(private router: Router, private userService: UserService){

  }
  login() {
    const message = `phone_number: ${this.phoneNumber} ` +
      `password: ${this.password} `;

      debugger

    const loginDTO:LoginDTO = {
      "phone_number": this.phoneNumber,
      "password": this.password,
    }

    this.userService.login(loginDTO).subscribe({
      next: (response: any) => {
        debugger
        // this.router.navigate(['/login']);
      },
      complete: () => {
        debugger
      },
      error: (error: any) => {
        alert(`Cannot login, error: ${error.error}`)
      }
    });
  }
}

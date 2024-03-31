import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenService } from '../service/token.service';
import { UserResponse } from '../responses/user/user.response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  adminComponent: string = 'orders';
  private userResponse?: UserResponse | null;
  ngOnInit(): void {
    this.userResponse = this.userService.getUserResponseFromLocalStorage();
  }
  constructor(private userService: UserService,
    private tokenService: TokenService,
    private router: Router){}
  logout() {
    this.userService.removeUserFromLocalStorage();
      this.tokenService.removeToken();
      this.userResponse = this.userService.getUserResponseFromLocalStorage();    
  }
  showAdminComponent(componentName: string): void {
    this.adminComponent = componentName;
  }
}

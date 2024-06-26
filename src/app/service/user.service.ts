
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerDTO } from '../dtos/user/register.dto';
import { LoginDTO } from '../dtos/user/login.dto';
import { environment } from '../environments/environment';
import { UserResponse } from '../responses/user/user.response';
import { UpdateUserDTO } from '../dtos/user/update.dto';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiRegister = `${environment.apiBaseUrl}/users/register`;
  private apiLogin = `${environment.apiBaseUrl}/users/login`
  private apiUserDetail = `${environment.apiBaseUrl}/users/details`;
  private apiConfig = {
    headers: this.createHeaders(),
  }

  constructor(private http: HttpClient) { }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json',
       'Accept-Language' : 'vi' });
  }

  register(registerDTO: registerDTO): Observable<any> {
    return this.http.post(this.apiRegister, registerDTO, this.apiConfig)
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(this.apiLogin, loginDTO, this.apiConfig);
  }

  getUserDetail(token: string){
    return this.http.post(this.apiUserDetail, {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization: `Bearer ${token}`
      })
    })
  }

  saveUserResponseToLocalStorage(userResponse?: UserResponse){
    try {
      debugger;
      if(userResponse == null || !userResponse){
        return;
      }
      const userResponseJSON = JSON.stringify(userResponse);

      localStorage.setItem('user', userResponseJSON);

      console.log('User Response saved to Local Storage');
    } catch (error) {
      console.error('Error saving user response to local storage: ',error);
    }
  }

  getUserResponseFromLocalStorage(){
    try {
      const userResponseJSON = localStorage.getItem('user');
      const userResponse = JSON.parse(userResponseJSON!);
      if(userResponseJSON == null || userResponseJSON == undefined){
        return null;
      }
      console.log('User response retrived from local storage');
      return userResponse;
    } catch (error) {
      console.log('Error retrieving user response from local storage: ', error); 
    }
  }
  removeUserFromLocalStorage(): void{
    try{
      localStorage.removeItem('user');
      console.log('User data removed from local storage');
    }
    catch(error){
      console.error('Error removing user data from local storage: ', error);
    }
  }

  updateUserDetail(token: String, updatedUserDTO: UpdateUserDTO){
    debugger
    let userResponse = this.getUserResponseFromLocalStorage();
    return this.http.put(`${this.apiUserDetail}/${userResponse?.id}`,updatedUserDTO,{
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization: `Bearer ${token}`
      })
    })
  }
}

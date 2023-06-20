import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  
  login(){
    if(this.email=="admin" && this.password=="admin"){
      alert('Login Successful');
      this.router.navigate(['/adminhome']);
   }
    //else if(this.email=="user" && this.password=="user"){
      else if(this.email=="user" && this.password=="user"){
      alert('Login successful');
       this.router.navigate(['/userhomepage'])
   }
   else {
     alert('Invalid username or password');
    }
  
  }
 

  constructor(private router: Router) {}

 }




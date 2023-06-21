import { loginsignup1 } from './../admin/model/loginsignup1';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../authservices/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice: LoginService,private router: Router) {

  }

  // email!: string;
  // password!: string;
  loginSignUp1: loginsignup1 = new loginsignup1();
  
   login(){
     if(this.loginSignUp1.username=="admin" && this.loginSignUp1.password=="admin"){
       alert('Login Successful');
       this.router.navigate(['/adminhome']);
    }
  //   // //else if(this.email=="user" && this.password=="user"){
  //   //   else if(this.loginSignUp1.username=="user" && this.loginSignUp1.password=="user"){
  //     //alert('Login successful');
  //     const{username,password}=this.loginSignUp1;
  //     this.authservice.loginUser(username,password);
  //      this.router.navigate(['/userhomepage'])
   // }
  // //  else {
  // //    alert('Invalid username or password');
  // //   }
  
   }
 

  

 }




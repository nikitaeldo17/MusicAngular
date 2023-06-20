import { loginsignup1} from './../admin/model/loginsignup1';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../authservices/login.service';
// import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  // constructor(private authservice:LoginService,private route:Router){

  // }
  // loginSignUp1 = {
  //   username: '',
  //   firstname: '',
  //   lastname: '',
  //   password: ''
  // };

  // signup() {
  //   // Code to handle the form submission
  //   if (this.validateForm()) {
  //     console.log(this.loginSignUp1);
  //     // Perform API call or any other action here
  //     console.log('Form submitted successfully!');
  //     console.log('Username:', this.loginSignUp1.username);
  //     console.log('FirstName:', this.loginSignUp1.firstname);
  //     console.log('LastName:', this.loginSignUp1.lastname);
  //     console.log('Password:', this.loginSignUp1.password);
  //     this.gotoLoginPage();
  //   } else {
  //     console.log('Form validation failed.');
  //   }
  // }
  // gotoLoginPage() {
  //   this.route.navigate(['/login']);
  // }
//   validateForm(): boolean {
//     // Perform form validation here
//     // Return true if the form is valid, otherwise false
//     // You can use different validation techniques like checking for required fields, regex patterns, etc.
//     if (
//       this.loginSignUp1.username &&
//       this.loginSignUp1.firstname &&
//       this.loginSignUp1.lastname &&
//       this.loginSignUp1.password
//     ) {
//       return true;
//     }
//     return false;
//   }
// }
  loginSignUp1: loginsignup1 = new loginsignup1();

  constructor(private authservice:LoginService, private router: Router) {}

  signup() {
    this.registerUser();
    console.log(this.loginSignUp1);
  }

  registerUser() {
    this.authservice.registerUser(this.loginSignUp1).subscribe(
      (data) => {
        console.log(this.loginSignUp1);
        this.gotoLoginPage();
      },
      (error) => console.log(error)
    );
  }

  gotoLoginPage() {
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent implements OnInit {

  password:String;
  email:String;
  constructor() { }

   checkLogin(loginForm:NgForm){

     if(loginForm.valid){
       if(this.email=="asmita@gmail.com" && this.password=="Asmita@22"){
        alert("Login Successfull");
         // this.router.navigate(['/loginSuccessLink']); 
       }else{
         alert("Login failed");
         // this.router.navigate(['/loginFailedLink']);
       }}
       else{
          alert("please enter all credentials");

       }
     }

  ngOnInit(): void {
  }

}

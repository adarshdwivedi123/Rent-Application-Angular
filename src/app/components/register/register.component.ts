import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  userRegForm!:FormGroup;


  ngOnInit():void{
    this.setForm();

  }
  constructor(private _register:RegisterService){}  
  setForm(){
    this.userRegForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.min(5)]),
      firstName:new FormControl('',[Validators.required]),
      password1:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
      contact:new FormControl('',[Validators.required ,Validators.min(5)]),

    })

  }
  register(){
    if(this.userRegForm.valid)
    {
    this._register.registerUser(this.userRegForm.value).subscribe(response=>{
      console.log(response);

      this.userRegForm.reset();
      alert(response)
      
      
    })
  }
  else{
         alert("Please Fill  Valid Details"); 
    }

  }
 

}

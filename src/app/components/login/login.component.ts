import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

//its standalone so here we have also declare everthing 
export class LoginComponent {
  loginForm!: FormGroup;


  ngOnInit(): void {
    this.setForm();

  }
  constructor(private router: Router, private loginService: LoginService) { }
  setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }

  submit() {
    if (this.loginForm.value) {
      this.loginService.loginUser(this.loginForm.value).subscribe((res:any) =>{
        localStorage.setItem("firstName",res.result.firstName);
        localStorage.setItem("lastName",res.result.lastName);
        localStorage.setItem("email",res.result.email);
        localStorage.setItem("token",res.result.token);
        localStorage.setItem("id",res.result._id);
        
         this.router.navigate(['dashboard']).then(()=>{
              alert('Login Succesfully');    
         })
        
            
      })  
      
      
    }
  
  

  }

}

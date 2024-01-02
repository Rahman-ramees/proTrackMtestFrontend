import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  [x: string]: any;

  signupForm!:FormGroup;
  responsefrombck!: Object;

  constructor(private formBldr:FormBuilder, private http:HttpClient, private router: Router){}

  ngOnInit(): void {
    this.signupForm = this.formBldr.group({
      userName:['',Validators.required],
      userEmail:['',Validators.required],
      userPassword:['',Validators.required]
    })
  }

  onSubmit(){    
    const userName = this.signupForm.get('userName')
    const userEmail = this.signupForm.get('userEmail')
    const userPass = this.signupForm.get('userPassword')
    const postData = {
      name: userName?.value,
      email: userEmail?.value,
      password: userPass?.value,
    };
    if (userName && userEmail && userPass) {
      this.http.post('http://localhost:3000/signup',postData).subscribe((response)=>{
        this.responsefrombck = response
        console.log('Signup successful',response);
        // this.router.navigate(['/'])
        localStorage.setItem('token','user2121')
      })
    } else {
      console.log('Signup not successful:', this.responsefrombck);
    }

  }
}

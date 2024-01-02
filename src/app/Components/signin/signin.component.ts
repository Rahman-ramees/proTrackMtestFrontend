import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signinForm!: FormGroup;
  responsefrombck!: Object;

  constructor(private formBldr: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.formBldr.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    })
  }

  onSubmit() {
    const userEmail = this.signinForm.get('userEmail')
    const userPass = this.signinForm.get('userPassword')
    const postData = {
      email: userEmail?.value,
      password: userPass?.value,
    };
    if (userEmail && userPass) {
      this.http.post('http://localhost:3000/signin', postData).subscribe((response) => {
        this.responsefrombck = response
        console.log('Signup successful', response);
        // this.router.navigate(['/'])
        localStorage.setItem('token', 'user2121')
      })
    } else {
      console.log('Signup not successful:', this.responsefrombck);
    }

  }
}

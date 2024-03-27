import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private http: HttpClient,
    private router: Router
    ) {
    this.registerForm = this.formBuilder.group({
      ho: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
  //   if (this.registerForm.valid) {
  //     const email = this.registerForm.get('email')?.value;
  
  //     this.authService.checkExistingUser(email).subscribe(exists => {
  //       if (!exists) {
  //         this.authService.postRegister(this.registerForm.value).subscribe(res =>{
            
            
  //           this.registerForm.reset();
  //           this.router.navigate(['/auth/login'])
  //         });
  //       } else {
          
  //       }
  //     });
  //   } else {
     
  //   }
  // }
  }
}

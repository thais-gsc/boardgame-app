import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public faGoogle = faGoogle;
  public faFacebook = faFacebook;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmitButtonClicked() {
    this.router.navigate(['home']);
  }

  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
}

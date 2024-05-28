import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AppStateInteface } from 'src/app/shared/types/appState.interface';
import { BackendErrorsInteface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$ !:Observable<boolean>;
  backendErros$!:Observable<BackendErrorsInteface | null>;
  constructor(private fb: FormBuilder, private store: Store<AppStateInteface>) {}
  ngOnInit(): void {
    this.initializeFrom();
    this.initializeValues();
  }

  initializeValues():void{
    this.isSubmitting$=this.store.pipe(
      select(isSubmittingSelector)
    )
    this.backendErros$=this.store.pipe(
      select(validationErrorsSelector)
    )
  }

  initializeFrom(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    const request:LoginRequestInterface={
      user:this.form.value
    }
    this.store.dispatch(loginAction({request}));
  }
}

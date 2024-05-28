import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AppStateInteface } from 'src/app/shared/types/appState.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInteface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    const request:RegisterRequestInterface={
      user:this.form.value
    }
    this.store.dispatch(registerAction({request}));
  }
}

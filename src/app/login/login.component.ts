import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Email = new FormControl();
  password = new FormControl();

  submitlist: any = [];

  addsubmit() {
    const newemail = this.Email.value;
    this.submitlist.push(newemail);

    const newpassword = this.password.value;
    this.submitlist.push(newpassword);

    this.Email.setValue('');
    this.password.setValue('');

  }

}

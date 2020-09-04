import { Component } from '@angular/core';
import { FormControl }  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  username = new FormControl();
  email = new FormControl();
  password = new FormControl();
  confirmpassword = new FormControl();

  registerlist: any = [];

  addregister() {

    const newusername = this.username.value;
     
    const newemail = this.email.value;
     
    const newpassword = this.password.value;
    const newconfirmpassword = this.confirmpassword.value;

    if (newpassword === newconfirmpassword) {

      this.registerlist.push(newusername);
      this.registerlist.push(newemail);
      this.registerlist.push(newpassword)
      this.registerlist.push(newconfirmpassword);
      } 
      else {
        alert("Password does not match");
       
          }
      

      this.username.setValue('');
      this.email.setValue('');
      this.password.setValue('');
      this.confirmpassword.setValue('');
  }

  
}

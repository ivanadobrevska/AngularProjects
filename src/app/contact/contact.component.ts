import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 contactForm: FormGroup;

  constructor() {
    this.contactForm=new FormGroup({
      'firstName': new FormControl('', [Validators.required]), 
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
   
  }

  onSubmit() {
    alert("FirstName: "+this.contactForm.value.firstName+", LastName: "+this.contactForm.value.lastName)
  }

}

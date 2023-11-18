import { Component,OnInit,ViewChild } from '@angular/core';
import { FormControl,FormGroup, Validators, AbstractControl, ValidatorFn,FormBuilder,FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {
  title = 'New post';

  @ViewChild(FormGroupDirective) myForm:any;

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
  ) { }

 ngOnInit() {
    
  this.form = this.fb.group(
    {
      title : ['', [Validators.required, this.whitespaceValidator(),this.maxLengthValidator(100)]],
      body : ['', [Validators.required, this.whitespaceValidator(),this.maxLengthValidator(2000)]],
    }
  )
 }

 onSubmit(){
  this.submitted = true;
  if (this.form.valid) {
    console.log('Form submitted with values:', this.form.value);
    this.cancel();
  } else {
    console.log('Form is invalid. Please correct errors.');
   
  }
 
}

cancel(){
  this.resetForm();
}

private resetForm() {
  this.submitted = false;
 /* this.form.reset();
 
  Object.keys(this.form.controls).forEach(key => {
    const control = this.form.get(key);
    if (control) {
      control.setErrors(null);
      control.updateValueAndValidity();
    }
  });
*/
  this.myForm.resetForm();
}

 whitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.trim() === '') {
      return { 'whitespace': true };
    }
    return null;
  };
}

maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Validators.maxLength(maxLength)(control);
  };
} 

}
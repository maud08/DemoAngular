import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MinLengthValidator } from './validators/MinLengthValidators';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  myFormGroup : FormGroup;
  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.myFormGroup = this._builder.group({
      myControl1 : [null,[this.Min6Char(), Validators.required]],
      myControl2 : [null,[MinLengthValidator(6), Validators.required]]
    })
  }

  Min6Char() : ValidatorFn | null{
    return (control : FormControl) =>{
      let val : string = control.value;
      if(val == null){
        return null
      }
      if(val.length <6){
        return {TropCourError : 'Il doit y avoir 6 caractères'}
      }
      return null;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  myFormGroup : FormGroup;

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.myFormGroup = this._formBuilder.group(
      {
        'control1': [null,Validators.required],
        'control2' : [null, Validators.email],

        'myArray' : this._formBuilder.array([])
      }
    )

    this.getArray().push(new FormControl(null,null));
    this.getArray().push(new FormControl(null,null));
    console.log(this.myFormGroup.controls);
  }

  SubmitForm(){
    let values = this.myFormGroup.value;
    let va1 = values["control1"];
    let va2 = values["control2"];
    console.log(va1+ " "+va2)

    let arrayValues = values['myArray'];
    console.log(arrayValues)
  }

  getArray() : FormArray{
    //caste consider comme un formArray
    return this.myFormGroup.get('myArray') as FormArray
  }

}

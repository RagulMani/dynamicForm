import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormArray, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicForm';

  words2 = [{ value: 'word1' }, { value: 'word2' }, { value: 'word3' }, { value: '' }];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  add() {
    this.words2.push({ value: '' });
  }
  remove(data){
    // const index: number = this.words2.indexOf(data);
    // if (index !== -1) {
    //     return this.words2.splice(index, 1);
    // }
    return this.words2.removeAt(data);
  }


}

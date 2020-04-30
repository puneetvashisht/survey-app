import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
      selector: 'app-form',
      templateUrl: './form.component.html',
      styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

      surveyForm: FormGroup;

      get options() {
            var op = this.surveyForm.get('options') as FormArray;
            var v = { "text": op, count: 0 };
            console.log("GET:" + op);

            return op;
      }
      h: any;
      addoptions() {
            console.log("VVVVVVVVVVVVVVVV" + this.fb.control(''));
            this.options.push(this.fb.control(''));
            this.addoptionscount(0);
      }
      get optionscount() {
            return this.surveyForm.get('optionscount') as FormArray;
      }

      addoptionscount(n: number) {
            this.optionscount.push(this.fb.control(n));
      }

      surveyContainer: any;

      constructor(private fb: FormBuilder, private surveyService : SurveyService) { }
      ngOnInit(): void {
            count: 0;



            this.surveyForm = this.fb.group({
                  surveyName: ['', Validators.required],
                  question_text: ['', Validators.required],
                  options: this.fb.array([{}]),
                  optionscount: this.fb.array([2])



            });
      }


      onSubmit() {
            console.log(this.surveyForm.value);
            console.log("XXXXXXXXXXXXXXXXXXXXXXX");
            console.log(this.surveyContainer);
            let choices =  []
            this.surveyForm.value.options.forEach((option)=>{
                  var choice = {text: ""}
                  choice.text = option
                  choices.push(choice)
            })
            console.log(choices)
            var surveyObj = {"text": this.surveyForm.value.question_text, "choices":choices }
            console.log(surveyObj)
            this.surveyService.addSurvey(surveyObj)
            .subscribe((res)=> {
                  console.log(res);
            })


      }





}

import { Component, OnInit } from '@angular/core';



import { SurveyService } from 'src/app/services/survey.service';
import { Question } from 'src/app/models/question';
import { Survey} from 'src/app/models/survey';
import { Choice} from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  surveys: Array<Survey>=[]
  choices: Array<Choice>=[]
  surveyName : string;
  count: number;
  question: string;
  

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.surveyService.fetchAllSurveys()
  //   .subscribe((res:Array<Survey>)=> {
  //     console.log(res);
  //     this.surveys = res;
      
  //   })
    
  // }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('name'));
      this.surveyName = params.get("name");
      console.log(this.surveyName);
    })
    this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
      this.question = res.question;
      this.choices = res.choices;
      })

}

incrementCount(choice_text:string){
   


}



}

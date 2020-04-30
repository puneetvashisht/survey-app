import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';
import { Choice } from '../models/choice';

const baseUrl = 'http://localhost:3000/survey/';
const choiceUrl='http://localhost:8000/api/choice';
const cloudUrl = 'https://us-central1-test-survey-app-275015.cloudfunctions.net/function-2/users';
const cloudUrl1='https://us-central1-domshom-web-273102.cloudfunctions.net/first-function/users';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {

  surveys:Array<Survey>=[]
  choices:Array<Choice>=[]
  
  

  constructor(private http: HttpClient) {

   }

   fetchAllSurveys(){
    return this.http.get(baseUrl);
   }

   addSurvey(survey: any){
     return this.http.post(baseUrl, survey);
   }

   fetchAllOptions(surveyName:string){
    return this.http.get(baseUrl+surveyName);
  }

  incrementCount(count: number){
    this.http.put(choiceUrl,count);

  }

   
}



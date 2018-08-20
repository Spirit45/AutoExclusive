import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from './car/car.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  plate:string;
  order:string='!year';
  item:any;
  cars:Car [];
  token: string;
  registerForm: FormGroup;
  localStorage:any;

  constructor(
      private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    let localStorageItem=JSON.parse(localStorage.getItem("cars"));
    this.cars=localStorageItem==null?[]:localStorageItem;

    this.registerForm=this.formBuilder.group({
      name:['',[Validators.required]],
      year:[null,[Validators.required]],
      plate:['',[Validators.required, Validators.pattern('^[а-яА-Я]{1}[0-9]{3}[а-яА-Я]{2}[0-9]{2,3}$')]]
    });

    this.item=[
      {value: 'year', display: 'По возрастанию года выпуска'},
      {value: '!year', display: 'По убыванию года выпуска'}
    ]
  }


  save (): void{
    this.cars.push(this.registerForm.value);
    localStorage.setItem('cars', JSON.stringify(this.cars));
    this.registerForm.reset();
  }

  deleteCar (i){
    this.cars.splice(i,1);
    localStorage.setItem('cars', JSON.stringify(this.cars));

  }
  
}



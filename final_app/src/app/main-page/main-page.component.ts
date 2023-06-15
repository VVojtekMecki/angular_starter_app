import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
    console.log(this.weatherSearchForm.value);
    }
    }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }
}

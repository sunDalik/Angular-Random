import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayBlockComponent } from './weather-display-block.component';

describe('WeatherDisplayBlockComponent', () => {
  let component: WeatherDisplayBlockComponent;
  let fixture: ComponentFixture<WeatherDisplayBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDisplayBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDisplayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

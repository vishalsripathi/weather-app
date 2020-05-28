import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPanelMainComponent } from './weather-panel-main.component';

describe('WeatherPanelMainComponent', () => {
  let component: WeatherPanelMainComponent;
  let fixture: ComponentFixture<WeatherPanelMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPanelMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPanelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

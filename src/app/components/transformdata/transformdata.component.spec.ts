import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformdataComponent } from './transformdata.component';

describe('TransformdataComponent', () => {
  let component: TransformdataComponent;
  let fixture: ComponentFixture<TransformdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

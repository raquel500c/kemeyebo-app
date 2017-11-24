import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOutfitComponent } from './list-outfit.component';

describe('ListOutfitComponent', () => {
  let component: ListOutfitComponent;
  let fixture: ComponentFixture<ListOutfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOutfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

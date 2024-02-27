import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyContentComponent } from './dummy-content.component';

describe('DummyContentComponent', () => {
  let component: DummyContentComponent;
  let fixture: ComponentFixture<DummyContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyContentComponent]
    });
    fixture = TestBed.createComponent(DummyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

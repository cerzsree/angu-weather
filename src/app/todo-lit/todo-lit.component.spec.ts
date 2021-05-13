import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLitComponent } from './todo-lit.component';

describe('TodoLitComponent', () => {
  let component: TodoLitComponent;
  let fixture: ComponentFixture<TodoLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

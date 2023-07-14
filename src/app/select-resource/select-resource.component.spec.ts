import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectResourceComponent } from './select-resource.component';

describe('SelectResourceComponent', () => {
  let component: SelectResourceComponent;
  let fixture: ComponentFixture<SelectResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectResourceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

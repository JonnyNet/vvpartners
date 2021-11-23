import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ErrorService } from '../../services/error.service';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [
        ErrorService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', fakeAsync(() => {
    const service = TestBed.inject(ErrorService);
    service.chageStateAlert({
      type: 'test',
      title: 'test',
      message: 'test'
    });
    tick(100);
    expect(component.title).toEqual('test');
  }));
});

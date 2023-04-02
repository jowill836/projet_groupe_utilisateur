import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RestapiService } from '../../restapi.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let restapiService: RestapiService;
  let router: Router;

  beforeEach(async () => {
    const restapiServiceStub = {
      getUsr: () => of([{}]),
    };

    const routerStub = {
      navigate: (path: string[]) => {},
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: RestapiService, useValue: restapiServiceStub },
        { provide: Router, useValue: routerStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    restapiService = TestBed.inject(RestapiService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call connect()', () => {
    spyOn(component, 'connect');
    component.connect();
    expect(component.connect).toHaveBeenCalled();
  });
});

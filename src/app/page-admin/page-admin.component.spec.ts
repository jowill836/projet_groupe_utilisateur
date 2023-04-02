import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAdminComponent } from './page-admin.component';
import { RestapiService } from '../restapi.service';
import { of } from 'rxjs';

describe('PageAdminComponent', () => {
  let component: PageAdminComponent;
  let fixture: ComponentFixture<PageAdminComponent>;
  let restapiService: RestapiService;

  beforeEach(async () => {
    const restapiServiceStub = {
      getConfiguration: () => of([{}]),
      putConfiguration: (data: any) => of({}),
    };

    await TestBed.configureTestingModule({
      declarations: [PageAdminComponent],
      providers: [
        { provide: RestapiService, useValue: restapiServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdminComponent);
    component = fixture.componentInstance;
    restapiService = TestBed.inject(RestapiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getConfiguration on ngOnInit', () => {
    spyOn(component, 'getConfiguration');
    component.ngOnInit();
    expect(component.getConfiguration).toHaveBeenCalled();
  });

  it('should call updateConfiguration()', () => {
    spyOn(component, 'updateConfiguration');
    component.updateConfiguration();
    expect(component.updateConfiguration).toHaveBeenCalled();
  });

  it('should call getNbGroupes()', () => {
    spyOn(component, 'getNbGroupes');
    component.getNbGroupes(10);
    expect(component.getNbGroupes).toHaveBeenCalled();
  });
});

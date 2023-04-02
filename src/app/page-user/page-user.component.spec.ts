import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { PageUserComponent } from './page-user.component';
import { of } from 'rxjs';

describe('PageUserComponent', () => {
  let component: PageUserComponent;
  let fixture: ComponentFixture<PageUserComponent>;
  let restapiService: RestapiService;

  beforeEach(async () => {
    const restapiServiceStub = {
      getUsrbyId: (id: any) => of({}),
      getConfiguration: () => of([{}]),
      getGrp: () => of([]),
      getmyGrp: (usr: any) => of([]),
      createGrp: (data: any) => of({}),
      updateUsr: (data: any) => of({}),
      delGrp: (grpid: any) => of({}),
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PageUserComponent],
      providers: [
        { provide: RestapiService, useValue: restapiServiceStub },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 1 }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageUserComponent);
    component = fixture.componentInstance;
    restapiService = TestBed.inject(RestapiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsrById on ngOnInit', () => {
    spyOn(component, 'getUsrById');
    component.ngOnInit();
    expect(component.getUsrById).toHaveBeenCalled();
  });

  it('should call getConfiguration on ngOnInit', () => {
    spyOn(component, 'getConfiguration');
    component.ngOnInit();
    expect(component.getConfiguration).toHaveBeenCalled();
  });

  it('should call getGrpList on ngOnInit', () => {
    spyOn(component, 'getGrpList');
    component.ngOnInit();
    expect(component.getGrpList).toHaveBeenCalled();
  });

  it('should call placementauto()', () => {
    spyOn(component, 'placementauto');
    component.placementauto();
    expect(component.placementauto).toHaveBeenCalled();
  });

  it('should call newgrp()', () => {
    spyOn(component, 'newgrp');
    component.newgrp();
    expect(component.newgrp).toHaveBeenCalled();
  });

  it('should call getInGrp()', () => {
    spyOn(component, 'getInGrp');
    component.getInGrp(1);
    expect(component.getInGrp).toHaveBeenCalled();
  });

  it('should call getOutGrp()', () => {
    spyOn(component, 'getOutGrp');
    component.getOutGrp();
    expect(component.getOutGrp).toHaveBeenCalled();
  });

  it('should call getUsrById()', () => {
    spyOn(component, 'getUsrById');
    component.getUsrById(1);
    expect(component.getUsrById).toHaveBeenCalled();
  });

  it('should call getGrpList()', () => {
    spyOn(component, 'getGrpList');
    component.getGrpList();
    expect(component.getGrpList).toHaveBeenCalled();
  });

  it('should call getConfiguration()', () => {
    spyOn(component, 'getConfiguration');
    component.getConfiguration();
    expect(component.getConfiguration).toHaveBeenCalled();
  });


   it('should call derniergrp()', () => {
    spyOn(component, 'derniergrp');
    component.derniergrp();
    expect(component.derniergrp).toHaveBeenCalled();
  });

  it('should call myGrp()', () => {
    spyOn(component, 'myGrp');
    component.myGrp();
    expect(component.myGrp).toHaveBeenCalled();
  });

  it('should call getmygrp()', () => {
    spyOn(component, 'getmygrp');
    component.getmygrp();
    expect(component.getmygrp).toHaveBeenCalled();
  });

  it('should call delGrp()', () => {
    spyOn(component, 'delGrp');
    component.delGrp(1);
    expect(component.delGrp).toHaveBeenCalled();
  });
});

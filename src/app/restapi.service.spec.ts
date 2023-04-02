import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestapiService } from './restapi.service';

describe('RestapiService', () => {
  let service: RestapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestapiService],
    });
    service = TestBed.inject(RestapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('authLogin() should POST and return data', () => {
    const mockCredentials = { username: 'test', password: 'test123' };
    const mockResponse = { key: '9af792e30631062d4cc44e63bb29705ee15025b5' };

    service.authLogin(mockCredentials).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.authUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });

  it('getConfiguration() should GET and return data', () => {
    const mockResponse = { id: 1, name: 'testConfig' };

    service.getConfiguration().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.configurationUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('putConfiguration() should PATCH and return data', () => {
    const mockData = { id: 1, name: 'updatedConfig' };
    const mockResponse = { id: 1, name: 'updatedConfig' };

    service.putConfiguration(mockData).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.configurationUrl + mockData.id + '/');
    expect(req.request.method).toEqual('PATCH');
    req.flush(mockResponse);
  });

  it('getGrp() should GET and return data', () => {
    const mockResponse = [{ id: 1, name: 'testGroup' }];

    service.getGrp().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.grpUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('delGrp() should DELETE and return data', () => {
    const grpId = 1;
    const mockResponse = { status: 'success' };

    service.delGrp(grpId).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.grpUrl + grpId + '/');
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockResponse);
  });

  it('createGrp() should POST and return data', () => {
    const mockData = { name: 'newGroup' };
    const mockResponse = { id: 2, name: 'newGroup' };

    service.createGrp(mockData).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(service.grpUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });

});
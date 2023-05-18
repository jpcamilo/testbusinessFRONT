import { UserService } from "../service/UserService.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: []
      });
      service = TestBed.inject(UserService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    it('Creación e inicialización', () => {
      expect(service).toBeTruthy();
    });
  
    it('Get All Users', ()=> {
      service.getListUsers().subscribe(users => {
        expect(users).toBeTruthy();
        });
    });
    
    it('Get a User', ()=> {
        service.getUser("1").subscribe(user => {
          expect(user).toBeTruthy();
          });
      });

  });
  
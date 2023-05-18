import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { User } from '../model/User';
import { UserService } from '../service/UserService.service';



describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockUser : User = {id :1, name:"pepito", salary:10, age: 20, salary_annual:120};
  const mockListUsr : User[]=[{id :1, name:"pepito", salary:10, age: 20, salary_annual:120},{id :1, name:"pepito", salary:10, age: 20, salary_annual:120}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
    
    spyOn(TestBed.inject(UserService), 'getListUsers').and.returnValue(of(mockListUsr));
    spyOn(TestBed.inject(UserService), 'getUser').and.returnValue(of(mockUser));

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the table was displayed with all users', () => {
    component.search()
    expect(component.listUsr).toBeTruthy();
  });

  it('the table was displayed with a user', () => {
    component.formUser.controls['idUser'].setValue(25);
    component.search()
    expect(component.listUsr).toBeTruthy();
    expect(component.listUsr.find(user=>user.name === 'pepito')).toBeTruthy();
  });

});
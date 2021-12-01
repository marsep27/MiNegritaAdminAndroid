import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarMeditacionPage } from './agregar-meditacion.page';

describe('AgregarMeditacionPage', () => {
  let component: AgregarMeditacionPage;
  let fixture: ComponentFixture<AgregarMeditacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMeditacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarMeditacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

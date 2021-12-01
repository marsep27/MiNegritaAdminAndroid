import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarEventoPage } from './modificar-evento.page';

describe('ModificarEventoPage', () => {
  let component: ModificarEventoPage;
  let fixture: ComponentFixture<ModificarEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarHorariosPage } from './modificar-horarios.page';

describe('ModificarHorariosPage', () => {
  let component: ModificarHorariosPage;
  let fixture: ComponentFixture<ModificarHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarHorariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

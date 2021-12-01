import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarNumeroCuentaPage } from './modificar-numero-cuenta.page';

describe('ModificarNumeroCuentaPage', () => {
  let component: ModificarNumeroCuentaPage;
  let fixture: ComponentFixture<ModificarNumeroCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarNumeroCuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarNumeroCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

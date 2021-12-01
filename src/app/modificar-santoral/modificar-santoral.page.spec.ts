import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarSantoralPage } from './modificar-santoral.page';

describe('ModificarSantoralPage', () => {
  let component: ModificarSantoralPage;
  let fixture: ComponentFixture<ModificarSantoralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarSantoralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarSantoralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

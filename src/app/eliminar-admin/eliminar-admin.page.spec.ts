import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarAdminPage } from './eliminar-admin.page';

describe('EliminarAdminPage', () => {
  let component: EliminarAdminPage;
  let fixture: ComponentFixture<EliminarAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

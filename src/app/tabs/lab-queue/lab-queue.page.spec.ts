import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabQueuePage } from './lab-queue.page';

describe('LabQueuePage', () => {
  let component: LabQueuePage;
  let fixture: ComponentFixture<LabQueuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabQueuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

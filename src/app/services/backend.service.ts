import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  /**
   * Without ending Backslash
   */
  public baseUrl: string = 'https://covid-testprocess.azurewebsites.net';
  constructor(private httpClient: HttpClient) {}

  getAllNotAssignedAppointments(locations: string[]): Observable<Appointment[]> {
    // let locationsString = "location=65510"
    return this.baseGet<BackendAppointment[]>(`/api/GetAllNotAssigendAppointMents`).pipe(
      map(a => this.addAdditionalPropertiesArray(a))
    );
  }

  updateAppointment(updateA: Appointment): Observable<Appointment> {
    let index = BackendService.appointments.findIndex(a => a.id === updateA.id);
    BackendService.appointments[index] = updateA;
    return of(updateA);
    // return this.baseGet<BackendAppointment>('/api/AddAnAppointmentDate').pipe(
    //   map(a => this.addAdditionalProperties(a))
    // );
  }

  baseGet<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${path}`);
  }

  getAppointmentQueue(): Observable<Appointment[]> {
    return of(this.addAdditionalPropertiesArray(BackendService.appointments));
  }

  public addAdditionalPropertiesArray(user: BackendAppointment[]): Appointment[] {
    return user.map(u => {
      return {
        ...u,
        status: u.riskScore < 300 ? 'green' : u.riskScore < 600 ? 'yellow' : 'red',
        queue: this.getQueue(u)
      };
    });
  }

  public addAdditionalProperties(u: BackendAppointment): Appointment {
    return {
      ...u,
      status: u.riskScore < 300 ? 'green' : u.riskScore < 600 ? 'yellow' : 'red',
      queue: this.getQueue(u)
    };
  }

  private getQueue(u: BackendAppointment): Queue {
    if (u.assigned == false) {
      return Queue.Untriaged;
    }
    if (u.trackingId == null) {
      return Queue.Waiting;
    }
    if (u.testResult == null) {
      return Queue.Lab;
    }
    return Queue.Result;
  }

  public static appointments: BackendAppointment[] = [
    {
      id: '1001',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 500,
      location: '10783'
    },
    {
      id: '1002',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1003',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 300,
      location: '10783'
    },
    {
      id: '1004',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1005',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 700,
      location: '10783'
    },
    {
      id: '1006',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 599,
      location: '10783'
    },
    {
      id: '1007',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 500,
      location: '10783'
    },
    {
      id: '1008',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1009',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1010',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1011',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 300,
      location: '10783'
    },
    {
      id: '1012',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '1013',
      assigned: false,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 700,
      location: '10783'
    },
    {
      id: '2001',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 500,
      location: '10783'
    },
    {
      id: '2002',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '2003',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '2004',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 399,
      location: '10783'
    },
    {
      id: '3001',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      trackingId: '45758678',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 100,
      location: '10783'
    },
    {
      id: '4001',
      assigned: true,
      token: 'Q1VvLFnO10gvfNuzKMcGQ4yK5TLaEWfF',
      trackingId: '3445668576',
      dateToBeInTestcenter: '17:00',
      testcenterAddress: 'Charite',
      riskScore: 600,
      location: '10783',
      testResult: true
    }
  ];
}

export interface BackendAppointment {
  /**
   * @ignore
   */
  id: string;
  token: string;
  assigned: boolean;
  dateToBeInTestcenter: string;
  testcenterAddress: string;
  riskScore: number;
  /**
   * this ist the PLZ
   */
  location: string;
  testResult?: boolean;
  /**
   * Tracking Id for connecting the probe to an assignement
   */
  trackingId?: string;
}

export interface Appointment extends BackendAppointment {
  status: 'red' | 'yellow' | 'green';
  queue: Queue;
}

export enum Queue {
  Untriaged,
  Waiting,
  Lab,
  Result
}

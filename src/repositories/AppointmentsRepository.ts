import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentsDTO {
  provider: string;
  date: Date;
}

class AppoinstmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointent = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointent || null;
  }

  public create({ provider, date }: CreateAppointmentsDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppoinstmentsRepository;

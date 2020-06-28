import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  /**
   * Creates a new repository for appointments.
   */
  constructor() {
    this.appointments = [];
  }

  /**
   * Returns an array with all the appointments.
   */
  public all(): Appointment[] {
    return this.appointments;
  }

  /**
   * Finds an Appointment by the date passed as a parameter.
   * If found, returns the Appointment, otherwise null.
   * @param date key for search
   */
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  /**
   * Creates a new Appointment and returns it.
   * @param CreateAppointmentDTO
   */
  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;

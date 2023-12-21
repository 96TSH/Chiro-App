package entity;

import java.time.LocalDateTime;

public class Booking{
    private int id;
    public LocalDateTime appointmentDateTime;
    private boolean hasCompleted;

    public Booking() {
    }

    public Booking(LocalDateTime appointmentDateTime, boolean hasCompleted) {
        this.appointmentDateTime = appointmentDateTime;
        this.hasCompleted = hasCompleted;
    }

    public Booking(int id, LocalDateTime appointmentDateTime, boolean hasCompleted) {
        this.id = id;
        this.appointmentDateTime = appointmentDateTime;
        this.hasCompleted = hasCompleted;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getAppointmentDateTime() {
        return this.appointmentDateTime;
    }

    public void setAppointmentDateTime(LocalDateTime appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public boolean isHasCompleted() {
        return this.hasCompleted;
    }

    public boolean getHasCompleted() {
        return this.hasCompleted;
    }

    public void setHasCompleted(boolean hasCompleted) {
        this.hasCompleted = hasCompleted;
    }

    public LocalDateTime getBookingDateTime() {
        return null;
    }

}

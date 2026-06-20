import { Router } from "express";
import { AppointmentCreate, DeleteAppoint, ShowAppointments, UpdateAppointment, View } from "../controllers/appointment.js";

const AppointmentRoute = Router() 

AppointmentRoute.get('/ViewAppointment', View)
AppointmentRoute.post('/CreateAppoint', AppointmentCreate)
AppointmentRoute.get('/ShowApppointments', ShowAppointments )
AppointmentRoute.put('/UpdateAppointment/:id', UpdateAppointment)
AppointmentRoute.delete('/DeleteAppointment/:id', DeleteAppoint)


export default AppointmentRoute
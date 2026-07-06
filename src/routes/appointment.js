import { Router } from "express";
import { AppointmentCreate, DeleteAppoint, ShowAppointments, UpdateAppointment, View } from "../controllers/appointment.js";
import { validate } from "../middlewares/validation.js";
import { AppointmentCreateSchema, DeleteAppointmentSchema, ShowAppointmentSchema, UpdateAppointmentSchema } from "../schemas/appointment.schema.js";

const AppointmentRoute = Router() 

AppointmentRoute.get('/ViewAppointment',  View)
AppointmentRoute.get('/ShowApppointments', validate(ShowAppointmentSchema), ShowAppointments )
AppointmentRoute.post('/CreateAppoint',validate(AppointmentCreateSchema), AppointmentCreate)
AppointmentRoute.put('/UpdateAppointment/:id', validate(UpdateAppointmentSchema), UpdateAppointment)
AppointmentRoute.delete('/DeleteAppointment/:id', validate(DeleteAppointmentSchema), DeleteAppoint)


export default AppointmentRoute
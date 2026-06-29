import { Router } from "express";
import { DoctorCreate, DoctorDelete, DoctorView, EditDoctor, FindDoctor } from "../controllers/doctorController.js";
import { validate } from "../middlewares/validation.js";
import { CreateDoctorSchema, UpdateDoctorSchema, DoctorFindSchema, DoctorDeleteSchema } from "../schemas/doctor/doctor.schema.js";

const DoctorRoute = Router()

DoctorRoute.get('/doctorview', DoctorView)
DoctorRoute.get('/doctorview/:id', validate(DoctorFindSchema), FindDoctor)
DoctorRoute.post('/doctor',validate(CreateDoctorSchema), DoctorCreate)
DoctorRoute.put('/editdoctor/:id', validate(UpdateDoctorSchema), EditDoctor)
DoctorRoute.delete('/doctorview/:id',validate(DoctorDeleteSchema), DoctorDelete)


export default DoctorRoute
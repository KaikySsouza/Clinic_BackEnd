import { Router } from "express";
import { DoctorCreate, DoctorDelete, DoctorView, EditDoctor, FindDoctor } from "../controllers/doctorController.js";

const DoctorRoute = Router()

DoctorRoute.get('/doctorview', DoctorView)
DoctorRoute.get('/doctorview/:id', FindDoctor)
DoctorRoute.post('/doctor', DoctorCreate)
DoctorRoute.put('/editdoctor/:id', EditDoctor)
DoctorRoute.delete('/doctorview/:id', DoctorDelete)


export default DoctorRoute
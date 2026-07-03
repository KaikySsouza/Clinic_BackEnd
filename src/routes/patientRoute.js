import { Router } from "express";
import { View, PacientCreate, PacientList, PacientListAll, Deletepacient } from "../controllers/patientController.js";
import { validate } from "../middlewares/validation.js";
import { PatientSchema, ViewPatientSchema } from "../schemas/patient.schema.js";
const PacientRoute = Router();

 
PacientRoute.get('/patients', View);
PacientRoute.get('/patients/list/:id',validate(ViewPatientSchema), PacientList);
PacientRoute.get('/patients/list', PacientListAll);
PacientRoute.post('/patients', validate(PatientSchema), PacientCreate);
PacientRoute.delete('/patients/delete/:id', validate(ViewPatientSchema), Deletepacient);

export default PacientRoute;

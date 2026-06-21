import { Router } from "express";
import { View, PacientCreate, PacientList, PacientListAll, Deletepacient } from "../controllers/patientController.js";
const PacientRoute = Router();

 
PacientRoute.get('/patients', View);
PacientRoute.get('/patients/list/:id', PacientList);
PacientRoute.get('/patients/list', PacientListAll);
PacientRoute.post('/patients', PacientCreate);
PacientRoute.delete('/patients/delete/:id', Deletepacient);

export default PacientRoute;

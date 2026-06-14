import { Router } from "express";
import { View, PacientCreate, PacientList, PacientListAll, Deletepacient } from "../controllers/patientController.js";
const route = Router();

 
route.get('/patients', View);
route.post('/patients', PacientCreate);
route.get('/patients/list/:id', PacientList);
route.get('/patients/list', PacientListAll);
route.delete('/patients/delete/:id', Deletepacient);

export default route;

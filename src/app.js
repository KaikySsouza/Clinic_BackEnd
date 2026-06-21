import express from "express";
import PacientRoute from "./routes/patientRoute.js";
import DoctorRoute from "./routes/doctorRoute.js";
import AppointmentRoute from "./routes/appointment.js";
import bodyParser from "body-parser";
import InventoryRoute from "./routes/inventoryRoute.js";
import BillingsRouter from "./routes/BillingRoute.js";
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api", PacientRoute, DoctorRoute, InventoryRoute, BillingsRouter);
app.use("/appointment", AppointmentRoute);

export default app;

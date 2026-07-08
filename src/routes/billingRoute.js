import { Router } from "express";
import app from "../app.js";
import { CreateBillings, DeleteBillings, FindByBillings, UpdateBillings, ViewBillings } from "../controllers/billingsController.js";
import { validate } from "../middlewares/validation.js";
import { CreateBillingsSchema, DeleteBillingsSchema, FindByBillingsSchema } from "../schemas/billing.schema.js";
import { UpdateAppointmentSchema } from "../schemas/appointment.schema.js";

const BillingsRouter = Router()


BillingsRouter.get('/viewbilligs', ViewBillings)
BillingsRouter.get('/findbybilling/:id', validate(FindByBillingsSchema), FindByBillings)
BillingsRouter.post('/createbillings', validate(CreateBillingsSchema), CreateBillings)
BillingsRouter.put('/updatebillings/:id', validate(UpdateAppointmentSchema), UpdateBillings)
BillingsRouter.delete('/deletebillings/:id', validate(DeleteBillingsSchema), DeleteBillings)

export default BillingsRouter
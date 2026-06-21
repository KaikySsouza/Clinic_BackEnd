import { Router } from "express";
import app from "../app.js";
import { CreateBillings, DeleteBillings, FindByBillings, UpdateBillings, ViewBillings } from "../controllers/billingsController.js";

const BillingsRouter = Router()


BillingsRouter.get('/viewbilligs', ViewBillings)
BillingsRouter.get('/findbybilling/:id', FindByBillings)
BillingsRouter.post('/createbillings', CreateBillings)
BillingsRouter.put('/updatebillings/:id', UpdateBillings)
BillingsRouter.delete('/deletebillings/:id', DeleteBillings)

export default BillingsRouter
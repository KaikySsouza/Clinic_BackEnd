import { Router } from "express";
import { ViewInventory, CreateNewInventory, ShowInventory, SearchInventory, UpdateInventory, DeleteItem } from "../controllers/inventoryController.js";


const InventoryRoute = Router()


InventoryRoute.get('/inventory', ViewInventory)
InventoryRoute.get('/showinventory', ShowInventory)
InventoryRoute.get('/searchinventory/:id', SearchInventory)
InventoryRoute.post('/newinventory', CreateNewInventory)
InventoryRoute.put('/updateinventory/:id', UpdateInventory)
InventoryRoute.delete('/deleteitem/:id', DeleteItem)

export default InventoryRoute
import app from "../app.js";
import { where } from "sequelize";
import db from "../models/index.cjs";
import bodyParser from "body-parser";
import inventory from "../models/inventory.cjs";


const { Inventory } = db


export const ViewInventory = (req, res) => {
    res.send({message: 'Adicione coisas ao inventario'})
}


export const CreateNewInventory = async (req, res) => {
    const {itemName, quantity, expiration_date} = req.body
    try {
        const inventory = await Inventory.create({
            itemName, 
            quantity, 
            expiration_date,
        })
       await res.status(200).json(inventory)
    }catch(error) {
       await res.status(400).json({error: error.message})
    }
}


export const ShowInventory = async ( req, res ) => {
    try { 
    const inventory = await Inventory.findAll()
    await res.status(200).json(inventory)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
    
}

export const SearchInventory = async (req, res) => {
    try {
        const inventory =  await Inventory.findByPk(req.params.id)
       await res.status(200).json(inventory)
    }catch(error) {
      await  res.status(400).json({error: error.message})
    }
}


export const UpdateInventory = async (req, res) => {
        const {itemName, quantity, expiration_date} = req.body
    try {
        const inventory = await Inventory.update({  
            
            itemName, 
            quantity, 
            expiration_date,
        
        }, {where:{id: req.params.id }, returning: true})
       await res.status(200).json(inventory)
}catch(error){
    res.status(400).json(inventory)
}
}

export const DeleteItem = async (req, res) => {

    try {
        const item = await Inventory.destroy({where: {id: req.params.id}, returning: true})
       await res.status(200).json(item)
    }catch(error){
      await res.status(400).json(item)
    }

    }

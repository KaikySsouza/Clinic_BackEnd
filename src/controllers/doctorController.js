import app from "../app.js";
import bodyParser from "body-parser";
import db from "../models/index.cjs";
import { where } from "sequelize";

const { Doctor } = db

export const DoctorView = async (req, res) => {
    try {
        const doctor = await Doctor.findAll()
        res.status(200).json(doctor)
        res.send(doctor)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const DoctorCreate = async (req, res) => {
    const {firstName, lastName, email, schedule} = req.body
    try {
     const doctor = await Doctor.create({
      firstName,
      lastName,
      email,
      schedule,
     })
     await res.status(200).json(doctor)
    }catch(error) {
        await res.status(400).json({error: error.mesage})
    }
}


export const FindDoctor = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id)  
      await  res.status(200).json(doctor)
    }catch(error) {
      await  res.status(400).json({error: error.message})
    }
}


export const EditDoctor = async (req, res) => {
    const {firstName, lastName, email, schedule} = req.body
    try {
        const doctor = await Doctor.update(
            {
    firstName,
      lastName,
      email,
      schedule,  
            },
           { where: { id: req.params.id },
    returning: true}
        )   
        await res.status(200).json(doctor)
    }catch(error) {
        await res.status(400).json({error: error.message})
    }
}

export const  DoctorDelete = async (req, res) => {
   try{ const doctor = await Doctor.destroy({where: {id: req.params.id}, returning: true})
   
    await res.status(200).json(doctor)
    }catch(error) { 
        res.status(400).json({error: error.message})
    }
}
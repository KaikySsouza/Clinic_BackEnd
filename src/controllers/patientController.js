import app from "../app.js";
import bodyParser from "body-parser";
import db from "../models/index.cjs";
import { where } from "sequelize";

const { Patient } = db;

console.log(Patient);
export const View = async (req, res) => {
  await res.send("Hello World");
};

export const PacientCreate = async (req, res) => {
  const { firstName, lastName, email, dob, gender, adress, phone } = req.body;
  try {
    const patient = await Patient.create({
      firstName,
      lastName,
      email,
      dob,
      gender,
      adress,
      phone,
    });
    await res.status(201).json(patient);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

export const PacientList = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    await res.status(200).json(patient);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

export const PacientListAll = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    await res.status(200).json(patients);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

export const Deletepacient = async (req, res) => {
  try {
    const patient = await Patient.destroy({ where: { id: req.params.id } });
    await res.status(200).json(patient);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

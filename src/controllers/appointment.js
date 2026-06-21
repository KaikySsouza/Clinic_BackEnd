import app from "../app.js";
import db from "../models/index.cjs";
import bodyParser from "body-parser";
import { where } from "sequelize";

const { Appointment } = db;

export const View = (req, res) => {
  res.send({ message: "Realize seu registro!" });
};

export const AppointmentCreate = async (req, res) => {
  const { patientId, doctorId, appointmentDate, status } = req.body;

  try {
    const appoint = await Appointment.create({
      patientId,
      doctorId,
      appointmentDate,
      status,
    });
    await res.status(200).json(appoint);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

export const ShowAppointments = async (req, res) => {
  try {
    const appoint = await Appointment.findAll();
    await res.status(200).json(appoint);
  } catch (error) {
    await res.send(400).json({ error: error.message });
  }
};

export const UpdateAppointment = async (req, res) => {
  const { patientId, doctorId, appointmentDate, status } = req.body;
  try {
    const appoint = await Appointment.update(
      {
        patientId,
        doctorId,
        appointmentDate,
        status,
      },
      { where: { id: req.params.id }, returning: true },
    );
    await res.status(200).json(appoint);
  } catch (error) {
    await res.send(400).json({ error: error.message });
  }
};

export const DeleteAppoint = async (req, res) => {
  try {
    const appoint = await Appointment.destroy({
      where: { id: req.params.id },
      returning: true,
    });
    await res.status(200).json(appoint);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

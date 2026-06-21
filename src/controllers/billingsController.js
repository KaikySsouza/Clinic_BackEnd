import db from "../models/index.cjs";
import bodyParser from "body-parser";
import { where } from "sequelize";
import app from "../app.js";

const { Billing } = db;

export const ViewBillings = async (req, res) => {
  res.send("ola");
};

export const FindByBillings = async (req, res) => {
  try {
    const billing = await Billing.findByPk(req.params.id);
    await res.status(200).json(billing);
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
};

export const CreateBillings = async (req, res) => {
  const { patientId, amount, billingDate, payment_status } = req.body;
  try {
    const billing = await Billing.create({
      patientId,
      amount,
      billingDate,
      payment_status,
    });
    res.status(200).json(billing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const UpdateBillings = async (req, res) => {
  const { patientId, amount, billingDate, payment_status } = req.body;
  try {
    const billing = await Billing.update(
      {
        patientId,
        amount,
        billingDate,
        payment_status,
      },
      { where: { id: req.params.id } },
    );
    res.status(200).json(billing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const DeleteBillings = async (req, res) => {
  try {
    const billings = await Billing.destroy({
      where: { id: req.params.id },
      returning: true,
    });
    res.status(200).json(billings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

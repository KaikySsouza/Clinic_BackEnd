import { z } from "zod";
import appointment from "../models/appointment.cjs";

export const AppointmentCreateSchema = z.object({
  body: z.object({
    patientId: z.coerce.number("Coloque o id do usuario"),
    doctorId: z.coerce.number("coloque o id do doutor"),
    appointmentDate: z.string("Coloque a data do agendamento"),
    status: z.string("Coloque apenas o status").min(1).trim(),
  }),
});

export const ShowAppointmentSchema = z.object({
  query: z.object({
    patientId: z.coerce
      .number("Coloque apenas o id do paciente")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo")
      .optional(),
  }),
});

export const UpdateAppointmentSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("ID Precisa ser um número")
      .int("ID Precisa ser um número inteiro")
      .positive("ID Precisa ser positivo"),
  }),

  body: z.object({
    patientId: z.coerce.number("Coloque apenas o id do paciente").optional(),
    doctorId: z.coerce.number("Coloque apenas o id do doutor").optional(),
    appointmentDate: z.string("Coloque apenas a data").optional(),
    status: z
      .string("Coloque apenas o status do agendamento")
      .min(1)
      .trim()
      .optional(),
  }),
});

export const DeleteAppointmentSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("ID Precisa ser um número")
      .int("ID Precisa ser um número inteiro")
      .positive("ID Precisa ser positivo"),
  }),
});

import { z } from "zod";
import appointment from "../models/appointment.cjs";

export const AppointmentCreateSchema = z.object({
  body: z.object({
    patientId: z.coerce.number(),
    doctorId: z.coerce.number(),
    appointmentDate: z.string(),
    status: z.string().min(1).trim(),
  }),
});

export const ShowAppointmentSchema = z.object({
  query: z.object({
    patientId: z.coerce.number().int().positive().optional(),
  }),
});

export const  UpdateAppointmentSchema = z.object({
    params: z.object({
     id: z.coerce
      .number("ID Precisa ser um número")
      .int("ID Precisa ser um número inteiro")
      .positive("ID Precisa ser positivo"),
    }),

    body: z.object({
    patientId: z.coerce.number().optional(),
    doctorId: z.coerce.number().optional(),
    appointmentDate: z.string().optional(),
    status: z.string().min(1).trim().optional(),
    })
})

export const DeleteAppointmentSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("ID Precisa ser um número")
      .int("ID Precisa ser um número inteiro")
      .positive("ID Precisa ser positivo"),
  }),
});



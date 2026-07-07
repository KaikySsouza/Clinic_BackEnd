import { z } from "zod";

export const CreateDoctorSchema = z.object({
  body: z.object({
    firstName: z.string("Digite o primeiro nome").min(3).max(8).optional(),
    lastName: z.string("Digite o sobre nome").min(3).max(8).optional(),
    email: z.string().email({ message: "Precisa ser email!" }).min(8).max(100),
    schedule: z.string().optional(),
  }),
});

export const UpdateDoctorSchema = z.object({
  params: z.object({
    firstName: z.string("Digite o primeiro nome").min(3).max(8).optional(),
    lastName: z.string("Digite o sobre nome").min(3).max(8).optional(),
    email: z.string().email("Precisa ser email!").min(8).max(20),
    schedule: z.string(),
  }),
});

export const DoctorViewAllSchema = z.object({
  query: z.object({
    firstName: z.string("Digite o nome do item").trim(),
  }),
});

export const DoctorFindSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Digite apenas o ID do usuario")
      .int("O ID precisa ser um número inteiro")
      .positive("O ID precisa ser positivo"),
  }),
});

export const DoctorDeleteSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Digite apenas o ID do usuario")
      .int("O ID precisa ser um número inteiro")
      .positive("O ID precisa ser positivo"),
  }),
});

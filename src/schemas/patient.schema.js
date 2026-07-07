import { z } from "zod";

export const PatientSchema = z.object({
  body: z.object({
    firstName: z.string({ message: "Nome é obrigatório" }),
    lastName: z.string({ message: "Sobrenome é obrigatório" }),
    email: z.string("Digite o email").email({ message: "Email inválido" }),
    dob: z.string({ message: "Data de nascimento é obrigatória" }),
    gender: z.string({ message: "Gênero é obrigatório" }),
    adress: z.string({ message: "Endereço é obrigatório" }),
    phone: z.string({ message: "Telefone é obrigatório" }),
  }),
});

export const ViewPatientSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Digite apenas o ID do usuario")
      .int("O ID precisa ser um número inteiro")
      .positive("O ID precisa ser positivo"),
  }),
});

export const ViewPatientAllSchema = z.object({
  query: z.object({
    firstName: z.string("Digite o nome do item").trim(),
  }),
});

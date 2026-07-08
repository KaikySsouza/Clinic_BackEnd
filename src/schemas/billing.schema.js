import { z } from "zod";

export const CreateBillingsSchema = z.object({
  body: z.object({
    patientId: z.coerce
      .number("Favor digitar apenas o ID do úsurario a ser cobrado")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
    amount: z.string("Precisa ser um texto").trim(),
    billingDate: z.coerce.date("Data de cobrança inválida"),
    payment_status: z.string("Status de pagamento inválida").trim(),
  }),
});

export const UpdateBillingsSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Favor digitar apenas o ID do úsuario")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),
  body: z.object({
    patientId: z.coerce
      .number("Favor digitar apenas o ID do úsurario a ser cobrado")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
    amount: z.string("Precisa ser um texto").trim(),
    billingDate: z.coerce.date("Data de cobrança inválida"),
    payment_status: z.string("Status de pagamento inválida").trim(),
  }),
});

export const FindByBillingsSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Favor digitar apenas o ID do úsuario")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),
});

export const DeleteBillingsSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Favor digitar apenas o ID do úsuario")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),
});

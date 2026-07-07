import { z } from "zod";

export const CreateIventorySchema = z.object({
  body: z.object({
    itemName: z.string("Digite seu nome").trim(),
    quantity: z.string("Digite a quantidade").trim(),
    expiration_date: z.string("Digite a data de expiração").trim(),
  }),
});

export const ShowIventorySchema = z.object({
  query: z.object({
    itemName: z.string("Digite o nome do item").trim(),
  }),
});

export const SearchIventory = z.object({
  params: z.object({
    id: z.coerce
      .number("Coloque apenas o ID do item")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),
});

export const UpdateIventorySchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Coloque apenas o id do item")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),

  body: z.object({
    itemName: z.string("Digite o nome do item").trim(),
    quantity: z.string("Digite a quantidade do item").trim(),
    expiration_date: z.string("Digite a data de expiração").trim(),
  }),
});

export const DeleteItemSchema = z.object({
  params: z.object({
    id: z.coerce
      .number("Coloque apenas o id do item")
      .int("Precisa ser um número inteiro")
      .positive("Precisa ser um número positivo"),
  }),
});

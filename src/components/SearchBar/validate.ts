import { z } from "zod";

export const InputSchema = z.object({
   name: z.string().nonempty("Endereço é obrigatório"),
})
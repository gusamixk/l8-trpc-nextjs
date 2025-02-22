import { z } from "zod";
import { createTodoFormSchemas } from "../schema";


export type UpdateTodoFormSchema = {
    text?: string;
    status?: boolean;
}

export type CreateTodoFormSchemas = z.infer<typeof createTodoFormSchemas> 
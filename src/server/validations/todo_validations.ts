import { z } from "zod";

export const createTodoRequest = z.object({
    text: z.string().min(1).max(100),
});

export const updateTodoRequest = createTodoRequest.partial();


// export const updateTodoRequest = z.object({
//     id: z.string(),
//     request: updateTodoRequest,
// });
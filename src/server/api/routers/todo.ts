import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { create } from "domain";
import { createTodoRequest, updateTodoRequest } from "@/server/validations/todo_validations";
import { TRPCError } from "@trpc/server";

export const todoRouter = createTRPCRouter({
getAll: publicProcedure.query( async ({ctx}) => {
    const {db} = ctx
    try{
        const todos = db.todo.findMany()
        return todos
    }catch(error){
        console.log(error)
    }
    }),



getById: publicProcedure
.input(z.object({id: z.string()}))
.query(async ({ctx, input}) => {
    try{
    const {db} = ctx;
    const {id} = input;
    const todo = await db.todo.findUnique({where: {id}})
    return todo
    }catch(error){
        console.log(error)
    }
    }),


create: publicProcedure
.input(createTodoRequest)
.mutation(async ({ctx, input}) => {
    try{
    const {db} = ctx;
    const {text} = input;
    const todo = await db.todo.create({data: {
        ...input,
        text,
     }
    })
    return todo
    }catch(error){
        console.log(error)
    }
    }),
    update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        request: updateTodoRequest,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const { db } = ctx;
        const { id, request } = input;
        const { text } = request;

        const todoExists = await db.todo.count({ where: { id } });

        if (todoExists === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `Todo with ID : ${id} not found`,
          });
        }

        await db.todo.update({ where: { id }, data: { ...request, text } });
      } catch (error) {
        if (error instanceof TRPCError) throw error;

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update todo",
          cause: error,
        });
      }
    }),

delete: publicProcedure
.input(z.object({id: z.string()}))
.mutation(async ({ctx, input}) => {
    try{
    const {db} = ctx;
    const {id} = input;
    const todo = await db.todo.delete({where: {id}})
    return todo;
    }catch(error){
        console.log(error)
    }
    }),

})


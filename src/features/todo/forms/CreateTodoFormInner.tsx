"use client";
import { useForm, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from "@/components/ui/form";
import { api } from "@/trpc/react";
import { useQuery } from '@tanstack/react-query';
import { on } from "events";
import { toast } from "sonner";
import { CreateTodoFormSchemas } from "../types";


type CreateTodoFormProps = {
  formId: string;
  onSubmit: (values: CreateTodoFormSchemas ) => void;
}

export const CreateTodoFormInner = ({formId, onSubmit}: CreateTodoFormProps) => {

  const form = useFormContext<CreateTodoFormSchemas>();

  return (
<form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="text"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Todo</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="formId"
              // placeholder="Enter your todo"
              // onChange={handleChangeTodo}
            />
          </FormControl>
        </FormItem>
      )}
    />
  </form>
  );
};
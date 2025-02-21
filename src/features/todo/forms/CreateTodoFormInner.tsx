"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

export const CreateTodoFormInner = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form>
        <FormItem>
          <FormLabel>Todo</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Enter your todo" />
          </FormControl>
          <FormDescription>Create your todo</FormDescription>
          <FormMessage />
        </FormItem>
      </form>
    </Form>
  );
};
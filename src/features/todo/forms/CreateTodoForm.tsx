"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { CreateTodoFormInner } from "./CreateTodoFormInner";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { api } from "@/trpc/react";
import { toast } from "sonner";

type CreateTodoFormProps = {
  refetch: () => void
};
export const CreateTodoForm = ({refetch}: CreateTodoFormProps) => {
  const { mutate: onSubmit } = api.todo.create.useMutation({
    onSuccess: () => {
      toast.success("Todo created successfully")
      refetch();
    },
  })

  const form = useForm({
    defaultValues: {
      text: "",
    },
  })

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
      <Form {...form}>
      <CreateTodoFormInner formId="todo-form" onSubmit={onSubmit}/>
        {/* Form will be placed here */}
        </Form>
      </CardContent>
      
      <CardFooter className="place-content-end">
        <Button form="todo-form">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

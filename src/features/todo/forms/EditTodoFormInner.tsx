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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export const EditTodoForm = () => {
  const form = useForm();

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form id="todo-form">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Todo</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your todo"
                    />
                  </FormControl>
                  <FormDescription>Create your todo</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>

      <CardFooter className="place-content-end">
        <Button>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};
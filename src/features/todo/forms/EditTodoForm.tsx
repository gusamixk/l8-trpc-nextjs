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

type EditTodoFormProps = {
  todoId: string;
}

export const EditTodoForm = ({ todoId }: EditTodoFormProps) => {
  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Di sini nanti tempat form content */}
      </CardContent>

      <CardFooter className="place-content-end">
        <Button>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};
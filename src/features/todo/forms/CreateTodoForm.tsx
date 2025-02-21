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

export const CreateTodoForm = () => {
  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
      <CreateTodoFormInner/>
        {/* Form will be placed here */}
      </CardContent>
      
      <CardFooter className="place-content-end">
        <Button>
          {/* <Loader2 className="animate-spin" /> */}
          Adding...
        </Button>
      </CardFooter>
    </Card>
  );
};

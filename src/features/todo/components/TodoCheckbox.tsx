"use client";
import { Checkbox } from "@/components/ui/checkbox";

type TodoCheckboxProps = {
  todoId: string;
  statusCheked: boolean;
};

export const TodoCheckbox = ({ todoId, statusCheked }: TodoCheckboxProps) => {

  return (
    <div className="flex justify-center">
      <Checkbox/>
    </div>
  );
};


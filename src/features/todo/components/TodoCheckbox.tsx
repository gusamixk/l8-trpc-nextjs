"use client";
import { Checkbox } from "@/components/ui/checkbox";

type TodoCheckboxProps = {
  todoId: string;
  statusCheked: boolean;
};

/*************  ✨ Codeium Command 🌟  *************/
/**
 * A checkbox component for the Todo app.
 *
 * @param todoId The ID of the todo item.
 * @param statusCheked The current status of the checkbox.
export const TodoCheckbox = ({ todoId, statusCheked }: TodoCheckboxProps) => {

  return (
    <div className="flex justify-center">
      <Checkbox/>
    </div>
  );
};
/******  bd8b06be-8d49-4fd3-ae9f-d32a232a1828  *******/

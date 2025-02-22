
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoPagination } from "../components/TodoPagination";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Ellipsis, Pencil, PenIcon } from "lucide-react";
import { api } from "@/trpc/react";
import { renderElements } from "@/utils/render-elements";
import { Todo } from "@prisma/client";
import { TodoCheckbox } from "../components/TodoCheckbox";
import { DeleteTodoDialog } from "../components/dialog/todoDeleteDialog";
import { EditTodoForm } from "../forms/EditTodoForm";
import { Button } from "@/components/ui/button";


type todoTableProps = {
  todos?: Todo[],
  refetch?: () => void
}

export const TodoTable = ({ todos, refetch: refetchTodos }: todoTableProps) => {
  const handleRefetch = () => refetchTodos && refetchTodos();
  return (
    <Card className="mb-5">
      <CardContent>
        <Table>
          <TableCaption>
            {/* Pagination */}
            <TodoPagination />
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">No</TableHead>
              <TableHead className="w-full">Todo</TableHead>
              <TableHead className="w-[100px] text-center">Status</TableHead>
              <TableHead className="w-[80px] text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
      {renderElements({
        of: todos,
        render: (todo, index ) => (
          <TableRow key={todo.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell>{todo.text}</TableCell>
            <TableCell className="text-center">{todo.status ? "True" : "False"}</TableCell>
            <TableCell className="text-center">
                <EditTodoForm refetchTodos={handleRefetch} todoId={todo.id}/>
                <DeleteTodoDialog todoId={todo.id} refetch={handleRefetch}/>
            </TableCell>
          </TableRow>
        ),
      })}
    </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

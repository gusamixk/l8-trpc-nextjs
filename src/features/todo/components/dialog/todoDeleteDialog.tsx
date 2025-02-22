import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Delete, DeleteIcon, Ellipsis } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { api } from "@/trpc/react";
import { toast } from "sonner";
  

export type DeleteTodoDialogProps = {
  todoId : string;
  refetch : () => void
}
export const DeleteTodoDialog = ({todoId, refetch} : DeleteTodoDialogProps) => {
const {mutate : deleteTodo} = api.todo.delete.useMutation(
  {
    onSuccess: () => {
      toast.success("Todo deleted successfully")
      refetch();
    },
  }
);
const handleDeleteTodo = ()=> {
  deleteTodo ({id : todoId});
}
    return(
      <AlertDialog> 
        <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <DeleteIcon/>
        </Button>
        </AlertDialogTrigger>
      <AlertDialogContent> 
        <AlertDialogHeader> 
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> 
          <AlertDialogDescription> 
            This action cannot be undone. This will permanently delete your 
            account and remove your data from our servers. 
          </AlertDialogDescription> 
        </AlertDialogHeader> 
        <AlertDialogFooter> 
          <AlertDialogCancel>Cancel</AlertDialogCancel> 
          <AlertDialogAction onClick={handleDeleteTodo} > 
            Continue 
          </AlertDialogAction> 
        </AlertDialogFooter> 
      </AlertDialogContent> 
    </AlertDialog> 
    )
  }



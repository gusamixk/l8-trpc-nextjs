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
  import { Ellipsis } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
  


  
export const DeleteTodoDialog = () => {
    
    return(
      <AlertDialog> 
     
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Ellipsis className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild>
            <Link href="#">Edit</Link>
          </Button>
        </DropdownMenuItem>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem className="text-red-600 cursor-pointer">
            Hapus
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu> 
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
          <AlertDialogAction> 
            Continue 
          </AlertDialogAction> 
        </AlertDialogFooter> 
      </AlertDialogContent> 
    </AlertDialog> 
    )
  }



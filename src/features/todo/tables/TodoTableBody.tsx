"use client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Ellipsis } from "lucide-react";

export const TodoTableBody = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="text-center">1</TableCell>
        <TableCell>Sample Todo</TableCell>
        <TableCell className="text-center">
          <Checkbox />
        </TableCell>
        <TableCell className="text-center">
          <div className="flex justify-center">
            <Ellipsis />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
"use client";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Input } from "@/components/ui/input";
import { TodoTable } from "../tables/TodoTable";
import { CreateTodoForm } from "../forms/CreateTodoForm";
import { api } from "@/trpc/react";



export const TodoPage = () => {
  const {data : todos, refetch: refetchTodos} = api.todo.getAll.useQuery()
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer className="min-h-screen">
        <CreateTodoForm refetch={refetchTodos} />
        <div className="mb-5">
          <Input type="text" placeholder="search" />
        </div>
        <TodoTable todos={todos} refetch={refetchTodos}/>
      </SectionContainer>
    </PageContainer>
  );
};

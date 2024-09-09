import { createContext, useMemo } from "react";
import { Todo, useTodos } from "../hooks/useTodos";

type TodosProviderProps = {
	children: React.ReactNode;
};

export const TodoStateContext = createContext<Array<Todo> | undefined>(
	undefined,
);

export const TodoDispatchContext = createContext<any | undefined>(undefined);

export const TodosProvider = ({ children }: TodosProviderProps) => {
	const { todos, createTodo, updateTodo, deleteTodo } = useTodos();
	const todoMemoDispatch = useMemo(() => {
		return { createTodo, updateTodo, deleteTodo };
	}, []);

	return (
		<TodoStateContext.Provider value={todos}>
			<TodoDispatchContext.Provider value={todoMemoDispatch}>
				{children}
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
};

import { createContext, Dispatch, useMemo, useReducer } from "react";
import { Todo } from "../hooks/useTodos";
import seedTodos from "../utils/seedTodo";
import { todoReducer } from "../store/todoReducer";
import type { Action } from "../store/todoReducer";

type TodosProviderProps = {
	children: React.ReactNode;
};

export const TodoStateContext = createContext<Array<Todo> | undefined>(
	undefined,
);

export const TodoDispatchContext = createContext<Dispatch<Action> | undefined>(
	undefined,
);

export const TodosProvider = ({ children }: TodosProviderProps) => {
	const [todos, dispatch] = useReducer(todoReducer, seedTodos());

	const memoizedTodos = useMemo(() => todos, [todos]);
	const memoizedDispatch = useMemo(() => dispatch, []);
	return (
		<TodoStateContext.Provider value={memoizedTodos}>
			<TodoDispatchContext.Provider value={memoizedDispatch}>
				{children}
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
};

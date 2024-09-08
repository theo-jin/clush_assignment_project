import { useCallback, useReducer } from "react";
import seedTodos from "../utils/seedTodo";
import { todoReducer } from "../store/todoReducer";

export type UseTodo = ReturnType<typeof useTodos>;
export type Todo = {
	id: string;
	isDone: boolean;
	content: string;
	date: Date;
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, seedTodos());
	const createTodo = useCallback(
		({ content, date }: { content: string; date: Date }): void => {
			dispatch({
				type: "CREATE",
				payload: {
					content: content,
					date: date,
				},
			});
		},
		[],
	);

	const updateTodo = useCallback((id: string, content?: string) => {
		dispatch({
			type: "UPDATE",
			payload: { id, content },
		});
	}, []);

	const deleteTodo = useCallback((payload: string) => {
		dispatch({
			type: "DELETE",
			payload: payload,
		});
	}, []);

	return {
		todos,
		createTodo: createTodo,
		deleteTodo,
		updateTodo,
	};
};

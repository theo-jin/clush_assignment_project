import { useReducer } from "react";
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
	const createTodo = ({
		content,
		date,
	}: {
		content: string;
		date: Date;
	}): void => {
		dispatch({
			type: "CREATE",
			payload: {
				content: content,
				date: date,
			},
		});
	};

	const updateTodo = (payload: string) => {
		dispatch({
			type: "UPDATE",
			payload: payload,
		});
	};

	const deleteTodo = (payload: string) => {
		dispatch({
			type: "DELETE",
			payload: payload,
		});
	};

	const onContentUpdate = () => {};
	return {
		todos,
		createTodo: createTodo,
		deleteTodo,
		updateTodo,
		onContentUpdate,
	};
};

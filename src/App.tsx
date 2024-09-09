import React, { createContext, useMemo } from "react";
import { Layout } from "antd";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { Todo, useTodos } from "./hooks/useTodos";

const { Content } = Layout;

export const TodoStateContext = createContext<Array<Todo> | undefined>(
	undefined,
);

export const TodoDispatchContext = createContext<any | undefined>(undefined);

const App: React.FC = () => {
	const { todos, createTodo, updateTodo, deleteTodo } = useTodos();
	const todoMemoDispatch = useMemo(() => {
		return { createTodo, updateTodo, deleteTodo };
	}, []);
	return (
		<Layout>
			<SiteHeader />
			<Content style={{ padding: "20px 35px" }}>
				<h1 style={{ width: "100%", padding: "0 ", margin: "0" }}>TODO App</h1>
				<TodoStateContext.Provider value={todos}>
					<TodoDispatchContext.Provider value={todoMemoDispatch}>
						<CreateTodo />
						<TodoList />
					</TodoDispatchContext.Provider>
				</TodoStateContext.Provider>
			</Content>
			<SiteFooter />
		</Layout>
	);
};

export default App;

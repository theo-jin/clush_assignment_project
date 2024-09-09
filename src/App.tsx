import React from "react";
import { Layout } from "antd";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

import { Providers } from "./providers/Providers";

const { Content } = Layout;

const App: React.FC = () => {
	return (
		<Layout>
			<SiteHeader />
			<Content style={{ padding: "20px 35px" }}>
				<h1 style={{ width: "100%", padding: "0 ", margin: "0" }}>TODO App</h1>
				<Providers>
					<CreateTodo />
					<TodoList />
				</Providers>
			</Content>
			<SiteFooter />
		</Layout>
	);
};

export default App;

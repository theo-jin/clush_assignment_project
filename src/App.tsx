import React, { useRef, useState } from "react";
import { Layout, Input, Button, Space } from "antd";

import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import TodoCalender from "./_components/TodoCalender";
import { faker } from "@faker-js/faker";
import CreateTodo from "./_components/CreateTodo";
import { nanoid } from "nanoid";

const { Content } = Layout;
const mockData = Array.from({ length: 50 });
mockData.forEach((_, index) => {
	mockData[index] = {
		id: nanoid(8),
		isDone: faker.datatype.boolean(),
		title: faker.lorem.words(5),
		start: faker.date.future().toJSON(),
	};
});

const App: React.FC = () => {
	const [todos, setTodos] = useState(mockData);

	const onCreate = ({ content, date }: any) => {
		const newTodo = {
			id: nanoid(8),
			isDone: false,
			title: content,
			start: date,
		};

		setTodos([newTodo, ...todos]);
	};

	return (
		<Layout>
			<SiteHeader />
			<Content style={{ padding: "20px 35px" }}>
				<h1 style={{ width: "100%", padding: "0 ", margin: "0" }}>TODO LIST</h1>
				<CreateTodo onCreate={onCreate} />
				<TodoCalender mockData={todos} />
			</Content>
			<SiteFooter />
		</Layout>
	);
};

export default App;

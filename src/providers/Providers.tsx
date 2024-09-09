import { App, ConfigProvider } from "antd";
import { TodosProvider } from "./TodoProvider";
import locale from "antd/locale/ko_KR";

type ProvidersProps = {
	children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<ConfigProvider locale={locale}>
			<App>
				<TodosProvider>{children}</TodosProvider>
			</App>
		</ConfigProvider>
	);
};

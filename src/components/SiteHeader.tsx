import { Header } from "antd/es/layout/layout";
import Logo from "./Logo";


const SiteHeader: React.FC = () => {
	return (
		<Header style={{ display: "flex" }}>
			<Logo />
		</Header>
	);
};

export default SiteHeader;

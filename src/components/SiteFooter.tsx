import { Footer } from "antd/es/layout/layout";
import  Logo from "./Logo";
import { memo } from "react";

const SiteFooter: React.FC = () => {
	return (
		<Footer style={{ textAlign: "center", padding: "5px" }}>
			<Logo />
			<p> Clush Assignment Project</p>
		</Footer>
	);
};
export default memo(SiteFooter);

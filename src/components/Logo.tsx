import { memo } from "react";
import logo from "../../logo.png";
import { Image } from "antd";
const Logo: React.FC = () => {
	return <Image width={150} src={logo} />;
};

export default memo(Logo);

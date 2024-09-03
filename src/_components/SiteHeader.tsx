import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Logo } from './Logo';

export const SiteHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

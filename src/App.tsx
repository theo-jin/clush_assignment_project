import React from 'react';
import { Layout } from 'antd';
import TodoCalender from './_components/TodoCalender';
import { SiteFooter } from './_components/SiteFooter';
import { SiteHeader } from './_components/SiteHeader';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <SiteHeader />
      <Content style={{ padding: '0 48px' }}>{/* <TodoCalender /> */}</Content>
      <SiteFooter />
    </Layout>
  );
};

export default App;

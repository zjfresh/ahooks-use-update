import { WaterMark } from '@ant-design/pro-layout';
import { Outlet } from '@umijs/max';

const WithWaterMark: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <WaterMark content={'fffff'} gapX={200} offsetTop={160}>
      {children}
    </WaterMark>
  );
};

const Layout: React.FC = () => {
  return (
    <WithWaterMark>
      <Outlet />
    </WithWaterMark>
  );
};

export default Layout;

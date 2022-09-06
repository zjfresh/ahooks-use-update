import { useOutlet } from '@umijs/max';

export default () => {
  const outlet = useOutlet();

  if (!outlet) return <h1>404 Page Not Found</h1>;

  return outlet;
};

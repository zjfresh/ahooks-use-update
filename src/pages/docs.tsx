import { useEffect } from "react";
const DocsPage = () => {
  useEffect(() => {
    console.log('render')
  },[])
  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;

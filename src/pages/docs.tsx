import { useCallback, useEffect, useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useUpdate, useMount, useCreation } from 'ahooks';

const DocsPage = () => {
  const countRef = useRef(0);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ countRef pre', countRef.current);
  countRef.current = countRef.current + 1;

  console.log('🚀 ~ file: index.tsx ~ line 10 ~ countRef after', countRef.current);

  const data = useCustom(
    new Promise((requestBack) => {
      setTimeout(() => {
        requestBack('requestData');
      }, 1500);
    })
  );

  useEffect(() => {
    console.log('useEffect [] 是只执行了一次');
  }, []);

  console.time('模拟耗时的 render ');
  let n = 0;
  while (true) {
    window.getComputedStyle(document.body);
    n++;
    if (n > 999999) break;
  }
  console.timeEnd('模拟耗时的 render ');

  return (
    <PageContainer>
      <p>This is umi docs.</p>
    </PageContainer>
  );
};

function useCustom(service: PromiseLike<string>) {
  const update = useUpdate();
  const dataRef = useRef<string | null>(null);

  useCreation(() => {
    service.then((data) => {
      dataRef.current = data;
      update();
    });
  }, []);
}

export default DocsPage;

import { useEffect, useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { clearCache, useAntdTable, useMount } from 'ahooks';

function sleep<T extends any>(value: T, timeout?: number) {
  return new Promise<T>((rs) => {
    setTimeout(() => {
      rs(value);
      console.log(value);
    }, timeout || 2000);
  });
}

const DocsPage = () => {
  const countRef = useRef(0);
  console.log('🚀 ~ file: index.tsx ~ line 52 ~ countRef pre', countRef.current);
  countRef.current = countRef.current + 1;

  console.log('🚀 ~ file: index.tsx ~ line 52 ~ countRef after', countRef.current);

  useEffect(() => {
    console.log('useEffect [] 是只执行了一次');
  }, []);

  const data = { list: [1, 2, 3], total: 3 };
  const { tableProps, run } = useAntdTable(() => sleep<typeof data>(data, 150), {
    cacheKey: 'test-cache-key',
    manual: true,
    staleTime: -1,
  });
  useMount(() => {
    clearCache('test-cache-key');
    run({ ...tableProps.pagination });
  });

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

export default DocsPage;

import type { VFC } from 'react';

export const About: VFC = () => {
  const title = 'アバウト';

  return (
    <>
      <title>{title}</title>
      <div>about page!</div>
    </>
  );
};

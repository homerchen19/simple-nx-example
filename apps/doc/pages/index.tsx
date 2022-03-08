import { useState } from 'react';
import getConfig from 'next/config';
import { Button } from '@nx-example/design-system/Button';
import { TextField } from '@nx-example/design-system/TextField';
import { isAllLetters } from '@nx-example/utils/fn';
import { useWindowSize } from '@nx-example/utils/hooks';

const { publicRuntimeConfig } = getConfig();

export function Index() {
  const [name, setName] = useState('');
  const { width } = useWindowSize();

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            name: { value: string };
          };
          setName(target.name.value);
        }}
      >
        <label>
          <span>Name:</span>
          <TextField type="text" name="name" />
        </label>

        <div style={{ marginTop: '8px' }}>
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <p>Input: {name}</p>
      <p>Is input all letters: {String(isAllLetters(name))}</p>
      <p>Window width: {String(width)} pixels</p>
      <p>Runtime config: {JSON.stringify(publicRuntimeConfig)}</p>
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  return {
    props: {},
  };
}

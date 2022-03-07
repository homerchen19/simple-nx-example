// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { useState } from 'react';
import { Button } from '@nx-example/design-system/Button';
import { isAllLetters } from '@nx-example/utils/fn';

export function App() {
  const [name, setName] = useState('');

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
          <input type="text" name="name" />
        </label>

        <div style={{ marginTop: '8px' }}>
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <p>Input: {name}</p>
      <p>Is input all letters: {String(isAllLetters(name))}</p>
    </>
  );
}

export default App;

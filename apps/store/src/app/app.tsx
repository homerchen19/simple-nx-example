// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { useState } from 'react';
import { Button } from '@nx-example/design-system/Button';

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

      <p>Output: {name}</p>
    </>
  );
}

export default App;

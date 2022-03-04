import { useState } from 'react';
import { Button } from '@nx-example/design-system/Button';
import { TextField } from '@nx-example/design-system/TextField';

export function Index() {
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
          <TextField type="text" name="name" />
        </label>

        <div style={{ marginTop: '8px' }}>
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <p>Output: {name}</p>
    </>
  );
}

export default Index;

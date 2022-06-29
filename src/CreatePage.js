import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createTreasure } from './services/fetch-utils';

export default function CreatePage() {
  const { push } = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [rating, setRating] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await createTreasure({
      name: name,
      description: description,
      source: source,
      rating: rating,
    });

    setName('');
    setDescription('');
    setSource('');
    setRating('');

    push('/treasures');
  }
  return (
    <div>
      <h3>Store Something Important</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label>
          Description:
          <input onChange={(e) => setDescription(e.target.value)} value={description} />
        </label>
        <label>
          Source:
          <input onChange={(e) => setSource(e.target.value)} value={source} />
        </label>
        <label>
          Rating:
          <input onChange={(e) => setRating(e.target.value)} value={rating} type="number" />
        </label>
        <button>Create Treasure Spec</button>
      </form>
    </div>
  );
}

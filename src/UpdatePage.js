import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTreasureById, updateTreasure, deleteTreasure } from './services/fetch-utils';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    async function doFetch() {
      const treasure = await getTreasureById(id);

      setName(treasure.name);
      setDescription(treasure.description);
      setSource(treasure.source);
      setRating(treasure.rating);
    }
    doFetch();
  }, [id]);

  async function handleDeleteTreasure() {
    await deleteTreasure(id);

    push('/treasures');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await updateTreasure(
      {
        name: name,
        description: description,
        source: source,
        rating: rating,
      },
      id
    );

    setName('');
    setDescription('');
    setSource('');
    setRating('');

    push('/treasures');
  }

  return (
    <div>
      <h3>Update Your Treasure Specs</h3>
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
        <button>Update Treasure</button>
      </form>
      <button onClick={handleDeleteTreasure} className="delete-button">
        Delete Treasure
      </button>
    </div>
  );
}

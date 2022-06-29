import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTreasureById, updateTreasure } from './services/fetch-utils';

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


  return (
    <div>
      <h3>Update Your Treasure Specs</h3>
      <form>
        <label>
          Name:
          <input />
        </label>
        <label>
          Description:
          <input />
        </label>
        <label>
          Source:
          <input />
        </label>
        <label>
          Rating:
          <input type="number" />
        </label>
      </form>
    </div>
  );
}

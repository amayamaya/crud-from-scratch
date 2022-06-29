import { useEffect, useState } from 'react';
import { getTreasures } from './services/fetch-utils';
import Treasure from './Treasure.js';

export default function ListPage() {
  const [treasures, setTreasures] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const treasures = await getTreasures();

      setTreasures(treasures);
    }
    doFetch();
  }, []);
  return (
    <div>
      <p>test</p>
      {treasures.map((treasure, i) => (
        <Treasure treasure={treasure} key={treasure.name + treasure.from + i} />
      ))}
    </div>
  );
}

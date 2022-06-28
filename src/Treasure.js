import { Link } from 'react-router-dom';

export default function Treasure({ treasure }) {
  return (
    <Link to={`/treasures/${treasure.id}`}>
      <p>
        {treasure.name}, a {treasure.description} from {treasure.from}
      </p>
    </Link>
  );
}

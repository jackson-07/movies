import { movies } from '../../data';
import ActorCard from '../../components/ActorCard.jsx';


export default function ActorListPage( ) {
    const actors = new Set(movies.flatMap(movie => movie.cast));

    const actorList = Array.from(actors);

    return (
      <div className="actor-list-page">
        <div className="actor-grid">
          {actorList.map(actor => (
            <ActorCard key={actor} name={actor} />
          ))}
        </div>
      </div>
    )
  }
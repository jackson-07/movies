import React from 'react';
import { Link } from 'react-router-dom';

export default function ActorCard ({ name }) {
  return (
      <div 
        className="actor-card"
        style={{
          backgroundImage: `url(https://picsum.photos/200/300?random=${name.replace(' ', '')})`
        }}
      >
        <p>{name}</p>
      </div>
  );
};


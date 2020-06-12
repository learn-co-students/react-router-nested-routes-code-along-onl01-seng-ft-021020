import React from "react";

export default function MoviesShow({match:{params:{movieId}}, movies}) {

  return (
    <div>
      <h3>{movies[movieId].title}</h3>
    </div>
  );
}

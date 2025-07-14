import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Movie ID: {params.id}</p>
    </div>
  );
}

export default Detail;

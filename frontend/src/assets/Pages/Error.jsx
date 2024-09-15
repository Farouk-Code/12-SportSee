/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error">
      <h1>La page est non disponible</h1>
      <Link to="/">Retourn à l'acceuil</Link>
    </main>
  );
};
export default Error;

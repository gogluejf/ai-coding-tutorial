import { useState, useEffect } from "react";

export default function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/people")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setPeople(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status">Loading people…</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="container">
      <h1>People</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, i) => (
            <tr key={i}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.birthday}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

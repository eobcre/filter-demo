import { useState } from 'react';

const App = () => {
  const characters = ['Mario', 'Luigi', 'Yoshi', 'Bowser'];

  const [filterCharacter, setFilterCharacter] = useState('');

  const handleChange = (e) => {
    setFilterCharacter(e.target.value);
  };

  return (
    <div className='filter-container'>
      <h1>Filter Demo</h1>
      <input type='text' value={filterCharacter} onChange={handleChange} />
      <ul>
        {characters.map((character) => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

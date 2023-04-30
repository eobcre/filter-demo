const App = () => {
  const characters = ['Mario', 'Luigi', 'Yoshi', 'Bowser'];

  return (
    <div className='filter-container'>
      <h1>Filter Demo</h1>
      <input type='text' />
      <ul>
        {characters.map((character) => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

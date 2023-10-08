const axios = require('axios');

test('Lien PokeAPI fonctionnel', async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

    expect(response.status).toBe(200);


    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data.results)).toBe(true);
  } catch (error) {
    fail(`Erreur lors de la requête vers l'API : ${error.message}`);
  }
});


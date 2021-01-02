const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    fetch(url)
        .then( res => {
            return res.json();
        })
        .then( data => {
            console.log(data);
            for( let i = 1; i  150)
            const pokemon = {
                name = data.name,
                id = data.id,
                image = data.sprites['front_default'],
                type= data.type.map( type => type.type.name).join(', ');
            };
            console.log(pokemon);
        });
};

fetchPokemon();
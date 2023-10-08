<template>
    <div class="all">
        <h1>POKEMON POKEDEX</h1>

        <section id="gen1" class="gen">
            <h2>1st Generation</h2>
        </section>

        <section id="gen2" class="gen">
            <h2>2nd Generation</h2>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Pokedex',
    methods: {
        fetchPokemon() {
            for (let i = 1; i < 40; i++) {
                // loop to create 40 pokemon
                //CREATION OF ELEMENTS AND DEFINE
                let pokediv = document.createElement('div');
                pokediv.setAttribute('class', 'pokedivId');

                let spriteImg = document.createElement('img');

                let nameP = document.createElement('p');
                nameP.setAttribute('id', 'namePid'); // Attribute and id to the element that we created

                let bothTypeSection = document.createElement('section');
                bothTypeSection.setAttribute('class', 'bothTypeSection');

                //DEFINE URL
                let urlpk = `https://pokeapi.co/api/v2/pokemon/${i}`;

                //SPRITE
                fetch(urlpk)
                    .then((response) => response.json())
                    .then((response) => {
                        response.sprites.front_default; //fetch img
                        spriteImg.setAttribute('src', response.sprites.front_default); //in the element "spriteImg" that wecreated we'll assign the request in src
                    });

                // NAME
                fetch(urlpk)
                    .then((response) => response.json())
                    .then((response) => {
                        response.name;

                        var namePk = response.name;
                        var textname = document.createTextNode(namePk); // textname correspond to the text in request "response.name"
                        nameP.appendChild(textname); // add this text in the element "nameP" that we created above
                    });

                // TYPE 1
                fetch(urlpk)
                    .then((response) => response.json())
                    .then((response) => {
                        response.types[0].type.name;

                        var typepk = response.types[0].type.name;

                        let type1P = document.createElement('p');
                        type1P.setAttribute('class', 'type1');

                        var texttype = document.createTextNode(typepk);
                        type1P.appendChild(texttype);

                        bothTypeSection.appendChild(type1P);
                    });

                // TYPE 2
                fetch(urlpk)
                    .then((response) => response.json())
                    .then((response) => {
                        response.types[1].type.name;

                        var typepk = response.types[1].type.name;

                        if (typeof typepk !== 'undefined') {
                            // if this secound type exists it will create a new element p for it
                            let type2P = document.createElement('p');
                            type2P.setAttribute('class', 'type2');

                            var texttype = document.createTextNode(typepk);
                            type2P.appendChild(texttype);

                            bothTypeSection.appendChild(type2P);
                        }
                    })
                    .catch(console.error);

                // APPEND -------------------------------------------------------------------------
                pokediv.appendChild(spriteImg); //add the image in the div "pokediv"
                pokediv.appendChild(nameP); //add the name
                pokediv.appendChild(bothTypeSection); //add the types

                // APPEND TO EACH GEN
                if (i < 20) {
                    gen1.appendChild(pokediv);
                } else if (i >= 20 && i < 40) {
                    gen2.appendChild(pokediv);
                }
            }
        },


        sum(a, b) {
            return a + b;
        }
    },

    mounted() {
        this.fetchPokemon();
    },
};
</script>

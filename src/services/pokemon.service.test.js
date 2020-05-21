import { getFirstAbility, convertPoundsToKilograms } from './pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should convert correctly if weight is 0 pounds', () => {
        expect(convertPoundsToKilograms(0)).toEqual(0);
    })
    it('Should convert correctly if weight is 3 pounds', () => {
        expect(convertPoundsToKilograms(3)).toEqual(1.36);
    })
});
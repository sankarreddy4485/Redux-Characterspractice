import charcter_json from '../data/characters.json'
import { ADD_CHARACTER,REMOVE_CHARACTER } from '../Actions'
import {createCharacter} from './helper'

function characters(state = charcter_json,action) {
    switch(action.type){
        case 'ADD_CHARACTER':
            let characters = state.filter(item => item.id !== action.id);
            return characters;
         case 'REMOVE_CHARACTER'  :
            characters = [...state, createCharacter(action.id)] ;
            return characters;
        default:
            return state;
    }
  
}

export default characters
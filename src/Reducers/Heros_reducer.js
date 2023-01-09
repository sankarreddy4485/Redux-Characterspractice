import { ADD_CHARACTER,REMOVE_CHARACTER } from '../Actions'
import {createCharacter} from './helper'
  export function heros(state = [] , action) {
      switch(action.type){

        case 'ADD_CHARACTER':
            let heroes1 = [...state, createCharacter(action.id)];
            return heroes1;

            
      }
  }
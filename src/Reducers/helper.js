import character_json from '../data/characters.json'


export function createCharacter(id) {
    let character = character_json.find(item =>item.id ===id)
    return character;

    
}
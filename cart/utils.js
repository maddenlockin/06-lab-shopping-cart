// find by id function
    /* check if the first thing in the array has an id that matches the one from the parameter.
    if ids match, return that object, otherwise, try it our with the next object in the array,
    if you never find a match, return null;*/

    
export function findById(hrtProducts, id) {

    for (let item of hrtProducts) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}
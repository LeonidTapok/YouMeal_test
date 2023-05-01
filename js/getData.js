import * as data from '../db.js'

export const getDataById = async (id) => {
    if(Array.isArray(id)){
        return data.data.filter(x => id.includes(x.id));
    }

    return data.data.find(x => x.id == id);

}
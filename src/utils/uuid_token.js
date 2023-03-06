import { v4 as uuidv4 } from 'uuid';

export const getUUID = () =>{
    let uuid = localStorage.getItem('uuidToken');
    if(!uuid){
        uuid = uuidv4()
        localStorage.setItem('uuidToken',uuid)
    }

    return uuid
}
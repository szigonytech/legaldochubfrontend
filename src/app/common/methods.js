import Ajv from 'ajv';

export const isEmpty = (obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


export const formValidation = ( schema, data, customizeErrorData ) => {
    let ajv = new Ajv();
    let valid = ajv.validate(schema, data);
    if(!valid){
        let error = {}
        for( let key in customizeErrorData ) {  
          if(key === ajv.errors[0].dataPath.substring(1, ajv.errors[0].dataPath.length))
            error[key] = customizeErrorData[key];         
        }
        return error;
    }
       
    return {};
}

const REGISTRATION_VALIDATE_SCHEMA = {
    "$id": "dochub/registration/fields/#",
    "title":"Registration",
    "type":"object",
    "required":[ "firstname", "lastname",  "email",  "password", "confirmPassword"],
    "additionalProperties":true,
    "properties":{
                "firstname":{
                    "type": "string",
                    "messages": true,
                    "minLength":1,   
                },
                "lastname":{
                    "type":"string",
                    "messages": true,
                    "minLength":1   
                },
                "email":{
                    "format": "email",
                    "messages": true,
                },
                "password":{
                    "type":"string",
                    "message":true,
                    "minLength":6
                },
                "confirmPassword":{
                    "type":"string",
                    "message":true,
                    "minLength":6
                }

    }
}

export default REGISTRATION_VALIDATE_SCHEMA;




const LOGIN_VALIDATE_SCHEMA = {
    "$id": "dochub/login/fields/#",
    "title":"Login",
    "type":"object",
    "required":[ "email","password"],
    "additionalProperties":true,
    "properties":{
                "email":{
                    "format": "email",
                    "messages": true,
                },
                "password":{
                    "type":"string",
                    "message":true,
                    "minLength":6
                }
    }
}

export default LOGIN_VALIDATE_SCHEMA;



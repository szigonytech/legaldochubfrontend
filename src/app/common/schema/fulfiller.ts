const fulfiller = {
    '$id': 'nextBottles/fulfiller/fields/#',
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'minLength': 3
        },
        'stateId': {
            'type': 'number'
        },
        'address': {
            'type': 'string',
            'minLength': 5
        },
        'city': {
            'type': 'string',
            'minLength': 3
        },
        'zipcode': {
            'type': 'string',
            'minLength': 3
        },
        'contacts': {
            'type': 'array',
            'maxItems': 2,
            'minItems': 1,
            'contains': {
                'type': 'object',
                'properties': {
                    'name': {
                        'type': 'string',
                        'minLength': 2
                    },
                    'email': {
                        'type': 'string',
                        'format': 'email'
                    },
                    'phoneNo': {
                        'type': 'string',
                        'pattern': '[0-9]{6}'
                    },
                    'isPrimary': {
                        'type': 'boolean'
                    }
                }
            }
        },
        'licenseExpireDate': {
            'type': 'string',
            'format': 'date'
        },
        'stateLicense': {
            'type': 'string',
            'minLength': 1,
        },
        'payoutTypeId': {
            'type': 'number',
        },
        'license': {
            'anyOf': [
                { 'type': 'string', 'minLength': 2 },
                { 'type': 'object' }
            ]            
        }
    },
    'required': [
        'name',
        'stateId',
        'city',
        'zipcode',
        'address',
        'contacts',
        'licenseExpireDate',
        'stateLicense',
        'payoutTypeId',
        'license'
    ]
};
export default fulfiller;
const distributor = {
  '$id': 'nextBottles/distributor/fields/#',
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
    'pickUpLocation': {
      'type': 'string',
      'minLength': 5
    },
    'statusId': {
      'type': 'number',
    },
    'stateLicense': {
      'type': 'array',
      'minItems': 1,
      'uniqueItems': true
    },
    'notificationTypeId': {
      'type': 'number',
    }
  },
  'required': [
    'name',
    'stateId',
    'city',
    'zipcode',
    'address',
    'contacts',
    'pickUpLocation',
    'statusId',
    'stateLicense',
    'notificationTypeId'
  ]
};
export default distributor;
import * as Ajv from 'ajv';
import * as _ from 'lodash';
import distributor from './distributor';
import fulfiller from './fulfiller';

const ajv = new Ajv({ schemas: [distributor, fulfiller], allErrors: true, errorDataPath: 'property' });

export function jsonErrorsToObject(errorsArray: any) {
    return _.transform(errorsArray, (errorsObj, error: any) => {
        let path = error.dataPath.replace('/', '')
            .replace(/\/([0-9]+)/, '[$1]')
            .replace(/\//g, '.')
            .replace(/^\./g, '') + '.self';

        if (!_.get(errorsObj, path)) {
            _.set(errorsObj, path, error.message);
        }
        // tslint:disable-next-line:align
    }, {});
}

export default function validateSchema(data: any, schemaId: string) {
    const result = ajv.getSchema(schemaId);
    const valid = result(data);
    return valid ? null : jsonErrorsToObject(result.errors);
}

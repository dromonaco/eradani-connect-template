import configService from '../../config';
const config = configService.get();
import eradaniConnect from '@eradani-inc/eradani-connect';
import * as loggerService from '../services/logger';
import SQLTemplate, { SQLTemplateInput, SQLTemplateOutput } from '../models/sql-template';
import { JSONObject } from 'src/types';

// A const credentials = config.eradaniConnect.credentials;
const logger = loggerService.createForContext('controllers/sql');

const transport = new eradaniConnect.transports.Odbc(config.eradaniConnect.odbc, config.eradaniConnect.odbcOptions);
// A const transport = new eradaniConnect.transports.Xml(
// A     '*LOCAL',
// A     credentials.username,
// A     credentials.password,
// A     config.eradaniConnect.xml
// A );

/**
 * Run the Template SQL query.
 *
 * @param {JSONObject} inputs The minBaldue and maxBaldue to query with
 * @returns {Promise<SQLTemplateOutput}
 */
export async function getCustomers(inputs: JSONObject): Promise<SQLTemplateOutput> {
    logger.debug('Calling SQLTemplate program');
    const params: SQLTemplateInput = {
        minBaldue: inputs.minBaldue,
        maxBaldue: inputs.maxBaldue
    };

    return transport.execute(SQLTemplate, params) as Promise<SQLTemplateOutput>;
}

// Module LnxCalcItf

import eradaniConnect from '@eradani-inc/eradani-connect';
import configService from '../../config';

const { dataTypes } = eradaniConnect;
const config = configService.get();

// Exported function call
export const LnxCalcModel = new eradaniConnect.run.Pgm('LINUX_CALC', {
    lib: config.eradaniConnect.native.objlib,
    mode: 'ile',
    params: [
        {
            name: 'IbmiCores',
            type: new dataTypes.PackedDecimal(15, 0)
        },
        {
            name: 'LinuxServers',
            type: new dataTypes.PackedDecimal(16, 0),
            outputOnly: true
        }
    ]
});

// Input interface
export interface LnxCalcInput {
    IbmiCores: number | string;
    LinuxServers?: never;
}

// Output interface
export interface LnxCalcOutput {
    IbmiCores: number;
    LinuxServers: number;
}

import {Md5} from 'ts-md5';

export class Md5Hasher {

/**
 * MD5 hasher for the Marvel api
 */
    static hashString(value: string): string {
        const hashedString = Md5.hashStr(value);
        return (typeof hashedString === 'string') ? hashedString : null;
    }
}

import {billing} from './billing';

export class customer {
    name?: string;
    qno?: string;
    street?: string;
    mobile?: number;
    nuid?: string;
    status?: string;
    billingList?: billing[];
}
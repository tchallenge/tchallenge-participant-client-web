import {Assignment} from './assignment.model';

export class Workbook {

    id?: string;
    textcode: string;
    assignments: Assignment[];
    status: string;
    coworkerLink: string;
}

import * as _ from "lodash";

interface FullName {
    firstName: string;
    lastName: string;
}

export default class Dog {
    printToLog(message: FullName) {
        console.log(message.firstName + ' ' + message.lastName);
        console.log(_.join(['Hello', 'webpack', 'more', 'words'], ' '));
    }
}
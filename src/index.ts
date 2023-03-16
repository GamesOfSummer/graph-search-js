import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

import { list, getDragon, Dragon } from './data';

const findMostCommonColor = (
    list: Dragon[],
    myId: number,
    degreesOfSeparation: number
) => {
    let queue = [myId];
    let newQueue = [];

    let seenArray = [myId];

    let flag = true;
    while (flag) {
        const user = getDragon(list, queue.shift());

        for (let i = 0; i < user.connections.length; i++) {
            let connection = user.connection[i];

            if (!seenArray.includes(connection.id)) {
                newQueue.push(connection);
                seenArray.push(connection);
            }
        }

        flag = false;
    }

    return newQueue;
};

consoleStart();

validateFxn(findMostCommonColor(list, 30, 2), 'Oloo');
consoleEnd();
consoleBuffer();

export {};

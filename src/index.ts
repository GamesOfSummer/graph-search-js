import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

import { list, getDragon, Dragon } from './data.js';

const findMostCommonColor = (
    list: Dragon[],
    myId: number,
    degreesOfSeparation: number
) => {
    let queue: number[] = [myId];
    let newQueue: number[] = [];

    let seenArray: number[] = [myId];

    while (queue.length > 0) {
        const user: Dragon = getDragon(list, queue.shift());

        for (let i = 0; i < user.connections.length - 1; i++) {
            let connection = user.connections[i];

            if (!seenArray.includes(connection)) {
                newQueue.push(connection);
                seenArray.push(connection);
                queue.push(connection);
            }
        }
    }

    console.log(newQueue.length);
    return newQueue;
};

consoleStart();

validateFxn(findMostCommonColor(list, 30, 2), 'Oloo');
consoleEnd();
consoleBuffer();

export {};

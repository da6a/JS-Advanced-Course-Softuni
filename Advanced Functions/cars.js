function cars(arr) {
    for(let command of arr) {
        [command, n, ...params]= command.split(' ');

        switch(command) {
            case 'create': 
            n = {
                name : n,
            };
            break;
        }
    }

}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])
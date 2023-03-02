function solve(input) {
    let result = [];
    for (let command of input) {
        [command, text] = command.split(' ');

        switch (command) {
            case 'add': result.push(text);
                break;
            case 'remove': result = result.filter(a => a !== text);
                break;
            case 'print': console.log(result.join(','));
                break;
        }
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
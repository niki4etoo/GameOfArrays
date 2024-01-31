
function ladyBugOriginal(input) {

    let fieldSize = input[0];
    let output = new Array(fieldSize).fill(0);

    //Ladybugs initial positions
    let [...initialIndices] = input[1].split(" ");

    // convert each element from string to number
    initialIndices.forEach(function (element, index, arr) {
        arr[index] = Number(element);
    })

    //populate the output with the ladybugs initial positions
    for (let i = 0; i < output.length; i++) {
        if (initialIndices[i] !== undefined) {
            output[i] = initialIndices[i];
        }
    }

    //Command extraction
    let commands = [];
    for (let i = 2; i < input.length; i++) {
        commands.push(input[i]);
    }

    commands.forEach(function (element, index, arr) {
        arr[index] = element.split(" ");
    })

    let indexInitialPosition = 0;
    let move = -1; // default move left
    let fly = 0; // how many cells are we going to fly ladybugs?

    let ladybugLands = 0;

    commands.forEach(function (element, index) {
        if (index === 0) {
            indexInitialPosition = Number(element);
        }

        if (index === 1) {
            element === 'right' ? move = 1 : null;
        }

        if (index === 2) {
            fly = element;
        }

        //Where is going to land the ladybug ( to the left or to the right, that's the question )
        move === -1 ? ladybugLands = indexInitialPosition - fly : ladybugLands = indexInitialPosition + fly;

        for (let i = 0; i < output.length; i++) {

            //Is the current cell occupied?
            if (output[i] === 1) {

                // to do
            }
        }
    })

}
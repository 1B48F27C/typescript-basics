export const VAR_DECLARATION_SAMPLES: string[] = [
    `var a = 10;`,    
    `// example of overwriting 'i' variable because of leaked scope

    function sumMatrix(matrix: number[][]) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }
        
        return sum;
    }`,
    `// variable capturing quirks

// this loop will return only 10 instead of a set of numbers (0 .. 9)
    for (var i = 0; i < 10; i++) {
        setTimeout(function() { console.log(i); }, 100 * i);
    }

// this is how to fix the problem
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }`
    ];

export const LET_DECLARATION_SAMPLES: string[] = [
    `let hello = "Hello!";`,
    `// block-scoping
    function f(input: boolean) {
        let a = 100;
        
        if (input) {
            // Still okay to reference 'a'
            let b = a + 1;
            return b;
        }
        
        // Error: 'b' doesn't exist here
        return b;
    }`,
    `// declaration restriction
    
    a++; // illegal to use 'a' before it's declared;
    let a;`
    ,
    `// another example of 'let' declaration restriction
// illegal call 'foo' before 'a' is declared

    function foo() {
        // okay to capture 'a'
        return a;
    }

// runtimes should throw an error here
    foo();
    
    let a;`
];

export const CONST_DECLARATION_SAMPLES: string[] = [
    `const numLivesForCat = 9;`,
    `// here is an tricky sample with object
// you can't re-assing const object
// but can its values
    
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat
    }
    
    // Error
    kitty = {
        name: "Danielle",
        numLives: numLivesForCat
    };
    
    // all "okay"
    kitty.name = "Rory";
    kitty.name = "Kitty";
    kitty.name = "Cat";
    kitty.numLives--;`
];
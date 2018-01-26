export const CODESAMPLES: string[] = [
    `// boolean

    let isDone: boolean = false;`,
    `// number

    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;`,
    `// string

    let color: string = "blue";
    color = 'red';

// two way of defining multi-row value with accessing to variables

    let fullName: string = \`Bob Bobbington\`;
    let age: number = 37;

    let sentence-way-1: string = \`Hello, my name is \${ fullName }.
    
    I'll be \${ age + 1 } years old next month.\`;
    
    let sentence-way-2: string = "Hello, my name is " + fullName + ".\\n\\n" +
    "I'll be " + (age + 1) + " years old next month.";`,
    `// array
    
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];`,
    `// tuple
    
// declaration and initialization

    let x: [string, number];
    x = ["hello", 10]; // OK

// samples of usage
    
    console.log(x[0].substr(1)); // OK
    x[3] = "world"; // OK, 'string' can be assigned to 'string | number'    
    console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// samples of wrong usage

    x = [10, "hello"]; // Error
    console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    x[6] = true; // Error, 'boolean' isn't 'string | number'
    `,
    `// enum
    
    enum Color {Red = 1, Green, Blue}
    let c: Color = Color.Blue;
    let colorName: string = Color[2];    
    
    alert(colorName); // Displays 'Green' as it's value is 2 above`,
    `// any
    
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false;

    let notSure: any = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
    
    let prettySure: Object = 4;
    prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
    
    let list: any[] = [1, true, "free"];
    
    list[1] = 100;`,
    `// void
    
    function warnUser(): void {
        alert("This is my warning message");
    }

    let unusable: void = undefined;`,
    `// null and undefined
    
    let u: undefined = undefined;
    let n: null = null;`,
    `// never
    
// function returning never must have unreachable end point
    function error(message: string): never {
        throw new Error(message);
    }

    function infiniteLoop(): never {
        while (true) {
            
        }
    }
    
// inferred return type is never
    function fail() {
        return error("Something failed");
    }`,
    `// type assertion
    
    let someValue: any = "this is a string";
    
    let strLength: number = (<string>someValue).length;

    let someValue: any = "this is a string";
    
    let strLength: number = (someValue as string).length;`
    ];
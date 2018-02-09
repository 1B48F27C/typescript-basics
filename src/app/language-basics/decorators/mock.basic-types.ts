export const CODESAMPLES: string[] = [
    ``,    
    `// Definition of the @configurable decorator using the following function declaration:
    function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
    }    
   
// An example of an accessor decorator (@configurable) applied to a member of the Point class:
    class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}`
    ];
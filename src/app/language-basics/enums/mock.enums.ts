export const CODESAMPLES: string[] = [
    `enum E {
    A = getSomeValue(),
    B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
}`,
`enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}`,
`enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}`
    ];
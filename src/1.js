var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello");
// let a:string="Hello";
// let b:number="2" //throws error
//# Typescript Advanced
// ## 1. Enums
// Enums are a group of named constant values. 
// Enums are one of the few features TypeScript has which is not a type-level
//  extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can
//  make it easier to document intent, or create a set of distinct cases.
//   TypeScript provides both numeric and string-based enums.
// An enum can be defined using the `enum` keyword.
// ### Numeric Enums
// ```jsx
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }
// Up is initialised with 1. 
// All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1,  
// Down  has  2, Left has  3, and  Right  has  4.
// ```
// - You can leave off the initialisers entirely
// ```jsx
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Up would have the value 0, Down would have 1, etc. 
// This auto-incrementing behavior is useful for cases where 
// we might not care about the member values themselves, 
// but do care that each value is distinct from other values in the same enum.
// ```
// - Using Enums
// ```jsx
// let direction = Direction.Left; 
// ```
// ### String Enums
// In a string enum, each member has to be constant - initialised with a
//  string literal, or with another string enum member.
// ```jsx
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }
// ```
// ## 2. Tuple
// Array with additional conditions. 
// We can use tuple when we know exactly how many elements are there in the array.
// Tuples may be de-structured like arrays; the de-structuring variables get the types
//  of the corresponding tuple elements
// ```jsx
// let tuple: [number, string, boolean] = [7, "hello", true];
// ```
// ## 3. Generic Functions
// Reusable and generalised function whose type depends on argument type itself. 
// It’s common to write a function where the types of the input relate to the type 
// of the output, or where the types of two inputs are related in some way.
// In TypeScript, *generics* are used when we want to describe a correspondence 
// between two values. We do this by declaring a *type parameter* in the function 
// signature
// ```jsx
// function getIdentity<Type>(arg: Type): Type{
//     return arg;
// }
// // ```
// - Example
// ```jsx
function getIdentity(arg) {
    return arg;
}
var a = 1;
var b = "Masai";
var c = false;
getIdentity(a);
getIdentity(b);
getIdentity(c);
var numArray = [1, 2, 3, 4, 5];
var strArray = ['a', 'b', 'c', 'd', 'e'];
var get3Element = function (arr) {
    return arr[2];
};
get3Element(numArray);
get3Element(strArray);
var useState = function (value) {
    var v = value;
    var setValue = function (newValue) {
        v = newValue;
    };
    return [v, setValue];
};
var _a = useState(2), value = _a[0], setValue = _a[1];
var _b = useState("masai"), str = _b[0], setStr = _b[1];
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari(name, type, sunroof, color) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        _this.sunroof = sunroof;
        _this.color = color;
        return _this;
    }
    return Safari;
}(Car));
var s = new Safari("S1", "Petrol", true, "Red");

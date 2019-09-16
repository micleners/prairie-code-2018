"use strict";
exports.__esModule = true;
var kevin = {};
kevin.name = 'Kevin';
kevin.adult = true;
var x = 1;
var unionType;
// var observer: Role = "Observer"; // not allowed
var admin = 'Admin';
function doWork(worker) {
    return 'return type of string';
}
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printLabelWithInterface(labelledObj) {
    console.log(labelledObj.label);
}
// function doExtraWork: IFunction {}
// class PropertySamples{
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(fullName: string) {
//         this._fullName = fullName;
//     }
// }
// this can be simplified to:
var ConstructorSammple1 = /** @class */ (function () {
    function ConstructorSammple1(rootUrl) {
        this.rootUrl = rootUrl;
    }
    return ConstructorSammple1;
}());
// this can be simplified to:
var ConstructorSample2 = /** @class */ (function () {
    function ConstructorSample2(rooteUrl) {
        this.rooteUrl = rooteUrl;
    }
    return ConstructorSample2;
}());
// only do this with with things that you will provide in the constructor
var MiscSamples = /** @class */ (function () {
    function MiscSamples() {
    }
    return MiscSamples;
}());
// you  can use generics in TypeScript

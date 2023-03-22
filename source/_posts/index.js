var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addID = function (obj) {
    var id = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { id: id });
};
var person1 = addID({ name: 'test', age: 12 });
console.log(person1.id);
console.log(person1.name);
var person2 = addID({ name: 'dfsf' });
console.log(person2.id);
console.log(person2.name);
function logLength(a) {
    console.log(a.length);
    return a;
}
logLength(8);
function logLengthFan(a) {
    console.log(a.length);
    return a;
}
logLengthFan('jhjhh');
function logLengths(a) {
    a.forEach(function (item) {
        console.log(item.length);
    });
}
var arr = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    { material: 'plastic', length: 30 },
];
logLengths(arr);
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["Book"] = 1] = "Book";
    ResourceTypes[ResourceTypes["Author"] = 2] = "Author";
    ResourceTypes[ResourceTypes["Director"] = 3] = "Director";
    ResourceTypes[ResourceTypes["Person"] = 4] = "Person";
})(ResourceTypes || (ResourceTypes = {}));
console.log(ResourceTypes.Book);
function getSpeedRatio(v) {
    if (v.type === 'Train')
        return v.topSpeed / v.carriages;
    return v.topSpeed / v.wingSpan;
}
var BigTrain = {
    type: 'Train',
    carriages: 100,
    topSpeed: 200
};
console.log(getSpeedRatio(BigTrain));

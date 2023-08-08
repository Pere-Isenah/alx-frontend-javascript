"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
row: interface_1.RowElement;
{
    firstName: Guillaume;
    lastName: Salva;
}
var newRowID = CRUD.insertRow(row);
var updatedRow = __assign(__assign({}, row), { age: 23 });
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
var obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
CRUD.deleteRow(125);

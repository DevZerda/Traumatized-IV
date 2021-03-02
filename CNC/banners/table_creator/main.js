// Modules
const fs = require("fs");
const util = require("util");

// Files
const Table = require("./main.js");

// Extra

exports.TableConfig = {
    "columns_wdith": [],
}

exports.Symbol = {
    "UpperLeft_Corner": "╔",
    "UpperRight_Corner": "╗",
    "MiddleLine": "═",
    "MiddleDownLine": "╦",
    "MiddleUpLine": "╩",
    "MiddleEdge": "║",
    "Cross": "╬",
    "LeftLineLeft": "╠",
    "RightLineRight": "╣",
    "BottomLeft_Corner": "╚",
    "BottomRight_Corner": "╝"
}

exports.setColumns = function(column_width_array) {
    if(!util.isArray(column_width_array)) { 
        return "[x] Error, Incorrect argument value!";
    }
    this.TableConfig.columns_wdith = column_width_array;
}

exports.createHeader = function(column_value_array) {
    if(!util.isArray(column_value_array)) {
        return "[x] Error, Incorrect argument value!";
    }

    var topline = this.Symbol.UpperLeft_Corner;
    console.log(topline)

    this.TableConfig.columns_wdith.forEach(col => {
        for(i = 0; i < parseInt(col); i++) {
            topline = topline + this.Symbol.MiddleLine;
        }
        topline = topline + this.Symbol.MiddleEdge;
    });

    return topline;
}

exports.addStr = function(str, addStr) {
    return str + addStr;
}

exports.createRow = function(row_values) {

}


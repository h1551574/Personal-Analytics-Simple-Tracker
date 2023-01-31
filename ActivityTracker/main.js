"use strict";
exports.__esModule = true;
var message = 'Hello W2orld';
console.log(message);
var fs = require("fs");
var content = 'Some content!';
var folderName = './Data';
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
}
catch (err) {
    console.error(err);
}
fs.writeFile('./Data/test.txt', content, function (err) {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
var user_input_tracker_1 = require("user-input-tracker");
var userInputHeaders = "tsStart,tsEnd,clickTotal,keyTotal,movedDistance,scrollDelta\n";
fs.writeFile('./Data/UserInput.csv', userInputHeaders, function (err) {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
var tracker = new user_input_tracker_1.UserInputTracker(function (aggregate) {
    var userInputString = "";
    console.log(aggregate);
    userInputString = "".concat(aggregate.tsStart.toISOString(), ",").concat(aggregate.tsEnd.toISOString(), ",").concat(aggregate.clickTotal, ",").concat(aggregate.keyTotal, ", ").concat(aggregate.movedDistance, ", ").concat(aggregate.scrollDelta, "\n");
    fs.appendFile('./Data/UserInput.csv', userInputString, function (err) {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
});
tracker.start();
var windows_activity_tracker_1 = require("windows-activity-tracker");
var windowsActivityHeaders = "ts,windowTitle,process,url,activity\n";
fs.writeFile('./Data/WindowsActivity.csv', windowsActivityHeaders, function (err) {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
var wtracker = new windows_activity_tracker_1.WindowsActivityTracker(function (activeWin) {
    console.log(activeWin);
    var windowsActivityString = "".concat(activeWin.ts.toISOString(), ",\"").concat(activeWin.windowTitle, "\",\"").concat(activeWin.process, "\", ").concat(activeWin.url, ", ").concat(activeWin.activity, "\n");
    fs.appendFile('./Data/WindowsActivity.csv', windowsActivityString, function (err) {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
});
wtracker.start();

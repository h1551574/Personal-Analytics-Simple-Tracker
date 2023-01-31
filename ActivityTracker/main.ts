let message: string = 'Hello W2orld';
console.log(message);


import * as fs from "fs";

const content = 'Some content!';

const folderName = './Data';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

fs.writeFile('./Data/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

import { UserInputTracker } from "user-input-tracker";
import UserInputAggregate from "user-input-tracker/dist/types/UserInputAggregate";


const userInputHeaders = "tsStart,tsEnd,clickTotal,keyTotal,movedDistance,scrollDelta\n";

fs.writeFile('./Data/UserInput.csv', userInputHeaders, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const tracker = new UserInputTracker(function (aggregate) {
  var userInputString = "";
  console.log(aggregate);
  userInputString = `${aggregate.tsStart.toISOString()},${aggregate.tsEnd.toISOString()},${aggregate.clickTotal},${aggregate.keyTotal}, ${aggregate.movedDistance}, ${aggregate.scrollDelta}\n` ;
  fs.appendFile('./Data/UserInput.csv', userInputString, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});

tracker.start();

import { WindowsActivityTracker } from "windows-activity-tracker";


const windowsActivityHeaders = "ts,windowTitle,process,url,activity\n";

fs.writeFile('./Data/WindowsActivity.csv', windowsActivityHeaders, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const wtracker = new WindowsActivityTracker(function (activeWin) {
  console.log(activeWin);
  const windowsActivityString = `${activeWin.ts.toISOString()},"${activeWin.windowTitle}","${activeWin.process}", ${activeWin.url}, ${activeWin.activity}\n`;
  fs.appendFile('./Data/WindowsActivity.csv', windowsActivityString, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});

wtracker.start();
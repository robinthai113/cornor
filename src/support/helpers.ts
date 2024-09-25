import { DataTable } from "@cucumber/cucumber";
const os = require('os');
import { exec } from 'child_process';
class Helpers {
  constructor() { }
  async convertDataTableToMap(dataTable: DataTable): Promise<Map<string, string>> {
    const data = dataTable.raw();
    const headers = data[0];
    const values = data[1];
    const expectedMetadata = new Map<string, any>();
    for (let i = 0; i < headers.length; i++) {
      const column = headers[i];
      const value = values[i];
      expectedMetadata.set(column, value);
    }
    return expectedMetadata;
  }

  async extractDataTableToArrayListMap(dataTable: DataTable): Promise<Map<string, any>[]> {
    const data = dataTable.raw()
    const headers = data[0]
    let mapArray: Map<string, any>[] = []
    for (let i = 1; i < data.length; i++) {
      let rowMap = new Map<string, any>();
      for (let j = 0; j < headers.length; j++) {
        rowMap.set(headers[j], data[i][j]);
      }
      mapArray.push(rowMap);
    }
    return mapArray
  }

  async extractDataTableToArray(dataTable: DataTable): Promise<string[]> {
    const data = dataTable
      .raw()
      .slice(1)
      .map((row) => row[0]);
    return data
  }

  async extractPlusTodayToNumber(str: string): Promise<string> {
    // Updated regular expression to include optional + or - signs
    const matches = str.match(/[+-]?\d+/);
    return matches ? matches[0] : "";
  }

  async killChrome() {
    let command;

    switch (os.platform()) {
      case 'win32': // Windows
        command = 'taskkill /F /IM chrome.exe';
        break;
      case 'linux': // Linux
        command = 'pkill -f chrome';
        break;
      case 'darwin': // macOS
        command = 'pkill -f Chrome';
        break;
      default:
        console.log('Unsupported platform');
        return;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
        return;
      }
      console.log('stdout:', stdout);
      console.error('stderr:', stderr);
    });
  }

  async deepCompare(map1: Map<string, Map<string, any>[]>, map2: Map<string, Map<string, any>[]>) {
    if (map1.size !== map2.size) {
      console.log("The maps have different sizes.");
      return false;
    }

    for (const [key, value] of map1) {
      if (!map2.has(key)) {
        console.log(`Key ${key} is missing in the second map.`);
        return false;
      }

      const value2 = map2.get(key);
      if (!value2) {
        console.log(`Value for key ${key} is undefined in the second map.`);
        return false;
      }

      if (value.length !== value2.length) {
        console.log(`The arrays for key ${key} have different lengths.`);
        return false;
      }

      for (let i = 0; i < value.length; i++) {
        const map1Entry = value[i];
        const map2Entry = value2[i];

        for (const [date, hours] of map1Entry) {
          if (!map2Entry.has(date)) {
            console.log(`Date ${date} for key ${key} is missing in the second map.`);
            return false;
          }
          if (map2Entry.get(date) !== hours) {
            console.log(
              `Value for date ${date} and key ${key} differs. Expected: ${hours}, Found: ${map2Entry.get(
                date,
              )}`,
            );
            return false;
          }
        }
      }
    }
    console.log("The maps are identical.");
    return true;
  }
}
export default Helpers;

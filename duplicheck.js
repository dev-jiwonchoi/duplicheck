import fs from 'fs';
import path from 'path';
const filePath = path.join('./', 'check-this.txt');

export default function CheckDuplicates() {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (!err) {
      const dataArray = data.split('\n');

      const findDuplicates = (array) => {
        const duplicateData = array.filter(
          (element, index) => array.indexOf(element) !== index
        );
        return [...new Set(duplicateData)];
      };

      const duplicates = findDuplicates(dataArray);

      const newFilePath = path.join('./', 'duplicates.txt');
      fs.writeFile(newFilePath, duplicates.join('\n'), (err) => {
        if (!err) {
          console.log('File created successfully!');
        } else {
          console.error(err);
          return;
        }
      });
    } else {
      console.error(err);
    }
  });
}

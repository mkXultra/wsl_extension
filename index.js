const fs = require('fs');

function main(params) {
  const exFile = fs.readFileSync('./extension.json', 'utf8');
  // console.log("🚀 ~ file: index.js:5 ~ main ~ exFile", exFile)
  const ex = JSON.parse(exFile);
  // console.log("🚀 ~ file: index.js:7 ~ main ~ ex", ex)
  const extensionList = ex.reduce((acc, cur) => {
    acc.push(cur.identifier.id)
    return acc
  },[]);
  console.log("🚀 ~ file: index.js:12 ~ extensionList ~ extensionList", extensionList)
}

main()
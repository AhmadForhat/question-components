const prompt = require('prompt');
const fs = require('fs');

const readWriteAsync = (version) => {
  fs.readFile('./src/components/package.json', 'utf-8', (err, data) => {
    if (err) throw err;

    const objData = JSON.parse(data)

    const newData = JSON.stringify({...objData, version: version})

    fs.writeFile('./src/components/package.json', newData, 'utf-8',  (err) => {
      if (err) throw err;
      console.log(`package reenscrito para a versão ${version}`);
    });
  });
}

const properties = [
    {
        name: 'version',
    },
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    readWriteAsync(result.version)
});

function onErr(err) {
    console.log(err);
    return 'deu ruim!!!';
}
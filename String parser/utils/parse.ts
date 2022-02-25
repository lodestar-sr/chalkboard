import * as fs from 'fs';

const example = {
  'ab49fd20': {
    key_1: 'some data'
  },
  '9822df87': {
    another_key: 'big data',
    yet_another_key: 'small data'
  }
};

export const parse = async (path) => {
  fs.readFile(path, 'utf8', function(err, data) {
    console.log('input: ', data);

    const list = data.match(/{{ (\d|\w|\.|_)+ }}/g);
    if (list && list.length > 0) {
      let result = data;
      list.forEach((item) => {
        const main = item.replace('{{', '').replace('}}', '').trim();
        const terms = main.split('.');
        const key = terms[0];
        const value = terms[1];
        if (example[key] && example[key][value]) {
          result = result.replace(item, example[key][value]);
        } else {
          result = result.replace(item, '<nothing>');
        }
      });

      console.log('output: ', result);
    }
  });
};

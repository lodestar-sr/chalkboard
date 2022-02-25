import { runCli, Command } from 'command-line-interface';

import { parse } from './utils/parse';

export interface Options {
  path: string;
}

const audioDivide: Command<Options> = {
  name: 'Audio divide',
  description: 'Command line which generates the segment descriptor',

  optionDefinitions: [
    {
      name: 'path',
      description: 'The text file path.',
      type: 'string',
      alias: 'p',
      defaultValue: ''
    },
  ],

  async handle({options}) {
    await parse(options.path);
  }
};

runCli({ rootCommand: audioDivide, argv: process.argv }).then(() => {});

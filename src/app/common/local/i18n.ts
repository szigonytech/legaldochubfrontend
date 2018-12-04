// import * as path from 'path';
// import * as glob from 'glob';
// import { messages as en } from './en';

// export const messages = en;

// export namespace Server {
//   // Languages for which messages are defined under this dir are acceptable
//   export const acceptableLanguages = glob.sync(`${__dirname}/*.js`)
//     .map((file: any) => path.basename(file, '.js'))
//     .filter((language: string) => language !== 'index');

//   // require messages for each language and cache
//   const map = acceptableLanguages.reduce((acc: any, language: string) => {
//     acc[language] = require(`./${language}`).messages;
//     return acc;
//   },
//     {} as { [language: string]: typeof messages });

//   /**
//    * Returns a messages object for the specified language
//    */
//   export function messagesOf(language: string): typeof messages {
//     return map[language];
//   }
// }
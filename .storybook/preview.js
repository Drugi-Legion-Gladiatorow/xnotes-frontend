import '../src/index.scss';
// import global styles for every component

// set custom viewports:
// const customViewports = {
//   kindleFire2: {
//     name: 'Kindle Fire 2',
//     styles: {
//       width: '600px',
//       height: '963px',
//     },
//   },
//   kindleFireHD: {
//     name: 'Kindle Fire HD',
//     styles: {
//       width: '533px',
//       height: '801px',
//     },
//   },
// };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // we can set available background for testing here;
  // by default there are two colors: light & dark
  // backgrounds: {
  //   default: 'twitter',
  //   values: [
  //       {
  //           name: 'twitter',
  //           value: '#00aced'
  //       },
  //       {
  //           name: 'facebook',
  //           value: '#3b5998'
  //       },
  //     ],
  //   },

  // setting custom viewports for testing
  // viewport: { viewports: customViewports },
};

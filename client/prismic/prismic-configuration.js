module.exports = {

  apiEndpoint: 'https://your-repo-name.prismic.io/api',

  // -- Access token if the Master is not open
  accessToken: 'MC5XRWFJX1NnQUFDb0F0X1R6.77-977-977-9Be-_vUrvv73vv70Y77-977-977-977-9du-_ve-_vXnvv70pJCvvv70R77-9XO-_vRgd77-977-977-977-9',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    return '/';
  }
};

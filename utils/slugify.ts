import slugify from 'slugify';

slugify.extend({
  '"': '',
  "'": '',
});

export default (str) => slugify(str, { strict: true });

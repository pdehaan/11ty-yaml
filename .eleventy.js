const JSON5 = require("json5");
const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  eleventyConfig.addDataExtension("json", contents => JSON5.parse(contents));

  return {};
};

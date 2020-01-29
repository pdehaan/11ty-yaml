# 11ty-yaml

Testing .yaml file support for global _data data files.

## USAGE

Per https://www.11ty.dev/docs/data-custom/, it looks like you can add support for YAML/TOML/custom data file types using the `eleventyConfig.addDataExtension()` method in your .eleventy.js config file:

```js
const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  return {};
};
```

Note that you need to be careful when specifying your extension. The above example only supports \*.yaml files, not \*.yml files (something that has bitten me a few times).

# grunt-maxlines

Enforce a maximum number of lines for your source files. Once a file goes beyond
the specified limit, your build will fail.

This plugin simply wraps the [sloc][1] package to determine the number of lines
in each file and raises a warning if appropriate. So all kudos belongs to the
authors of that package!

## Getting Started

This plugin requires Grunt `~0.4.2`

To install the plugin run following command in your project's directory:

```shell
npm install grunt-maxlines --save-dev
```

Once you've completed this set, add the plugin to your Gruntfile.js.

```js
grunt.loadNpmTasks('grunt-maxlines');
```

## The "maxlines" task

In your project's Gruntfile's initConfig section add a section named `maxlines`
that configures all the file size limits you want to enforce.

```js
grunt.initConfig({
  maxlines: {
    options: {
      // Task-specific options go here.
      limit: 500
    },
    javascript: {
      // Target-specific file lists and/or options go here.
      options: {
        limit: 300
      },
      files: ['src/**/*.js']
    },
    scss: {
      options: {
        limit: 1000
      },
      files: ['resources/**/*.scss']
    }
  }
});
```

### Options

#### options.limit

Type: `Integer`
Default value: `500`

This value sets the maximum number of lines that are allowed.
Any files going beyond that limit will trigger a warning.

#### options.metric

Type: `String`
Default value: `sloc`
Possible values: sloc, loc, loc, cloc, scloc, mcloc, nloc

Defines what metric should be applied to determine if a file has reached the
defined limit or not.

## License

This plugin is licensed under the GPLv3 license due to one of its dependencies
being published under this license.

[1]: https://www.npmjs.org/package/sloc

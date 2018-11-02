# :fork_and_knife: This is a fork.

Compared to `prettier`, `@btmills/prettier` moves binary operators to the beginning of new lines in long expressions instead of the end of the previous line. That's it.

```js
// Before:
const before =
  bom.length >= 2 &&
  ((bom.charCodeAt(0) === 0xff && bom.charCodeAt(1) === 0xfe) ||
    (bom.charCodeAt(0) === 0xfe && bom.charCodeAt(1) === 0xff));

// After:
const after =
  bom.length >= 2
  && ((bom.charCodeAt(0) === 0xff && bom.charCodeAt(1) === 0xfe)
    || (bom.charCodeAt(0) === 0xfe && bom.charCodeAt(1) === 0xff));
```

## Usage

If you use Yarn, you can [install using an alias](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias) so that `require('prettier')` transparently resolves to this fork:

```sh
$ yarn add -D prettier@npm:@btmills/prettier
```

## Releases

Releases of the forked package are done by rebasing the `line-before-operator` branch on top of the most recent version tag in `master`.

```sh
# Get the latest changes and update the master branch
$ git checkout master
$ git pull
$ git push fork
# Rebase the release branch on the latest version
$ git checkout line-before-operator
$ git rebase x.y.z
# Fix conflicts as necessary
$ git rebase --continue
# Update packages to give accurate test results
$ yarn install
# If any conflicts in snapshots, discard and update automatically
$ yarn test -u
# With rebasing done, run tests, push tags, build, and publish
$ yarn test
$ git tag x.y.z-fork
$ git push --force-with-lease
$ git push --tags
$ yarn run build
$ yarn run test:dist
$ cd dist
$ npm publish
```

---

![Prettier Banner](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

<h2 align="center">Opinionated Code Formatter</h2>

<p align="center">
  <em>
    JavaScript
    · TypeScript
    · Flow
    · JSX
    · JSON
  </em>
  <br />
  <em>
    CSS
    · SCSS
    · Less
  </em>
  <br />
  <em>
    HTML
    · Vue
    · Angular
  </em>
  <br />
  <em>
    GraphQL
    · Markdown
    · YAML
  </em>
  <br />
  <em>
    <a href="https://prettier.io/docs/en/plugins.html">
      Your favorite language?
    </a>
  </em>
</p>

<p align="center">
  <a href="https://dev.azure.com/prettier/prettier/_build/latest?definitionId=5">
    <img alt="Azure Pipelines Build Status" src="https://img.shields.io/azure-devops/build/prettier/79013671-677c-4846-a6d8-3050d40e21c0/5.svg?style=flat-square&label=build&branchName=master"></a>
  <a href="https://codecov.io/gh/prettier/prettier">
    <img alt="Codecov Coverage Status" src="https://img.shields.io/codecov/c/github/prettier/prettier.svg?style=flat-square"></a>
  <a href="https://twitter.com/acdlite/status/974390255393505280">
    <img alt="Blazing Fast" src="https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square"></a>
  <br/>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/v/prettier.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="weekly downloads from npm" src="https://img.shields.io/npm/dw/prettier.svg?style=flat-square"></a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
  <a href="https://gitter.im/jlongster/prettier">
    <img alt="Chat on Gitter" src="https://img.shields.io/gitter/room/jlongster/prettier.svg?style=flat-square"></a>
  <a href="https://twitter.com/PrettierCode">
    <img alt="Follow Prettier on Twitter" src="https://img.shields.io/twitter/follow/prettiercode.svg?label=follow+prettier&style=flat-square"></a>
</p>

## Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Input

<!-- prettier-ignore -->
```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

### Output

```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Prettier can be run [in your editor](http://prettier.io/docs/en/editors.html) on-save, in a [pre-commit hook](https://prettier.io/docs/en/precommit.html), or in [CI environments](https://prettier.io/docs/en/cli.html#list-different) to ensure your codebase has a consistent style without devs ever having to post a nit-picky comment on a code review ever again!

---

**[Documentation](https://prettier.io/docs/en/)**

<!-- prettier-ignore -->
[Install](https://prettier.io/docs/en/install.html) ·
[Options](https://prettier.io/docs/en/options.html) ·
[CLI](https://prettier.io/docs/en/cli.html) ·
[API](https://prettier.io/docs/en/api.html)

**[Playground](https://prettier.io/playground/)**

---

## Badge

Show the world you're using _Prettier_ → [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

```md
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-05-04)

<section class="breaking-changes">

### BREAKING CHANGES

-   [`62ed403`](https://github.com/stdlib-js/stdlib/commit/62ed40363834199d5dfabb4968d9f63a6539b198): drop support for default options

    -   Previously, the `factory` method supported providing defaults for
        various ndarray options (e.g., readonly, mode, order, etc). These
        options have been removed. Instead, users should pass them along
        to the main API for generating pseudorandom numbers. To replicate
        previous functionality, create your own wrapper which uses partial
        application to pass a set of \"default\" options for each invocation
        of the PRNG function.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`b1d7e8d`](https://github.com/stdlib-js/stdlib/commit/b1d7e8d50fc1d123e89d308607c366d96d713d61) - **docs:** update example _(by Athan Reines)_
-   [`b8db168`](https://github.com/stdlib-js/stdlib/commit/b8db1682f82b5c08a2a09627a21804d1739cced4) - **docs:** use attribute accessors in examples _(by Athan Reines)_
-   [`67aa7ca`](https://github.com/stdlib-js/stdlib/commit/67aa7ca9ea5da37363b35c20b79de1a378ed0e27) - **bench:** only test a limited set of dtypes _(by Athan Reines)_
-   [`4bf3aff`](https://github.com/stdlib-js/stdlib/commit/4bf3affb16d7937ab4defb95176717591b09bfcd) - **chore:** update copyright years _(by Athan Reines)_
-   [`85ef704`](https://github.com/stdlib-js/stdlib/commit/85ef7049f33b79c07dab1759a7598621f6487a2b) - **test:** add `factory` tests _(by Athan Reines)_
-   [`70c65cc`](https://github.com/stdlib-js/stdlib/commit/70c65ccc932d3c5e6ed7022d9355cd0c17814c26) - **test:** add tests for `assign` method _(by Athan Reines)_
-   [`d446f58`](https://github.com/stdlib-js/stdlib/commit/d446f589c82f39e212a4c0491d1e97e44e2293c8) - **test:** remove `float32` tests _(by Athan Reines)_
-   [`62ed403`](https://github.com/stdlib-js/stdlib/commit/62ed40363834199d5dfabb4968d9f63a6539b198) - **refactor:** migrate to `random/tools/unary-factory` and drop support for default options _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

<section class="commits">

### Commits

<details>

-   [`5f66800`](https://github.com/stdlib-js/stdlib/commit/5f66800facbc7d7b173e77ca1273d89d348ba5f1) - **test:** fix function invocations _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="bug-fixes">

### Bug Fixes

-   [`76fedac`](https://github.com/stdlib-js/stdlib/commit/76fedac7c077e6c4464fc19c8babf0e51dfda187) - update data type alias

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`76fedac`](https://github.com/stdlib-js/stdlib/commit/76fedac7c077e6c4464fc19c8babf0e51dfda187) - **fix:** update data type alias _(by Athan Reines)_
-   [`23114c6`](https://github.com/stdlib-js/stdlib/commit/23114c65f67ea8c17fc835e280408c39544dfa76) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version
-   [`e44f8c0`](https://github.com/stdlib-js/stdlib/commit/e44f8c04cf659116ff94957106a66c415ff31b8a) - add `random/exponential`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`2b4e703`](https://github.com/stdlib-js/stdlib/commit/2b4e70368f6e660231aea893f149fd5368c29a5a) - add missing argument to function invocation

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`307c8e6`](https://github.com/stdlib-js/stdlib/commit/307c8e635fbfd9fddff508b8aa38372001a495a9) - **docs:** fix grammar _(by Athan Reines)_
-   [`dd64c1f`](https://github.com/stdlib-js/stdlib/commit/dd64c1f8adecb90cf7fcde7f86aab19526c4f000) - **docs:** update option description _(by Athan Reines)_
-   [`722eb30`](https://github.com/stdlib-js/stdlib/commit/722eb308a795baca6ac308ecb41b8245f8ab21d4) - **docs:** update option description _(by Athan Reines)_
-   [`bfd5970`](https://github.com/stdlib-js/stdlib/commit/bfd597009a78c34821300c9da74dd4eb297ad87a) - **docs:** update description for `submode` option _(by Athan Reines)_
-   [`f0945c7`](https://github.com/stdlib-js/stdlib/commit/f0945c79fd8370bb80fb4ec020c2471b7ca313b0) - **test:** add tests for the main export _(by Athan Reines)_
-   [`2b4e703`](https://github.com/stdlib-js/stdlib/commit/2b4e70368f6e660231aea893f149fd5368c29a5a) - **fix:** add missing argument to function invocation _(by Athan Reines)_
-   [`b9b4847`](https://github.com/stdlib-js/stdlib/commit/b9b48479cd3e74b76aaa360252d036d1365bb8b2) - **docs:** update copy _(by Athan Reines)_
-   [`e44f8c0`](https://github.com/stdlib-js/stdlib/commit/e44f8c04cf659116ff94957106a66c415ff31b8a) - **feat:** add `random/exponential` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->


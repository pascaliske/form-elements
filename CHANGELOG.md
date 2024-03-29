## [5.0.1](https://github.com/pascaliske/form-elements/compare/v5.0.0...v5.0.1) (2022-05-27)


### Bug Fixes

* **f-password:** use new icon prop type from font awesome ([d87484e](https://github.com/pascaliske/form-elements/commit/d87484eae42475c5a1fd88a64d38c98dfa08f040))



# [5.0.0](https://github.com/pascaliske/form-elements/compare/v4.0.0...v5.0.0) (2022-02-28)


### Features

* upgrade to choices v10 ([dfa0aee](https://github.com/pascaliske/form-elements/commit/dfa0aee0a88f572435238ba5be9b1b70988e9b6c))


### BREAKING CHANGES

* This requires an upgrade to choices.js@^10.0.0.



# [4.0.0](https://github.com/pascaliske/form-elements/compare/v3.0.1...v4.0.0) (2022-02-15)


### Bug Fixes

* **entrypoint:** add missing export for f-form component ([314014a](https://github.com/pascaliske/form-elements/commit/314014aa4038f3a67669492720e92b656711b3f1))
* **f-error:** use type-only import for validation type ([adf37c0](https://github.com/pascaliske/form-elements/commit/adf37c022ccc80ce1cfdf009f2a3d1ee52c7b1ef))


### Features

* enable partial compilation mode using ivy ([2ea771e](https://github.com/pascaliske/form-elements/commit/2ea771e76d9a7a6b0a66116fe7ad54c48a5abbc4))
* upgrade storybook to latest version ([990a129](https://github.com/pascaliske/form-elements/commit/990a129bbc96ee206f5c9d451829cbd4131122de))


### BREAKING CHANGES

* This library is now distributed using partial compilation mode for Angular Ivy.
See here for more information: https://github.com/angular/angular/issues/38366



## [3.0.1](https://github.com/pascaliske/form-elements/compare/v3.0.0...v3.0.1) (2021-05-25)



# [3.0.0](https://github.com/pascaliske/form-elements/compare/v2.8.1...v3.0.0) (2021-05-03)



## [2.8.1](https://github.com/pascaliske/form-elements/compare/v2.8.0...v2.8.1) (2020-10-09)


### Bug Fixes

* **f-input:** allow preselecting option by value only ([87e2d6a](https://github.com/pascaliske/form-elements/commit/87e2d6a96b3d2dcc402ca9f427dc96872f3f82a8))
* fix layering issue of select box ([008c5c8](https://github.com/pascaliske/form-elements/commit/008c5c8316187959383c19c1f75ddf532cc489d7))



# [2.8.0](https://github.com/pascaliske/form-elements/compare/v2.7.5...v2.8.0) (2020-10-09)


### Bug Fixes

* **f-input:** only emit unchanged value changes once ([28fad7c](https://github.com/pascaliske/form-elements/commit/28fad7ce4f2bbeddb838204e7ed1de302c8616db))
* **f-input:** use non-bubbling blur event for loosing focus ([64e9f58](https://github.com/pascaliske/form-elements/commit/64e9f58f81de68321199a8509701f11f38cc1c27))
* **f-row:** use full width for fields on smaller viewports ([39846d5](https://github.com/pascaliske/form-elements/commit/39846d59d789d964e23b75b0f62eaffe167b0c0b))
* **scss:** do not use highest layer for form controls ([058011b](https://github.com/pascaliske/form-elements/commit/058011b72d93bd4674c1a574c4facb73468efc8b))
* **scss:** fully disallow user interaction when disabled ([1868862](https://github.com/pascaliske/form-elements/commit/186886205a746e6b75a3fccab46c05a76b61953d))


### Features

* emit focus events as outputs of input fields ([876c0a5](https://github.com/pascaliske/form-elements/commit/876c0a55c576f641293a5b8380ae3f07776c2148))



## [2.7.5](https://github.com/pascaliske/form-elements/compare/v2.7.4...v2.7.5) (2020-08-06)


### Bug Fixes

* **f-checkbox:** fix checkbox click action ([7994e0b](https://github.com/pascaliske/form-elements/commit/7994e0b19ad90253672e76a6741b073f32933848))



## [2.7.4](https://github.com/pascaliske/form-elements/compare/v2.7.3...v2.7.4) (2020-08-06)


### Bug Fixes

* **f-checkbox:** add missing display block ([c8cbfe2](https://github.com/pascaliske/form-elements/commit/c8cbfe277fa08fe54f864b29f75ad492f99122cd))



## [2.7.3](https://github.com/pascaliske/form-elements/compare/v2.7.2...v2.7.3) (2020-08-06)


### Bug Fixes

* **f-checkbox:** fix multi-line label styles ([85d877b](https://github.com/pascaliske/form-elements/commit/85d877b8b2907b21df8902d03295278598bf94c4))



## [2.7.2](https://github.com/pascaliske/form-elements/compare/v2.7.1...v2.7.2) (2020-08-06)


### Features

* **f-checkbox:** allow multi-line labels and fix invalid symbol color ([88457e4](https://github.com/pascaliske/form-elements/commit/88457e477aa668c2bf1f4dcc3ec505f93f5de330))



## [2.7.1](https://github.com/pascaliske/form-elements/compare/v2.7.0...v2.7.1) (2020-07-26)


### Bug Fixes

* **f-date:** prevent initialization of datepicker if field is disabled ([2c2131e](https://github.com/pascaliske/form-elements/commit/2c2131e56a6bae9893b96eaa45923509a877b04e))



# [2.7.0](https://github.com/pascaliske/form-elements/compare/v2.6.0...v2.7.0) (2020-07-25)


### Features

* upgrade angular to v10 ([e95c02b](https://github.com/pascaliske/form-elements/commit/e95c02b9d0dd6e24e243ea5a047855628902a8aa))



# [2.6.0](https://github.com/pascaliske/form-elements/compare/v2.5.2...v2.6.0) (2020-07-01)


### Bug Fixes

* **f-select:** update choices options on input change ([c7929e7](https://github.com/pascaliske/form-elements/commit/c7929e7b852e531be016f871a8d846a1e20f1b40))


### BREAKING CHANGES

* **f-select:** This library requires lodash-es as peer dependency as of now!



## [2.5.2](https://github.com/pascaliske/form-elements/compare/v2.5.1...v2.5.2) (2020-06-21)


### Bug Fixes

* **f-email:** optimize email domain suggestions ([538b1aa](https://github.com/pascaliske/form-elements/commit/538b1aaa9e1bdfa215427783048c0e2e89c23477))
* **f-password:** disable visibility toggle on input disable ([76ce597](https://github.com/pascaliske/form-elements/commit/76ce597f85f10b4e8641e883fde70a3d8b30eb4f))
* **scss:** disallow user selection if input is disabled ([b8fc283](https://github.com/pascaliske/form-elements/commit/b8fc2835b0149350ef5eaa779231fb3fa07fc7f5))
* **scss:** properly align input line ([0916d62](https://github.com/pascaliske/form-elements/commit/0916d6284381e8961e6d16646e5a46f5ac38ddf5))


### Features

* **f-date,f-time:** add disabled stories ([9115cea](https://github.com/pascaliske/form-elements/commit/9115ceace9bbb4f26ae77d4bfe35f8be7e55c614))
* add changed output events for all form fields ([182a7e6](https://github.com/pascaliske/form-elements/commit/182a7e6b520103b1b82f5f6e1ab0ce1519779db3))



## [2.5.1](https://github.com/pascaliske/form-elements/compare/v2.5.0...v2.5.1) (2020-06-18)



# [2.5.0](https://github.com/pascaliske/form-elements/compare/v2.4.5...v2.5.0) (2020-06-18)


### Bug Fixes

* **demo:** add ids to buttons ([f785f30](https://github.com/pascaliske/form-elements/commit/f785f30a4c38b2938229f8ae934a0dde29163681))
* **f-date:** trigger focus change on flatpickr instance open/close events ([127514e](https://github.com/pascaliske/form-elements/commit/127514e1c27e78d86548047b4fcd6c143708f5cc))
* **f-error:** use lower case validation type ([4538622](https://github.com/pascaliske/form-elements/commit/4538622aa5443ea768c2668e0730963813a0a26a))
* **f-input:** allow correctly overriding field classes ([f8b3e7b](https://github.com/pascaliske/form-elements/commit/f8b3e7bbeea8dfd201b69126f9583c3fd377f9ea))
* **f-input:** fix validation typings ([ae2cc59](https://github.com/pascaliske/form-elements/commit/ae2cc596faac97b5b2f153c57f001bdd9f1f82f7))
* **f-input:** prevent form elements without form control instances ([78864f9](https://github.com/pascaliske/form-elements/commit/78864f9ac61260665a9a4d47d7b56b56a9a1e5ca))
* **f-select:** fix dropdown list styles ([01af519](https://github.com/pascaliske/form-elements/commit/01af5194d00ddf8f04773eda61f43948bdecb5d0))
* **f-select:** mark form control as touched on first dropdown close ([ac71c58](https://github.com/pascaliske/form-elements/commit/ac71c580b10091658f512ec253043c8a3695ed47))
* **form-elements:** remove module import check ([af833c8](https://github.com/pascaliske/form-elements/commit/af833c8d990c0ca5b0e1fe8a34ccc11f9fa1716c))
* use explicit type imports to prevent storybook warnings ([5067c8e](https://github.com/pascaliske/form-elements/commit/5067c8ea7dddbbd41118d31cc8fe673e1ee1b278))


### Features

* **f-select:** add required validation story ([bbac615](https://github.com/pascaliske/form-elements/commit/bbac615aa6848df370b882b7226d64d9b0ebc2f4))
* **f-select:** implement choices library for advanced select fields ([f5a7e62](https://github.com/pascaliske/form-elements/commit/f5a7e626871ab250ef725b094274ef081bfda4d7))
* **form-elements:** prevent re-importing library module ([3815bc2](https://github.com/pascaliske/form-elements/commit/3815bc265210ad8135189c58dc6eff188f5ec227))



## [2.4.5](https://github.com/pascaliske/form-elements/compare/v2.4.4...v2.4.5) (2020-03-24)



## [2.4.4](https://github.com/pascaliske/form-elements/compare/v2.4.3...v2.4.4) (2020-02-05)



## [2.4.3](https://github.com/pascaliske/form-elements/compare/v2.4.2...v2.4.3) (2020-02-05)



## [2.4.2](https://github.com/pascaliske/form-elements/compare/v2.4.1...v2.4.2) (2020-02-05)



## [2.4.1](https://github.com/pascaliske/form-elements/compare/v2.4.0...v2.4.1) (2020-02-05)



# [2.4.0](https://github.com/pascaliske/form-elements/compare/v2.3.0...v2.4.0) (2020-02-05)


### Bug Fixes

* **scss:** use transparent background as default value for all inputs ([d77c67d](https://github.com/pascaliske/form-elements/commit/d77c67d7fb9bfdfdae0cc179e9dfa751ea3c86b8))


### Features

* **f-date:** accept inputs for customizing the datepicker options ([5c53b02](https://github.com/pascaliske/form-elements/commit/5c53b022e48716e1d950063953d04fea75262801))
* **f-time:** add new time input component ([4d9fac7](https://github.com/pascaliske/form-elements/commit/4d9fac72f36c0138c1288be3b4380e9ddaa24f61))
* **scss:** inherit color of input, textarea and select ([b0682a3](https://github.com/pascaliske/form-elements/commit/b0682a3a78504555d34907d7bb1606f471e24d41))



# [2.3.0](https://github.com/pascaliske/form-elements/compare/v2.2.1...v2.3.0) (2019-07-25)


### Bug Fixes

* **f-button:** fix icon prop knob for button stories ([a712825](https://github.com/pascaliske/form-elements/commit/a712825))
* **f-button:** fix icon prop knob for button stories ([c1c6819](https://github.com/pascaliske/form-elements/commit/c1c6819))
* **f-form:** prevent default browser submit event ([7e633ac](https://github.com/pascaliske/form-elements/commit/7e633ac))
* **package:** update @fortawesome/angular-fontawesome to version 0.4.0 ([88d2777](https://github.com/pascaliske/form-elements/commit/88d2777))
* **scss:** reset outline on input fields only ([05f9eff](https://github.com/pascaliske/form-elements/commit/05f9eff))
* **storybook:** remove component declaration patch ([3f00b3c](https://github.com/pascaliske/form-elements/commit/3f00b3c))


### Features

* **storybook:** update storybook ([03a7531](https://github.com/pascaliske/form-elements/commit/03a7531))
* compatibility update for angular v8 ([6c22381](https://github.com/pascaliske/form-elements/commit/6c22381))



## [2.2.1](https://github.com/pascaliske/form-elements/compare/v2.2.0...v2.2.1) (2019-05-07)


### Bug Fixes

* **f-form:** allow custom classes with form wrapper ([dc3f02b](https://github.com/pascaliske/form-elements/commit/dc3f02b))



# [2.2.0](https://github.com/pascaliske/form-elements/compare/v2.1.0...v2.2.0) (2019-04-24)


### Bug Fixes

* **f-button:** fix background color of submit buttons ([f7cd48d](https://github.com/pascaliske/form-elements/commit/f7cd48d))
* **f-error:** initialize input with empty validation messages array ([f7dcfc4](https://github.com/pascaliske/form-elements/commit/f7dcfc4))


### Features

* **f-form:** allow direct sending of data on form submit ([141def2](https://github.com/pascaliske/form-elements/commit/141def2))



# [2.1.0](https://github.com/pascaliske/form-elements/compare/v2.0.0...v2.1.0) (2019-04-17)


### Features

* **f-form:** add general form component for wrapping form elements and handling submit events ([4d593f1](https://github.com/pascaliske/form-elements/commit/4d593f1))



# [2.0.0](https://github.com/pascaliske/form-elements/compare/v1.2.5...v2.0.0) (2019-04-03)


### Bug Fixes

* **demo:** update demo app ([bd9bd73](https://github.com/pascaliske/form-elements/commit/bd9bd73))
* **exports:** fix exports of components ([66e34a6](https://github.com/pascaliske/form-elements/commit/66e34a6))
* **f-button,f-checkbox,f-date:** fix story hierachy separator ([057507b](https://github.com/pascaliske/form-elements/commit/057507b))
* **f-date:** fix condition for disabling date picker ([496e045](https://github.com/pascaliske/form-elements/commit/496e045))
* **f-date:** import flatpickr styles globally ([f7de9cf](https://github.com/pascaliske/form-elements/commit/f7de9cf))
* **f-icon:** remove f-icon and use fa-icon directly ([b22e97a](https://github.com/pascaliske/form-elements/commit/b22e97a))
* **f-input:** fix f-input stories ([066da20](https://github.com/pascaliske/form-elements/commit/066da20))
* **f-text-area:** move styles into shared mixins ([c017264](https://github.com/pascaliske/form-elements/commit/c017264))
* **package:** update core-js to version 3.0.0 ([7992c9c](https://github.com/pascaliske/form-elements/commit/7992c9c))
* **storybook:** improve storybook style loading ([7c20cdc](https://github.com/pascaliske/form-elements/commit/7c20cdc))
* **storybook:** set base font size for alle elements ([95c05e5](https://github.com/pascaliske/form-elements/commit/95c05e5))
* **storybook:** sort stories alphabetically ([08544b1](https://github.com/pascaliske/form-elements/commit/08544b1))
* **styles:** fix global form field styles ([2f5cf81](https://github.com/pascaliske/form-elements/commit/2f5cf81))
* **styles:** remove legacy import ([4e1cd08](https://github.com/pascaliske/form-elements/commit/4e1cd08))
* **styles:** update main styles ([b7a3dcd](https://github.com/pascaliske/form-elements/commit/b7a3dcd))
* remove typings file and add typings directly to components ([e2d217f](https://github.com/pascaliske/form-elements/commit/e2d217f))


### Code Refactoring

* move dependencies to peer dependencies ([94aa1fa](https://github.com/pascaliske/form-elements/commit/94aa1fa))


### Features

* **f-button:** add stories for f-button component and optimize styles ([0a0511b](https://github.com/pascaliske/form-elements/commit/0a0511b))
* **f-checkbox:** add stories for f-checkbox component and optimize styles ([df5f73f](https://github.com/pascaliske/form-elements/commit/df5f73f))
* **f-column:** add stories for f-column component and optimize styles ([65f1598](https://github.com/pascaliske/form-elements/commit/65f1598))
* **f-date:** add stories for f-date component and optimize styles ([d3afc1f](https://github.com/pascaliske/form-elements/commit/d3afc1f))
* **f-email:** add stories for f-email component and optimize styles ([ddd7879](https://github.com/pascaliske/form-elements/commit/ddd7879))
* **f-input:** add stories for f-input ([8d476fd](https://github.com/pascaliske/form-elements/commit/8d476fd))
* **f-password:** add stories for f-password component and optimize styles ([97a5549](https://github.com/pascaliske/form-elements/commit/97a5549))
* **f-phone:** add stories for f-phone component and optimize styles ([42a7ca2](https://github.com/pascaliske/form-elements/commit/42a7ca2))
* **f-radiobutton:** add stories for f-radiobutton component and optimize styles ([5ec5a04](https://github.com/pascaliske/form-elements/commit/5ec5a04))
* **f-row:** add stories for f-row component and optimize styles ([38c417b](https://github.com/pascaliske/form-elements/commit/38c417b))
* **f-select:** add stories for f-select component and optimize styles ([bf763c1](https://github.com/pascaliske/form-elements/commit/bf763c1))
* **f-text-area:** add stories for f-text-area component and optimize styles ([6d06f37](https://github.com/pascaliske/form-elements/commit/6d06f37))
* **form-elements:** upgrade font awesome to v5 ([c0585a3](https://github.com/pascaliske/form-elements/commit/c0585a3))
* **storybook:** add module dependencies for all stories ([bb36a04](https://github.com/pascaliske/form-elements/commit/bb36a04))
* **storybook:** setup storybook for form-elements ([0fc8361](https://github.com/pascaliske/form-elements/commit/0fc8361))


### BREAKING CHANGES

* Remove direct dependency on flatpickr and fuzzysearch and move them to peerDependencies. Users should install them by themselves.



## [1.2.5](https://github.com/pascaliske/form-elements/compare/v1.2.4...v1.2.5) (2019-02-24)


### Bug Fixes

* **package:** update flatpickr to version 4.5.4 ([f78e5fb](https://github.com/pascaliske/form-elements/commit/f78e5fb)), closes [#38](https://github.com/pascaliske/form-elements/issues/38)
* **package:** update flatpickr to version 4.5.4 ([4715e01](https://github.com/pascaliske/form-elements/commit/4715e01)), closes [#38](https://github.com/pascaliske/form-elements/issues/38)


### Features

* **module:** allow direct integration of form elements through dynamic-components ([551c8a0](https://github.com/pascaliske/form-elements/commit/551c8a0)), closes [#40](https://github.com/pascaliske/form-elements/issues/40)



## [1.2.4](https://github.com/pascaliske/form-elements/compare/v1.2.3...v1.2.4) (2019-02-01)



## [1.2.3](https://github.com/pascaliske/form-elements/compare/v1.2.2...v1.2.3) (2019-02-01)





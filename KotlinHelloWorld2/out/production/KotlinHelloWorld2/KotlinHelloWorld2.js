if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinHelloWorld2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinHelloWorld2'.");
}
var KotlinHelloWorld2 = function (_, Kotlin) {
  'use strict';
  function main(args) {
    console.log('test3');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('KotlinHelloWorld2', _);
  return _;
}(typeof KotlinHelloWorld2 === 'undefined' ? {} : KotlinHelloWorld2, kotlin);

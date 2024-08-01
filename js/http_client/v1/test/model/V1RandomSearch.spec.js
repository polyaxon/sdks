/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1RandomSearch();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1RandomSearch', function() {
    it('should create an instance of V1RandomSearch', function() {
      // uncomment below and update the code to test V1RandomSearch
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be.a(PolyaxonSdk.V1RandomSearch);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

    it('should have the property numRuns (base name: "numRuns")', function() {
      // uncomment below and update the code to test the property numRuns
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

    it('should have the property seed (base name: "seed")', function() {
      // uncomment below and update the code to test the property seed
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

    it('should have the property concurrency (base name: "concurrency")', function() {
      // uncomment below and update the code to test the property concurrency
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

    it('should have the property earlyStopping (base name: "earlyStopping")', function() {
      // uncomment below and update the code to test the property earlyStopping
      //var instance = new PolyaxonSdk.V1RandomSearch();
      //expect(instance).to.be();
    });

  });

}));

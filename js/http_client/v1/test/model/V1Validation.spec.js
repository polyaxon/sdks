/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
    instance = new PolyaxonSdk.V1Validation();
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

  describe('V1Validation', function() {
    it('should create an instance of V1Validation', function() {
      // uncomment below and update the code to test V1Validation
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be.a(PolyaxonSdk.V1Validation);
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property gt (base name: "gt")', function() {
      // uncomment below and update the code to test the property gt
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property ge (base name: "ge")', function() {
      // uncomment below and update the code to test the property ge
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property lt (base name: "lt")', function() {
      // uncomment below and update the code to test the property lt
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property le (base name: "le")', function() {
      // uncomment below and update the code to test the property le
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property multipleOf (base name: "multipleOf")', function() {
      // uncomment below and update the code to test the property multipleOf
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property minDigits (base name: "minDigits")', function() {
      // uncomment below and update the code to test the property minDigits
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property maxDigits (base name: "maxDigits")', function() {
      // uncomment below and update the code to test the property maxDigits
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property decimalPlaces (base name: "decimalPlaces")', function() {
      // uncomment below and update the code to test the property decimalPlaces
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property regex (base name: "regex")', function() {
      // uncomment below and update the code to test the property regex
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property minLength (base name: "minLength")', function() {
      // uncomment below and update the code to test the property minLength
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "maxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property contains (base name: "contains")', function() {
      // uncomment below and update the code to test the property contains
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property excludes (base name: "excludes")', function() {
      // uncomment below and update the code to test the property excludes
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property minItems (base name: "minItems")', function() {
      // uncomment below and update the code to test the property minItems
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property maxItems (base name: "maxItems")', function() {
      // uncomment below and update the code to test the property maxItems
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property keys (base name: "keys")', function() {
      // uncomment below and update the code to test the property keys
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property containsKeys (base name: "containsKeys")', function() {
      // uncomment below and update the code to test the property containsKeys
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

    it('should have the property excludesKeys (base name: "excludesKeys")', function() {
      // uncomment below and update the code to test the property excludesKeys
      //var instance = new PolyaxonSdk.V1Validation();
      //expect(instance).to.be();
    });

  });

}));

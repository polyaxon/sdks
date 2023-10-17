/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
    instance = new PolyaxonSdk.V1Stage();
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

  describe('V1Stage', function() {
    it('should create an instance of V1Stage', function() {
      // uncomment below and update the code to test V1Stage
      //var instance = new PolyaxonSdk.V1Stage();
      //expect(instance).to.be.a(PolyaxonSdk.V1Stage);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1Stage();
      //expect(instance).to.be();
    });

    it('should have the property stage (base name: "stage")', function() {
      // uncomment below and update the code to test the property stage
      //var instance = new PolyaxonSdk.V1Stage();
      //expect(instance).to.be();
    });

    it('should have the property stage_conditions (base name: "stage_conditions")', function() {
      // uncomment below and update the code to test the property stage_conditions
      //var instance = new PolyaxonSdk.V1Stage();
      //expect(instance).to.be();
    });

  });

}));

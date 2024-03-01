/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.2
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
    instance = new PolyaxonSdk.V1Schedule();
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

  describe('V1Schedule', function() {
    it('should create an instance of V1Schedule', function() {
      // uncomment below and update the code to test V1Schedule
      //var instance = new PolyaxonSdk.V1Schedule();
      //expect(instance).to.be.a(PolyaxonSdk.V1Schedule);
    });

    it('should have the property cron (base name: "cron")', function() {
      // uncomment below and update the code to test the property cron
      //var instance = new PolyaxonSdk.V1Schedule();
      //expect(instance).to.be();
    });

    it('should have the property datetime (base name: "datetime")', function() {
      // uncomment below and update the code to test the property datetime
      //var instance = new PolyaxonSdk.V1Schedule();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instance = new PolyaxonSdk.V1Schedule();
      //expect(instance).to.be();
    });

  });

}));

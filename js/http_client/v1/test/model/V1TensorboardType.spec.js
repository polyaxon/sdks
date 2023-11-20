/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.1
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
    instance = new PolyaxonSdk.V1TensorboardType();
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

  describe('V1TensorboardType', function() {
    it('should create an instance of V1TensorboardType', function() {
      // uncomment below and update the code to test V1TensorboardType
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be.a(PolyaxonSdk.V1TensorboardType);
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be();
    });

    it('should have the property uuids (base name: "uuids")', function() {
      // uncomment below and update the code to test the property uuids
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be();
    });

    it('should have the property use_names (base name: "use_names")', function() {
      // uncomment below and update the code to test the property use_names
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be();
    });

    it('should have the property path_prefix (base name: "path_prefix")', function() {
      // uncomment below and update the code to test the property path_prefix
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new PolyaxonSdk.V1TensorboardType();
      //expect(instance).to.be();
    });

  });

}));

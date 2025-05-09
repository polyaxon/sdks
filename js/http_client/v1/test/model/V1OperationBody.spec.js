/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
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
    instance = new PolyaxonSdk.V1OperationBody();
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

  describe('V1OperationBody', function() {
    it('should create an instance of V1OperationBody', function() {
      // uncomment below and update the code to test V1OperationBody
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be.a(PolyaxonSdk.V1OperationBody);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property is_managed (base name: "is_managed")', function() {
      // uncomment below and update the code to test the property is_managed
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property managed_by (base name: "managed_by")', function() {
      // uncomment below and update the code to test the property managed_by
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

    it('should have the property meta_info (base name: "meta_info")', function() {
      // uncomment below and update the code to test the property meta_info
      //var instance = new PolyaxonSdk.V1OperationBody();
      //expect(instance).to.be();
    });

  });

}));

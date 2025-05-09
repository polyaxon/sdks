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
    instance = new PolyaxonSdk.PoliciesV1Api();
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

  describe('PoliciesV1Api', function() {
    describe('createPolicy', function() {
      it('should call createPolicy successfully', function(done) {
        //uncomment below and update the code to test createPolicy
        //instance.createPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePolicy', function() {
      it('should call deletePolicy successfully', function(done) {
        //uncomment below and update the code to test deletePolicy
        //instance.deletePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPolicy', function() {
      it('should call getPolicy successfully', function(done) {
        //uncomment below and update the code to test getPolicy
        //instance.getPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPolicies', function() {
      it('should call listPolicies successfully', function(done) {
        //uncomment below and update the code to test listPolicies
        //instance.listPolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPolicyNames', function() {
      it('should call listPolicyNames successfully', function(done) {
        //uncomment below and update the code to test listPolicyNames
        //instance.listPolicyNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchPolicy', function() {
      it('should call patchPolicy successfully', function(done) {
        //uncomment below and update the code to test patchPolicy
        //instance.patchPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePolicy', function() {
      it('should call updatePolicy successfully', function(done) {
        //uncomment below and update the code to test updatePolicy
        //instance.updatePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

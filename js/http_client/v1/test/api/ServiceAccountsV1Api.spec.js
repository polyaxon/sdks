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
    instance = new PolyaxonSdk.ServiceAccountsV1Api();
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

  describe('ServiceAccountsV1Api', function() {
    describe('createServiceAccount', function() {
      it('should call createServiceAccount successfully', function(done) {
        //uncomment below and update the code to test createServiceAccount
        //instance.createServiceAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createServiceAccountToken', function() {
      it('should call createServiceAccountToken successfully', function(done) {
        //uncomment below and update the code to test createServiceAccountToken
        //instance.createServiceAccountToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteServiceAccount', function() {
      it('should call deleteServiceAccount successfully', function(done) {
        //uncomment below and update the code to test deleteServiceAccount
        //instance.deleteServiceAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteServiceAccountToken', function() {
      it('should call deleteServiceAccountToken successfully', function(done) {
        //uncomment below and update the code to test deleteServiceAccountToken
        //instance.deleteServiceAccountToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceAccount', function() {
      it('should call getServiceAccount successfully', function(done) {
        //uncomment below and update the code to test getServiceAccount
        //instance.getServiceAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceAccountToken', function() {
      it('should call getServiceAccountToken successfully', function(done) {
        //uncomment below and update the code to test getServiceAccountToken
        //instance.getServiceAccountToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceAccountNames', function() {
      it('should call listServiceAccountNames successfully', function(done) {
        //uncomment below and update the code to test listServiceAccountNames
        //instance.listServiceAccountNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceAccountTokens', function() {
      it('should call listServiceAccountTokens successfully', function(done) {
        //uncomment below and update the code to test listServiceAccountTokens
        //instance.listServiceAccountTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceAccounts', function() {
      it('should call listServiceAccounts successfully', function(done) {
        //uncomment below and update the code to test listServiceAccounts
        //instance.listServiceAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchServiceAccount', function() {
      it('should call patchServiceAccount successfully', function(done) {
        //uncomment below and update the code to test patchServiceAccount
        //instance.patchServiceAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchServiceAccountToken', function() {
      it('should call patchServiceAccountToken successfully', function(done) {
        //uncomment below and update the code to test patchServiceAccountToken
        //instance.patchServiceAccountToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateServiceAccount', function() {
      it('should call updateServiceAccount successfully', function(done) {
        //uncomment below and update the code to test updateServiceAccount
        //instance.updateServiceAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateServiceAccountToken', function() {
      it('should call updateServiceAccountToken successfully', function(done) {
        //uncomment below and update the code to test updateServiceAccountToken
        //instance.updateServiceAccountToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc14
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
    instance = new PolyaxonSdk.V1MXJob();
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

  describe('V1MXJob', function() {
    it('should create an instance of V1MXJob', function() {
      // uncomment below and update the code to test V1MXJob
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be.a(PolyaxonSdk.V1MXJob);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property cleanPodPolicy (base name: "cleanPodPolicy")', function() {
      // uncomment below and update the code to test the property cleanPodPolicy
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property schedulingPolicy (base name: "schedulingPolicy")', function() {
      // uncomment below and update the code to test the property schedulingPolicy
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property scheduler (base name: "scheduler")', function() {
      // uncomment below and update the code to test the property scheduler
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property server (base name: "server")', function() {
      // uncomment below and update the code to test the property server
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property worker (base name: "worker")', function() {
      // uncomment below and update the code to test the property worker
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property tuner_tracker (base name: "tuner_tracker")', function() {
      // uncomment below and update the code to test the property tuner_tracker
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property tuner_server (base name: "tuner_server")', function() {
      // uncomment below and update the code to test the property tuner_server
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

    it('should have the property tuner (base name: "tuner")', function() {
      // uncomment below and update the code to test the property tuner
      //var instance = new PolyaxonSdk.V1MXJob();
      //expect(instance).to.be();
    });

  });

}));

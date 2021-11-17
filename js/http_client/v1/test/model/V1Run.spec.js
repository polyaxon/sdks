// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.13.0-rc2
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
    instance = new PolyaxonSdk.V1Run();
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

  describe('V1Run', function() {
    it('should create an instance of V1Run', function() {
      // uncomment below and update the code to test V1Run
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be.a(PolyaxonSdk.V1Run);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property schedule_at (base name: "schedule_at")', function() {
      // uncomment below and update the code to test the property schedule_at
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property started_at (base name: "started_at")', function() {
      // uncomment below and update the code to test the property started_at
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property finished_at (base name: "finished_at")', function() {
      // uncomment below and update the code to test the property finished_at
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property wait_time (base name: "wait_time")', function() {
      // uncomment below and update the code to test the property wait_time
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property is_managed (base name: "is_managed")', function() {
      // uncomment below and update the code to test the property is_managed
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property is_approved (base name: "is_approved")', function() {
      // uncomment below and update the code to test the property is_approved
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property raw_content (base name: "raw_content")', function() {
      // uncomment below and update the code to test the property raw_content
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property bookmarked (base name: "bookmarked")', function() {
      // uncomment below and update the code to test the property bookmarked
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property live_state (base name: "live_state")', function() {
      // uncomment below and update the code to test the property live_state
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property readme (base name: "readme")', function() {
      // uncomment below and update the code to test the property readme
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property meta_info (base name: "meta_info")', function() {
      // uncomment below and update the code to test the property meta_info
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property runtime (base name: "runtime")', function() {
      // uncomment below and update the code to test the property runtime
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property original (base name: "original")', function() {
      // uncomment below and update the code to test the property original
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property pipeline (base name: "pipeline")', function() {
      // uncomment below and update the code to test the property pipeline
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property status_conditions (base name: "status_conditions")', function() {
      // uncomment below and update the code to test the property status_conditions
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property graph (base name: "graph")', function() {
      // uncomment below and update the code to test the property graph
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

    it('should have the property merge (base name: "merge")', function() {
      // uncomment below and update the code to test the property merge
      //var instance = new PolyaxonSdk.V1Run();
      //expect(instance).to.be();
    });

  });

}));
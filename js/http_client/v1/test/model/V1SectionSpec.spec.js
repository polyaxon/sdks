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
 * The version of the OpenAPI document: 2.0.0-rc3
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
    instance = new PolyaxonSdk.V1SectionSpec();
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

  describe('V1SectionSpec', function() {
    it('should create an instance of V1SectionSpec', function() {
      // uncomment below and update the code to test V1SectionSpec
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be.a(PolyaxonSdk.V1SectionSpec);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property is_minimized (base name: "is_minimized")', function() {
      // uncomment below and update the code to test the property is_minimized
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property columns (base name: "columns")', function() {
      // uncomment below and update the code to test the property columns
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property widgets (base name: "widgets")', function() {
      // uncomment below and update the code to test the property widgets
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property pageIndex (base name: "pageIndex")', function() {
      // uncomment below and update the code to test the property pageIndex
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new PolyaxonSdk.V1SectionSpec();
      //expect(instance).to.be();
    });

  });

}));

/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
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
    instance = new PolyaxonSdk.V1Operation();
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

  describe('V1Operation', function() {
    it('should create an instance of V1Operation', function() {
      // uncomment below and update the code to test V1Operation
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be.a(PolyaxonSdk.V1Operation);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property presets (base name: "presets")', function() {
      // uncomment below and update the code to test the property presets
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property cache (base name: "cache")', function() {
      // uncomment below and update the code to test the property cache
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property termination (base name: "termination")', function() {
      // uncomment below and update the code to test the property termination
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property hooks (base name: "hooks")', function() {
      // uncomment below and update the code to test the property hooks
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property skipOnUpstreamSkip (base name: "skipOnUpstreamSkip")', function() {
      // uncomment below and update the code to test the property skipOnUpstreamSkip
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property matrix (base name: "matrix")', function() {
      // uncomment below and update the code to test the property matrix
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property joins (base name: "joins")', function() {
      // uncomment below and update the code to test the property joins
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property runPatch (base name: "runPatch")', function() {
      // uncomment below and update the code to test the property runPatch
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property patchStrategy (base name: "patchStrategy")', function() {
      // uncomment below and update the code to test the property patchStrategy
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property isPreset (base name: "isPreset")', function() {
      // uncomment below and update the code to test the property isPreset
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property isApproved (base name: "isApproved")', function() {
      // uncomment below and update the code to test the property isApproved
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property build (base name: "build")', function() {
      // uncomment below and update the code to test the property build
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property pathRef (base name: "pathRef")', function() {
      // uncomment below and update the code to test the property pathRef
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property hubRef (base name: "hubRef")', function() {
      // uncomment below and update the code to test the property hubRef
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property dagRef (base name: "dagRef")', function() {
      // uncomment below and update the code to test the property dagRef
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property urlRef (base name: "urlRef")', function() {
      // uncomment below and update the code to test the property urlRef
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property component (base name: "component")', function() {
      // uncomment below and update the code to test the property component
      //var instance = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

  });

}));

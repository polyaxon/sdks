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

// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewGetRunResourcesParams creates a new GetRunResourcesParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetRunResourcesParams() *GetRunResourcesParams {
	return &GetRunResourcesParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetRunResourcesParamsWithTimeout creates a new GetRunResourcesParams object
// with the ability to set a timeout on a request.
func NewGetRunResourcesParamsWithTimeout(timeout time.Duration) *GetRunResourcesParams {
	return &GetRunResourcesParams{
		timeout: timeout,
	}
}

// NewGetRunResourcesParamsWithContext creates a new GetRunResourcesParams object
// with the ability to set a context for a request.
func NewGetRunResourcesParamsWithContext(ctx context.Context) *GetRunResourcesParams {
	return &GetRunResourcesParams{
		Context: ctx,
	}
}

// NewGetRunResourcesParamsWithHTTPClient creates a new GetRunResourcesParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetRunResourcesParamsWithHTTPClient(client *http.Client) *GetRunResourcesParams {
	return &GetRunResourcesParams{
		HTTPClient: client,
	}
}

/* GetRunResourcesParams contains all the parameters to send to the API endpoint
   for the get run resources operation.

   Typically these are written to a http.Request.
*/
type GetRunResourcesParams struct {

	/* Force.

	   Force query param.
	*/
	Force *bool

	/* Names.

	   Names query param.
	*/
	Names *string

	/* Namespace.

	   namespace
	*/
	Namespace string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project where the run will be assigned
	*/
	Project string

	/* Sample.

	   Sample query param.

	   Format: int32
	*/
	Sample *int32

	/* Tail.

	   Query param flag to tail the values.
	*/
	Tail *bool

	/* UUID.

	   Uuid identifier of the entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get run resources params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunResourcesParams) WithDefaults() *GetRunResourcesParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get run resources params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunResourcesParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get run resources params
func (o *GetRunResourcesParams) WithTimeout(timeout time.Duration) *GetRunResourcesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get run resources params
func (o *GetRunResourcesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get run resources params
func (o *GetRunResourcesParams) WithContext(ctx context.Context) *GetRunResourcesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get run resources params
func (o *GetRunResourcesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get run resources params
func (o *GetRunResourcesParams) WithHTTPClient(client *http.Client) *GetRunResourcesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get run resources params
func (o *GetRunResourcesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithForce adds the force to the get run resources params
func (o *GetRunResourcesParams) WithForce(force *bool) *GetRunResourcesParams {
	o.SetForce(force)
	return o
}

// SetForce adds the force to the get run resources params
func (o *GetRunResourcesParams) SetForce(force *bool) {
	o.Force = force
}

// WithNames adds the names to the get run resources params
func (o *GetRunResourcesParams) WithNames(names *string) *GetRunResourcesParams {
	o.SetNames(names)
	return o
}

// SetNames adds the names to the get run resources params
func (o *GetRunResourcesParams) SetNames(names *string) {
	o.Names = names
}

// WithNamespace adds the namespace to the get run resources params
func (o *GetRunResourcesParams) WithNamespace(namespace string) *GetRunResourcesParams {
	o.SetNamespace(namespace)
	return o
}

// SetNamespace adds the namespace to the get run resources params
func (o *GetRunResourcesParams) SetNamespace(namespace string) {
	o.Namespace = namespace
}

// WithOwner adds the owner to the get run resources params
func (o *GetRunResourcesParams) WithOwner(owner string) *GetRunResourcesParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get run resources params
func (o *GetRunResourcesParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the get run resources params
func (o *GetRunResourcesParams) WithProject(project string) *GetRunResourcesParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the get run resources params
func (o *GetRunResourcesParams) SetProject(project string) {
	o.Project = project
}

// WithSample adds the sample to the get run resources params
func (o *GetRunResourcesParams) WithSample(sample *int32) *GetRunResourcesParams {
	o.SetSample(sample)
	return o
}

// SetSample adds the sample to the get run resources params
func (o *GetRunResourcesParams) SetSample(sample *int32) {
	o.Sample = sample
}

// WithTail adds the tail to the get run resources params
func (o *GetRunResourcesParams) WithTail(tail *bool) *GetRunResourcesParams {
	o.SetTail(tail)
	return o
}

// SetTail adds the tail to the get run resources params
func (o *GetRunResourcesParams) SetTail(tail *bool) {
	o.Tail = tail
}

// WithUUID adds the uuid to the get run resources params
func (o *GetRunResourcesParams) WithUUID(uuid string) *GetRunResourcesParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get run resources params
func (o *GetRunResourcesParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetRunResourcesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Force != nil {

		// query param force
		var qrForce bool

		if o.Force != nil {
			qrForce = *o.Force
		}
		qForce := swag.FormatBool(qrForce)
		if qForce != "" {

			if err := r.SetQueryParam("force", qForce); err != nil {
				return err
			}
		}
	}

	if o.Names != nil {

		// query param names
		var qrNames string

		if o.Names != nil {
			qrNames = *o.Names
		}
		qNames := qrNames
		if qNames != "" {

			if err := r.SetQueryParam("names", qNames); err != nil {
				return err
			}
		}
	}

	// path param namespace
	if err := r.SetPathParam("namespace", o.Namespace); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	if o.Sample != nil {

		// query param sample
		var qrSample int32

		if o.Sample != nil {
			qrSample = *o.Sample
		}
		qSample := swag.FormatInt32(qrSample)
		if qSample != "" {

			if err := r.SetQueryParam("sample", qSample); err != nil {
				return err
			}
		}
	}

	if o.Tail != nil {

		// query param tail
		var qrTail bool

		if o.Tail != nil {
			qrTail = *o.Tail
		}
		qTail := swag.FormatBool(qrTail)
		if qTail != "" {

			if err := r.SetQueryParam("tail", qTail); err != nil {
				return err
			}
		}
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
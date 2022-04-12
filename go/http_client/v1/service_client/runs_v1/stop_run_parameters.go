// Copyright 2018-2022 Polyaxon, Inc.
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
)

// NewStopRunParams creates a new StopRunParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewStopRunParams() *StopRunParams {
	return &StopRunParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewStopRunParamsWithTimeout creates a new StopRunParams object
// with the ability to set a timeout on a request.
func NewStopRunParamsWithTimeout(timeout time.Duration) *StopRunParams {
	return &StopRunParams{
		timeout: timeout,
	}
}

// NewStopRunParamsWithContext creates a new StopRunParams object
// with the ability to set a context for a request.
func NewStopRunParamsWithContext(ctx context.Context) *StopRunParams {
	return &StopRunParams{
		Context: ctx,
	}
}

// NewStopRunParamsWithHTTPClient creates a new StopRunParams object
// with the ability to set a custom HTTPClient for a request.
func NewStopRunParamsWithHTTPClient(client *http.Client) *StopRunParams {
	return &StopRunParams{
		HTTPClient: client,
	}
}

/* StopRunParams contains all the parameters to send to the API endpoint
   for the stop run operation.

   Typically these are written to a http.Request.
*/
type StopRunParams struct {

	/* Entity.

	   Entity: project name, hub name, registry name, ...
	*/
	Entity string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* UUID.

	   Uuid identifier of the sub-entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the stop run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *StopRunParams) WithDefaults() *StopRunParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the stop run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *StopRunParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the stop run params
func (o *StopRunParams) WithTimeout(timeout time.Duration) *StopRunParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the stop run params
func (o *StopRunParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the stop run params
func (o *StopRunParams) WithContext(ctx context.Context) *StopRunParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the stop run params
func (o *StopRunParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the stop run params
func (o *StopRunParams) WithHTTPClient(client *http.Client) *StopRunParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the stop run params
func (o *StopRunParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEntity adds the entity to the stop run params
func (o *StopRunParams) WithEntity(entity string) *StopRunParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the stop run params
func (o *StopRunParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithOwner adds the owner to the stop run params
func (o *StopRunParams) WithOwner(owner string) *StopRunParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the stop run params
func (o *StopRunParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUUID adds the uuid to the stop run params
func (o *StopRunParams) WithUUID(uuid string) *StopRunParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the stop run params
func (o *StopRunParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *StopRunParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param entity
	if err := r.SetPathParam("entity", o.Entity); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
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

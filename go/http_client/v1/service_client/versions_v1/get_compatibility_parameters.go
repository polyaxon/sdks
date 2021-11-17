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

package versions_v1

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

// NewGetCompatibilityParams creates a new GetCompatibilityParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetCompatibilityParams() *GetCompatibilityParams {
	return &GetCompatibilityParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetCompatibilityParamsWithTimeout creates a new GetCompatibilityParams object
// with the ability to set a timeout on a request.
func NewGetCompatibilityParamsWithTimeout(timeout time.Duration) *GetCompatibilityParams {
	return &GetCompatibilityParams{
		timeout: timeout,
	}
}

// NewGetCompatibilityParamsWithContext creates a new GetCompatibilityParams object
// with the ability to set a context for a request.
func NewGetCompatibilityParamsWithContext(ctx context.Context) *GetCompatibilityParams {
	return &GetCompatibilityParams{
		Context: ctx,
	}
}

// NewGetCompatibilityParamsWithHTTPClient creates a new GetCompatibilityParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetCompatibilityParamsWithHTTPClient(client *http.Client) *GetCompatibilityParams {
	return &GetCompatibilityParams{
		HTTPClient: client,
	}
}

/* GetCompatibilityParams contains all the parameters to send to the API endpoint
   for the get compatibility operation.

   Typically these are written to a http.Request.
*/
type GetCompatibilityParams struct {

	/* Service.

	   Service
	*/
	Service string

	/* UUID.

	   UUid
	*/
	UUID string

	/* Version.

	   Version
	*/
	Version string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get compatibility params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetCompatibilityParams) WithDefaults() *GetCompatibilityParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get compatibility params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetCompatibilityParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get compatibility params
func (o *GetCompatibilityParams) WithTimeout(timeout time.Duration) *GetCompatibilityParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get compatibility params
func (o *GetCompatibilityParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get compatibility params
func (o *GetCompatibilityParams) WithContext(ctx context.Context) *GetCompatibilityParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get compatibility params
func (o *GetCompatibilityParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get compatibility params
func (o *GetCompatibilityParams) WithHTTPClient(client *http.Client) *GetCompatibilityParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get compatibility params
func (o *GetCompatibilityParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithService adds the service to the get compatibility params
func (o *GetCompatibilityParams) WithService(service string) *GetCompatibilityParams {
	o.SetService(service)
	return o
}

// SetService adds the service to the get compatibility params
func (o *GetCompatibilityParams) SetService(service string) {
	o.Service = service
}

// WithUUID adds the uuid to the get compatibility params
func (o *GetCompatibilityParams) WithUUID(uuid string) *GetCompatibilityParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get compatibility params
func (o *GetCompatibilityParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WithVersion adds the version to the get compatibility params
func (o *GetCompatibilityParams) WithVersion(version string) *GetCompatibilityParams {
	o.SetVersion(version)
	return o
}

// SetVersion adds the version to the get compatibility params
func (o *GetCompatibilityParams) SetVersion(version string) {
	o.Version = version
}

// WriteToRequest writes these params to a swagger request
func (o *GetCompatibilityParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param service
	if err := r.SetPathParam("service", o.Service); err != nil {
		return err
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	// path param version
	if err := r.SetPathParam("version", o.Version); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
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

package projects_v1

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

// NewGetProjectSettingsParams creates a new GetProjectSettingsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetProjectSettingsParams() *GetProjectSettingsParams {
	return &GetProjectSettingsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetProjectSettingsParamsWithTimeout creates a new GetProjectSettingsParams object
// with the ability to set a timeout on a request.
func NewGetProjectSettingsParamsWithTimeout(timeout time.Duration) *GetProjectSettingsParams {
	return &GetProjectSettingsParams{
		timeout: timeout,
	}
}

// NewGetProjectSettingsParamsWithContext creates a new GetProjectSettingsParams object
// with the ability to set a context for a request.
func NewGetProjectSettingsParamsWithContext(ctx context.Context) *GetProjectSettingsParams {
	return &GetProjectSettingsParams{
		Context: ctx,
	}
}

// NewGetProjectSettingsParamsWithHTTPClient creates a new GetProjectSettingsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetProjectSettingsParamsWithHTTPClient(client *http.Client) *GetProjectSettingsParams {
	return &GetProjectSettingsParams{
		HTTPClient: client,
	}
}

/* GetProjectSettingsParams contains all the parameters to send to the API endpoint
   for the get project settings operation.

   Typically these are written to a http.Request.
*/
type GetProjectSettingsParams struct {

	/* Name.

	   Component under namesapce
	*/
	Name string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get project settings params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetProjectSettingsParams) WithDefaults() *GetProjectSettingsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get project settings params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetProjectSettingsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get project settings params
func (o *GetProjectSettingsParams) WithTimeout(timeout time.Duration) *GetProjectSettingsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get project settings params
func (o *GetProjectSettingsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get project settings params
func (o *GetProjectSettingsParams) WithContext(ctx context.Context) *GetProjectSettingsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get project settings params
func (o *GetProjectSettingsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get project settings params
func (o *GetProjectSettingsParams) WithHTTPClient(client *http.Client) *GetProjectSettingsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get project settings params
func (o *GetProjectSettingsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithName adds the name to the get project settings params
func (o *GetProjectSettingsParams) WithName(name string) *GetProjectSettingsParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the get project settings params
func (o *GetProjectSettingsParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the get project settings params
func (o *GetProjectSettingsParams) WithOwner(owner string) *GetProjectSettingsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get project settings params
func (o *GetProjectSettingsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *GetProjectSettingsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

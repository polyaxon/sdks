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

package agents_v1

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

// NewGetAgentStateParams creates a new GetAgentStateParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetAgentStateParams() *GetAgentStateParams {
	return &GetAgentStateParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetAgentStateParamsWithTimeout creates a new GetAgentStateParams object
// with the ability to set a timeout on a request.
func NewGetAgentStateParamsWithTimeout(timeout time.Duration) *GetAgentStateParams {
	return &GetAgentStateParams{
		timeout: timeout,
	}
}

// NewGetAgentStateParamsWithContext creates a new GetAgentStateParams object
// with the ability to set a context for a request.
func NewGetAgentStateParamsWithContext(ctx context.Context) *GetAgentStateParams {
	return &GetAgentStateParams{
		Context: ctx,
	}
}

// NewGetAgentStateParamsWithHTTPClient creates a new GetAgentStateParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetAgentStateParamsWithHTTPClient(client *http.Client) *GetAgentStateParams {
	return &GetAgentStateParams{
		HTTPClient: client,
	}
}

/* GetAgentStateParams contains all the parameters to send to the API endpoint
   for the get agent state operation.

   Typically these are written to a http.Request.
*/
type GetAgentStateParams struct {

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* UUID.

	   Uuid identifier of the entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get agent state params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetAgentStateParams) WithDefaults() *GetAgentStateParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get agent state params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetAgentStateParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get agent state params
func (o *GetAgentStateParams) WithTimeout(timeout time.Duration) *GetAgentStateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get agent state params
func (o *GetAgentStateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get agent state params
func (o *GetAgentStateParams) WithContext(ctx context.Context) *GetAgentStateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get agent state params
func (o *GetAgentStateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get agent state params
func (o *GetAgentStateParams) WithHTTPClient(client *http.Client) *GetAgentStateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get agent state params
func (o *GetAgentStateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the get agent state params
func (o *GetAgentStateParams) WithOwner(owner string) *GetAgentStateParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get agent state params
func (o *GetAgentStateParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUUID adds the uuid to the get agent state params
func (o *GetAgentStateParams) WithUUID(uuid string) *GetAgentStateParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get agent state params
func (o *GetAgentStateParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetAgentStateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

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
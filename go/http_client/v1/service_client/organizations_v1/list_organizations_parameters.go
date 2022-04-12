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

package organizations_v1

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

// NewListOrganizationsParams creates a new ListOrganizationsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewListOrganizationsParams() *ListOrganizationsParams {
	return &ListOrganizationsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewListOrganizationsParamsWithTimeout creates a new ListOrganizationsParams object
// with the ability to set a timeout on a request.
func NewListOrganizationsParamsWithTimeout(timeout time.Duration) *ListOrganizationsParams {
	return &ListOrganizationsParams{
		timeout: timeout,
	}
}

// NewListOrganizationsParamsWithContext creates a new ListOrganizationsParams object
// with the ability to set a context for a request.
func NewListOrganizationsParamsWithContext(ctx context.Context) *ListOrganizationsParams {
	return &ListOrganizationsParams{
		Context: ctx,
	}
}

// NewListOrganizationsParamsWithHTTPClient creates a new ListOrganizationsParams object
// with the ability to set a custom HTTPClient for a request.
func NewListOrganizationsParamsWithHTTPClient(client *http.Client) *ListOrganizationsParams {
	return &ListOrganizationsParams{
		HTTPClient: client,
	}
}

/* ListOrganizationsParams contains all the parameters to send to the API endpoint
   for the list organizations operation.

   Typically these are written to a http.Request.
*/
type ListOrganizationsParams struct {
	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the list organizations params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListOrganizationsParams) WithDefaults() *ListOrganizationsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the list organizations params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListOrganizationsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the list organizations params
func (o *ListOrganizationsParams) WithTimeout(timeout time.Duration) *ListOrganizationsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the list organizations params
func (o *ListOrganizationsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the list organizations params
func (o *ListOrganizationsParams) WithContext(ctx context.Context) *ListOrganizationsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the list organizations params
func (o *ListOrganizationsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the list organizations params
func (o *ListOrganizationsParams) WithHTTPClient(client *http.Client) *ListOrganizationsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the list organizations params
func (o *ListOrganizationsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WriteToRequest writes these params to a swagger request
func (o *ListOrganizationsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

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

// NewDeleteOrganizationMemberParams creates a new DeleteOrganizationMemberParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewDeleteOrganizationMemberParams() *DeleteOrganizationMemberParams {
	return &DeleteOrganizationMemberParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewDeleteOrganizationMemberParamsWithTimeout creates a new DeleteOrganizationMemberParams object
// with the ability to set a timeout on a request.
func NewDeleteOrganizationMemberParamsWithTimeout(timeout time.Duration) *DeleteOrganizationMemberParams {
	return &DeleteOrganizationMemberParams{
		timeout: timeout,
	}
}

// NewDeleteOrganizationMemberParamsWithContext creates a new DeleteOrganizationMemberParams object
// with the ability to set a context for a request.
func NewDeleteOrganizationMemberParamsWithContext(ctx context.Context) *DeleteOrganizationMemberParams {
	return &DeleteOrganizationMemberParams{
		Context: ctx,
	}
}

// NewDeleteOrganizationMemberParamsWithHTTPClient creates a new DeleteOrganizationMemberParams object
// with the ability to set a custom HTTPClient for a request.
func NewDeleteOrganizationMemberParamsWithHTTPClient(client *http.Client) *DeleteOrganizationMemberParams {
	return &DeleteOrganizationMemberParams{
		HTTPClient: client,
	}
}

/* DeleteOrganizationMemberParams contains all the parameters to send to the API endpoint
   for the delete organization member operation.

   Typically these are written to a http.Request.
*/
type DeleteOrganizationMemberParams struct {

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

// WithDefaults hydrates default values in the delete organization member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeleteOrganizationMemberParams) WithDefaults() *DeleteOrganizationMemberParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the delete organization member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeleteOrganizationMemberParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the delete organization member params
func (o *DeleteOrganizationMemberParams) WithTimeout(timeout time.Duration) *DeleteOrganizationMemberParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the delete organization member params
func (o *DeleteOrganizationMemberParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the delete organization member params
func (o *DeleteOrganizationMemberParams) WithContext(ctx context.Context) *DeleteOrganizationMemberParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the delete organization member params
func (o *DeleteOrganizationMemberParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the delete organization member params
func (o *DeleteOrganizationMemberParams) WithHTTPClient(client *http.Client) *DeleteOrganizationMemberParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the delete organization member params
func (o *DeleteOrganizationMemberParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithName adds the name to the delete organization member params
func (o *DeleteOrganizationMemberParams) WithName(name string) *DeleteOrganizationMemberParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the delete organization member params
func (o *DeleteOrganizationMemberParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the delete organization member params
func (o *DeleteOrganizationMemberParams) WithOwner(owner string) *DeleteOrganizationMemberParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the delete organization member params
func (o *DeleteOrganizationMemberParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *DeleteOrganizationMemberParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

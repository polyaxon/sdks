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

package tags_v1

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

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewCreateTagParams creates a new CreateTagParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCreateTagParams() *CreateTagParams {
	return &CreateTagParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCreateTagParamsWithTimeout creates a new CreateTagParams object
// with the ability to set a timeout on a request.
func NewCreateTagParamsWithTimeout(timeout time.Duration) *CreateTagParams {
	return &CreateTagParams{
		timeout: timeout,
	}
}

// NewCreateTagParamsWithContext creates a new CreateTagParams object
// with the ability to set a context for a request.
func NewCreateTagParamsWithContext(ctx context.Context) *CreateTagParams {
	return &CreateTagParams{
		Context: ctx,
	}
}

// NewCreateTagParamsWithHTTPClient creates a new CreateTagParams object
// with the ability to set a custom HTTPClient for a request.
func NewCreateTagParamsWithHTTPClient(client *http.Client) *CreateTagParams {
	return &CreateTagParams{
		HTTPClient: client,
	}
}

/* CreateTagParams contains all the parameters to send to the API endpoint
   for the create tag operation.

   Typically these are written to a http.Request.
*/
type CreateTagParams struct {

	/* Body.

	   Tag body
	*/
	Body *service_model.V1Tag

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the create tag params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateTagParams) WithDefaults() *CreateTagParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the create tag params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateTagParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the create tag params
func (o *CreateTagParams) WithTimeout(timeout time.Duration) *CreateTagParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create tag params
func (o *CreateTagParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create tag params
func (o *CreateTagParams) WithContext(ctx context.Context) *CreateTagParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create tag params
func (o *CreateTagParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create tag params
func (o *CreateTagParams) WithHTTPClient(client *http.Client) *CreateTagParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create tag params
func (o *CreateTagParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the create tag params
func (o *CreateTagParams) WithBody(body *service_model.V1Tag) *CreateTagParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the create tag params
func (o *CreateTagParams) SetBody(body *service_model.V1Tag) {
	o.Body = body
}

// WithOwner adds the owner to the create tag params
func (o *CreateTagParams) WithOwner(owner string) *CreateTagParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the create tag params
func (o *CreateTagParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *CreateTagParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
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

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

package connections_v1

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

// NewUpdateConnectionParams creates a new UpdateConnectionParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUpdateConnectionParams() *UpdateConnectionParams {
	return &UpdateConnectionParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUpdateConnectionParamsWithTimeout creates a new UpdateConnectionParams object
// with the ability to set a timeout on a request.
func NewUpdateConnectionParamsWithTimeout(timeout time.Duration) *UpdateConnectionParams {
	return &UpdateConnectionParams{
		timeout: timeout,
	}
}

// NewUpdateConnectionParamsWithContext creates a new UpdateConnectionParams object
// with the ability to set a context for a request.
func NewUpdateConnectionParamsWithContext(ctx context.Context) *UpdateConnectionParams {
	return &UpdateConnectionParams{
		Context: ctx,
	}
}

// NewUpdateConnectionParamsWithHTTPClient creates a new UpdateConnectionParams object
// with the ability to set a custom HTTPClient for a request.
func NewUpdateConnectionParamsWithHTTPClient(client *http.Client) *UpdateConnectionParams {
	return &UpdateConnectionParams{
		HTTPClient: client,
	}
}

/* UpdateConnectionParams contains all the parameters to send to the API endpoint
   for the update connection operation.

   Typically these are written to a http.Request.
*/
type UpdateConnectionParams struct {

	/* Body.

	   Connection body
	*/
	Body *service_model.V1ConnectionResponse

	/* ConnectionUUID.

	   UUID
	*/
	ConnectionUUID string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the update connection params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateConnectionParams) WithDefaults() *UpdateConnectionParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the update connection params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateConnectionParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the update connection params
func (o *UpdateConnectionParams) WithTimeout(timeout time.Duration) *UpdateConnectionParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update connection params
func (o *UpdateConnectionParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update connection params
func (o *UpdateConnectionParams) WithContext(ctx context.Context) *UpdateConnectionParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update connection params
func (o *UpdateConnectionParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update connection params
func (o *UpdateConnectionParams) WithHTTPClient(client *http.Client) *UpdateConnectionParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update connection params
func (o *UpdateConnectionParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the update connection params
func (o *UpdateConnectionParams) WithBody(body *service_model.V1ConnectionResponse) *UpdateConnectionParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update connection params
func (o *UpdateConnectionParams) SetBody(body *service_model.V1ConnectionResponse) {
	o.Body = body
}

// WithConnectionUUID adds the connectionUUID to the update connection params
func (o *UpdateConnectionParams) WithConnectionUUID(connectionUUID string) *UpdateConnectionParams {
	o.SetConnectionUUID(connectionUUID)
	return o
}

// SetConnectionUUID adds the connectionUuid to the update connection params
func (o *UpdateConnectionParams) SetConnectionUUID(connectionUUID string) {
	o.ConnectionUUID = connectionUUID
}

// WithOwner adds the owner to the update connection params
func (o *UpdateConnectionParams) WithOwner(owner string) *UpdateConnectionParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update connection params
func (o *UpdateConnectionParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *UpdateConnectionParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param connection.uuid
	if err := r.SetPathParam("connection.uuid", o.ConnectionUUID); err != nil {
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

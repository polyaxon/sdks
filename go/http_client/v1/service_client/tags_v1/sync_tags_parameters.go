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

// NewSyncTagsParams creates a new SyncTagsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewSyncTagsParams() *SyncTagsParams {
	return &SyncTagsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewSyncTagsParamsWithTimeout creates a new SyncTagsParams object
// with the ability to set a timeout on a request.
func NewSyncTagsParamsWithTimeout(timeout time.Duration) *SyncTagsParams {
	return &SyncTagsParams{
		timeout: timeout,
	}
}

// NewSyncTagsParamsWithContext creates a new SyncTagsParams object
// with the ability to set a context for a request.
func NewSyncTagsParamsWithContext(ctx context.Context) *SyncTagsParams {
	return &SyncTagsParams{
		Context: ctx,
	}
}

// NewSyncTagsParamsWithHTTPClient creates a new SyncTagsParams object
// with the ability to set a custom HTTPClient for a request.
func NewSyncTagsParamsWithHTTPClient(client *http.Client) *SyncTagsParams {
	return &SyncTagsParams{
		HTTPClient: client,
	}
}

/* SyncTagsParams contains all the parameters to send to the API endpoint
   for the sync tags operation.

   Typically these are written to a http.Request.
*/
type SyncTagsParams struct {

	/* Body.

	   Data
	*/
	Body *service_model.V1EntitiesTags

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the sync tags params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SyncTagsParams) WithDefaults() *SyncTagsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the sync tags params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SyncTagsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the sync tags params
func (o *SyncTagsParams) WithTimeout(timeout time.Duration) *SyncTagsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the sync tags params
func (o *SyncTagsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the sync tags params
func (o *SyncTagsParams) WithContext(ctx context.Context) *SyncTagsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the sync tags params
func (o *SyncTagsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the sync tags params
func (o *SyncTagsParams) WithHTTPClient(client *http.Client) *SyncTagsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the sync tags params
func (o *SyncTagsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the sync tags params
func (o *SyncTagsParams) WithBody(body *service_model.V1EntitiesTags) *SyncTagsParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the sync tags params
func (o *SyncTagsParams) SetBody(body *service_model.V1EntitiesTags) {
	o.Body = body
}

// WithOwner adds the owner to the sync tags params
func (o *SyncTagsParams) WithOwner(owner string) *SyncTagsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the sync tags params
func (o *SyncTagsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *SyncTagsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
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

package service_accounts_v1

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

// NewUpdateServiceAccountTokenParams creates a new UpdateServiceAccountTokenParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUpdateServiceAccountTokenParams() *UpdateServiceAccountTokenParams {
	return &UpdateServiceAccountTokenParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUpdateServiceAccountTokenParamsWithTimeout creates a new UpdateServiceAccountTokenParams object
// with the ability to set a timeout on a request.
func NewUpdateServiceAccountTokenParamsWithTimeout(timeout time.Duration) *UpdateServiceAccountTokenParams {
	return &UpdateServiceAccountTokenParams{
		timeout: timeout,
	}
}

// NewUpdateServiceAccountTokenParamsWithContext creates a new UpdateServiceAccountTokenParams object
// with the ability to set a context for a request.
func NewUpdateServiceAccountTokenParamsWithContext(ctx context.Context) *UpdateServiceAccountTokenParams {
	return &UpdateServiceAccountTokenParams{
		Context: ctx,
	}
}

// NewUpdateServiceAccountTokenParamsWithHTTPClient creates a new UpdateServiceAccountTokenParams object
// with the ability to set a custom HTTPClient for a request.
func NewUpdateServiceAccountTokenParamsWithHTTPClient(client *http.Client) *UpdateServiceAccountTokenParams {
	return &UpdateServiceAccountTokenParams{
		HTTPClient: client,
	}
}

/* UpdateServiceAccountTokenParams contains all the parameters to send to the API endpoint
   for the update service account token operation.

   Typically these are written to a http.Request.
*/
type UpdateServiceAccountTokenParams struct {

	/* Body.

	   Token body
	*/
	Body *service_model.V1Token

	/* Entity.

	   Rntity
	*/
	Entity string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* TokenUUID.

	   UUID
	*/
	TokenUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the update service account token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateServiceAccountTokenParams) WithDefaults() *UpdateServiceAccountTokenParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the update service account token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateServiceAccountTokenParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithTimeout(timeout time.Duration) *UpdateServiceAccountTokenParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithContext(ctx context.Context) *UpdateServiceAccountTokenParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithHTTPClient(client *http.Client) *UpdateServiceAccountTokenParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithBody(body *service_model.V1Token) *UpdateServiceAccountTokenParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetBody(body *service_model.V1Token) {
	o.Body = body
}

// WithEntity adds the entity to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithEntity(entity string) *UpdateServiceAccountTokenParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithOwner adds the owner to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithOwner(owner string) *UpdateServiceAccountTokenParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithTokenUUID adds the tokenUUID to the update service account token params
func (o *UpdateServiceAccountTokenParams) WithTokenUUID(tokenUUID string) *UpdateServiceAccountTokenParams {
	o.SetTokenUUID(tokenUUID)
	return o
}

// SetTokenUUID adds the tokenUuid to the update service account token params
func (o *UpdateServiceAccountTokenParams) SetTokenUUID(tokenUUID string) {
	o.TokenUUID = tokenUUID
}

// WriteToRequest writes these params to a swagger request
func (o *UpdateServiceAccountTokenParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param entity
	if err := r.SetPathParam("entity", o.Entity); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param token.uuid
	if err := r.SetPathParam("token.uuid", o.TokenUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

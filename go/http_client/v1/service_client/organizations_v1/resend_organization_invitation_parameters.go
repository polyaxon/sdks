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

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewResendOrganizationInvitationParams creates a new ResendOrganizationInvitationParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewResendOrganizationInvitationParams() *ResendOrganizationInvitationParams {
	return &ResendOrganizationInvitationParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewResendOrganizationInvitationParamsWithTimeout creates a new ResendOrganizationInvitationParams object
// with the ability to set a timeout on a request.
func NewResendOrganizationInvitationParamsWithTimeout(timeout time.Duration) *ResendOrganizationInvitationParams {
	return &ResendOrganizationInvitationParams{
		timeout: timeout,
	}
}

// NewResendOrganizationInvitationParamsWithContext creates a new ResendOrganizationInvitationParams object
// with the ability to set a context for a request.
func NewResendOrganizationInvitationParamsWithContext(ctx context.Context) *ResendOrganizationInvitationParams {
	return &ResendOrganizationInvitationParams{
		Context: ctx,
	}
}

// NewResendOrganizationInvitationParamsWithHTTPClient creates a new ResendOrganizationInvitationParams object
// with the ability to set a custom HTTPClient for a request.
func NewResendOrganizationInvitationParamsWithHTTPClient(client *http.Client) *ResendOrganizationInvitationParams {
	return &ResendOrganizationInvitationParams{
		HTTPClient: client,
	}
}

/* ResendOrganizationInvitationParams contains all the parameters to send to the API endpoint
   for the resend organization invitation operation.

   Typically these are written to a http.Request.
*/
type ResendOrganizationInvitationParams struct {

	/* Body.

	   Organization body
	*/
	Body *service_model.V1OrganizationMember

	/* Email.

	   Optional email.
	*/
	Email *string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the resend organization invitation params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ResendOrganizationInvitationParams) WithDefaults() *ResendOrganizationInvitationParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the resend organization invitation params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ResendOrganizationInvitationParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithTimeout(timeout time.Duration) *ResendOrganizationInvitationParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithContext(ctx context.Context) *ResendOrganizationInvitationParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithHTTPClient(client *http.Client) *ResendOrganizationInvitationParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithBody(body *service_model.V1OrganizationMember) *ResendOrganizationInvitationParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetBody(body *service_model.V1OrganizationMember) {
	o.Body = body
}

// WithEmail adds the email to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithEmail(email *string) *ResendOrganizationInvitationParams {
	o.SetEmail(email)
	return o
}

// SetEmail adds the email to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetEmail(email *string) {
	o.Email = email
}

// WithOwner adds the owner to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) WithOwner(owner string) *ResendOrganizationInvitationParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the resend organization invitation params
func (o *ResendOrganizationInvitationParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *ResendOrganizationInvitationParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if o.Email != nil {

		// query param email
		var qrEmail string

		if o.Email != nil {
			qrEmail = *o.Email
		}
		qEmail := qrEmail
		if qEmail != "" {

			if err := r.SetQueryParam("email", qEmail); err != nil {
				return err
			}
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

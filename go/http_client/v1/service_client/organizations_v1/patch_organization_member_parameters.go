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

// NewPatchOrganizationMemberParams creates a new PatchOrganizationMemberParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPatchOrganizationMemberParams() *PatchOrganizationMemberParams {
	return &PatchOrganizationMemberParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPatchOrganizationMemberParamsWithTimeout creates a new PatchOrganizationMemberParams object
// with the ability to set a timeout on a request.
func NewPatchOrganizationMemberParamsWithTimeout(timeout time.Duration) *PatchOrganizationMemberParams {
	return &PatchOrganizationMemberParams{
		timeout: timeout,
	}
}

// NewPatchOrganizationMemberParamsWithContext creates a new PatchOrganizationMemberParams object
// with the ability to set a context for a request.
func NewPatchOrganizationMemberParamsWithContext(ctx context.Context) *PatchOrganizationMemberParams {
	return &PatchOrganizationMemberParams{
		Context: ctx,
	}
}

// NewPatchOrganizationMemberParamsWithHTTPClient creates a new PatchOrganizationMemberParams object
// with the ability to set a custom HTTPClient for a request.
func NewPatchOrganizationMemberParamsWithHTTPClient(client *http.Client) *PatchOrganizationMemberParams {
	return &PatchOrganizationMemberParams{
		HTTPClient: client,
	}
}

/* PatchOrganizationMemberParams contains all the parameters to send to the API endpoint
   for the patch organization member operation.

   Typically these are written to a http.Request.
*/
type PatchOrganizationMemberParams struct {

	/* Body.

	   Organization body
	*/
	Body *service_model.V1OrganizationMember

	/* Email.

	   Optional email.
	*/
	Email *string

	/* MemberUser.

	   User
	*/
	MemberUser string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the patch organization member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchOrganizationMemberParams) WithDefaults() *PatchOrganizationMemberParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the patch organization member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchOrganizationMemberParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the patch organization member params
func (o *PatchOrganizationMemberParams) WithTimeout(timeout time.Duration) *PatchOrganizationMemberParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the patch organization member params
func (o *PatchOrganizationMemberParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the patch organization member params
func (o *PatchOrganizationMemberParams) WithContext(ctx context.Context) *PatchOrganizationMemberParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the patch organization member params
func (o *PatchOrganizationMemberParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the patch organization member params
func (o *PatchOrganizationMemberParams) WithHTTPClient(client *http.Client) *PatchOrganizationMemberParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the patch organization member params
func (o *PatchOrganizationMemberParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the patch organization member params
func (o *PatchOrganizationMemberParams) WithBody(body *service_model.V1OrganizationMember) *PatchOrganizationMemberParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the patch organization member params
func (o *PatchOrganizationMemberParams) SetBody(body *service_model.V1OrganizationMember) {
	o.Body = body
}

// WithEmail adds the email to the patch organization member params
func (o *PatchOrganizationMemberParams) WithEmail(email *string) *PatchOrganizationMemberParams {
	o.SetEmail(email)
	return o
}

// SetEmail adds the email to the patch organization member params
func (o *PatchOrganizationMemberParams) SetEmail(email *string) {
	o.Email = email
}

// WithMemberUser adds the memberUser to the patch organization member params
func (o *PatchOrganizationMemberParams) WithMemberUser(memberUser string) *PatchOrganizationMemberParams {
	o.SetMemberUser(memberUser)
	return o
}

// SetMemberUser adds the memberUser to the patch organization member params
func (o *PatchOrganizationMemberParams) SetMemberUser(memberUser string) {
	o.MemberUser = memberUser
}

// WithOwner adds the owner to the patch organization member params
func (o *PatchOrganizationMemberParams) WithOwner(owner string) *PatchOrganizationMemberParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the patch organization member params
func (o *PatchOrganizationMemberParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *PatchOrganizationMemberParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param member.user
	if err := r.SetPathParam("member.user", o.MemberUser); err != nil {
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

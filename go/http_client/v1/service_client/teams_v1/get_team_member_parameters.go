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

package teams_v1

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

// NewGetTeamMemberParams creates a new GetTeamMemberParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetTeamMemberParams() *GetTeamMemberParams {
	return &GetTeamMemberParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetTeamMemberParamsWithTimeout creates a new GetTeamMemberParams object
// with the ability to set a timeout on a request.
func NewGetTeamMemberParamsWithTimeout(timeout time.Duration) *GetTeamMemberParams {
	return &GetTeamMemberParams{
		timeout: timeout,
	}
}

// NewGetTeamMemberParamsWithContext creates a new GetTeamMemberParams object
// with the ability to set a context for a request.
func NewGetTeamMemberParamsWithContext(ctx context.Context) *GetTeamMemberParams {
	return &GetTeamMemberParams{
		Context: ctx,
	}
}

// NewGetTeamMemberParamsWithHTTPClient creates a new GetTeamMemberParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetTeamMemberParamsWithHTTPClient(client *http.Client) *GetTeamMemberParams {
	return &GetTeamMemberParams{
		HTTPClient: client,
	}
}

/* GetTeamMemberParams contains all the parameters to send to the API endpoint
   for the get team member operation.

   Typically these are written to a http.Request.
*/
type GetTeamMemberParams struct {

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Team.

	   Team under namesapce
	*/
	Team string

	/* User.

	   Member under team
	*/
	User string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get team member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTeamMemberParams) WithDefaults() *GetTeamMemberParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get team member params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTeamMemberParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get team member params
func (o *GetTeamMemberParams) WithTimeout(timeout time.Duration) *GetTeamMemberParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get team member params
func (o *GetTeamMemberParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get team member params
func (o *GetTeamMemberParams) WithContext(ctx context.Context) *GetTeamMemberParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get team member params
func (o *GetTeamMemberParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get team member params
func (o *GetTeamMemberParams) WithHTTPClient(client *http.Client) *GetTeamMemberParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get team member params
func (o *GetTeamMemberParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the get team member params
func (o *GetTeamMemberParams) WithOwner(owner string) *GetTeamMemberParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get team member params
func (o *GetTeamMemberParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithTeam adds the team to the get team member params
func (o *GetTeamMemberParams) WithTeam(team string) *GetTeamMemberParams {
	o.SetTeam(team)
	return o
}

// SetTeam adds the team to the get team member params
func (o *GetTeamMemberParams) SetTeam(team string) {
	o.Team = team
}

// WithUser adds the user to the get team member params
func (o *GetTeamMemberParams) WithUser(user string) *GetTeamMemberParams {
	o.SetUser(user)
	return o
}

// SetUser adds the user to the get team member params
func (o *GetTeamMemberParams) SetUser(user string) {
	o.User = user
}

// WriteToRequest writes these params to a swagger request
func (o *GetTeamMemberParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param team
	if err := r.SetPathParam("team", o.Team); err != nil {
		return err
	}

	// path param user
	if err := r.SetPathParam("user", o.User); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
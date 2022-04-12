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

package runs_v1

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
	"github.com/go-openapi/swag"
)

// NewGetRunLogsParams creates a new GetRunLogsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetRunLogsParams() *GetRunLogsParams {
	return &GetRunLogsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetRunLogsParamsWithTimeout creates a new GetRunLogsParams object
// with the ability to set a timeout on a request.
func NewGetRunLogsParamsWithTimeout(timeout time.Duration) *GetRunLogsParams {
	return &GetRunLogsParams{
		timeout: timeout,
	}
}

// NewGetRunLogsParamsWithContext creates a new GetRunLogsParams object
// with the ability to set a context for a request.
func NewGetRunLogsParamsWithContext(ctx context.Context) *GetRunLogsParams {
	return &GetRunLogsParams{
		Context: ctx,
	}
}

// NewGetRunLogsParamsWithHTTPClient creates a new GetRunLogsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetRunLogsParamsWithHTTPClient(client *http.Client) *GetRunLogsParams {
	return &GetRunLogsParams{
		HTTPClient: client,
	}
}

/* GetRunLogsParams contains all the parameters to send to the API endpoint
   for the get run logs operation.

   Typically these are written to a http.Request.
*/
type GetRunLogsParams struct {

	/* Force.

	   Force query param.
	*/
	Force *bool

	/* LastFile.

	   last file.
	*/
	LastFile *string

	/* LastTime.

	   last time.

	   Format: date-time
	*/
	LastTime *strfmt.DateTime

	// Namespace.
	Namespace string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project where the run will be assigned
	*/
	Project string

	/* UUID.

	   Uuid identifier of the entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get run logs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunLogsParams) WithDefaults() *GetRunLogsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get run logs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunLogsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get run logs params
func (o *GetRunLogsParams) WithTimeout(timeout time.Duration) *GetRunLogsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get run logs params
func (o *GetRunLogsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get run logs params
func (o *GetRunLogsParams) WithContext(ctx context.Context) *GetRunLogsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get run logs params
func (o *GetRunLogsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get run logs params
func (o *GetRunLogsParams) WithHTTPClient(client *http.Client) *GetRunLogsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get run logs params
func (o *GetRunLogsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithForce adds the force to the get run logs params
func (o *GetRunLogsParams) WithForce(force *bool) *GetRunLogsParams {
	o.SetForce(force)
	return o
}

// SetForce adds the force to the get run logs params
func (o *GetRunLogsParams) SetForce(force *bool) {
	o.Force = force
}

// WithLastFile adds the lastFile to the get run logs params
func (o *GetRunLogsParams) WithLastFile(lastFile *string) *GetRunLogsParams {
	o.SetLastFile(lastFile)
	return o
}

// SetLastFile adds the lastFile to the get run logs params
func (o *GetRunLogsParams) SetLastFile(lastFile *string) {
	o.LastFile = lastFile
}

// WithLastTime adds the lastTime to the get run logs params
func (o *GetRunLogsParams) WithLastTime(lastTime *strfmt.DateTime) *GetRunLogsParams {
	o.SetLastTime(lastTime)
	return o
}

// SetLastTime adds the lastTime to the get run logs params
func (o *GetRunLogsParams) SetLastTime(lastTime *strfmt.DateTime) {
	o.LastTime = lastTime
}

// WithNamespace adds the namespace to the get run logs params
func (o *GetRunLogsParams) WithNamespace(namespace string) *GetRunLogsParams {
	o.SetNamespace(namespace)
	return o
}

// SetNamespace adds the namespace to the get run logs params
func (o *GetRunLogsParams) SetNamespace(namespace string) {
	o.Namespace = namespace
}

// WithOwner adds the owner to the get run logs params
func (o *GetRunLogsParams) WithOwner(owner string) *GetRunLogsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get run logs params
func (o *GetRunLogsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the get run logs params
func (o *GetRunLogsParams) WithProject(project string) *GetRunLogsParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the get run logs params
func (o *GetRunLogsParams) SetProject(project string) {
	o.Project = project
}

// WithUUID adds the uuid to the get run logs params
func (o *GetRunLogsParams) WithUUID(uuid string) *GetRunLogsParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get run logs params
func (o *GetRunLogsParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetRunLogsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Force != nil {

		// query param force
		var qrForce bool

		if o.Force != nil {
			qrForce = *o.Force
		}
		qForce := swag.FormatBool(qrForce)
		if qForce != "" {

			if err := r.SetQueryParam("force", qForce); err != nil {
				return err
			}
		}
	}

	if o.LastFile != nil {

		// query param last_file
		var qrLastFile string

		if o.LastFile != nil {
			qrLastFile = *o.LastFile
		}
		qLastFile := qrLastFile
		if qLastFile != "" {

			if err := r.SetQueryParam("last_file", qLastFile); err != nil {
				return err
			}
		}
	}

	if o.LastTime != nil {

		// query param last_time
		var qrLastTime strfmt.DateTime

		if o.LastTime != nil {
			qrLastTime = *o.LastTime
		}
		qLastTime := qrLastTime.String()
		if qLastTime != "" {

			if err := r.SetQueryParam("last_time", qLastTime); err != nil {
				return err
			}
		}
	}

	// path param namespace
	if err := r.SetPathParam("namespace", o.Namespace); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
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

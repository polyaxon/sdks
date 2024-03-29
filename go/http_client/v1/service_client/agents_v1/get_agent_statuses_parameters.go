// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

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

// NewGetAgentStatusesParams creates a new GetAgentStatusesParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetAgentStatusesParams() *GetAgentStatusesParams {
	return &GetAgentStatusesParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetAgentStatusesParamsWithTimeout creates a new GetAgentStatusesParams object
// with the ability to set a timeout on a request.
func NewGetAgentStatusesParamsWithTimeout(timeout time.Duration) *GetAgentStatusesParams {
	return &GetAgentStatusesParams{
		timeout: timeout,
	}
}

// NewGetAgentStatusesParamsWithContext creates a new GetAgentStatusesParams object
// with the ability to set a context for a request.
func NewGetAgentStatusesParamsWithContext(ctx context.Context) *GetAgentStatusesParams {
	return &GetAgentStatusesParams{
		Context: ctx,
	}
}

// NewGetAgentStatusesParamsWithHTTPClient creates a new GetAgentStatusesParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetAgentStatusesParamsWithHTTPClient(client *http.Client) *GetAgentStatusesParams {
	return &GetAgentStatusesParams{
		HTTPClient: client,
	}
}

/*
GetAgentStatusesParams contains all the parameters to send to the API endpoint

	for the get agent statuses operation.

	Typically these are written to a http.Request.
*/
type GetAgentStatusesParams struct {

	/* Entity.

	   Entity: project name, hub name, registry name, ...
	*/
	Entity *string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* UUID.

	   Uuid identifier of the sub-entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get agent statuses params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetAgentStatusesParams) WithDefaults() *GetAgentStatusesParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get agent statuses params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetAgentStatusesParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get agent statuses params
func (o *GetAgentStatusesParams) WithTimeout(timeout time.Duration) *GetAgentStatusesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get agent statuses params
func (o *GetAgentStatusesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get agent statuses params
func (o *GetAgentStatusesParams) WithContext(ctx context.Context) *GetAgentStatusesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get agent statuses params
func (o *GetAgentStatusesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get agent statuses params
func (o *GetAgentStatusesParams) WithHTTPClient(client *http.Client) *GetAgentStatusesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get agent statuses params
func (o *GetAgentStatusesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEntity adds the entity to the get agent statuses params
func (o *GetAgentStatusesParams) WithEntity(entity *string) *GetAgentStatusesParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the get agent statuses params
func (o *GetAgentStatusesParams) SetEntity(entity *string) {
	o.Entity = entity
}

// WithOwner adds the owner to the get agent statuses params
func (o *GetAgentStatusesParams) WithOwner(owner string) *GetAgentStatusesParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get agent statuses params
func (o *GetAgentStatusesParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUUID adds the uuid to the get agent statuses params
func (o *GetAgentStatusesParams) WithUUID(uuid string) *GetAgentStatusesParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get agent statuses params
func (o *GetAgentStatusesParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetAgentStatusesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Entity != nil {

		// query param entity
		var qrEntity string

		if o.Entity != nil {
			qrEntity = *o.Entity
		}
		qEntity := qrEntity
		if qEntity != "" {

			if err := r.SetQueryParam("entity", qEntity); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
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

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

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewPatchAgentTokenParams creates a new PatchAgentTokenParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPatchAgentTokenParams() *PatchAgentTokenParams {
	return &PatchAgentTokenParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPatchAgentTokenParamsWithTimeout creates a new PatchAgentTokenParams object
// with the ability to set a timeout on a request.
func NewPatchAgentTokenParamsWithTimeout(timeout time.Duration) *PatchAgentTokenParams {
	return &PatchAgentTokenParams{
		timeout: timeout,
	}
}

// NewPatchAgentTokenParamsWithContext creates a new PatchAgentTokenParams object
// with the ability to set a context for a request.
func NewPatchAgentTokenParamsWithContext(ctx context.Context) *PatchAgentTokenParams {
	return &PatchAgentTokenParams{
		Context: ctx,
	}
}

// NewPatchAgentTokenParamsWithHTTPClient creates a new PatchAgentTokenParams object
// with the ability to set a custom HTTPClient for a request.
func NewPatchAgentTokenParamsWithHTTPClient(client *http.Client) *PatchAgentTokenParams {
	return &PatchAgentTokenParams{
		HTTPClient: client,
	}
}

/*
PatchAgentTokenParams contains all the parameters to send to the API endpoint

	for the patch agent token operation.

	Typically these are written to a http.Request.
*/
type PatchAgentTokenParams struct {

	/* Body.

	   Token body
	*/
	Body *service_model.V1Token

	/* Entity.

	   Entity
	*/
	Entity string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the patch agent token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchAgentTokenParams) WithDefaults() *PatchAgentTokenParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the patch agent token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchAgentTokenParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the patch agent token params
func (o *PatchAgentTokenParams) WithTimeout(timeout time.Duration) *PatchAgentTokenParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the patch agent token params
func (o *PatchAgentTokenParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the patch agent token params
func (o *PatchAgentTokenParams) WithContext(ctx context.Context) *PatchAgentTokenParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the patch agent token params
func (o *PatchAgentTokenParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the patch agent token params
func (o *PatchAgentTokenParams) WithHTTPClient(client *http.Client) *PatchAgentTokenParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the patch agent token params
func (o *PatchAgentTokenParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the patch agent token params
func (o *PatchAgentTokenParams) WithBody(body *service_model.V1Token) *PatchAgentTokenParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the patch agent token params
func (o *PatchAgentTokenParams) SetBody(body *service_model.V1Token) {
	o.Body = body
}

// WithEntity adds the entity to the patch agent token params
func (o *PatchAgentTokenParams) WithEntity(entity string) *PatchAgentTokenParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the patch agent token params
func (o *PatchAgentTokenParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithOwner adds the owner to the patch agent token params
func (o *PatchAgentTokenParams) WithOwner(owner string) *PatchAgentTokenParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the patch agent token params
func (o *PatchAgentTokenParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *PatchAgentTokenParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

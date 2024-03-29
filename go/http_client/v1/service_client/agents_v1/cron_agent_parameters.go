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

// NewCronAgentParams creates a new CronAgentParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCronAgentParams() *CronAgentParams {
	return &CronAgentParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCronAgentParamsWithTimeout creates a new CronAgentParams object
// with the ability to set a timeout on a request.
func NewCronAgentParamsWithTimeout(timeout time.Duration) *CronAgentParams {
	return &CronAgentParams{
		timeout: timeout,
	}
}

// NewCronAgentParamsWithContext creates a new CronAgentParams object
// with the ability to set a context for a request.
func NewCronAgentParamsWithContext(ctx context.Context) *CronAgentParams {
	return &CronAgentParams{
		Context: ctx,
	}
}

// NewCronAgentParamsWithHTTPClient creates a new CronAgentParams object
// with the ability to set a custom HTTPClient for a request.
func NewCronAgentParamsWithHTTPClient(client *http.Client) *CronAgentParams {
	return &CronAgentParams{
		HTTPClient: client,
	}
}

/*
CronAgentParams contains all the parameters to send to the API endpoint

	for the cron agent operation.

	Typically these are written to a http.Request.
*/
type CronAgentParams struct {

	/* Body.

	   Cron body
	*/
	Body interface{}

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the cron agent params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CronAgentParams) WithDefaults() *CronAgentParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the cron agent params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CronAgentParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the cron agent params
func (o *CronAgentParams) WithTimeout(timeout time.Duration) *CronAgentParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the cron agent params
func (o *CronAgentParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the cron agent params
func (o *CronAgentParams) WithContext(ctx context.Context) *CronAgentParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the cron agent params
func (o *CronAgentParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the cron agent params
func (o *CronAgentParams) WithHTTPClient(client *http.Client) *CronAgentParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the cron agent params
func (o *CronAgentParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the cron agent params
func (o *CronAgentParams) WithBody(body interface{}) *CronAgentParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the cron agent params
func (o *CronAgentParams) SetBody(body interface{}) {
	o.Body = body
}

// WithOwner adds the owner to the cron agent params
func (o *CronAgentParams) WithOwner(owner string) *CronAgentParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the cron agent params
func (o *CronAgentParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *CronAgentParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

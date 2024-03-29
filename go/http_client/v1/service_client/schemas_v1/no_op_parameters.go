// Code generated by go-swagger; DO NOT EDIT.

package schemas_v1

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

// NewNoOpParams creates a new NoOpParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewNoOpParams() *NoOpParams {
	return &NoOpParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewNoOpParamsWithTimeout creates a new NoOpParams object
// with the ability to set a timeout on a request.
func NewNoOpParamsWithTimeout(timeout time.Duration) *NoOpParams {
	return &NoOpParams{
		timeout: timeout,
	}
}

// NewNoOpParamsWithContext creates a new NoOpParams object
// with the ability to set a context for a request.
func NewNoOpParamsWithContext(ctx context.Context) *NoOpParams {
	return &NoOpParams{
		Context: ctx,
	}
}

// NewNoOpParamsWithHTTPClient creates a new NoOpParams object
// with the ability to set a custom HTTPClient for a request.
func NewNoOpParamsWithHTTPClient(client *http.Client) *NoOpParams {
	return &NoOpParams{
		HTTPClient: client,
	}
}

/*
NoOpParams contains all the parameters to send to the API endpoint

	for the no op operation.

	Typically these are written to a http.Request.
*/
type NoOpParams struct {
	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the no op params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NoOpParams) WithDefaults() *NoOpParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the no op params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NoOpParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the no op params
func (o *NoOpParams) WithTimeout(timeout time.Duration) *NoOpParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the no op params
func (o *NoOpParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the no op params
func (o *NoOpParams) WithContext(ctx context.Context) *NoOpParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the no op params
func (o *NoOpParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the no op params
func (o *NoOpParams) WithHTTPClient(client *http.Client) *NoOpParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the no op params
func (o *NoOpParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WriteToRequest writes these params to a swagger request
func (o *NoOpParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

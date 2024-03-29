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
)

// NewListOrganizationNamesParams creates a new ListOrganizationNamesParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewListOrganizationNamesParams() *ListOrganizationNamesParams {
	return &ListOrganizationNamesParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewListOrganizationNamesParamsWithTimeout creates a new ListOrganizationNamesParams object
// with the ability to set a timeout on a request.
func NewListOrganizationNamesParamsWithTimeout(timeout time.Duration) *ListOrganizationNamesParams {
	return &ListOrganizationNamesParams{
		timeout: timeout,
	}
}

// NewListOrganizationNamesParamsWithContext creates a new ListOrganizationNamesParams object
// with the ability to set a context for a request.
func NewListOrganizationNamesParamsWithContext(ctx context.Context) *ListOrganizationNamesParams {
	return &ListOrganizationNamesParams{
		Context: ctx,
	}
}

// NewListOrganizationNamesParamsWithHTTPClient creates a new ListOrganizationNamesParams object
// with the ability to set a custom HTTPClient for a request.
func NewListOrganizationNamesParamsWithHTTPClient(client *http.Client) *ListOrganizationNamesParams {
	return &ListOrganizationNamesParams{
		HTTPClient: client,
	}
}

/*
ListOrganizationNamesParams contains all the parameters to send to the API endpoint

	for the list organization names operation.

	Typically these are written to a http.Request.
*/
type ListOrganizationNamesParams struct {
	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the list organization names params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListOrganizationNamesParams) WithDefaults() *ListOrganizationNamesParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the list organization names params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListOrganizationNamesParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the list organization names params
func (o *ListOrganizationNamesParams) WithTimeout(timeout time.Duration) *ListOrganizationNamesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the list organization names params
func (o *ListOrganizationNamesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the list organization names params
func (o *ListOrganizationNamesParams) WithContext(ctx context.Context) *ListOrganizationNamesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the list organization names params
func (o *ListOrganizationNamesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the list organization names params
func (o *ListOrganizationNamesParams) WithHTTPClient(client *http.Client) *ListOrganizationNamesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the list organization names params
func (o *ListOrganizationNamesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WriteToRequest writes these params to a swagger request
func (o *ListOrganizationNamesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// Code generated by go-swagger; DO NOT EDIT.

package policies_v1

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

// NewUpdatePolicyParams creates a new UpdatePolicyParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUpdatePolicyParams() *UpdatePolicyParams {
	return &UpdatePolicyParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUpdatePolicyParamsWithTimeout creates a new UpdatePolicyParams object
// with the ability to set a timeout on a request.
func NewUpdatePolicyParamsWithTimeout(timeout time.Duration) *UpdatePolicyParams {
	return &UpdatePolicyParams{
		timeout: timeout,
	}
}

// NewUpdatePolicyParamsWithContext creates a new UpdatePolicyParams object
// with the ability to set a context for a request.
func NewUpdatePolicyParamsWithContext(ctx context.Context) *UpdatePolicyParams {
	return &UpdatePolicyParams{
		Context: ctx,
	}
}

// NewUpdatePolicyParamsWithHTTPClient creates a new UpdatePolicyParams object
// with the ability to set a custom HTTPClient for a request.
func NewUpdatePolicyParamsWithHTTPClient(client *http.Client) *UpdatePolicyParams {
	return &UpdatePolicyParams{
		HTTPClient: client,
	}
}

/*
UpdatePolicyParams contains all the parameters to send to the API endpoint

	for the update policy operation.

	Typically these are written to a http.Request.
*/
type UpdatePolicyParams struct {

	/* Body.

	   Policy body
	*/
	Body *service_model.V1Policy

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* PolicyUUID.

	   UUID
	*/
	PolicyUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the update policy params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdatePolicyParams) WithDefaults() *UpdatePolicyParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the update policy params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdatePolicyParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the update policy params
func (o *UpdatePolicyParams) WithTimeout(timeout time.Duration) *UpdatePolicyParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update policy params
func (o *UpdatePolicyParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update policy params
func (o *UpdatePolicyParams) WithContext(ctx context.Context) *UpdatePolicyParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update policy params
func (o *UpdatePolicyParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update policy params
func (o *UpdatePolicyParams) WithHTTPClient(client *http.Client) *UpdatePolicyParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update policy params
func (o *UpdatePolicyParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the update policy params
func (o *UpdatePolicyParams) WithBody(body *service_model.V1Policy) *UpdatePolicyParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update policy params
func (o *UpdatePolicyParams) SetBody(body *service_model.V1Policy) {
	o.Body = body
}

// WithOwner adds the owner to the update policy params
func (o *UpdatePolicyParams) WithOwner(owner string) *UpdatePolicyParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update policy params
func (o *UpdatePolicyParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithPolicyUUID adds the policyUUID to the update policy params
func (o *UpdatePolicyParams) WithPolicyUUID(policyUUID string) *UpdatePolicyParams {
	o.SetPolicyUUID(policyUUID)
	return o
}

// SetPolicyUUID adds the policyUuid to the update policy params
func (o *UpdatePolicyParams) SetPolicyUUID(policyUUID string) {
	o.PolicyUUID = policyUUID
}

// WriteToRequest writes these params to a swagger request
func (o *UpdatePolicyParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param policy.uuid
	if err := r.SetPathParam("policy.uuid", o.PolicyUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

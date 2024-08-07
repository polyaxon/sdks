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
	"github.com/go-openapi/swag"
)

// NewGetOrganizationMultiRunEventsParams creates a new GetOrganizationMultiRunEventsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetOrganizationMultiRunEventsParams() *GetOrganizationMultiRunEventsParams {
	return &GetOrganizationMultiRunEventsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetOrganizationMultiRunEventsParamsWithTimeout creates a new GetOrganizationMultiRunEventsParams object
// with the ability to set a timeout on a request.
func NewGetOrganizationMultiRunEventsParamsWithTimeout(timeout time.Duration) *GetOrganizationMultiRunEventsParams {
	return &GetOrganizationMultiRunEventsParams{
		timeout: timeout,
	}
}

// NewGetOrganizationMultiRunEventsParamsWithContext creates a new GetOrganizationMultiRunEventsParams object
// with the ability to set a context for a request.
func NewGetOrganizationMultiRunEventsParamsWithContext(ctx context.Context) *GetOrganizationMultiRunEventsParams {
	return &GetOrganizationMultiRunEventsParams{
		Context: ctx,
	}
}

// NewGetOrganizationMultiRunEventsParamsWithHTTPClient creates a new GetOrganizationMultiRunEventsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetOrganizationMultiRunEventsParamsWithHTTPClient(client *http.Client) *GetOrganizationMultiRunEventsParams {
	return &GetOrganizationMultiRunEventsParams{
		HTTPClient: client,
	}
}

/*
GetOrganizationMultiRunEventsParams contains all the parameters to send to the API endpoint

	for the get organization multi run events operation.

	Typically these are written to a http.Request.
*/
type GetOrganizationMultiRunEventsParams struct {

	/* Connection.

	   Connection to use.
	*/
	Connection *string

	/* Entity.

	   Entity where the run will be assigned.
	*/
	Entity *string

	/* Force.

	   Force query param.
	*/
	Force *bool

	/* Kind.

	   The artifact kind
	*/
	Kind string

	/* Names.

	   Names query param.
	*/
	Names *string

	/* Namespace.

	   namespace
	*/
	Namespace string

	/* Orient.

	   Orient query param.
	*/
	Orient *string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Runs.

	   Runs query param.
	*/
	Runs *string

	/* Sample.

	   Sample query param.

	   Format: int32
	*/
	Sample *int32

	/* Status.

	   Optional status.

	   Default: "created"
	*/
	Status *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get organization multi run events params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationMultiRunEventsParams) WithDefaults() *GetOrganizationMultiRunEventsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get organization multi run events params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationMultiRunEventsParams) SetDefaults() {
	var (
		statusDefault = string("created")
	)

	val := GetOrganizationMultiRunEventsParams{
		Status: &statusDefault,
	}

	val.timeout = o.timeout
	val.Context = o.Context
	val.HTTPClient = o.HTTPClient
	*o = val
}

// WithTimeout adds the timeout to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithTimeout(timeout time.Duration) *GetOrganizationMultiRunEventsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithContext(ctx context.Context) *GetOrganizationMultiRunEventsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithHTTPClient(client *http.Client) *GetOrganizationMultiRunEventsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithConnection adds the connection to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithConnection(connection *string) *GetOrganizationMultiRunEventsParams {
	o.SetConnection(connection)
	return o
}

// SetConnection adds the connection to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetConnection(connection *string) {
	o.Connection = connection
}

// WithEntity adds the entity to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithEntity(entity *string) *GetOrganizationMultiRunEventsParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetEntity(entity *string) {
	o.Entity = entity
}

// WithForce adds the force to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithForce(force *bool) *GetOrganizationMultiRunEventsParams {
	o.SetForce(force)
	return o
}

// SetForce adds the force to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetForce(force *bool) {
	o.Force = force
}

// WithKind adds the kind to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithKind(kind string) *GetOrganizationMultiRunEventsParams {
	o.SetKind(kind)
	return o
}

// SetKind adds the kind to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetKind(kind string) {
	o.Kind = kind
}

// WithNames adds the names to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithNames(names *string) *GetOrganizationMultiRunEventsParams {
	o.SetNames(names)
	return o
}

// SetNames adds the names to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetNames(names *string) {
	o.Names = names
}

// WithNamespace adds the namespace to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithNamespace(namespace string) *GetOrganizationMultiRunEventsParams {
	o.SetNamespace(namespace)
	return o
}

// SetNamespace adds the namespace to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetNamespace(namespace string) {
	o.Namespace = namespace
}

// WithOrient adds the orient to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithOrient(orient *string) *GetOrganizationMultiRunEventsParams {
	o.SetOrient(orient)
	return o
}

// SetOrient adds the orient to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetOrient(orient *string) {
	o.Orient = orient
}

// WithOwner adds the owner to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithOwner(owner string) *GetOrganizationMultiRunEventsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithRuns adds the runs to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithRuns(runs *string) *GetOrganizationMultiRunEventsParams {
	o.SetRuns(runs)
	return o
}

// SetRuns adds the runs to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetRuns(runs *string) {
	o.Runs = runs
}

// WithSample adds the sample to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithSample(sample *int32) *GetOrganizationMultiRunEventsParams {
	o.SetSample(sample)
	return o
}

// SetSample adds the sample to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetSample(sample *int32) {
	o.Sample = sample
}

// WithStatus adds the status to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) WithStatus(status *string) *GetOrganizationMultiRunEventsParams {
	o.SetStatus(status)
	return o
}

// SetStatus adds the status to the get organization multi run events params
func (o *GetOrganizationMultiRunEventsParams) SetStatus(status *string) {
	o.Status = status
}

// WriteToRequest writes these params to a swagger request
func (o *GetOrganizationMultiRunEventsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Connection != nil {

		// query param connection
		var qrConnection string

		if o.Connection != nil {
			qrConnection = *o.Connection
		}
		qConnection := qrConnection
		if qConnection != "" {

			if err := r.SetQueryParam("connection", qConnection); err != nil {
				return err
			}
		}
	}

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

	// path param kind
	if err := r.SetPathParam("kind", o.Kind); err != nil {
		return err
	}

	if o.Names != nil {

		// query param names
		var qrNames string

		if o.Names != nil {
			qrNames = *o.Names
		}
		qNames := qrNames
		if qNames != "" {

			if err := r.SetQueryParam("names", qNames); err != nil {
				return err
			}
		}
	}

	// path param namespace
	if err := r.SetPathParam("namespace", o.Namespace); err != nil {
		return err
	}

	if o.Orient != nil {

		// query param orient
		var qrOrient string

		if o.Orient != nil {
			qrOrient = *o.Orient
		}
		qOrient := qrOrient
		if qOrient != "" {

			if err := r.SetQueryParam("orient", qOrient); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if o.Runs != nil {

		// query param runs
		var qrRuns string

		if o.Runs != nil {
			qrRuns = *o.Runs
		}
		qRuns := qrRuns
		if qRuns != "" {

			if err := r.SetQueryParam("runs", qRuns); err != nil {
				return err
			}
		}
	}

	if o.Sample != nil {

		// query param sample
		var qrSample int32

		if o.Sample != nil {
			qrSample = *o.Sample
		}
		qSample := swag.FormatInt32(qrSample)
		if qSample != "" {

			if err := r.SetQueryParam("sample", qSample); err != nil {
				return err
			}
		}
	}

	if o.Status != nil {

		// query param status
		var qrStatus string

		if o.Status != nil {
			qrStatus = *o.Status
		}
		qStatus := qrStatus
		if qStatus != "" {

			if err := r.SetQueryParam("status", qStatus); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

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
	"github.com/go-openapi/swag"
)

// NewGetTeamStatsParams creates a new GetTeamStatsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetTeamStatsParams() *GetTeamStatsParams {
	return &GetTeamStatsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetTeamStatsParamsWithTimeout creates a new GetTeamStatsParams object
// with the ability to set a timeout on a request.
func NewGetTeamStatsParamsWithTimeout(timeout time.Duration) *GetTeamStatsParams {
	return &GetTeamStatsParams{
		timeout: timeout,
	}
}

// NewGetTeamStatsParamsWithContext creates a new GetTeamStatsParams object
// with the ability to set a context for a request.
func NewGetTeamStatsParamsWithContext(ctx context.Context) *GetTeamStatsParams {
	return &GetTeamStatsParams{
		Context: ctx,
	}
}

// NewGetTeamStatsParamsWithHTTPClient creates a new GetTeamStatsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetTeamStatsParamsWithHTTPClient(client *http.Client) *GetTeamStatsParams {
	return &GetTeamStatsParams{
		HTTPClient: client,
	}
}

/*
GetTeamStatsParams contains all the parameters to send to the API endpoint

	for the get team stats operation.

	Typically these are written to a http.Request.
*/
type GetTeamStatsParams struct {

	/* Aggregate.

	   Stats aggregate.
	*/
	Aggregate *string

	/* Bookmarks.

	   Filter by bookmarks.
	*/
	Bookmarks *bool

	/* Groupby.

	   Stats group.
	*/
	Groupby *string

	/* Kind.

	   Stats Kind.
	*/
	Kind *string

	/* Limit.

	   Limit size.

	   Format: int32
	*/
	Limit *int32

	/* Mode.

	   Stats Mode.
	*/
	Mode *string

	/* Name.

	   Entity managing the resource
	*/
	Name string

	/* Offset.

	   Pagination offset.

	   Format: int32
	*/
	Offset *int32

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Query.

	   Query filter the search.
	*/
	Query *string

	/* Sort.

	   Sort to order the search.
	*/
	Sort *string

	/* Trunc.

	   Stats trunc.
	*/
	Trunc *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get team stats params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTeamStatsParams) WithDefaults() *GetTeamStatsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get team stats params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTeamStatsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get team stats params
func (o *GetTeamStatsParams) WithTimeout(timeout time.Duration) *GetTeamStatsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get team stats params
func (o *GetTeamStatsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get team stats params
func (o *GetTeamStatsParams) WithContext(ctx context.Context) *GetTeamStatsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get team stats params
func (o *GetTeamStatsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get team stats params
func (o *GetTeamStatsParams) WithHTTPClient(client *http.Client) *GetTeamStatsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get team stats params
func (o *GetTeamStatsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAggregate adds the aggregate to the get team stats params
func (o *GetTeamStatsParams) WithAggregate(aggregate *string) *GetTeamStatsParams {
	o.SetAggregate(aggregate)
	return o
}

// SetAggregate adds the aggregate to the get team stats params
func (o *GetTeamStatsParams) SetAggregate(aggregate *string) {
	o.Aggregate = aggregate
}

// WithBookmarks adds the bookmarks to the get team stats params
func (o *GetTeamStatsParams) WithBookmarks(bookmarks *bool) *GetTeamStatsParams {
	o.SetBookmarks(bookmarks)
	return o
}

// SetBookmarks adds the bookmarks to the get team stats params
func (o *GetTeamStatsParams) SetBookmarks(bookmarks *bool) {
	o.Bookmarks = bookmarks
}

// WithGroupby adds the groupby to the get team stats params
func (o *GetTeamStatsParams) WithGroupby(groupby *string) *GetTeamStatsParams {
	o.SetGroupby(groupby)
	return o
}

// SetGroupby adds the groupby to the get team stats params
func (o *GetTeamStatsParams) SetGroupby(groupby *string) {
	o.Groupby = groupby
}

// WithKind adds the kind to the get team stats params
func (o *GetTeamStatsParams) WithKind(kind *string) *GetTeamStatsParams {
	o.SetKind(kind)
	return o
}

// SetKind adds the kind to the get team stats params
func (o *GetTeamStatsParams) SetKind(kind *string) {
	o.Kind = kind
}

// WithLimit adds the limit to the get team stats params
func (o *GetTeamStatsParams) WithLimit(limit *int32) *GetTeamStatsParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the get team stats params
func (o *GetTeamStatsParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithMode adds the mode to the get team stats params
func (o *GetTeamStatsParams) WithMode(mode *string) *GetTeamStatsParams {
	o.SetMode(mode)
	return o
}

// SetMode adds the mode to the get team stats params
func (o *GetTeamStatsParams) SetMode(mode *string) {
	o.Mode = mode
}

// WithName adds the name to the get team stats params
func (o *GetTeamStatsParams) WithName(name string) *GetTeamStatsParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the get team stats params
func (o *GetTeamStatsParams) SetName(name string) {
	o.Name = name
}

// WithOffset adds the offset to the get team stats params
func (o *GetTeamStatsParams) WithOffset(offset *int32) *GetTeamStatsParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the get team stats params
func (o *GetTeamStatsParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the get team stats params
func (o *GetTeamStatsParams) WithOwner(owner string) *GetTeamStatsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get team stats params
func (o *GetTeamStatsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithQuery adds the query to the get team stats params
func (o *GetTeamStatsParams) WithQuery(query *string) *GetTeamStatsParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the get team stats params
func (o *GetTeamStatsParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the get team stats params
func (o *GetTeamStatsParams) WithSort(sort *string) *GetTeamStatsParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the get team stats params
func (o *GetTeamStatsParams) SetSort(sort *string) {
	o.Sort = sort
}

// WithTrunc adds the trunc to the get team stats params
func (o *GetTeamStatsParams) WithTrunc(trunc *string) *GetTeamStatsParams {
	o.SetTrunc(trunc)
	return o
}

// SetTrunc adds the trunc to the get team stats params
func (o *GetTeamStatsParams) SetTrunc(trunc *string) {
	o.Trunc = trunc
}

// WriteToRequest writes these params to a swagger request
func (o *GetTeamStatsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Aggregate != nil {

		// query param aggregate
		var qrAggregate string

		if o.Aggregate != nil {
			qrAggregate = *o.Aggregate
		}
		qAggregate := qrAggregate
		if qAggregate != "" {

			if err := r.SetQueryParam("aggregate", qAggregate); err != nil {
				return err
			}
		}
	}

	if o.Bookmarks != nil {

		// query param bookmarks
		var qrBookmarks bool

		if o.Bookmarks != nil {
			qrBookmarks = *o.Bookmarks
		}
		qBookmarks := swag.FormatBool(qrBookmarks)
		if qBookmarks != "" {

			if err := r.SetQueryParam("bookmarks", qBookmarks); err != nil {
				return err
			}
		}
	}

	if o.Groupby != nil {

		// query param groupby
		var qrGroupby string

		if o.Groupby != nil {
			qrGroupby = *o.Groupby
		}
		qGroupby := qrGroupby
		if qGroupby != "" {

			if err := r.SetQueryParam("groupby", qGroupby); err != nil {
				return err
			}
		}
	}

	if o.Kind != nil {

		// query param kind
		var qrKind string

		if o.Kind != nil {
			qrKind = *o.Kind
		}
		qKind := qrKind
		if qKind != "" {

			if err := r.SetQueryParam("kind", qKind); err != nil {
				return err
			}
		}
	}

	if o.Limit != nil {

		// query param limit
		var qrLimit int32

		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt32(qrLimit)
		if qLimit != "" {

			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}
	}

	if o.Mode != nil {

		// query param mode
		var qrMode string

		if o.Mode != nil {
			qrMode = *o.Mode
		}
		qMode := qrMode
		if qMode != "" {

			if err := r.SetQueryParam("mode", qMode); err != nil {
				return err
			}
		}
	}

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	if o.Offset != nil {

		// query param offset
		var qrOffset int32

		if o.Offset != nil {
			qrOffset = *o.Offset
		}
		qOffset := swag.FormatInt32(qrOffset)
		if qOffset != "" {

			if err := r.SetQueryParam("offset", qOffset); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if o.Query != nil {

		// query param query
		var qrQuery string

		if o.Query != nil {
			qrQuery = *o.Query
		}
		qQuery := qrQuery
		if qQuery != "" {

			if err := r.SetQueryParam("query", qQuery); err != nil {
				return err
			}
		}
	}

	if o.Sort != nil {

		// query param sort
		var qrSort string

		if o.Sort != nil {
			qrSort = *o.Sort
		}
		qSort := qrSort
		if qSort != "" {

			if err := r.SetQueryParam("sort", qSort); err != nil {
				return err
			}
		}
	}

	if o.Trunc != nil {

		// query param trunc
		var qrTrunc string

		if o.Trunc != nil {
			qrTrunc = *o.Trunc
		}
		qTrunc := qrTrunc
		if qTrunc != "" {

			if err := r.SetQueryParam("trunc", qTrunc); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
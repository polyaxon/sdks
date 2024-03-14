// Code generated by go-swagger; DO NOT EDIT.

package policies_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new policies v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for policies v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreatePolicy(params *CreatePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreatePolicyOK, *CreatePolicyNoContent, error)

	DeletePolicy(params *DeletePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeletePolicyOK, *DeletePolicyNoContent, error)

	GetPolicy(params *GetPolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetPolicyOK, *GetPolicyNoContent, error)

	ListPolicies(params *ListPoliciesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPoliciesOK, *ListPoliciesNoContent, error)

	ListPolicyNames(params *ListPolicyNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPolicyNamesOK, *ListPolicyNamesNoContent, error)

	PatchPolicy(params *PatchPolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchPolicyOK, *PatchPolicyNoContent, error)

	UpdatePolicy(params *UpdatePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdatePolicyOK, *UpdatePolicyNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
CreatePolicy creates policy
*/
func (a *Client) CreatePolicy(params *CreatePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreatePolicyOK, *CreatePolicyNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreatePolicyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreatePolicy",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/policies",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreatePolicyReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *CreatePolicyOK:
		return value, nil, nil
	case *CreatePolicyNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreatePolicyDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
DeletePolicy deletes scheduling preset
*/
func (a *Client) DeletePolicy(params *DeletePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeletePolicyOK, *DeletePolicyNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeletePolicyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeletePolicy",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/policies/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeletePolicyReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *DeletePolicyOK:
		return value, nil, nil
	case *DeletePolicyNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeletePolicyDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
GetPolicy gets policy
*/
func (a *Client) GetPolicy(params *GetPolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetPolicyOK, *GetPolicyNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetPolicyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetPolicy",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/policies/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetPolicyReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetPolicyOK:
		return value, nil, nil
	case *GetPolicyNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetPolicyDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
ListPolicies lists policies
*/
func (a *Client) ListPolicies(params *ListPoliciesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPoliciesOK, *ListPoliciesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListPoliciesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListPolicies",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/policies",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListPoliciesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListPoliciesOK:
		return value, nil, nil
	case *ListPoliciesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListPoliciesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
ListPolicyNames lists scheduling policies names
*/
func (a *Client) ListPolicyNames(params *ListPolicyNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPolicyNamesOK, *ListPolicyNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListPolicyNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListPolicyNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/policies/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListPolicyNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListPolicyNamesOK:
		return value, nil, nil
	case *ListPolicyNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListPolicyNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
PatchPolicy patches policy
*/
func (a *Client) PatchPolicy(params *PatchPolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchPolicyOK, *PatchPolicyNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchPolicyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchPolicy",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/policies/{policy.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchPolicyReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchPolicyOK:
		return value, nil, nil
	case *PatchPolicyNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchPolicyDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
UpdatePolicy updates policy
*/
func (a *Client) UpdatePolicy(params *UpdatePolicyParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdatePolicyOK, *UpdatePolicyNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdatePolicyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdatePolicy",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/policies/{policy.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdatePolicyReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdatePolicyOK:
		return value, nil, nil
	case *UpdatePolicyNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdatePolicyDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

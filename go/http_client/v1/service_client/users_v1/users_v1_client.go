// Copyright 2018-2021 Polyaxon, Inc.
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

package users_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new users v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for users v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateToken(params *CreateTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTokenOK, *CreateTokenNoContent, error)

	DeleteToken(params *DeleteTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTokenOK, *DeleteTokenNoContent, error)

	GetHistory(params *GetHistoryParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetHistoryOK, *GetHistoryNoContent, error)

	GetSuggestions(params *GetSuggestionsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetSuggestionsOK, *GetSuggestionsNoContent, error)

	GetToken(params *GetTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTokenOK, *GetTokenNoContent, error)

	GetUser(params *GetUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetUserOK, *GetUserNoContent, error)

	ListTokens(params *ListTokensParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTokensOK, *ListTokensNoContent, error)

	PatchToken(params *PatchTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTokenOK, *PatchTokenNoContent, error)

	PatchUser(params *PatchUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchUserOK, *PatchUserNoContent, error)

	UpdateToken(params *UpdateTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTokenOK, *UpdateTokenNoContent, error)

	UpdateUser(params *UpdateUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateUserOK, *UpdateUserNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateToken creates token
*/
func (a *Client) CreateToken(params *CreateTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTokenOK, *CreateTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateToken",
		Method:             "POST",
		PathPattern:        "/api/v1/users/tokens",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateTokenReader{formats: a.formats},
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
	case *CreateTokenOK:
		return value, nil, nil
	case *CreateTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteToken deletes token
*/
func (a *Client) DeleteToken(params *DeleteTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTokenOK, *DeleteTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteToken",
		Method:             "DELETE",
		PathPattern:        "/api/v1/users/tokens/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteTokenReader{formats: a.formats},
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
	case *DeleteTokenOK:
		return value, nil, nil
	case *DeleteTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetHistory users history
*/
func (a *Client) GetHistory(params *GetHistoryParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetHistoryOK, *GetHistoryNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetHistoryParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetHistory",
		Method:             "GET",
		PathPattern:        "/api/v1/users/history",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetHistoryReader{formats: a.formats},
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
	case *GetHistoryOK:
		return value, nil, nil
	case *GetHistoryNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetHistoryDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetSuggestions users suggestions
*/
func (a *Client) GetSuggestions(params *GetSuggestionsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetSuggestionsOK, *GetSuggestionsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetSuggestionsParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetSuggestions",
		Method:             "GET",
		PathPattern:        "/api/v1/users/suggestions",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetSuggestionsReader{formats: a.formats},
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
	case *GetSuggestionsOK:
		return value, nil, nil
	case *GetSuggestionsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetSuggestionsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetToken gets token
*/
func (a *Client) GetToken(params *GetTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTokenOK, *GetTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetToken",
		Method:             "GET",
		PathPattern:        "/api/v1/users/tokens/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetTokenReader{formats: a.formats},
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
	case *GetTokenOK:
		return value, nil, nil
	case *GetTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetUser gets current user
*/
func (a *Client) GetUser(params *GetUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetUserOK, *GetUserNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetUserParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetUser",
		Method:             "GET",
		PathPattern:        "/api/v1/users",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetUserReader{formats: a.formats},
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
	case *GetUserOK:
		return value, nil, nil
	case *GetUserNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetUserDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListTokens lists tokens
*/
func (a *Client) ListTokens(params *ListTokensParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTokensOK, *ListTokensNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListTokensParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListTokens",
		Method:             "GET",
		PathPattern:        "/api/v1/users/tokens",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListTokensReader{formats: a.formats},
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
	case *ListTokensOK:
		return value, nil, nil
	case *ListTokensNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListTokensDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchToken patches token
*/
func (a *Client) PatchToken(params *PatchTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTokenOK, *PatchTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchToken",
		Method:             "PATCH",
		PathPattern:        "/api/v1/users/tokens/{token.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchTokenReader{formats: a.formats},
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
	case *PatchTokenOK:
		return value, nil, nil
	case *PatchTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchUser patches current user
*/
func (a *Client) PatchUser(params *PatchUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchUserOK, *PatchUserNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchUserParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchUser",
		Method:             "PATCH",
		PathPattern:        "/api/v1/users",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchUserReader{formats: a.formats},
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
	case *PatchUserOK:
		return value, nil, nil
	case *PatchUserNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchUserDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateToken updates token
*/
func (a *Client) UpdateToken(params *UpdateTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTokenOK, *UpdateTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateToken",
		Method:             "PUT",
		PathPattern:        "/api/v1/users/tokens/{token.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateTokenReader{formats: a.formats},
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
	case *UpdateTokenOK:
		return value, nil, nil
	case *UpdateTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateUser updates current user
*/
func (a *Client) UpdateUser(params *UpdateUserParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateUserOK, *UpdateUserNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateUserParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateUser",
		Method:             "PUT",
		PathPattern:        "/api/v1/users",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateUserReader{formats: a.formats},
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
	case *UpdateUserOK:
		return value, nil, nil
	case *UpdateUserNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateUserDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

// Copyright 2018-2022 Polyaxon, Inc.
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

package teams_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new teams v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for teams v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateTeam(params *CreateTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTeamOK, *CreateTeamNoContent, error)

	CreateTeamMember(params *CreateTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTeamMemberOK, *CreateTeamMemberNoContent, error)

	DeleteTeam(params *DeleteTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTeamOK, *DeleteTeamNoContent, error)

	DeleteTeamMember(params *DeleteTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTeamMemberOK, *DeleteTeamMemberNoContent, error)

	GetTeam(params *GetTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTeamOK, *GetTeamNoContent, error)

	GetTeamMember(params *GetTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTeamMemberOK, *GetTeamMemberNoContent, error)

	ListTeamMembers(params *ListTeamMembersParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamMembersOK, *ListTeamMembersNoContent, error)

	ListTeamNames(params *ListTeamNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamNamesOK, *ListTeamNamesNoContent, error)

	ListTeams(params *ListTeamsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamsOK, *ListTeamsNoContent, error)

	PatchTeam(params *PatchTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTeamOK, *PatchTeamNoContent, error)

	PatchTeamMember(params *PatchTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTeamMemberOK, *PatchTeamMemberNoContent, error)

	UpdateTeam(params *UpdateTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTeamOK, *UpdateTeamNoContent, error)

	UpdateTeamMember(params *UpdateTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTeamMemberOK, *UpdateTeamMemberNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateTeam creates team
*/
func (a *Client) CreateTeam(params *CreateTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTeamOK, *CreateTeamNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateTeamParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateTeam",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/teams",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateTeamReader{formats: a.formats},
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
	case *CreateTeamOK:
		return value, nil, nil
	case *CreateTeamNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateTeamDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  CreateTeamMember creates team member
*/
func (a *Client) CreateTeamMember(params *CreateTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateTeamMemberOK, *CreateTeamMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateTeamMemberParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateTeamMember",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team}/members",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateTeamMemberReader{formats: a.formats},
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
	case *CreateTeamMemberOK:
		return value, nil, nil
	case *CreateTeamMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateTeamMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteTeam deletes team
*/
func (a *Client) DeleteTeam(params *DeleteTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTeamOK, *DeleteTeamNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteTeamParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteTeam",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteTeamReader{formats: a.formats},
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
	case *DeleteTeamOK:
		return value, nil, nil
	case *DeleteTeamNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteTeamDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteTeamMember deletes team member details
*/
func (a *Client) DeleteTeamMember(params *DeleteTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteTeamMemberOK, *DeleteTeamMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteTeamMemberParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteTeamMember",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team}/members/{user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteTeamMemberReader{formats: a.formats},
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
	case *DeleteTeamMemberOK:
		return value, nil, nil
	case *DeleteTeamMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteTeamMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetTeam gets team
*/
func (a *Client) GetTeam(params *GetTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTeamOK, *GetTeamNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetTeamParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetTeam",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetTeamReader{formats: a.formats},
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
	case *GetTeamOK:
		return value, nil, nil
	case *GetTeamNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetTeamDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetTeamMember gets team member details
*/
func (a *Client) GetTeamMember(params *GetTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetTeamMemberOK, *GetTeamMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetTeamMemberParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetTeamMember",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team}/members/{user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetTeamMemberReader{formats: a.formats},
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
	case *GetTeamMemberOK:
		return value, nil, nil
	case *GetTeamMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetTeamMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListTeamMembers gets team members
*/
func (a *Client) ListTeamMembers(params *ListTeamMembersParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamMembersOK, *ListTeamMembersNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListTeamMembersParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListTeamMembers",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{name}/members",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListTeamMembersReader{formats: a.formats},
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
	case *ListTeamMembersOK:
		return value, nil, nil
	case *ListTeamMembersNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListTeamMembersDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListTeamNames lists teams names
*/
func (a *Client) ListTeamNames(params *ListTeamNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamNamesOK, *ListTeamNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListTeamNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListTeamNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/teams/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListTeamNamesReader{formats: a.formats},
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
	case *ListTeamNamesOK:
		return value, nil, nil
	case *ListTeamNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListTeamNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListTeams lists teams
*/
func (a *Client) ListTeams(params *ListTeamsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListTeamsOK, *ListTeamsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListTeamsParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListTeams",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/teams",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListTeamsReader{formats: a.formats},
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
	case *ListTeamsOK:
		return value, nil, nil
	case *ListTeamsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListTeamsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchTeam patches team
*/
func (a *Client) PatchTeam(params *PatchTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTeamOK, *PatchTeamNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchTeamParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchTeam",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team.name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchTeamReader{formats: a.formats},
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
	case *PatchTeamOK:
		return value, nil, nil
	case *PatchTeamNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchTeamDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchTeamMember patches team member
*/
func (a *Client) PatchTeamMember(params *PatchTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchTeamMemberOK, *PatchTeamMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchTeamMemberParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchTeamMember",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team}/members/{member.user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchTeamMemberReader{formats: a.formats},
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
	case *PatchTeamMemberOK:
		return value, nil, nil
	case *PatchTeamMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchTeamMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateTeam updates team
*/
func (a *Client) UpdateTeam(params *UpdateTeamParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTeamOK, *UpdateTeamNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateTeamParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateTeam",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team.name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateTeamReader{formats: a.formats},
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
	case *UpdateTeamOK:
		return value, nil, nil
	case *UpdateTeamNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateTeamDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateTeamMember updates team member
*/
func (a *Client) UpdateTeamMember(params *UpdateTeamMemberParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateTeamMemberOK, *UpdateTeamMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateTeamMemberParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateTeamMember",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/teams/{team}/members/{member.user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateTeamMemberReader{formats: a.formats},
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
	case *UpdateTeamMemberOK:
		return value, nil, nil
	case *UpdateTeamMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateTeamMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

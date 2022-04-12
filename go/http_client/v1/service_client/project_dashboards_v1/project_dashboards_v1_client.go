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

package project_dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new project dashboards v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for project dashboards v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateProjectDashboard(params *CreateProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateProjectDashboardOK, *CreateProjectDashboardNoContent, error)

	DeleteProjectDashboard(params *DeleteProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteProjectDashboardOK, *DeleteProjectDashboardNoContent, error)

	GetProjectDashboard(params *GetProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetProjectDashboardOK, *GetProjectDashboardNoContent, error)

	ListProjectDashboardNames(params *ListProjectDashboardNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListProjectDashboardNamesOK, *ListProjectDashboardNamesNoContent, error)

	ListProjectDashboards(params *ListProjectDashboardsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListProjectDashboardsOK, *ListProjectDashboardsNoContent, error)

	PatchProjectDashboard(params *PatchProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchProjectDashboardOK, *PatchProjectDashboardNoContent, error)

	PromoteProjectDashboard(params *PromoteProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PromoteProjectDashboardOK, *PromoteProjectDashboardNoContent, error)

	UpdateProjectDashboard(params *UpdateProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateProjectDashboardOK, *UpdateProjectDashboardNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateProjectDashboard creates project dashboard
*/
func (a *Client) CreateProjectDashboard(params *CreateProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateProjectDashboardOK, *CreateProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateProjectDashboard",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{project}/dashboards",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateProjectDashboardReader{formats: a.formats},
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
	case *CreateProjectDashboardOK:
		return value, nil, nil
	case *CreateProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteProjectDashboard deletes project dashboard
*/
func (a *Client) DeleteProjectDashboard(params *DeleteProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteProjectDashboardOK, *DeleteProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteProjectDashboard",
		Method:             "DELETE",
		PathPattern:        "/api/v1/{owner}/{entity}/dashboards/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteProjectDashboardReader{formats: a.formats},
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
	case *DeleteProjectDashboardOK:
		return value, nil, nil
	case *DeleteProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetProjectDashboard gets project dashboard
*/
func (a *Client) GetProjectDashboard(params *GetProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetProjectDashboardOK, *GetProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetProjectDashboard",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/{entity}/dashboards/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetProjectDashboardReader{formats: a.formats},
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
	case *GetProjectDashboardOK:
		return value, nil, nil
	case *GetProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListProjectDashboardNames lists project dashboard
*/
func (a *Client) ListProjectDashboardNames(params *ListProjectDashboardNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListProjectDashboardNamesOK, *ListProjectDashboardNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListProjectDashboardNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListProjectDashboardNames",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/{name}/dashboards/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListProjectDashboardNamesReader{formats: a.formats},
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
	case *ListProjectDashboardNamesOK:
		return value, nil, nil
	case *ListProjectDashboardNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListProjectDashboardNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListProjectDashboards lists project dashboards
*/
func (a *Client) ListProjectDashboards(params *ListProjectDashboardsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListProjectDashboardsOK, *ListProjectDashboardsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListProjectDashboardsParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListProjectDashboards",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/{name}/dashboards",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListProjectDashboardsReader{formats: a.formats},
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
	case *ListProjectDashboardsOK:
		return value, nil, nil
	case *ListProjectDashboardsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListProjectDashboardsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchProjectDashboard patches project dashboard
*/
func (a *Client) PatchProjectDashboard(params *PatchProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchProjectDashboardOK, *PatchProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchProjectDashboard",
		Method:             "PATCH",
		PathPattern:        "/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchProjectDashboardReader{formats: a.formats},
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
	case *PatchProjectDashboardOK:
		return value, nil, nil
	case *PatchProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PromoteProjectDashboard promotes project dashboard
*/
func (a *Client) PromoteProjectDashboard(params *PromoteProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PromoteProjectDashboardOK, *PromoteProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPromoteProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PromoteProjectDashboard",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{entity}/dashboards/{uuid}/promote",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PromoteProjectDashboardReader{formats: a.formats},
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
	case *PromoteProjectDashboardOK:
		return value, nil, nil
	case *PromoteProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PromoteProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateProjectDashboard updates project dashboard
*/
func (a *Client) UpdateProjectDashboard(params *UpdateProjectDashboardParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateProjectDashboardOK, *UpdateProjectDashboardNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateProjectDashboardParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateProjectDashboard",
		Method:             "PUT",
		PathPattern:        "/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateProjectDashboardReader{formats: a.formats},
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
	case *UpdateProjectDashboardOK:
		return value, nil, nil
	case *UpdateProjectDashboardNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateProjectDashboardDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

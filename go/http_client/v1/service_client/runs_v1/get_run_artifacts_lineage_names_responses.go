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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetRunArtifactsLineageNamesReader is a Reader for the GetRunArtifactsLineageNames structure.
type GetRunArtifactsLineageNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunArtifactsLineageNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunArtifactsLineageNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunArtifactsLineageNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunArtifactsLineageNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunArtifactsLineageNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunArtifactsLineageNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunArtifactsLineageNamesOK creates a GetRunArtifactsLineageNamesOK with default headers values
func NewGetRunArtifactsLineageNamesOK() *GetRunArtifactsLineageNamesOK {
	return &GetRunArtifactsLineageNamesOK{}
}

/* GetRunArtifactsLineageNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunArtifactsLineageNamesOK struct {
	Payload *service_model.V1ListRunArtifactsResponse
}

func (o *GetRunArtifactsLineageNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names][%d] getRunArtifactsLineageNamesOK  %+v", 200, o.Payload)
}
func (o *GetRunArtifactsLineageNamesOK) GetPayload() *service_model.V1ListRunArtifactsResponse {
	return o.Payload
}

func (o *GetRunArtifactsLineageNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListRunArtifactsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunArtifactsLineageNamesNoContent creates a GetRunArtifactsLineageNamesNoContent with default headers values
func NewGetRunArtifactsLineageNamesNoContent() *GetRunArtifactsLineageNamesNoContent {
	return &GetRunArtifactsLineageNamesNoContent{}
}

/* GetRunArtifactsLineageNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunArtifactsLineageNamesNoContent struct {
	Payload interface{}
}

func (o *GetRunArtifactsLineageNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names][%d] getRunArtifactsLineageNamesNoContent  %+v", 204, o.Payload)
}
func (o *GetRunArtifactsLineageNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunArtifactsLineageNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunArtifactsLineageNamesForbidden creates a GetRunArtifactsLineageNamesForbidden with default headers values
func NewGetRunArtifactsLineageNamesForbidden() *GetRunArtifactsLineageNamesForbidden {
	return &GetRunArtifactsLineageNamesForbidden{}
}

/* GetRunArtifactsLineageNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunArtifactsLineageNamesForbidden struct {
	Payload interface{}
}

func (o *GetRunArtifactsLineageNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names][%d] getRunArtifactsLineageNamesForbidden  %+v", 403, o.Payload)
}
func (o *GetRunArtifactsLineageNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunArtifactsLineageNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunArtifactsLineageNamesNotFound creates a GetRunArtifactsLineageNamesNotFound with default headers values
func NewGetRunArtifactsLineageNamesNotFound() *GetRunArtifactsLineageNamesNotFound {
	return &GetRunArtifactsLineageNamesNotFound{}
}

/* GetRunArtifactsLineageNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunArtifactsLineageNamesNotFound struct {
	Payload interface{}
}

func (o *GetRunArtifactsLineageNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names][%d] getRunArtifactsLineageNamesNotFound  %+v", 404, o.Payload)
}
func (o *GetRunArtifactsLineageNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunArtifactsLineageNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunArtifactsLineageNamesDefault creates a GetRunArtifactsLineageNamesDefault with default headers values
func NewGetRunArtifactsLineageNamesDefault(code int) *GetRunArtifactsLineageNamesDefault {
	return &GetRunArtifactsLineageNamesDefault{
		_statusCode: code,
	}
}

/* GetRunArtifactsLineageNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunArtifactsLineageNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get run artifacts lineage names default response
func (o *GetRunArtifactsLineageNamesDefault) Code() int {
	return o._statusCode
}

func (o *GetRunArtifactsLineageNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/artifacts/names][%d] GetRunArtifactsLineageNames default  %+v", o._statusCode, o.Payload)
}
func (o *GetRunArtifactsLineageNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunArtifactsLineageNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

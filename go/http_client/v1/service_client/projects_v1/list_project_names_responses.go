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

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListProjectNamesReader is a Reader for the ListProjectNames structure.
type ListProjectNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListProjectNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListProjectNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListProjectNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListProjectNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListProjectNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListProjectNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListProjectNamesOK creates a ListProjectNamesOK with default headers values
func NewListProjectNamesOK() *ListProjectNamesOK {
	return &ListProjectNamesOK{}
}

/* ListProjectNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListProjectNamesOK struct {
	Payload *service_model.V1ListProjectsResponse
}

func (o *ListProjectNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/projects/names][%d] listProjectNamesOK  %+v", 200, o.Payload)
}
func (o *ListProjectNamesOK) GetPayload() *service_model.V1ListProjectsResponse {
	return o.Payload
}

func (o *ListProjectNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListProjectsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectNamesNoContent creates a ListProjectNamesNoContent with default headers values
func NewListProjectNamesNoContent() *ListProjectNamesNoContent {
	return &ListProjectNamesNoContent{}
}

/* ListProjectNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListProjectNamesNoContent struct {
	Payload interface{}
}

func (o *ListProjectNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/projects/names][%d] listProjectNamesNoContent  %+v", 204, o.Payload)
}
func (o *ListProjectNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectNamesForbidden creates a ListProjectNamesForbidden with default headers values
func NewListProjectNamesForbidden() *ListProjectNamesForbidden {
	return &ListProjectNamesForbidden{}
}

/* ListProjectNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListProjectNamesForbidden struct {
	Payload interface{}
}

func (o *ListProjectNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/projects/names][%d] listProjectNamesForbidden  %+v", 403, o.Payload)
}
func (o *ListProjectNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectNamesNotFound creates a ListProjectNamesNotFound with default headers values
func NewListProjectNamesNotFound() *ListProjectNamesNotFound {
	return &ListProjectNamesNotFound{}
}

/* ListProjectNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListProjectNamesNotFound struct {
	Payload interface{}
}

func (o *ListProjectNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/projects/names][%d] listProjectNamesNotFound  %+v", 404, o.Payload)
}
func (o *ListProjectNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectNamesDefault creates a ListProjectNamesDefault with default headers values
func NewListProjectNamesDefault(code int) *ListProjectNamesDefault {
	return &ListProjectNamesDefault{
		_statusCode: code,
	}
}

/* ListProjectNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListProjectNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list project names default response
func (o *ListProjectNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListProjectNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/projects/names][%d] ListProjectNames default  %+v", o._statusCode, o.Payload)
}
func (o *ListProjectNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListProjectNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

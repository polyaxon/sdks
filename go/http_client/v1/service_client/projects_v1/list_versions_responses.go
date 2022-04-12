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

// ListVersionsReader is a Reader for the ListVersions structure.
type ListVersionsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListVersionsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListVersionsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListVersionsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListVersionsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListVersionsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListVersionsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListVersionsOK creates a ListVersionsOK with default headers values
func NewListVersionsOK() *ListVersionsOK {
	return &ListVersionsOK{}
}

/* ListVersionsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListVersionsOK struct {
	Payload *service_model.V1ListProjectVersionsResponse
}

func (o *ListVersionsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/versions/{kind}][%d] listVersionsOK  %+v", 200, o.Payload)
}
func (o *ListVersionsOK) GetPayload() *service_model.V1ListProjectVersionsResponse {
	return o.Payload
}

func (o *ListVersionsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListProjectVersionsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListVersionsNoContent creates a ListVersionsNoContent with default headers values
func NewListVersionsNoContent() *ListVersionsNoContent {
	return &ListVersionsNoContent{}
}

/* ListVersionsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListVersionsNoContent struct {
	Payload interface{}
}

func (o *ListVersionsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/versions/{kind}][%d] listVersionsNoContent  %+v", 204, o.Payload)
}
func (o *ListVersionsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListVersionsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListVersionsForbidden creates a ListVersionsForbidden with default headers values
func NewListVersionsForbidden() *ListVersionsForbidden {
	return &ListVersionsForbidden{}
}

/* ListVersionsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListVersionsForbidden struct {
	Payload interface{}
}

func (o *ListVersionsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/versions/{kind}][%d] listVersionsForbidden  %+v", 403, o.Payload)
}
func (o *ListVersionsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListVersionsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListVersionsNotFound creates a ListVersionsNotFound with default headers values
func NewListVersionsNotFound() *ListVersionsNotFound {
	return &ListVersionsNotFound{}
}

/* ListVersionsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListVersionsNotFound struct {
	Payload interface{}
}

func (o *ListVersionsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/versions/{kind}][%d] listVersionsNotFound  %+v", 404, o.Payload)
}
func (o *ListVersionsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListVersionsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListVersionsDefault creates a ListVersionsDefault with default headers values
func NewListVersionsDefault(code int) *ListVersionsDefault {
	return &ListVersionsDefault{
		_statusCode: code,
	}
}

/* ListVersionsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListVersionsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list versions default response
func (o *ListVersionsDefault) Code() int {
	return o._statusCode
}

func (o *ListVersionsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/versions/{kind}][%d] ListVersions default  %+v", o._statusCode, o.Payload)
}
func (o *ListVersionsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListVersionsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

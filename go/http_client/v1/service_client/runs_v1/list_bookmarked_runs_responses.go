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

// ListBookmarkedRunsReader is a Reader for the ListBookmarkedRuns structure.
type ListBookmarkedRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListBookmarkedRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListBookmarkedRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListBookmarkedRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListBookmarkedRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListBookmarkedRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListBookmarkedRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListBookmarkedRunsOK creates a ListBookmarkedRunsOK with default headers values
func NewListBookmarkedRunsOK() *ListBookmarkedRunsOK {
	return &ListBookmarkedRunsOK{}
}

/* ListBookmarkedRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListBookmarkedRunsOK struct {
	Payload *service_model.V1ListBookmarksResponse
}

func (o *ListBookmarkedRunsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/runs][%d] listBookmarkedRunsOK  %+v", 200, o.Payload)
}
func (o *ListBookmarkedRunsOK) GetPayload() *service_model.V1ListBookmarksResponse {
	return o.Payload
}

func (o *ListBookmarkedRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListBookmarksResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedRunsNoContent creates a ListBookmarkedRunsNoContent with default headers values
func NewListBookmarkedRunsNoContent() *ListBookmarkedRunsNoContent {
	return &ListBookmarkedRunsNoContent{}
}

/* ListBookmarkedRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListBookmarkedRunsNoContent struct {
	Payload interface{}
}

func (o *ListBookmarkedRunsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/runs][%d] listBookmarkedRunsNoContent  %+v", 204, o.Payload)
}
func (o *ListBookmarkedRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedRunsForbidden creates a ListBookmarkedRunsForbidden with default headers values
func NewListBookmarkedRunsForbidden() *ListBookmarkedRunsForbidden {
	return &ListBookmarkedRunsForbidden{}
}

/* ListBookmarkedRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListBookmarkedRunsForbidden struct {
	Payload interface{}
}

func (o *ListBookmarkedRunsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/runs][%d] listBookmarkedRunsForbidden  %+v", 403, o.Payload)
}
func (o *ListBookmarkedRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedRunsNotFound creates a ListBookmarkedRunsNotFound with default headers values
func NewListBookmarkedRunsNotFound() *ListBookmarkedRunsNotFound {
	return &ListBookmarkedRunsNotFound{}
}

/* ListBookmarkedRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListBookmarkedRunsNotFound struct {
	Payload interface{}
}

func (o *ListBookmarkedRunsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/runs][%d] listBookmarkedRunsNotFound  %+v", 404, o.Payload)
}
func (o *ListBookmarkedRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedRunsDefault creates a ListBookmarkedRunsDefault with default headers values
func NewListBookmarkedRunsDefault(code int) *ListBookmarkedRunsDefault {
	return &ListBookmarkedRunsDefault{
		_statusCode: code,
	}
}

/* ListBookmarkedRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListBookmarkedRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list bookmarked runs default response
func (o *ListBookmarkedRunsDefault) Code() int {
	return o._statusCode
}

func (o *ListBookmarkedRunsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/runs][%d] ListBookmarkedRuns default  %+v", o._statusCode, o.Payload)
}
func (o *ListBookmarkedRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListBookmarkedRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

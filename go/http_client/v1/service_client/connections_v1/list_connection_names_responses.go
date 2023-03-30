// Copyright 2018-2023 Polyaxon, Inc.
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

package connections_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListConnectionNamesReader is a Reader for the ListConnectionNames structure.
type ListConnectionNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListConnectionNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListConnectionNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListConnectionNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListConnectionNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListConnectionNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListConnectionNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListConnectionNamesOK creates a ListConnectionNamesOK with default headers values
func NewListConnectionNamesOK() *ListConnectionNamesOK {
	return &ListConnectionNamesOK{}
}

/*
ListConnectionNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListConnectionNamesOK struct {
	Payload *service_model.V1ListConnectionsResponse
}

// IsSuccess returns true when this list connection names o k response has a 2xx status code
func (o *ListConnectionNamesOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list connection names o k response has a 3xx status code
func (o *ListConnectionNamesOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list connection names o k response has a 4xx status code
func (o *ListConnectionNamesOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this list connection names o k response has a 5xx status code
func (o *ListConnectionNamesOK) IsServerError() bool {
	return false
}

// IsCode returns true when this list connection names o k response a status code equal to that given
func (o *ListConnectionNamesOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the list connection names o k response
func (o *ListConnectionNamesOK) Code() int {
	return 200
}

func (o *ListConnectionNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesOK  %+v", 200, o.Payload)
}

func (o *ListConnectionNamesOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesOK  %+v", 200, o.Payload)
}

func (o *ListConnectionNamesOK) GetPayload() *service_model.V1ListConnectionsResponse {
	return o.Payload
}

func (o *ListConnectionNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListConnectionsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionNamesNoContent creates a ListConnectionNamesNoContent with default headers values
func NewListConnectionNamesNoContent() *ListConnectionNamesNoContent {
	return &ListConnectionNamesNoContent{}
}

/*
ListConnectionNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListConnectionNamesNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this list connection names no content response has a 2xx status code
func (o *ListConnectionNamesNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list connection names no content response has a 3xx status code
func (o *ListConnectionNamesNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list connection names no content response has a 4xx status code
func (o *ListConnectionNamesNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this list connection names no content response has a 5xx status code
func (o *ListConnectionNamesNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this list connection names no content response a status code equal to that given
func (o *ListConnectionNamesNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the list connection names no content response
func (o *ListConnectionNamesNoContent) Code() int {
	return 204
}

func (o *ListConnectionNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesNoContent  %+v", 204, o.Payload)
}

func (o *ListConnectionNamesNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesNoContent  %+v", 204, o.Payload)
}

func (o *ListConnectionNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionNamesForbidden creates a ListConnectionNamesForbidden with default headers values
func NewListConnectionNamesForbidden() *ListConnectionNamesForbidden {
	return &ListConnectionNamesForbidden{}
}

/*
ListConnectionNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListConnectionNamesForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this list connection names forbidden response has a 2xx status code
func (o *ListConnectionNamesForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list connection names forbidden response has a 3xx status code
func (o *ListConnectionNamesForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list connection names forbidden response has a 4xx status code
func (o *ListConnectionNamesForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this list connection names forbidden response has a 5xx status code
func (o *ListConnectionNamesForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this list connection names forbidden response a status code equal to that given
func (o *ListConnectionNamesForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the list connection names forbidden response
func (o *ListConnectionNamesForbidden) Code() int {
	return 403
}

func (o *ListConnectionNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesForbidden  %+v", 403, o.Payload)
}

func (o *ListConnectionNamesForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesForbidden  %+v", 403, o.Payload)
}

func (o *ListConnectionNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionNamesNotFound creates a ListConnectionNamesNotFound with default headers values
func NewListConnectionNamesNotFound() *ListConnectionNamesNotFound {
	return &ListConnectionNamesNotFound{}
}

/*
ListConnectionNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListConnectionNamesNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this list connection names not found response has a 2xx status code
func (o *ListConnectionNamesNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list connection names not found response has a 3xx status code
func (o *ListConnectionNamesNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list connection names not found response has a 4xx status code
func (o *ListConnectionNamesNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this list connection names not found response has a 5xx status code
func (o *ListConnectionNamesNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this list connection names not found response a status code equal to that given
func (o *ListConnectionNamesNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the list connection names not found response
func (o *ListConnectionNamesNotFound) Code() int {
	return 404
}

func (o *ListConnectionNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesNotFound  %+v", 404, o.Payload)
}

func (o *ListConnectionNamesNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] listConnectionNamesNotFound  %+v", 404, o.Payload)
}

func (o *ListConnectionNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionNamesDefault creates a ListConnectionNamesDefault with default headers values
func NewListConnectionNamesDefault(code int) *ListConnectionNamesDefault {
	return &ListConnectionNamesDefault{
		_statusCode: code,
	}
}

/*
ListConnectionNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListConnectionNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this list connection names default response has a 2xx status code
func (o *ListConnectionNamesDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this list connection names default response has a 3xx status code
func (o *ListConnectionNamesDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this list connection names default response has a 4xx status code
func (o *ListConnectionNamesDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this list connection names default response has a 5xx status code
func (o *ListConnectionNamesDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this list connection names default response a status code equal to that given
func (o *ListConnectionNamesDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the list connection names default response
func (o *ListConnectionNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListConnectionNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] ListConnectionNames default  %+v", o._statusCode, o.Payload)
}

func (o *ListConnectionNamesDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections/names][%d] ListConnectionNames default  %+v", o._statusCode, o.Payload)
}

func (o *ListConnectionNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListConnectionNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

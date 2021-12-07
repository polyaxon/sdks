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

package service_accounts_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListServiceAccountNamesReader is a Reader for the ListServiceAccountNames structure.
type ListServiceAccountNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListServiceAccountNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListServiceAccountNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListServiceAccountNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListServiceAccountNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListServiceAccountNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListServiceAccountNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListServiceAccountNamesOK creates a ListServiceAccountNamesOK with default headers values
func NewListServiceAccountNamesOK() *ListServiceAccountNamesOK {
	return &ListServiceAccountNamesOK{}
}

/* ListServiceAccountNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListServiceAccountNamesOK struct {
	Payload *service_model.V1ListServiceAccountsResponse
}

func (o *ListServiceAccountNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/names][%d] listServiceAccountNamesOK  %+v", 200, o.Payload)
}
func (o *ListServiceAccountNamesOK) GetPayload() *service_model.V1ListServiceAccountsResponse {
	return o.Payload
}

func (o *ListServiceAccountNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListServiceAccountsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountNamesNoContent creates a ListServiceAccountNamesNoContent with default headers values
func NewListServiceAccountNamesNoContent() *ListServiceAccountNamesNoContent {
	return &ListServiceAccountNamesNoContent{}
}

/* ListServiceAccountNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListServiceAccountNamesNoContent struct {
	Payload interface{}
}

func (o *ListServiceAccountNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/names][%d] listServiceAccountNamesNoContent  %+v", 204, o.Payload)
}
func (o *ListServiceAccountNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountNamesForbidden creates a ListServiceAccountNamesForbidden with default headers values
func NewListServiceAccountNamesForbidden() *ListServiceAccountNamesForbidden {
	return &ListServiceAccountNamesForbidden{}
}

/* ListServiceAccountNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListServiceAccountNamesForbidden struct {
	Payload interface{}
}

func (o *ListServiceAccountNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/names][%d] listServiceAccountNamesForbidden  %+v", 403, o.Payload)
}
func (o *ListServiceAccountNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountNamesNotFound creates a ListServiceAccountNamesNotFound with default headers values
func NewListServiceAccountNamesNotFound() *ListServiceAccountNamesNotFound {
	return &ListServiceAccountNamesNotFound{}
}

/* ListServiceAccountNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListServiceAccountNamesNotFound struct {
	Payload interface{}
}

func (o *ListServiceAccountNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/names][%d] listServiceAccountNamesNotFound  %+v", 404, o.Payload)
}
func (o *ListServiceAccountNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountNamesDefault creates a ListServiceAccountNamesDefault with default headers values
func NewListServiceAccountNamesDefault(code int) *ListServiceAccountNamesDefault {
	return &ListServiceAccountNamesDefault{
		_statusCode: code,
	}
}

/* ListServiceAccountNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListServiceAccountNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list service account names default response
func (o *ListServiceAccountNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListServiceAccountNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/names][%d] ListServiceAccountNames default  %+v", o._statusCode, o.Payload)
}
func (o *ListServiceAccountNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListServiceAccountNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
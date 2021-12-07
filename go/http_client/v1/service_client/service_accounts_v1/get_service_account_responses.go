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

// GetServiceAccountReader is a Reader for the GetServiceAccount structure.
type GetServiceAccountReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetServiceAccountReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetServiceAccountOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetServiceAccountNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetServiceAccountForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetServiceAccountNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetServiceAccountDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetServiceAccountOK creates a GetServiceAccountOK with default headers values
func NewGetServiceAccountOK() *GetServiceAccountOK {
	return &GetServiceAccountOK{}
}

/* GetServiceAccountOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetServiceAccountOK struct {
	Payload *service_model.V1ServiceAccount
}

func (o *GetServiceAccountOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}][%d] getServiceAccountOK  %+v", 200, o.Payload)
}
func (o *GetServiceAccountOK) GetPayload() *service_model.V1ServiceAccount {
	return o.Payload
}

func (o *GetServiceAccountOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ServiceAccount)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountNoContent creates a GetServiceAccountNoContent with default headers values
func NewGetServiceAccountNoContent() *GetServiceAccountNoContent {
	return &GetServiceAccountNoContent{}
}

/* GetServiceAccountNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetServiceAccountNoContent struct {
	Payload interface{}
}

func (o *GetServiceAccountNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}][%d] getServiceAccountNoContent  %+v", 204, o.Payload)
}
func (o *GetServiceAccountNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountForbidden creates a GetServiceAccountForbidden with default headers values
func NewGetServiceAccountForbidden() *GetServiceAccountForbidden {
	return &GetServiceAccountForbidden{}
}

/* GetServiceAccountForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetServiceAccountForbidden struct {
	Payload interface{}
}

func (o *GetServiceAccountForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}][%d] getServiceAccountForbidden  %+v", 403, o.Payload)
}
func (o *GetServiceAccountForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountNotFound creates a GetServiceAccountNotFound with default headers values
func NewGetServiceAccountNotFound() *GetServiceAccountNotFound {
	return &GetServiceAccountNotFound{}
}

/* GetServiceAccountNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetServiceAccountNotFound struct {
	Payload interface{}
}

func (o *GetServiceAccountNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}][%d] getServiceAccountNotFound  %+v", 404, o.Payload)
}
func (o *GetServiceAccountNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountDefault creates a GetServiceAccountDefault with default headers values
func NewGetServiceAccountDefault(code int) *GetServiceAccountDefault {
	return &GetServiceAccountDefault{
		_statusCode: code,
	}
}

/* GetServiceAccountDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetServiceAccountDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get service account default response
func (o *GetServiceAccountDefault) Code() int {
	return o._statusCode
}

func (o *GetServiceAccountDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}][%d] GetServiceAccount default  %+v", o._statusCode, o.Payload)
}
func (o *GetServiceAccountDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetServiceAccountDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
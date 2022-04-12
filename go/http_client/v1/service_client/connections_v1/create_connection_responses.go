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

// CreateConnectionReader is a Reader for the CreateConnection structure.
type CreateConnectionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateConnectionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateConnectionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateConnectionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateConnectionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateConnectionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateConnectionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateConnectionOK creates a CreateConnectionOK with default headers values
func NewCreateConnectionOK() *CreateConnectionOK {
	return &CreateConnectionOK{}
}

/* CreateConnectionOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateConnectionOK struct {
	Payload *service_model.V1ConnectionResponse
}

func (o *CreateConnectionOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/connections][%d] createConnectionOK  %+v", 200, o.Payload)
}
func (o *CreateConnectionOK) GetPayload() *service_model.V1ConnectionResponse {
	return o.Payload
}

func (o *CreateConnectionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ConnectionResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateConnectionNoContent creates a CreateConnectionNoContent with default headers values
func NewCreateConnectionNoContent() *CreateConnectionNoContent {
	return &CreateConnectionNoContent{}
}

/* CreateConnectionNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateConnectionNoContent struct {
	Payload interface{}
}

func (o *CreateConnectionNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/connections][%d] createConnectionNoContent  %+v", 204, o.Payload)
}
func (o *CreateConnectionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateConnectionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateConnectionForbidden creates a CreateConnectionForbidden with default headers values
func NewCreateConnectionForbidden() *CreateConnectionForbidden {
	return &CreateConnectionForbidden{}
}

/* CreateConnectionForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateConnectionForbidden struct {
	Payload interface{}
}

func (o *CreateConnectionForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/connections][%d] createConnectionForbidden  %+v", 403, o.Payload)
}
func (o *CreateConnectionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateConnectionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateConnectionNotFound creates a CreateConnectionNotFound with default headers values
func NewCreateConnectionNotFound() *CreateConnectionNotFound {
	return &CreateConnectionNotFound{}
}

/* CreateConnectionNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateConnectionNotFound struct {
	Payload interface{}
}

func (o *CreateConnectionNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/connections][%d] createConnectionNotFound  %+v", 404, o.Payload)
}
func (o *CreateConnectionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateConnectionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateConnectionDefault creates a CreateConnectionDefault with default headers values
func NewCreateConnectionDefault(code int) *CreateConnectionDefault {
	return &CreateConnectionDefault{
		_statusCode: code,
	}
}

/* CreateConnectionDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateConnectionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create connection default response
func (o *CreateConnectionDefault) Code() int {
	return o._statusCode
}

func (o *CreateConnectionDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/connections][%d] CreateConnection default  %+v", o._statusCode, o.Payload)
}
func (o *CreateConnectionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateConnectionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

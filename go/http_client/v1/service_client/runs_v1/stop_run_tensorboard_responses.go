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

// StopRunTensorboardReader is a Reader for the StopRunTensorboard structure.
type StopRunTensorboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *StopRunTensorboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewStopRunTensorboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewStopRunTensorboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewStopRunTensorboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewStopRunTensorboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewStopRunTensorboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewStopRunTensorboardOK creates a StopRunTensorboardOK with default headers values
func NewStopRunTensorboardOK() *StopRunTensorboardOK {
	return &StopRunTensorboardOK{}
}

/* StopRunTensorboardOK describes a response with status code 200, with default header values.

A successful response.
*/
type StopRunTensorboardOK struct {
}

func (o *StopRunTensorboardOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/tensorboard/stop][%d] stopRunTensorboardOK ", 200)
}

func (o *StopRunTensorboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewStopRunTensorboardNoContent creates a StopRunTensorboardNoContent with default headers values
func NewStopRunTensorboardNoContent() *StopRunTensorboardNoContent {
	return &StopRunTensorboardNoContent{}
}

/* StopRunTensorboardNoContent describes a response with status code 204, with default header values.

No content.
*/
type StopRunTensorboardNoContent struct {
	Payload interface{}
}

func (o *StopRunTensorboardNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/tensorboard/stop][%d] stopRunTensorboardNoContent  %+v", 204, o.Payload)
}
func (o *StopRunTensorboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunTensorboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunTensorboardForbidden creates a StopRunTensorboardForbidden with default headers values
func NewStopRunTensorboardForbidden() *StopRunTensorboardForbidden {
	return &StopRunTensorboardForbidden{}
}

/* StopRunTensorboardForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type StopRunTensorboardForbidden struct {
	Payload interface{}
}

func (o *StopRunTensorboardForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/tensorboard/stop][%d] stopRunTensorboardForbidden  %+v", 403, o.Payload)
}
func (o *StopRunTensorboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunTensorboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunTensorboardNotFound creates a StopRunTensorboardNotFound with default headers values
func NewStopRunTensorboardNotFound() *StopRunTensorboardNotFound {
	return &StopRunTensorboardNotFound{}
}

/* StopRunTensorboardNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type StopRunTensorboardNotFound struct {
	Payload interface{}
}

func (o *StopRunTensorboardNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/tensorboard/stop][%d] stopRunTensorboardNotFound  %+v", 404, o.Payload)
}
func (o *StopRunTensorboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunTensorboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunTensorboardDefault creates a StopRunTensorboardDefault with default headers values
func NewStopRunTensorboardDefault(code int) *StopRunTensorboardDefault {
	return &StopRunTensorboardDefault{
		_statusCode: code,
	}
}

/* StopRunTensorboardDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type StopRunTensorboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the stop run tensorboard default response
func (o *StopRunTensorboardDefault) Code() int {
	return o._statusCode
}

func (o *StopRunTensorboardDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/tensorboard/stop][%d] StopRunTensorboard default  %+v", o._statusCode, o.Payload)
}
func (o *StopRunTensorboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *StopRunTensorboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
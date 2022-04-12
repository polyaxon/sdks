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

// ApproveRunReader is a Reader for the ApproveRun structure.
type ApproveRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ApproveRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewApproveRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewApproveRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewApproveRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewApproveRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewApproveRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewApproveRunOK creates a ApproveRunOK with default headers values
func NewApproveRunOK() *ApproveRunOK {
	return &ApproveRunOK{}
}

/* ApproveRunOK describes a response with status code 200, with default header values.

A successful response.
*/
type ApproveRunOK struct {
}

func (o *ApproveRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/approve][%d] approveRunOK ", 200)
}

func (o *ApproveRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewApproveRunNoContent creates a ApproveRunNoContent with default headers values
func NewApproveRunNoContent() *ApproveRunNoContent {
	return &ApproveRunNoContent{}
}

/* ApproveRunNoContent describes a response with status code 204, with default header values.

No content.
*/
type ApproveRunNoContent struct {
	Payload interface{}
}

func (o *ApproveRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/approve][%d] approveRunNoContent  %+v", 204, o.Payload)
}
func (o *ApproveRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ApproveRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewApproveRunForbidden creates a ApproveRunForbidden with default headers values
func NewApproveRunForbidden() *ApproveRunForbidden {
	return &ApproveRunForbidden{}
}

/* ApproveRunForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ApproveRunForbidden struct {
	Payload interface{}
}

func (o *ApproveRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/approve][%d] approveRunForbidden  %+v", 403, o.Payload)
}
func (o *ApproveRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ApproveRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewApproveRunNotFound creates a ApproveRunNotFound with default headers values
func NewApproveRunNotFound() *ApproveRunNotFound {
	return &ApproveRunNotFound{}
}

/* ApproveRunNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ApproveRunNotFound struct {
	Payload interface{}
}

func (o *ApproveRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/approve][%d] approveRunNotFound  %+v", 404, o.Payload)
}
func (o *ApproveRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ApproveRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewApproveRunDefault creates a ApproveRunDefault with default headers values
func NewApproveRunDefault(code int) *ApproveRunDefault {
	return &ApproveRunDefault{
		_statusCode: code,
	}
}

/* ApproveRunDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ApproveRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the approve run default response
func (o *ApproveRunDefault) Code() int {
	return o._statusCode
}

func (o *ApproveRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/approve][%d] ApproveRun default  %+v", o._statusCode, o.Payload)
}
func (o *ApproveRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ApproveRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

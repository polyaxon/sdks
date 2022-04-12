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

// RestoreProjectReader is a Reader for the RestoreProject structure.
type RestoreProjectReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *RestoreProjectReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewRestoreProjectOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewRestoreProjectNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewRestoreProjectForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewRestoreProjectNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewRestoreProjectDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewRestoreProjectOK creates a RestoreProjectOK with default headers values
func NewRestoreProjectOK() *RestoreProjectOK {
	return &RestoreProjectOK{}
}

/* RestoreProjectOK describes a response with status code 200, with default header values.

A successful response.
*/
type RestoreProjectOK struct {
}

func (o *RestoreProjectOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/restore][%d] restoreProjectOK ", 200)
}

func (o *RestoreProjectOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewRestoreProjectNoContent creates a RestoreProjectNoContent with default headers values
func NewRestoreProjectNoContent() *RestoreProjectNoContent {
	return &RestoreProjectNoContent{}
}

/* RestoreProjectNoContent describes a response with status code 204, with default header values.

No content.
*/
type RestoreProjectNoContent struct {
	Payload interface{}
}

func (o *RestoreProjectNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/restore][%d] restoreProjectNoContent  %+v", 204, o.Payload)
}
func (o *RestoreProjectNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreProjectNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreProjectForbidden creates a RestoreProjectForbidden with default headers values
func NewRestoreProjectForbidden() *RestoreProjectForbidden {
	return &RestoreProjectForbidden{}
}

/* RestoreProjectForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type RestoreProjectForbidden struct {
	Payload interface{}
}

func (o *RestoreProjectForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/restore][%d] restoreProjectForbidden  %+v", 403, o.Payload)
}
func (o *RestoreProjectForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreProjectForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreProjectNotFound creates a RestoreProjectNotFound with default headers values
func NewRestoreProjectNotFound() *RestoreProjectNotFound {
	return &RestoreProjectNotFound{}
}

/* RestoreProjectNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type RestoreProjectNotFound struct {
	Payload interface{}
}

func (o *RestoreProjectNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/restore][%d] restoreProjectNotFound  %+v", 404, o.Payload)
}
func (o *RestoreProjectNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreProjectNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreProjectDefault creates a RestoreProjectDefault with default headers values
func NewRestoreProjectDefault(code int) *RestoreProjectDefault {
	return &RestoreProjectDefault{
		_statusCode: code,
	}
}

/* RestoreProjectDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type RestoreProjectDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the restore project default response
func (o *RestoreProjectDefault) Code() int {
	return o._statusCode
}

func (o *RestoreProjectDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/restore][%d] RestoreProject default  %+v", o._statusCode, o.Payload)
}
func (o *RestoreProjectDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *RestoreProjectDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

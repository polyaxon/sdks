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

// ArchiveProjectReader is a Reader for the ArchiveProject structure.
type ArchiveProjectReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ArchiveProjectReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewArchiveProjectOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewArchiveProjectNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewArchiveProjectForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewArchiveProjectNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewArchiveProjectDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewArchiveProjectOK creates a ArchiveProjectOK with default headers values
func NewArchiveProjectOK() *ArchiveProjectOK {
	return &ArchiveProjectOK{}
}

/*
ArchiveProjectOK describes a response with status code 200, with default header values.

A successful response.
*/
type ArchiveProjectOK struct {
}

// IsSuccess returns true when this archive project o k response has a 2xx status code
func (o *ArchiveProjectOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this archive project o k response has a 3xx status code
func (o *ArchiveProjectOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive project o k response has a 4xx status code
func (o *ArchiveProjectOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this archive project o k response has a 5xx status code
func (o *ArchiveProjectOK) IsServerError() bool {
	return false
}

// IsCode returns true when this archive project o k response a status code equal to that given
func (o *ArchiveProjectOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the archive project o k response
func (o *ArchiveProjectOK) Code() int {
	return 200
}

func (o *ArchiveProjectOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectOK ", 200)
}

func (o *ArchiveProjectOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectOK ", 200)
}

func (o *ArchiveProjectOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewArchiveProjectNoContent creates a ArchiveProjectNoContent with default headers values
func NewArchiveProjectNoContent() *ArchiveProjectNoContent {
	return &ArchiveProjectNoContent{}
}

/*
ArchiveProjectNoContent describes a response with status code 204, with default header values.

No content.
*/
type ArchiveProjectNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this archive project no content response has a 2xx status code
func (o *ArchiveProjectNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this archive project no content response has a 3xx status code
func (o *ArchiveProjectNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive project no content response has a 4xx status code
func (o *ArchiveProjectNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this archive project no content response has a 5xx status code
func (o *ArchiveProjectNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this archive project no content response a status code equal to that given
func (o *ArchiveProjectNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the archive project no content response
func (o *ArchiveProjectNoContent) Code() int {
	return 204
}

func (o *ArchiveProjectNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectNoContent  %+v", 204, o.Payload)
}

func (o *ArchiveProjectNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectNoContent  %+v", 204, o.Payload)
}

func (o *ArchiveProjectNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveProjectNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveProjectForbidden creates a ArchiveProjectForbidden with default headers values
func NewArchiveProjectForbidden() *ArchiveProjectForbidden {
	return &ArchiveProjectForbidden{}
}

/*
ArchiveProjectForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ArchiveProjectForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this archive project forbidden response has a 2xx status code
func (o *ArchiveProjectForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this archive project forbidden response has a 3xx status code
func (o *ArchiveProjectForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive project forbidden response has a 4xx status code
func (o *ArchiveProjectForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this archive project forbidden response has a 5xx status code
func (o *ArchiveProjectForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this archive project forbidden response a status code equal to that given
func (o *ArchiveProjectForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the archive project forbidden response
func (o *ArchiveProjectForbidden) Code() int {
	return 403
}

func (o *ArchiveProjectForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectForbidden  %+v", 403, o.Payload)
}

func (o *ArchiveProjectForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectForbidden  %+v", 403, o.Payload)
}

func (o *ArchiveProjectForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveProjectForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveProjectNotFound creates a ArchiveProjectNotFound with default headers values
func NewArchiveProjectNotFound() *ArchiveProjectNotFound {
	return &ArchiveProjectNotFound{}
}

/*
ArchiveProjectNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ArchiveProjectNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this archive project not found response has a 2xx status code
func (o *ArchiveProjectNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this archive project not found response has a 3xx status code
func (o *ArchiveProjectNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive project not found response has a 4xx status code
func (o *ArchiveProjectNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this archive project not found response has a 5xx status code
func (o *ArchiveProjectNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this archive project not found response a status code equal to that given
func (o *ArchiveProjectNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the archive project not found response
func (o *ArchiveProjectNotFound) Code() int {
	return 404
}

func (o *ArchiveProjectNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectNotFound  %+v", 404, o.Payload)
}

func (o *ArchiveProjectNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] archiveProjectNotFound  %+v", 404, o.Payload)
}

func (o *ArchiveProjectNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveProjectNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveProjectDefault creates a ArchiveProjectDefault with default headers values
func NewArchiveProjectDefault(code int) *ArchiveProjectDefault {
	return &ArchiveProjectDefault{
		_statusCode: code,
	}
}

/*
ArchiveProjectDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ArchiveProjectDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this archive project default response has a 2xx status code
func (o *ArchiveProjectDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this archive project default response has a 3xx status code
func (o *ArchiveProjectDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this archive project default response has a 4xx status code
func (o *ArchiveProjectDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this archive project default response has a 5xx status code
func (o *ArchiveProjectDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this archive project default response a status code equal to that given
func (o *ArchiveProjectDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the archive project default response
func (o *ArchiveProjectDefault) Code() int {
	return o._statusCode
}

func (o *ArchiveProjectDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] ArchiveProject default  %+v", o._statusCode, o.Payload)
}

func (o *ArchiveProjectDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/archive][%d] ArchiveProject default  %+v", o._statusCode, o.Payload)
}

func (o *ArchiveProjectDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ArchiveProjectDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

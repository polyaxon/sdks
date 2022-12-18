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

// GetRunReader is a Reader for the GetRun structure.
type GetRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunOK creates a GetRunOK with default headers values
func NewGetRunOK() *GetRunOK {
	return &GetRunOK{}
}

/* GetRunOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunOK struct {
	Payload *service_model.V1Run
}

// IsSuccess returns true when this get run o k response has a 2xx status code
func (o *GetRunOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run o k response has a 3xx status code
func (o *GetRunOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run o k response has a 4xx status code
func (o *GetRunOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run o k response has a 5xx status code
func (o *GetRunOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get run o k response a status code equal to that given
func (o *GetRunOK) IsCode(code int) bool {
	return code == 200
}

func (o *GetRunOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunOK  %+v", 200, o.Payload)
}

func (o *GetRunOK) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunOK  %+v", 200, o.Payload)
}

func (o *GetRunOK) GetPayload() *service_model.V1Run {
	return o.Payload
}

func (o *GetRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Run)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunNoContent creates a GetRunNoContent with default headers values
func NewGetRunNoContent() *GetRunNoContent {
	return &GetRunNoContent{}
}

/* GetRunNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get run no content response has a 2xx status code
func (o *GetRunNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run no content response has a 3xx status code
func (o *GetRunNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run no content response has a 4xx status code
func (o *GetRunNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run no content response has a 5xx status code
func (o *GetRunNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get run no content response a status code equal to that given
func (o *GetRunNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *GetRunNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunNoContent  %+v", 204, o.Payload)
}

func (o *GetRunNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunNoContent  %+v", 204, o.Payload)
}

func (o *GetRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunForbidden creates a GetRunForbidden with default headers values
func NewGetRunForbidden() *GetRunForbidden {
	return &GetRunForbidden{}
}

/* GetRunForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get run forbidden response has a 2xx status code
func (o *GetRunForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run forbidden response has a 3xx status code
func (o *GetRunForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run forbidden response has a 4xx status code
func (o *GetRunForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run forbidden response has a 5xx status code
func (o *GetRunForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get run forbidden response a status code equal to that given
func (o *GetRunForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *GetRunForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunForbidden  %+v", 403, o.Payload)
}

func (o *GetRunForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunForbidden  %+v", 403, o.Payload)
}

func (o *GetRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunNotFound creates a GetRunNotFound with default headers values
func NewGetRunNotFound() *GetRunNotFound {
	return &GetRunNotFound{}
}

/* GetRunNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get run not found response has a 2xx status code
func (o *GetRunNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run not found response has a 3xx status code
func (o *GetRunNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run not found response has a 4xx status code
func (o *GetRunNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run not found response has a 5xx status code
func (o *GetRunNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get run not found response a status code equal to that given
func (o *GetRunNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *GetRunNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunNotFound  %+v", 404, o.Payload)
}

func (o *GetRunNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] getRunNotFound  %+v", 404, o.Payload)
}

func (o *GetRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunDefault creates a GetRunDefault with default headers values
func NewGetRunDefault(code int) *GetRunDefault {
	return &GetRunDefault{
		_statusCode: code,
	}
}

/* GetRunDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get run default response
func (o *GetRunDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this get run default response has a 2xx status code
func (o *GetRunDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get run default response has a 3xx status code
func (o *GetRunDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get run default response has a 4xx status code
func (o *GetRunDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get run default response has a 5xx status code
func (o *GetRunDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get run default response a status code equal to that given
func (o *GetRunDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *GetRunDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] GetRun default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}][%d] GetRun default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

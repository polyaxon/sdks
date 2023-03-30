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

// GetRunStatsReader is a Reader for the GetRunStats structure.
type GetRunStatsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunStatsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunStatsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunStatsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunStatsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunStatsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunStatsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunStatsOK creates a GetRunStatsOK with default headers values
func NewGetRunStatsOK() *GetRunStatsOK {
	return &GetRunStatsOK{}
}

/*
GetRunStatsOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunStatsOK struct {
	Payload interface{}
}

// IsSuccess returns true when this get run stats o k response has a 2xx status code
func (o *GetRunStatsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run stats o k response has a 3xx status code
func (o *GetRunStatsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run stats o k response has a 4xx status code
func (o *GetRunStatsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run stats o k response has a 5xx status code
func (o *GetRunStatsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get run stats o k response a status code equal to that given
func (o *GetRunStatsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get run stats o k response
func (o *GetRunStatsOK) Code() int {
	return 200
}

func (o *GetRunStatsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsOK  %+v", 200, o.Payload)
}

func (o *GetRunStatsOK) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsOK  %+v", 200, o.Payload)
}

func (o *GetRunStatsOK) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatsNoContent creates a GetRunStatsNoContent with default headers values
func NewGetRunStatsNoContent() *GetRunStatsNoContent {
	return &GetRunStatsNoContent{}
}

/*
GetRunStatsNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunStatsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get run stats no content response has a 2xx status code
func (o *GetRunStatsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run stats no content response has a 3xx status code
func (o *GetRunStatsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run stats no content response has a 4xx status code
func (o *GetRunStatsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run stats no content response has a 5xx status code
func (o *GetRunStatsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get run stats no content response a status code equal to that given
func (o *GetRunStatsNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get run stats no content response
func (o *GetRunStatsNoContent) Code() int {
	return 204
}

func (o *GetRunStatsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetRunStatsNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetRunStatsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatsForbidden creates a GetRunStatsForbidden with default headers values
func NewGetRunStatsForbidden() *GetRunStatsForbidden {
	return &GetRunStatsForbidden{}
}

/*
GetRunStatsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunStatsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get run stats forbidden response has a 2xx status code
func (o *GetRunStatsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run stats forbidden response has a 3xx status code
func (o *GetRunStatsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run stats forbidden response has a 4xx status code
func (o *GetRunStatsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run stats forbidden response has a 5xx status code
func (o *GetRunStatsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get run stats forbidden response a status code equal to that given
func (o *GetRunStatsForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get run stats forbidden response
func (o *GetRunStatsForbidden) Code() int {
	return 403
}

func (o *GetRunStatsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetRunStatsForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetRunStatsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatsNotFound creates a GetRunStatsNotFound with default headers values
func NewGetRunStatsNotFound() *GetRunStatsNotFound {
	return &GetRunStatsNotFound{}
}

/*
GetRunStatsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunStatsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get run stats not found response has a 2xx status code
func (o *GetRunStatsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run stats not found response has a 3xx status code
func (o *GetRunStatsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run stats not found response has a 4xx status code
func (o *GetRunStatsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run stats not found response has a 5xx status code
func (o *GetRunStatsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get run stats not found response a status code equal to that given
func (o *GetRunStatsNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get run stats not found response
func (o *GetRunStatsNotFound) Code() int {
	return 404
}

func (o *GetRunStatsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetRunStatsNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] getRunStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetRunStatsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatsDefault creates a GetRunStatsDefault with default headers values
func NewGetRunStatsDefault(code int) *GetRunStatsDefault {
	return &GetRunStatsDefault{
		_statusCode: code,
	}
}

/*
GetRunStatsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunStatsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get run stats default response has a 2xx status code
func (o *GetRunStatsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get run stats default response has a 3xx status code
func (o *GetRunStatsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get run stats default response has a 4xx status code
func (o *GetRunStatsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get run stats default response has a 5xx status code
func (o *GetRunStatsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get run stats default response a status code equal to that given
func (o *GetRunStatsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get run stats default response
func (o *GetRunStatsDefault) Code() int {
	return o._statusCode
}

func (o *GetRunStatsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] GetRunStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunStatsDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/stats][%d] GetRunStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunStatsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunStatsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

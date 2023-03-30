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

// GetRunResourcesReader is a Reader for the GetRunResources structure.
type GetRunResourcesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunResourcesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunResourcesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunResourcesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunResourcesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunResourcesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunResourcesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunResourcesOK creates a GetRunResourcesOK with default headers values
func NewGetRunResourcesOK() *GetRunResourcesOK {
	return &GetRunResourcesOK{}
}

/*
GetRunResourcesOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunResourcesOK struct {
	Payload *service_model.V1EventsResponse
}

// IsSuccess returns true when this get run resources o k response has a 2xx status code
func (o *GetRunResourcesOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run resources o k response has a 3xx status code
func (o *GetRunResourcesOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run resources o k response has a 4xx status code
func (o *GetRunResourcesOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run resources o k response has a 5xx status code
func (o *GetRunResourcesOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get run resources o k response a status code equal to that given
func (o *GetRunResourcesOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get run resources o k response
func (o *GetRunResourcesOK) Code() int {
	return 200
}

func (o *GetRunResourcesOK) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesOK  %+v", 200, o.Payload)
}

func (o *GetRunResourcesOK) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesOK  %+v", 200, o.Payload)
}

func (o *GetRunResourcesOK) GetPayload() *service_model.V1EventsResponse {
	return o.Payload
}

func (o *GetRunResourcesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1EventsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunResourcesNoContent creates a GetRunResourcesNoContent with default headers values
func NewGetRunResourcesNoContent() *GetRunResourcesNoContent {
	return &GetRunResourcesNoContent{}
}

/*
GetRunResourcesNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunResourcesNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get run resources no content response has a 2xx status code
func (o *GetRunResourcesNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get run resources no content response has a 3xx status code
func (o *GetRunResourcesNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run resources no content response has a 4xx status code
func (o *GetRunResourcesNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get run resources no content response has a 5xx status code
func (o *GetRunResourcesNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get run resources no content response a status code equal to that given
func (o *GetRunResourcesNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get run resources no content response
func (o *GetRunResourcesNoContent) Code() int {
	return 204
}

func (o *GetRunResourcesNoContent) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesNoContent  %+v", 204, o.Payload)
}

func (o *GetRunResourcesNoContent) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesNoContent  %+v", 204, o.Payload)
}

func (o *GetRunResourcesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunResourcesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunResourcesForbidden creates a GetRunResourcesForbidden with default headers values
func NewGetRunResourcesForbidden() *GetRunResourcesForbidden {
	return &GetRunResourcesForbidden{}
}

/*
GetRunResourcesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunResourcesForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get run resources forbidden response has a 2xx status code
func (o *GetRunResourcesForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run resources forbidden response has a 3xx status code
func (o *GetRunResourcesForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run resources forbidden response has a 4xx status code
func (o *GetRunResourcesForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run resources forbidden response has a 5xx status code
func (o *GetRunResourcesForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get run resources forbidden response a status code equal to that given
func (o *GetRunResourcesForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get run resources forbidden response
func (o *GetRunResourcesForbidden) Code() int {
	return 403
}

func (o *GetRunResourcesForbidden) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesForbidden  %+v", 403, o.Payload)
}

func (o *GetRunResourcesForbidden) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesForbidden  %+v", 403, o.Payload)
}

func (o *GetRunResourcesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunResourcesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunResourcesNotFound creates a GetRunResourcesNotFound with default headers values
func NewGetRunResourcesNotFound() *GetRunResourcesNotFound {
	return &GetRunResourcesNotFound{}
}

/*
GetRunResourcesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunResourcesNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get run resources not found response has a 2xx status code
func (o *GetRunResourcesNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get run resources not found response has a 3xx status code
func (o *GetRunResourcesNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get run resources not found response has a 4xx status code
func (o *GetRunResourcesNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get run resources not found response has a 5xx status code
func (o *GetRunResourcesNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get run resources not found response a status code equal to that given
func (o *GetRunResourcesNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get run resources not found response
func (o *GetRunResourcesNotFound) Code() int {
	return 404
}

func (o *GetRunResourcesNotFound) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesNotFound  %+v", 404, o.Payload)
}

func (o *GetRunResourcesNotFound) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] getRunResourcesNotFound  %+v", 404, o.Payload)
}

func (o *GetRunResourcesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunResourcesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunResourcesDefault creates a GetRunResourcesDefault with default headers values
func NewGetRunResourcesDefault(code int) *GetRunResourcesDefault {
	return &GetRunResourcesDefault{
		_statusCode: code,
	}
}

/*
GetRunResourcesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunResourcesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get run resources default response has a 2xx status code
func (o *GetRunResourcesDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get run resources default response has a 3xx status code
func (o *GetRunResourcesDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get run resources default response has a 4xx status code
func (o *GetRunResourcesDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get run resources default response has a 5xx status code
func (o *GetRunResourcesDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get run resources default response a status code equal to that given
func (o *GetRunResourcesDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get run resources default response
func (o *GetRunResourcesDefault) Code() int {
	return o._statusCode
}

func (o *GetRunResourcesDefault) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] GetRunResources default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunResourcesDefault) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/resources][%d] GetRunResources default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunResourcesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunResourcesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

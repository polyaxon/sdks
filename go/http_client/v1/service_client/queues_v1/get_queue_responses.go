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

package queues_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetQueueReader is a Reader for the GetQueue structure.
type GetQueueReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetQueueReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetQueueOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetQueueNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetQueueForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetQueueNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetQueueDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetQueueOK creates a GetQueueOK with default headers values
func NewGetQueueOK() *GetQueueOK {
	return &GetQueueOK{}
}

/* GetQueueOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetQueueOK struct {
	Payload *service_model.V1Queue
}

// IsSuccess returns true when this get queue o k response has a 2xx status code
func (o *GetQueueOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get queue o k response has a 3xx status code
func (o *GetQueueOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get queue o k response has a 4xx status code
func (o *GetQueueOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get queue o k response has a 5xx status code
func (o *GetQueueOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get queue o k response a status code equal to that given
func (o *GetQueueOK) IsCode(code int) bool {
	return code == 200
}

func (o *GetQueueOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueOK  %+v", 200, o.Payload)
}

func (o *GetQueueOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueOK  %+v", 200, o.Payload)
}

func (o *GetQueueOK) GetPayload() *service_model.V1Queue {
	return o.Payload
}

func (o *GetQueueOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Queue)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetQueueNoContent creates a GetQueueNoContent with default headers values
func NewGetQueueNoContent() *GetQueueNoContent {
	return &GetQueueNoContent{}
}

/* GetQueueNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetQueueNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get queue no content response has a 2xx status code
func (o *GetQueueNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get queue no content response has a 3xx status code
func (o *GetQueueNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get queue no content response has a 4xx status code
func (o *GetQueueNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get queue no content response has a 5xx status code
func (o *GetQueueNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get queue no content response a status code equal to that given
func (o *GetQueueNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *GetQueueNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueNoContent  %+v", 204, o.Payload)
}

func (o *GetQueueNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueNoContent  %+v", 204, o.Payload)
}

func (o *GetQueueNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetQueueNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetQueueForbidden creates a GetQueueForbidden with default headers values
func NewGetQueueForbidden() *GetQueueForbidden {
	return &GetQueueForbidden{}
}

/* GetQueueForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetQueueForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get queue forbidden response has a 2xx status code
func (o *GetQueueForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get queue forbidden response has a 3xx status code
func (o *GetQueueForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get queue forbidden response has a 4xx status code
func (o *GetQueueForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get queue forbidden response has a 5xx status code
func (o *GetQueueForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get queue forbidden response a status code equal to that given
func (o *GetQueueForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *GetQueueForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueForbidden  %+v", 403, o.Payload)
}

func (o *GetQueueForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueForbidden  %+v", 403, o.Payload)
}

func (o *GetQueueForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetQueueForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetQueueNotFound creates a GetQueueNotFound with default headers values
func NewGetQueueNotFound() *GetQueueNotFound {
	return &GetQueueNotFound{}
}

/* GetQueueNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetQueueNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get queue not found response has a 2xx status code
func (o *GetQueueNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get queue not found response has a 3xx status code
func (o *GetQueueNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get queue not found response has a 4xx status code
func (o *GetQueueNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get queue not found response has a 5xx status code
func (o *GetQueueNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get queue not found response a status code equal to that given
func (o *GetQueueNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *GetQueueNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueNotFound  %+v", 404, o.Payload)
}

func (o *GetQueueNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] getQueueNotFound  %+v", 404, o.Payload)
}

func (o *GetQueueNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetQueueNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetQueueDefault creates a GetQueueDefault with default headers values
func NewGetQueueDefault(code int) *GetQueueDefault {
	return &GetQueueDefault{
		_statusCode: code,
	}
}

/* GetQueueDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetQueueDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get queue default response
func (o *GetQueueDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this get queue default response has a 2xx status code
func (o *GetQueueDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get queue default response has a 3xx status code
func (o *GetQueueDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get queue default response has a 4xx status code
func (o *GetQueueDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get queue default response has a 5xx status code
func (o *GetQueueDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get queue default response a status code equal to that given
func (o *GetQueueDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *GetQueueDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] GetQueue default  %+v", o._statusCode, o.Payload)
}

func (o *GetQueueDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}][%d] GetQueue default  %+v", o._statusCode, o.Payload)
}

func (o *GetQueueDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetQueueDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

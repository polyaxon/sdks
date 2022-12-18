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

// PatchQueueReader is a Reader for the PatchQueue structure.
type PatchQueueReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchQueueReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchQueueOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchQueueNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchQueueForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchQueueNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchQueueDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchQueueOK creates a PatchQueueOK with default headers values
func NewPatchQueueOK() *PatchQueueOK {
	return &PatchQueueOK{}
}

/* PatchQueueOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchQueueOK struct {
	Payload *service_model.V1Queue
}

// IsSuccess returns true when this patch queue o k response has a 2xx status code
func (o *PatchQueueOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this patch queue o k response has a 3xx status code
func (o *PatchQueueOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch queue o k response has a 4xx status code
func (o *PatchQueueOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this patch queue o k response has a 5xx status code
func (o *PatchQueueOK) IsServerError() bool {
	return false
}

// IsCode returns true when this patch queue o k response a status code equal to that given
func (o *PatchQueueOK) IsCode(code int) bool {
	return code == 200
}

func (o *PatchQueueOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueOK  %+v", 200, o.Payload)
}

func (o *PatchQueueOK) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueOK  %+v", 200, o.Payload)
}

func (o *PatchQueueOK) GetPayload() *service_model.V1Queue {
	return o.Payload
}

func (o *PatchQueueOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Queue)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchQueueNoContent creates a PatchQueueNoContent with default headers values
func NewPatchQueueNoContent() *PatchQueueNoContent {
	return &PatchQueueNoContent{}
}

/* PatchQueueNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchQueueNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this patch queue no content response has a 2xx status code
func (o *PatchQueueNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this patch queue no content response has a 3xx status code
func (o *PatchQueueNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch queue no content response has a 4xx status code
func (o *PatchQueueNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this patch queue no content response has a 5xx status code
func (o *PatchQueueNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this patch queue no content response a status code equal to that given
func (o *PatchQueueNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *PatchQueueNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueNoContent  %+v", 204, o.Payload)
}

func (o *PatchQueueNoContent) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueNoContent  %+v", 204, o.Payload)
}

func (o *PatchQueueNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchQueueNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchQueueForbidden creates a PatchQueueForbidden with default headers values
func NewPatchQueueForbidden() *PatchQueueForbidden {
	return &PatchQueueForbidden{}
}

/* PatchQueueForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchQueueForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this patch queue forbidden response has a 2xx status code
func (o *PatchQueueForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this patch queue forbidden response has a 3xx status code
func (o *PatchQueueForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch queue forbidden response has a 4xx status code
func (o *PatchQueueForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this patch queue forbidden response has a 5xx status code
func (o *PatchQueueForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this patch queue forbidden response a status code equal to that given
func (o *PatchQueueForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *PatchQueueForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueForbidden  %+v", 403, o.Payload)
}

func (o *PatchQueueForbidden) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueForbidden  %+v", 403, o.Payload)
}

func (o *PatchQueueForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchQueueForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchQueueNotFound creates a PatchQueueNotFound with default headers values
func NewPatchQueueNotFound() *PatchQueueNotFound {
	return &PatchQueueNotFound{}
}

/* PatchQueueNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchQueueNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this patch queue not found response has a 2xx status code
func (o *PatchQueueNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this patch queue not found response has a 3xx status code
func (o *PatchQueueNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch queue not found response has a 4xx status code
func (o *PatchQueueNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this patch queue not found response has a 5xx status code
func (o *PatchQueueNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this patch queue not found response a status code equal to that given
func (o *PatchQueueNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *PatchQueueNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueNotFound  %+v", 404, o.Payload)
}

func (o *PatchQueueNotFound) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] patchQueueNotFound  %+v", 404, o.Payload)
}

func (o *PatchQueueNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchQueueNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchQueueDefault creates a PatchQueueDefault with default headers values
func NewPatchQueueDefault(code int) *PatchQueueDefault {
	return &PatchQueueDefault{
		_statusCode: code,
	}
}

/* PatchQueueDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchQueueDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch queue default response
func (o *PatchQueueDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this patch queue default response has a 2xx status code
func (o *PatchQueueDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this patch queue default response has a 3xx status code
func (o *PatchQueueDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this patch queue default response has a 4xx status code
func (o *PatchQueueDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this patch queue default response has a 5xx status code
func (o *PatchQueueDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this patch queue default response a status code equal to that given
func (o *PatchQueueDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *PatchQueueDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] PatchQueue default  %+v", o._statusCode, o.Payload)
}

func (o *PatchQueueDefault) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}][%d] PatchQueue default  %+v", o._statusCode, o.Payload)
}

func (o *PatchQueueDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchQueueDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

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

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateAgentReader is a Reader for the UpdateAgent structure.
type UpdateAgentReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateAgentReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateAgentOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateAgentNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateAgentForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateAgentNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateAgentDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateAgentOK creates a UpdateAgentOK with default headers values
func NewUpdateAgentOK() *UpdateAgentOK {
	return &UpdateAgentOK{}
}

/*
UpdateAgentOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateAgentOK struct {
	Payload *service_model.V1Agent
}

// IsSuccess returns true when this update agent o k response has a 2xx status code
func (o *UpdateAgentOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update agent o k response has a 3xx status code
func (o *UpdateAgentOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent o k response has a 4xx status code
func (o *UpdateAgentOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this update agent o k response has a 5xx status code
func (o *UpdateAgentOK) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent o k response a status code equal to that given
func (o *UpdateAgentOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the update agent o k response
func (o *UpdateAgentOK) Code() int {
	return 200
}

func (o *UpdateAgentOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentOK  %+v", 200, o.Payload)
}

func (o *UpdateAgentOK) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentOK  %+v", 200, o.Payload)
}

func (o *UpdateAgentOK) GetPayload() *service_model.V1Agent {
	return o.Payload
}

func (o *UpdateAgentOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Agent)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentNoContent creates a UpdateAgentNoContent with default headers values
func NewUpdateAgentNoContent() *UpdateAgentNoContent {
	return &UpdateAgentNoContent{}
}

/*
UpdateAgentNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateAgentNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent no content response has a 2xx status code
func (o *UpdateAgentNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update agent no content response has a 3xx status code
func (o *UpdateAgentNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent no content response has a 4xx status code
func (o *UpdateAgentNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this update agent no content response has a 5xx status code
func (o *UpdateAgentNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent no content response a status code equal to that given
func (o *UpdateAgentNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the update agent no content response
func (o *UpdateAgentNoContent) Code() int {
	return 204
}

func (o *UpdateAgentNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentNoContent  %+v", 204, o.Payload)
}

func (o *UpdateAgentNoContent) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentNoContent  %+v", 204, o.Payload)
}

func (o *UpdateAgentNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentForbidden creates a UpdateAgentForbidden with default headers values
func NewUpdateAgentForbidden() *UpdateAgentForbidden {
	return &UpdateAgentForbidden{}
}

/*
UpdateAgentForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateAgentForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent forbidden response has a 2xx status code
func (o *UpdateAgentForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update agent forbidden response has a 3xx status code
func (o *UpdateAgentForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent forbidden response has a 4xx status code
func (o *UpdateAgentForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this update agent forbidden response has a 5xx status code
func (o *UpdateAgentForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent forbidden response a status code equal to that given
func (o *UpdateAgentForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the update agent forbidden response
func (o *UpdateAgentForbidden) Code() int {
	return 403
}

func (o *UpdateAgentForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentForbidden  %+v", 403, o.Payload)
}

func (o *UpdateAgentForbidden) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentForbidden  %+v", 403, o.Payload)
}

func (o *UpdateAgentForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentNotFound creates a UpdateAgentNotFound with default headers values
func NewUpdateAgentNotFound() *UpdateAgentNotFound {
	return &UpdateAgentNotFound{}
}

/*
UpdateAgentNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateAgentNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent not found response has a 2xx status code
func (o *UpdateAgentNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update agent not found response has a 3xx status code
func (o *UpdateAgentNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent not found response has a 4xx status code
func (o *UpdateAgentNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this update agent not found response has a 5xx status code
func (o *UpdateAgentNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent not found response a status code equal to that given
func (o *UpdateAgentNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the update agent not found response
func (o *UpdateAgentNotFound) Code() int {
	return 404
}

func (o *UpdateAgentNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentNotFound  %+v", 404, o.Payload)
}

func (o *UpdateAgentNotFound) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] updateAgentNotFound  %+v", 404, o.Payload)
}

func (o *UpdateAgentNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentDefault creates a UpdateAgentDefault with default headers values
func NewUpdateAgentDefault(code int) *UpdateAgentDefault {
	return &UpdateAgentDefault{
		_statusCode: code,
	}
}

/*
UpdateAgentDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateAgentDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this update agent default response has a 2xx status code
func (o *UpdateAgentDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this update agent default response has a 3xx status code
func (o *UpdateAgentDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this update agent default response has a 4xx status code
func (o *UpdateAgentDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this update agent default response has a 5xx status code
func (o *UpdateAgentDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this update agent default response a status code equal to that given
func (o *UpdateAgentDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the update agent default response
func (o *UpdateAgentDefault) Code() int {
	return o._statusCode
}

func (o *UpdateAgentDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] UpdateAgent default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateAgentDefault) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{agent.uuid}][%d] UpdateAgent default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateAgentDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateAgentDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

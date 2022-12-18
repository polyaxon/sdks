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

// UpdateAgentTokenReader is a Reader for the UpdateAgentToken structure.
type UpdateAgentTokenReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateAgentTokenReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateAgentTokenOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateAgentTokenNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateAgentTokenForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateAgentTokenNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateAgentTokenDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateAgentTokenOK creates a UpdateAgentTokenOK with default headers values
func NewUpdateAgentTokenOK() *UpdateAgentTokenOK {
	return &UpdateAgentTokenOK{}
}

/* UpdateAgentTokenOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateAgentTokenOK struct {
	Payload *service_model.V1Token
}

// IsSuccess returns true when this update agent token o k response has a 2xx status code
func (o *UpdateAgentTokenOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update agent token o k response has a 3xx status code
func (o *UpdateAgentTokenOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent token o k response has a 4xx status code
func (o *UpdateAgentTokenOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this update agent token o k response has a 5xx status code
func (o *UpdateAgentTokenOK) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent token o k response a status code equal to that given
func (o *UpdateAgentTokenOK) IsCode(code int) bool {
	return code == 200
}

func (o *UpdateAgentTokenOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenOK  %+v", 200, o.Payload)
}

func (o *UpdateAgentTokenOK) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenOK  %+v", 200, o.Payload)
}

func (o *UpdateAgentTokenOK) GetPayload() *service_model.V1Token {
	return o.Payload
}

func (o *UpdateAgentTokenOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Token)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentTokenNoContent creates a UpdateAgentTokenNoContent with default headers values
func NewUpdateAgentTokenNoContent() *UpdateAgentTokenNoContent {
	return &UpdateAgentTokenNoContent{}
}

/* UpdateAgentTokenNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateAgentTokenNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent token no content response has a 2xx status code
func (o *UpdateAgentTokenNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update agent token no content response has a 3xx status code
func (o *UpdateAgentTokenNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent token no content response has a 4xx status code
func (o *UpdateAgentTokenNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this update agent token no content response has a 5xx status code
func (o *UpdateAgentTokenNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent token no content response a status code equal to that given
func (o *UpdateAgentTokenNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *UpdateAgentTokenNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenNoContent  %+v", 204, o.Payload)
}

func (o *UpdateAgentTokenNoContent) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenNoContent  %+v", 204, o.Payload)
}

func (o *UpdateAgentTokenNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentTokenNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentTokenForbidden creates a UpdateAgentTokenForbidden with default headers values
func NewUpdateAgentTokenForbidden() *UpdateAgentTokenForbidden {
	return &UpdateAgentTokenForbidden{}
}

/* UpdateAgentTokenForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateAgentTokenForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent token forbidden response has a 2xx status code
func (o *UpdateAgentTokenForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update agent token forbidden response has a 3xx status code
func (o *UpdateAgentTokenForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent token forbidden response has a 4xx status code
func (o *UpdateAgentTokenForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this update agent token forbidden response has a 5xx status code
func (o *UpdateAgentTokenForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent token forbidden response a status code equal to that given
func (o *UpdateAgentTokenForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *UpdateAgentTokenForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenForbidden  %+v", 403, o.Payload)
}

func (o *UpdateAgentTokenForbidden) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenForbidden  %+v", 403, o.Payload)
}

func (o *UpdateAgentTokenForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentTokenForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentTokenNotFound creates a UpdateAgentTokenNotFound with default headers values
func NewUpdateAgentTokenNotFound() *UpdateAgentTokenNotFound {
	return &UpdateAgentTokenNotFound{}
}

/* UpdateAgentTokenNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateAgentTokenNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this update agent token not found response has a 2xx status code
func (o *UpdateAgentTokenNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update agent token not found response has a 3xx status code
func (o *UpdateAgentTokenNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update agent token not found response has a 4xx status code
func (o *UpdateAgentTokenNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this update agent token not found response has a 5xx status code
func (o *UpdateAgentTokenNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this update agent token not found response a status code equal to that given
func (o *UpdateAgentTokenNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *UpdateAgentTokenNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenNotFound  %+v", 404, o.Payload)
}

func (o *UpdateAgentTokenNotFound) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] updateAgentTokenNotFound  %+v", 404, o.Payload)
}

func (o *UpdateAgentTokenNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentTokenNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentTokenDefault creates a UpdateAgentTokenDefault with default headers values
func NewUpdateAgentTokenDefault(code int) *UpdateAgentTokenDefault {
	return &UpdateAgentTokenDefault{
		_statusCode: code,
	}
}

/* UpdateAgentTokenDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateAgentTokenDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update agent token default response
func (o *UpdateAgentTokenDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this update agent token default response has a 2xx status code
func (o *UpdateAgentTokenDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this update agent token default response has a 3xx status code
func (o *UpdateAgentTokenDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this update agent token default response has a 4xx status code
func (o *UpdateAgentTokenDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this update agent token default response has a 5xx status code
func (o *UpdateAgentTokenDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this update agent token default response a status code equal to that given
func (o *UpdateAgentTokenDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *UpdateAgentTokenDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] UpdateAgentToken default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateAgentTokenDefault) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{entity}/token][%d] UpdateAgentToken default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateAgentTokenDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateAgentTokenDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

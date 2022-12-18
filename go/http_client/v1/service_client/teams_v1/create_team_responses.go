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

package teams_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// CreateTeamReader is a Reader for the CreateTeam structure.
type CreateTeamReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateTeamReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateTeamOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateTeamNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateTeamForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateTeamNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateTeamDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateTeamOK creates a CreateTeamOK with default headers values
func NewCreateTeamOK() *CreateTeamOK {
	return &CreateTeamOK{}
}

/* CreateTeamOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateTeamOK struct {
	Payload *service_model.V1Team
}

// IsSuccess returns true when this create team o k response has a 2xx status code
func (o *CreateTeamOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create team o k response has a 3xx status code
func (o *CreateTeamOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create team o k response has a 4xx status code
func (o *CreateTeamOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this create team o k response has a 5xx status code
func (o *CreateTeamOK) IsServerError() bool {
	return false
}

// IsCode returns true when this create team o k response a status code equal to that given
func (o *CreateTeamOK) IsCode(code int) bool {
	return code == 200
}

func (o *CreateTeamOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamOK  %+v", 200, o.Payload)
}

func (o *CreateTeamOK) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamOK  %+v", 200, o.Payload)
}

func (o *CreateTeamOK) GetPayload() *service_model.V1Team {
	return o.Payload
}

func (o *CreateTeamOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Team)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTeamNoContent creates a CreateTeamNoContent with default headers values
func NewCreateTeamNoContent() *CreateTeamNoContent {
	return &CreateTeamNoContent{}
}

/* CreateTeamNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateTeamNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this create team no content response has a 2xx status code
func (o *CreateTeamNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create team no content response has a 3xx status code
func (o *CreateTeamNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create team no content response has a 4xx status code
func (o *CreateTeamNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this create team no content response has a 5xx status code
func (o *CreateTeamNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this create team no content response a status code equal to that given
func (o *CreateTeamNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *CreateTeamNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamNoContent  %+v", 204, o.Payload)
}

func (o *CreateTeamNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamNoContent  %+v", 204, o.Payload)
}

func (o *CreateTeamNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTeamNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTeamForbidden creates a CreateTeamForbidden with default headers values
func NewCreateTeamForbidden() *CreateTeamForbidden {
	return &CreateTeamForbidden{}
}

/* CreateTeamForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateTeamForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this create team forbidden response has a 2xx status code
func (o *CreateTeamForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create team forbidden response has a 3xx status code
func (o *CreateTeamForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create team forbidden response has a 4xx status code
func (o *CreateTeamForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this create team forbidden response has a 5xx status code
func (o *CreateTeamForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this create team forbidden response a status code equal to that given
func (o *CreateTeamForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *CreateTeamForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamForbidden  %+v", 403, o.Payload)
}

func (o *CreateTeamForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamForbidden  %+v", 403, o.Payload)
}

func (o *CreateTeamForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTeamForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTeamNotFound creates a CreateTeamNotFound with default headers values
func NewCreateTeamNotFound() *CreateTeamNotFound {
	return &CreateTeamNotFound{}
}

/* CreateTeamNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateTeamNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this create team not found response has a 2xx status code
func (o *CreateTeamNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create team not found response has a 3xx status code
func (o *CreateTeamNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create team not found response has a 4xx status code
func (o *CreateTeamNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this create team not found response has a 5xx status code
func (o *CreateTeamNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this create team not found response a status code equal to that given
func (o *CreateTeamNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *CreateTeamNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamNotFound  %+v", 404, o.Payload)
}

func (o *CreateTeamNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] createTeamNotFound  %+v", 404, o.Payload)
}

func (o *CreateTeamNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTeamNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTeamDefault creates a CreateTeamDefault with default headers values
func NewCreateTeamDefault(code int) *CreateTeamDefault {
	return &CreateTeamDefault{
		_statusCode: code,
	}
}

/* CreateTeamDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateTeamDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create team default response
func (o *CreateTeamDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this create team default response has a 2xx status code
func (o *CreateTeamDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this create team default response has a 3xx status code
func (o *CreateTeamDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this create team default response has a 4xx status code
func (o *CreateTeamDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this create team default response has a 5xx status code
func (o *CreateTeamDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this create team default response a status code equal to that given
func (o *CreateTeamDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *CreateTeamDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] CreateTeam default  %+v", o._statusCode, o.Payload)
}

func (o *CreateTeamDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/teams][%d] CreateTeam default  %+v", o._statusCode, o.Payload)
}

func (o *CreateTeamDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateTeamDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

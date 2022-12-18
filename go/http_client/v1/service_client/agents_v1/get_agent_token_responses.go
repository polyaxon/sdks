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

// GetAgentTokenReader is a Reader for the GetAgentToken structure.
type GetAgentTokenReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetAgentTokenReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetAgentTokenOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetAgentTokenNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetAgentTokenForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetAgentTokenNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetAgentTokenDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetAgentTokenOK creates a GetAgentTokenOK with default headers values
func NewGetAgentTokenOK() *GetAgentTokenOK {
	return &GetAgentTokenOK{}
}

/* GetAgentTokenOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetAgentTokenOK struct {
	Payload *service_model.V1Token
}

// IsSuccess returns true when this get agent token o k response has a 2xx status code
func (o *GetAgentTokenOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get agent token o k response has a 3xx status code
func (o *GetAgentTokenOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent token o k response has a 4xx status code
func (o *GetAgentTokenOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get agent token o k response has a 5xx status code
func (o *GetAgentTokenOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent token o k response a status code equal to that given
func (o *GetAgentTokenOK) IsCode(code int) bool {
	return code == 200
}

func (o *GetAgentTokenOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenOK  %+v", 200, o.Payload)
}

func (o *GetAgentTokenOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenOK  %+v", 200, o.Payload)
}

func (o *GetAgentTokenOK) GetPayload() *service_model.V1Token {
	return o.Payload
}

func (o *GetAgentTokenOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Token)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentTokenNoContent creates a GetAgentTokenNoContent with default headers values
func NewGetAgentTokenNoContent() *GetAgentTokenNoContent {
	return &GetAgentTokenNoContent{}
}

/* GetAgentTokenNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetAgentTokenNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent token no content response has a 2xx status code
func (o *GetAgentTokenNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get agent token no content response has a 3xx status code
func (o *GetAgentTokenNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent token no content response has a 4xx status code
func (o *GetAgentTokenNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get agent token no content response has a 5xx status code
func (o *GetAgentTokenNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent token no content response a status code equal to that given
func (o *GetAgentTokenNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *GetAgentTokenNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenNoContent  %+v", 204, o.Payload)
}

func (o *GetAgentTokenNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenNoContent  %+v", 204, o.Payload)
}

func (o *GetAgentTokenNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentTokenNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentTokenForbidden creates a GetAgentTokenForbidden with default headers values
func NewGetAgentTokenForbidden() *GetAgentTokenForbidden {
	return &GetAgentTokenForbidden{}
}

/* GetAgentTokenForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetAgentTokenForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent token forbidden response has a 2xx status code
func (o *GetAgentTokenForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get agent token forbidden response has a 3xx status code
func (o *GetAgentTokenForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent token forbidden response has a 4xx status code
func (o *GetAgentTokenForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get agent token forbidden response has a 5xx status code
func (o *GetAgentTokenForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent token forbidden response a status code equal to that given
func (o *GetAgentTokenForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *GetAgentTokenForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenForbidden  %+v", 403, o.Payload)
}

func (o *GetAgentTokenForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenForbidden  %+v", 403, o.Payload)
}

func (o *GetAgentTokenForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentTokenForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentTokenNotFound creates a GetAgentTokenNotFound with default headers values
func NewGetAgentTokenNotFound() *GetAgentTokenNotFound {
	return &GetAgentTokenNotFound{}
}

/* GetAgentTokenNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetAgentTokenNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent token not found response has a 2xx status code
func (o *GetAgentTokenNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get agent token not found response has a 3xx status code
func (o *GetAgentTokenNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent token not found response has a 4xx status code
func (o *GetAgentTokenNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get agent token not found response has a 5xx status code
func (o *GetAgentTokenNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent token not found response a status code equal to that given
func (o *GetAgentTokenNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *GetAgentTokenNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenNotFound  %+v", 404, o.Payload)
}

func (o *GetAgentTokenNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] getAgentTokenNotFound  %+v", 404, o.Payload)
}

func (o *GetAgentTokenNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentTokenNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentTokenDefault creates a GetAgentTokenDefault with default headers values
func NewGetAgentTokenDefault(code int) *GetAgentTokenDefault {
	return &GetAgentTokenDefault{
		_statusCode: code,
	}
}

/* GetAgentTokenDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetAgentTokenDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get agent token default response
func (o *GetAgentTokenDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this get agent token default response has a 2xx status code
func (o *GetAgentTokenDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get agent token default response has a 3xx status code
func (o *GetAgentTokenDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get agent token default response has a 4xx status code
func (o *GetAgentTokenDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get agent token default response has a 5xx status code
func (o *GetAgentTokenDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get agent token default response a status code equal to that given
func (o *GetAgentTokenDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *GetAgentTokenDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] GetAgentToken default  %+v", o._statusCode, o.Payload)
}

func (o *GetAgentTokenDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/token][%d] GetAgentToken default  %+v", o._statusCode, o.Payload)
}

func (o *GetAgentTokenDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetAgentTokenDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

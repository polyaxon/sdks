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

package service_accounts_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetServiceAccountTokenReader is a Reader for the GetServiceAccountToken structure.
type GetServiceAccountTokenReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetServiceAccountTokenReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetServiceAccountTokenOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetServiceAccountTokenNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetServiceAccountTokenForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetServiceAccountTokenNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetServiceAccountTokenDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetServiceAccountTokenOK creates a GetServiceAccountTokenOK with default headers values
func NewGetServiceAccountTokenOK() *GetServiceAccountTokenOK {
	return &GetServiceAccountTokenOK{}
}

/*
GetServiceAccountTokenOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetServiceAccountTokenOK struct {
	Payload *service_model.V1Token
}

// IsSuccess returns true when this get service account token o k response has a 2xx status code
func (o *GetServiceAccountTokenOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get service account token o k response has a 3xx status code
func (o *GetServiceAccountTokenOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get service account token o k response has a 4xx status code
func (o *GetServiceAccountTokenOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get service account token o k response has a 5xx status code
func (o *GetServiceAccountTokenOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get service account token o k response a status code equal to that given
func (o *GetServiceAccountTokenOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get service account token o k response
func (o *GetServiceAccountTokenOK) Code() int {
	return 200
}

func (o *GetServiceAccountTokenOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenOK  %+v", 200, o.Payload)
}

func (o *GetServiceAccountTokenOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenOK  %+v", 200, o.Payload)
}

func (o *GetServiceAccountTokenOK) GetPayload() *service_model.V1Token {
	return o.Payload
}

func (o *GetServiceAccountTokenOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Token)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountTokenNoContent creates a GetServiceAccountTokenNoContent with default headers values
func NewGetServiceAccountTokenNoContent() *GetServiceAccountTokenNoContent {
	return &GetServiceAccountTokenNoContent{}
}

/*
GetServiceAccountTokenNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetServiceAccountTokenNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get service account token no content response has a 2xx status code
func (o *GetServiceAccountTokenNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get service account token no content response has a 3xx status code
func (o *GetServiceAccountTokenNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get service account token no content response has a 4xx status code
func (o *GetServiceAccountTokenNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get service account token no content response has a 5xx status code
func (o *GetServiceAccountTokenNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get service account token no content response a status code equal to that given
func (o *GetServiceAccountTokenNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get service account token no content response
func (o *GetServiceAccountTokenNoContent) Code() int {
	return 204
}

func (o *GetServiceAccountTokenNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenNoContent  %+v", 204, o.Payload)
}

func (o *GetServiceAccountTokenNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenNoContent  %+v", 204, o.Payload)
}

func (o *GetServiceAccountTokenNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountTokenNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountTokenForbidden creates a GetServiceAccountTokenForbidden with default headers values
func NewGetServiceAccountTokenForbidden() *GetServiceAccountTokenForbidden {
	return &GetServiceAccountTokenForbidden{}
}

/*
GetServiceAccountTokenForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetServiceAccountTokenForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get service account token forbidden response has a 2xx status code
func (o *GetServiceAccountTokenForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get service account token forbidden response has a 3xx status code
func (o *GetServiceAccountTokenForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get service account token forbidden response has a 4xx status code
func (o *GetServiceAccountTokenForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get service account token forbidden response has a 5xx status code
func (o *GetServiceAccountTokenForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get service account token forbidden response a status code equal to that given
func (o *GetServiceAccountTokenForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get service account token forbidden response
func (o *GetServiceAccountTokenForbidden) Code() int {
	return 403
}

func (o *GetServiceAccountTokenForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenForbidden  %+v", 403, o.Payload)
}

func (o *GetServiceAccountTokenForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenForbidden  %+v", 403, o.Payload)
}

func (o *GetServiceAccountTokenForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountTokenForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountTokenNotFound creates a GetServiceAccountTokenNotFound with default headers values
func NewGetServiceAccountTokenNotFound() *GetServiceAccountTokenNotFound {
	return &GetServiceAccountTokenNotFound{}
}

/*
GetServiceAccountTokenNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetServiceAccountTokenNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get service account token not found response has a 2xx status code
func (o *GetServiceAccountTokenNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get service account token not found response has a 3xx status code
func (o *GetServiceAccountTokenNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get service account token not found response has a 4xx status code
func (o *GetServiceAccountTokenNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get service account token not found response has a 5xx status code
func (o *GetServiceAccountTokenNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get service account token not found response a status code equal to that given
func (o *GetServiceAccountTokenNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get service account token not found response
func (o *GetServiceAccountTokenNotFound) Code() int {
	return 404
}

func (o *GetServiceAccountTokenNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenNotFound  %+v", 404, o.Payload)
}

func (o *GetServiceAccountTokenNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] getServiceAccountTokenNotFound  %+v", 404, o.Payload)
}

func (o *GetServiceAccountTokenNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetServiceAccountTokenNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetServiceAccountTokenDefault creates a GetServiceAccountTokenDefault with default headers values
func NewGetServiceAccountTokenDefault(code int) *GetServiceAccountTokenDefault {
	return &GetServiceAccountTokenDefault{
		_statusCode: code,
	}
}

/*
GetServiceAccountTokenDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetServiceAccountTokenDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get service account token default response has a 2xx status code
func (o *GetServiceAccountTokenDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get service account token default response has a 3xx status code
func (o *GetServiceAccountTokenDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get service account token default response has a 4xx status code
func (o *GetServiceAccountTokenDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get service account token default response has a 5xx status code
func (o *GetServiceAccountTokenDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get service account token default response a status code equal to that given
func (o *GetServiceAccountTokenDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get service account token default response
func (o *GetServiceAccountTokenDefault) Code() int {
	return o._statusCode
}

func (o *GetServiceAccountTokenDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] GetServiceAccountToken default  %+v", o._statusCode, o.Payload)
}

func (o *GetServiceAccountTokenDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}][%d] GetServiceAccountToken default  %+v", o._statusCode, o.Payload)
}

func (o *GetServiceAccountTokenDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetServiceAccountTokenDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

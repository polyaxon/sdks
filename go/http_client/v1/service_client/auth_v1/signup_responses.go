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

package auth_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// SignupReader is a Reader for the Signup structure.
type SignupReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SignupReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSignupOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewSignupNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewSignupForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewSignupNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewSignupDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewSignupOK creates a SignupOK with default headers values
func NewSignupOK() *SignupOK {
	return &SignupOK{}
}

/* SignupOK describes a response with status code 200, with default header values.

A successful response.
*/
type SignupOK struct {
	Payload *service_model.V1Auth
}

func (o *SignupOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/signup][%d] signupOK  %+v", 200, o.Payload)
}
func (o *SignupOK) GetPayload() *service_model.V1Auth {
	return o.Payload
}

func (o *SignupOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Auth)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSignupNoContent creates a SignupNoContent with default headers values
func NewSignupNoContent() *SignupNoContent {
	return &SignupNoContent{}
}

/* SignupNoContent describes a response with status code 204, with default header values.

No content.
*/
type SignupNoContent struct {
	Payload interface{}
}

func (o *SignupNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/signup][%d] signupNoContent  %+v", 204, o.Payload)
}
func (o *SignupNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *SignupNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSignupForbidden creates a SignupForbidden with default headers values
func NewSignupForbidden() *SignupForbidden {
	return &SignupForbidden{}
}

/* SignupForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type SignupForbidden struct {
	Payload interface{}
}

func (o *SignupForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/signup][%d] signupForbidden  %+v", 403, o.Payload)
}
func (o *SignupForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *SignupForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSignupNotFound creates a SignupNotFound with default headers values
func NewSignupNotFound() *SignupNotFound {
	return &SignupNotFound{}
}

/* SignupNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type SignupNotFound struct {
	Payload interface{}
}

func (o *SignupNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/signup][%d] signupNotFound  %+v", 404, o.Payload)
}
func (o *SignupNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *SignupNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSignupDefault creates a SignupDefault with default headers values
func NewSignupDefault(code int) *SignupDefault {
	return &SignupDefault{
		_statusCode: code,
	}
}

/* SignupDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type SignupDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the signup default response
func (o *SignupDefault) Code() int {
	return o._statusCode
}

func (o *SignupDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/signup][%d] Signup default  %+v", o._statusCode, o.Payload)
}
func (o *SignupDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *SignupDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

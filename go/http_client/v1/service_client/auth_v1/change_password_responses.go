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

// ChangePasswordReader is a Reader for the ChangePassword structure.
type ChangePasswordReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ChangePasswordReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewChangePasswordOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewChangePasswordNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewChangePasswordForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewChangePasswordNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewChangePasswordDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewChangePasswordOK creates a ChangePasswordOK with default headers values
func NewChangePasswordOK() *ChangePasswordOK {
	return &ChangePasswordOK{}
}

/*
ChangePasswordOK describes a response with status code 200, with default header values.

A successful response.
*/
type ChangePasswordOK struct {
}

// IsSuccess returns true when this change password o k response has a 2xx status code
func (o *ChangePasswordOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this change password o k response has a 3xx status code
func (o *ChangePasswordOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this change password o k response has a 4xx status code
func (o *ChangePasswordOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this change password o k response has a 5xx status code
func (o *ChangePasswordOK) IsServerError() bool {
	return false
}

// IsCode returns true when this change password o k response a status code equal to that given
func (o *ChangePasswordOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the change password o k response
func (o *ChangePasswordOK) Code() int {
	return 200
}

func (o *ChangePasswordOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordOK ", 200)
}

func (o *ChangePasswordOK) String() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordOK ", 200)
}

func (o *ChangePasswordOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewChangePasswordNoContent creates a ChangePasswordNoContent with default headers values
func NewChangePasswordNoContent() *ChangePasswordNoContent {
	return &ChangePasswordNoContent{}
}

/*
ChangePasswordNoContent describes a response with status code 204, with default header values.

No content.
*/
type ChangePasswordNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this change password no content response has a 2xx status code
func (o *ChangePasswordNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this change password no content response has a 3xx status code
func (o *ChangePasswordNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this change password no content response has a 4xx status code
func (o *ChangePasswordNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this change password no content response has a 5xx status code
func (o *ChangePasswordNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this change password no content response a status code equal to that given
func (o *ChangePasswordNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the change password no content response
func (o *ChangePasswordNoContent) Code() int {
	return 204
}

func (o *ChangePasswordNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordNoContent  %+v", 204, o.Payload)
}

func (o *ChangePasswordNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordNoContent  %+v", 204, o.Payload)
}

func (o *ChangePasswordNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ChangePasswordNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewChangePasswordForbidden creates a ChangePasswordForbidden with default headers values
func NewChangePasswordForbidden() *ChangePasswordForbidden {
	return &ChangePasswordForbidden{}
}

/*
ChangePasswordForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ChangePasswordForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this change password forbidden response has a 2xx status code
func (o *ChangePasswordForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this change password forbidden response has a 3xx status code
func (o *ChangePasswordForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this change password forbidden response has a 4xx status code
func (o *ChangePasswordForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this change password forbidden response has a 5xx status code
func (o *ChangePasswordForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this change password forbidden response a status code equal to that given
func (o *ChangePasswordForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the change password forbidden response
func (o *ChangePasswordForbidden) Code() int {
	return 403
}

func (o *ChangePasswordForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordForbidden  %+v", 403, o.Payload)
}

func (o *ChangePasswordForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordForbidden  %+v", 403, o.Payload)
}

func (o *ChangePasswordForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ChangePasswordForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewChangePasswordNotFound creates a ChangePasswordNotFound with default headers values
func NewChangePasswordNotFound() *ChangePasswordNotFound {
	return &ChangePasswordNotFound{}
}

/*
ChangePasswordNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ChangePasswordNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this change password not found response has a 2xx status code
func (o *ChangePasswordNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this change password not found response has a 3xx status code
func (o *ChangePasswordNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this change password not found response has a 4xx status code
func (o *ChangePasswordNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this change password not found response has a 5xx status code
func (o *ChangePasswordNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this change password not found response a status code equal to that given
func (o *ChangePasswordNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the change password not found response
func (o *ChangePasswordNotFound) Code() int {
	return 404
}

func (o *ChangePasswordNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordNotFound  %+v", 404, o.Payload)
}

func (o *ChangePasswordNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] changePasswordNotFound  %+v", 404, o.Payload)
}

func (o *ChangePasswordNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ChangePasswordNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewChangePasswordDefault creates a ChangePasswordDefault with default headers values
func NewChangePasswordDefault(code int) *ChangePasswordDefault {
	return &ChangePasswordDefault{
		_statusCode: code,
	}
}

/*
ChangePasswordDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ChangePasswordDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this change password default response has a 2xx status code
func (o *ChangePasswordDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this change password default response has a 3xx status code
func (o *ChangePasswordDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this change password default response has a 4xx status code
func (o *ChangePasswordDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this change password default response has a 5xx status code
func (o *ChangePasswordDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this change password default response a status code equal to that given
func (o *ChangePasswordDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the change password default response
func (o *ChangePasswordDefault) Code() int {
	return o._statusCode
}

func (o *ChangePasswordDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] ChangePassword default  %+v", o._statusCode, o.Payload)
}

func (o *ChangePasswordDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/auth/change-password][%d] ChangePassword default  %+v", o._statusCode, o.Payload)
}

func (o *ChangePasswordDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ChangePasswordDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

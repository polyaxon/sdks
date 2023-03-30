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

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateOrganizationMemberReader is a Reader for the UpdateOrganizationMember structure.
type UpdateOrganizationMemberReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateOrganizationMemberReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateOrganizationMemberOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateOrganizationMemberNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateOrganizationMemberForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateOrganizationMemberNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateOrganizationMemberDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateOrganizationMemberOK creates a UpdateOrganizationMemberOK with default headers values
func NewUpdateOrganizationMemberOK() *UpdateOrganizationMemberOK {
	return &UpdateOrganizationMemberOK{}
}

/*
UpdateOrganizationMemberOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateOrganizationMemberOK struct {
	Payload *service_model.V1OrganizationMember
}

// IsSuccess returns true when this update organization member o k response has a 2xx status code
func (o *UpdateOrganizationMemberOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update organization member o k response has a 3xx status code
func (o *UpdateOrganizationMemberOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization member o k response has a 4xx status code
func (o *UpdateOrganizationMemberOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this update organization member o k response has a 5xx status code
func (o *UpdateOrganizationMemberOK) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization member o k response a status code equal to that given
func (o *UpdateOrganizationMemberOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the update organization member o k response
func (o *UpdateOrganizationMemberOK) Code() int {
	return 200
}

func (o *UpdateOrganizationMemberOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberOK  %+v", 200, o.Payload)
}

func (o *UpdateOrganizationMemberOK) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberOK  %+v", 200, o.Payload)
}

func (o *UpdateOrganizationMemberOK) GetPayload() *service_model.V1OrganizationMember {
	return o.Payload
}

func (o *UpdateOrganizationMemberOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1OrganizationMember)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationMemberNoContent creates a UpdateOrganizationMemberNoContent with default headers values
func NewUpdateOrganizationMemberNoContent() *UpdateOrganizationMemberNoContent {
	return &UpdateOrganizationMemberNoContent{}
}

/*
UpdateOrganizationMemberNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateOrganizationMemberNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization member no content response has a 2xx status code
func (o *UpdateOrganizationMemberNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update organization member no content response has a 3xx status code
func (o *UpdateOrganizationMemberNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization member no content response has a 4xx status code
func (o *UpdateOrganizationMemberNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this update organization member no content response has a 5xx status code
func (o *UpdateOrganizationMemberNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization member no content response a status code equal to that given
func (o *UpdateOrganizationMemberNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the update organization member no content response
func (o *UpdateOrganizationMemberNoContent) Code() int {
	return 204
}

func (o *UpdateOrganizationMemberNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberNoContent  %+v", 204, o.Payload)
}

func (o *UpdateOrganizationMemberNoContent) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberNoContent  %+v", 204, o.Payload)
}

func (o *UpdateOrganizationMemberNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationMemberNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationMemberForbidden creates a UpdateOrganizationMemberForbidden with default headers values
func NewUpdateOrganizationMemberForbidden() *UpdateOrganizationMemberForbidden {
	return &UpdateOrganizationMemberForbidden{}
}

/*
UpdateOrganizationMemberForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateOrganizationMemberForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization member forbidden response has a 2xx status code
func (o *UpdateOrganizationMemberForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update organization member forbidden response has a 3xx status code
func (o *UpdateOrganizationMemberForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization member forbidden response has a 4xx status code
func (o *UpdateOrganizationMemberForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this update organization member forbidden response has a 5xx status code
func (o *UpdateOrganizationMemberForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization member forbidden response a status code equal to that given
func (o *UpdateOrganizationMemberForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the update organization member forbidden response
func (o *UpdateOrganizationMemberForbidden) Code() int {
	return 403
}

func (o *UpdateOrganizationMemberForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberForbidden  %+v", 403, o.Payload)
}

func (o *UpdateOrganizationMemberForbidden) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberForbidden  %+v", 403, o.Payload)
}

func (o *UpdateOrganizationMemberForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationMemberForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationMemberNotFound creates a UpdateOrganizationMemberNotFound with default headers values
func NewUpdateOrganizationMemberNotFound() *UpdateOrganizationMemberNotFound {
	return &UpdateOrganizationMemberNotFound{}
}

/*
UpdateOrganizationMemberNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateOrganizationMemberNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization member not found response has a 2xx status code
func (o *UpdateOrganizationMemberNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update organization member not found response has a 3xx status code
func (o *UpdateOrganizationMemberNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization member not found response has a 4xx status code
func (o *UpdateOrganizationMemberNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this update organization member not found response has a 5xx status code
func (o *UpdateOrganizationMemberNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization member not found response a status code equal to that given
func (o *UpdateOrganizationMemberNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the update organization member not found response
func (o *UpdateOrganizationMemberNotFound) Code() int {
	return 404
}

func (o *UpdateOrganizationMemberNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberNotFound  %+v", 404, o.Payload)
}

func (o *UpdateOrganizationMemberNotFound) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] updateOrganizationMemberNotFound  %+v", 404, o.Payload)
}

func (o *UpdateOrganizationMemberNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationMemberNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationMemberDefault creates a UpdateOrganizationMemberDefault with default headers values
func NewUpdateOrganizationMemberDefault(code int) *UpdateOrganizationMemberDefault {
	return &UpdateOrganizationMemberDefault{
		_statusCode: code,
	}
}

/*
UpdateOrganizationMemberDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateOrganizationMemberDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this update organization member default response has a 2xx status code
func (o *UpdateOrganizationMemberDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this update organization member default response has a 3xx status code
func (o *UpdateOrganizationMemberDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this update organization member default response has a 4xx status code
func (o *UpdateOrganizationMemberDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this update organization member default response has a 5xx status code
func (o *UpdateOrganizationMemberDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this update organization member default response a status code equal to that given
func (o *UpdateOrganizationMemberDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the update organization member default response
func (o *UpdateOrganizationMemberDefault) Code() int {
	return o._statusCode
}

func (o *UpdateOrganizationMemberDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] UpdateOrganizationMember default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateOrganizationMemberDefault) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/members/{member.user}][%d] UpdateOrganizationMember default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateOrganizationMemberDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateOrganizationMemberDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

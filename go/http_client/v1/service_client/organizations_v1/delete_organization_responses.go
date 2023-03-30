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

// DeleteOrganizationReader is a Reader for the DeleteOrganization structure.
type DeleteOrganizationReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteOrganizationReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteOrganizationOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteOrganizationNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteOrganizationForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteOrganizationNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteOrganizationDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteOrganizationOK creates a DeleteOrganizationOK with default headers values
func NewDeleteOrganizationOK() *DeleteOrganizationOK {
	return &DeleteOrganizationOK{}
}

/*
DeleteOrganizationOK describes a response with status code 200, with default header values.

A successful response.
*/
type DeleteOrganizationOK struct {
}

// IsSuccess returns true when this delete organization o k response has a 2xx status code
func (o *DeleteOrganizationOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete organization o k response has a 3xx status code
func (o *DeleteOrganizationOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete organization o k response has a 4xx status code
func (o *DeleteOrganizationOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete organization o k response has a 5xx status code
func (o *DeleteOrganizationOK) IsServerError() bool {
	return false
}

// IsCode returns true when this delete organization o k response a status code equal to that given
func (o *DeleteOrganizationOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the delete organization o k response
func (o *DeleteOrganizationOK) Code() int {
	return 200
}

func (o *DeleteOrganizationOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationOK ", 200)
}

func (o *DeleteOrganizationOK) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationOK ", 200)
}

func (o *DeleteOrganizationOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteOrganizationNoContent creates a DeleteOrganizationNoContent with default headers values
func NewDeleteOrganizationNoContent() *DeleteOrganizationNoContent {
	return &DeleteOrganizationNoContent{}
}

/*
DeleteOrganizationNoContent describes a response with status code 204, with default header values.

No content.
*/
type DeleteOrganizationNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this delete organization no content response has a 2xx status code
func (o *DeleteOrganizationNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete organization no content response has a 3xx status code
func (o *DeleteOrganizationNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete organization no content response has a 4xx status code
func (o *DeleteOrganizationNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete organization no content response has a 5xx status code
func (o *DeleteOrganizationNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this delete organization no content response a status code equal to that given
func (o *DeleteOrganizationNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the delete organization no content response
func (o *DeleteOrganizationNoContent) Code() int {
	return 204
}

func (o *DeleteOrganizationNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationNoContent  %+v", 204, o.Payload)
}

func (o *DeleteOrganizationNoContent) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationNoContent  %+v", 204, o.Payload)
}

func (o *DeleteOrganizationNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteOrganizationNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteOrganizationForbidden creates a DeleteOrganizationForbidden with default headers values
func NewDeleteOrganizationForbidden() *DeleteOrganizationForbidden {
	return &DeleteOrganizationForbidden{}
}

/*
DeleteOrganizationForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DeleteOrganizationForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this delete organization forbidden response has a 2xx status code
func (o *DeleteOrganizationForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete organization forbidden response has a 3xx status code
func (o *DeleteOrganizationForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete organization forbidden response has a 4xx status code
func (o *DeleteOrganizationForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete organization forbidden response has a 5xx status code
func (o *DeleteOrganizationForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this delete organization forbidden response a status code equal to that given
func (o *DeleteOrganizationForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the delete organization forbidden response
func (o *DeleteOrganizationForbidden) Code() int {
	return 403
}

func (o *DeleteOrganizationForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationForbidden  %+v", 403, o.Payload)
}

func (o *DeleteOrganizationForbidden) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationForbidden  %+v", 403, o.Payload)
}

func (o *DeleteOrganizationForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteOrganizationForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteOrganizationNotFound creates a DeleteOrganizationNotFound with default headers values
func NewDeleteOrganizationNotFound() *DeleteOrganizationNotFound {
	return &DeleteOrganizationNotFound{}
}

/*
DeleteOrganizationNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DeleteOrganizationNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this delete organization not found response has a 2xx status code
func (o *DeleteOrganizationNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete organization not found response has a 3xx status code
func (o *DeleteOrganizationNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete organization not found response has a 4xx status code
func (o *DeleteOrganizationNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete organization not found response has a 5xx status code
func (o *DeleteOrganizationNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this delete organization not found response a status code equal to that given
func (o *DeleteOrganizationNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the delete organization not found response
func (o *DeleteOrganizationNotFound) Code() int {
	return 404
}

func (o *DeleteOrganizationNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationNotFound  %+v", 404, o.Payload)
}

func (o *DeleteOrganizationNotFound) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] deleteOrganizationNotFound  %+v", 404, o.Payload)
}

func (o *DeleteOrganizationNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteOrganizationNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteOrganizationDefault creates a DeleteOrganizationDefault with default headers values
func NewDeleteOrganizationDefault(code int) *DeleteOrganizationDefault {
	return &DeleteOrganizationDefault{
		_statusCode: code,
	}
}

/*
DeleteOrganizationDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DeleteOrganizationDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this delete organization default response has a 2xx status code
func (o *DeleteOrganizationDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this delete organization default response has a 3xx status code
func (o *DeleteOrganizationDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this delete organization default response has a 4xx status code
func (o *DeleteOrganizationDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this delete organization default response has a 5xx status code
func (o *DeleteOrganizationDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this delete organization default response a status code equal to that given
func (o *DeleteOrganizationDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the delete organization default response
func (o *DeleteOrganizationDefault) Code() int {
	return o._statusCode
}

func (o *DeleteOrganizationDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] DeleteOrganization default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteOrganizationDefault) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}][%d] DeleteOrganization default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteOrganizationDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteOrganizationDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

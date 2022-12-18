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

// OrganizationPlanReader is a Reader for the OrganizationPlan structure.
type OrganizationPlanReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *OrganizationPlanReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewOrganizationPlanOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewOrganizationPlanNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewOrganizationPlanForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewOrganizationPlanNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewOrganizationPlanDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewOrganizationPlanOK creates a OrganizationPlanOK with default headers values
func NewOrganizationPlanOK() *OrganizationPlanOK {
	return &OrganizationPlanOK{}
}

/* OrganizationPlanOK describes a response with status code 200, with default header values.

A successful response.
*/
type OrganizationPlanOK struct {
	Payload *service_model.V1Organization
}

// IsSuccess returns true when this organization plan o k response has a 2xx status code
func (o *OrganizationPlanOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this organization plan o k response has a 3xx status code
func (o *OrganizationPlanOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this organization plan o k response has a 4xx status code
func (o *OrganizationPlanOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this organization plan o k response has a 5xx status code
func (o *OrganizationPlanOK) IsServerError() bool {
	return false
}

// IsCode returns true when this organization plan o k response a status code equal to that given
func (o *OrganizationPlanOK) IsCode(code int) bool {
	return code == 200
}

func (o *OrganizationPlanOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanOK  %+v", 200, o.Payload)
}

func (o *OrganizationPlanOK) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanOK  %+v", 200, o.Payload)
}

func (o *OrganizationPlanOK) GetPayload() *service_model.V1Organization {
	return o.Payload
}

func (o *OrganizationPlanOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Organization)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationPlanNoContent creates a OrganizationPlanNoContent with default headers values
func NewOrganizationPlanNoContent() *OrganizationPlanNoContent {
	return &OrganizationPlanNoContent{}
}

/* OrganizationPlanNoContent describes a response with status code 204, with default header values.

No content.
*/
type OrganizationPlanNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this organization plan no content response has a 2xx status code
func (o *OrganizationPlanNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this organization plan no content response has a 3xx status code
func (o *OrganizationPlanNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this organization plan no content response has a 4xx status code
func (o *OrganizationPlanNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this organization plan no content response has a 5xx status code
func (o *OrganizationPlanNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this organization plan no content response a status code equal to that given
func (o *OrganizationPlanNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *OrganizationPlanNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanNoContent  %+v", 204, o.Payload)
}

func (o *OrganizationPlanNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanNoContent  %+v", 204, o.Payload)
}

func (o *OrganizationPlanNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationPlanNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationPlanForbidden creates a OrganizationPlanForbidden with default headers values
func NewOrganizationPlanForbidden() *OrganizationPlanForbidden {
	return &OrganizationPlanForbidden{}
}

/* OrganizationPlanForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type OrganizationPlanForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this organization plan forbidden response has a 2xx status code
func (o *OrganizationPlanForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this organization plan forbidden response has a 3xx status code
func (o *OrganizationPlanForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this organization plan forbidden response has a 4xx status code
func (o *OrganizationPlanForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this organization plan forbidden response has a 5xx status code
func (o *OrganizationPlanForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this organization plan forbidden response a status code equal to that given
func (o *OrganizationPlanForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *OrganizationPlanForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanForbidden  %+v", 403, o.Payload)
}

func (o *OrganizationPlanForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanForbidden  %+v", 403, o.Payload)
}

func (o *OrganizationPlanForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationPlanForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationPlanNotFound creates a OrganizationPlanNotFound with default headers values
func NewOrganizationPlanNotFound() *OrganizationPlanNotFound {
	return &OrganizationPlanNotFound{}
}

/* OrganizationPlanNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type OrganizationPlanNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this organization plan not found response has a 2xx status code
func (o *OrganizationPlanNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this organization plan not found response has a 3xx status code
func (o *OrganizationPlanNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this organization plan not found response has a 4xx status code
func (o *OrganizationPlanNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this organization plan not found response has a 5xx status code
func (o *OrganizationPlanNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this organization plan not found response a status code equal to that given
func (o *OrganizationPlanNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *OrganizationPlanNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanNotFound  %+v", 404, o.Payload)
}

func (o *OrganizationPlanNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] organizationPlanNotFound  %+v", 404, o.Payload)
}

func (o *OrganizationPlanNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationPlanNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationPlanDefault creates a OrganizationPlanDefault with default headers values
func NewOrganizationPlanDefault(code int) *OrganizationPlanDefault {
	return &OrganizationPlanDefault{
		_statusCode: code,
	}
}

/* OrganizationPlanDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type OrganizationPlanDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the organization plan default response
func (o *OrganizationPlanDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this organization plan default response has a 2xx status code
func (o *OrganizationPlanDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this organization plan default response has a 3xx status code
func (o *OrganizationPlanDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this organization plan default response has a 4xx status code
func (o *OrganizationPlanDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this organization plan default response has a 5xx status code
func (o *OrganizationPlanDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this organization plan default response a status code equal to that given
func (o *OrganizationPlanDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *OrganizationPlanDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] OrganizationPlan default  %+v", o._statusCode, o.Payload)
}

func (o *OrganizationPlanDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/plan][%d] OrganizationPlan default  %+v", o._statusCode, o.Payload)
}

func (o *OrganizationPlanDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *OrganizationPlanDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

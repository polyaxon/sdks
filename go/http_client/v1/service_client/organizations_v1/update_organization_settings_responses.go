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

// UpdateOrganizationSettingsReader is a Reader for the UpdateOrganizationSettings structure.
type UpdateOrganizationSettingsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateOrganizationSettingsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateOrganizationSettingsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateOrganizationSettingsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateOrganizationSettingsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateOrganizationSettingsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateOrganizationSettingsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateOrganizationSettingsOK creates a UpdateOrganizationSettingsOK with default headers values
func NewUpdateOrganizationSettingsOK() *UpdateOrganizationSettingsOK {
	return &UpdateOrganizationSettingsOK{}
}

/* UpdateOrganizationSettingsOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateOrganizationSettingsOK struct {
	Payload *service_model.V1Organization
}

// IsSuccess returns true when this update organization settings o k response has a 2xx status code
func (o *UpdateOrganizationSettingsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update organization settings o k response has a 3xx status code
func (o *UpdateOrganizationSettingsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization settings o k response has a 4xx status code
func (o *UpdateOrganizationSettingsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this update organization settings o k response has a 5xx status code
func (o *UpdateOrganizationSettingsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization settings o k response a status code equal to that given
func (o *UpdateOrganizationSettingsOK) IsCode(code int) bool {
	return code == 200
}

func (o *UpdateOrganizationSettingsOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsOK  %+v", 200, o.Payload)
}

func (o *UpdateOrganizationSettingsOK) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsOK  %+v", 200, o.Payload)
}

func (o *UpdateOrganizationSettingsOK) GetPayload() *service_model.V1Organization {
	return o.Payload
}

func (o *UpdateOrganizationSettingsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Organization)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationSettingsNoContent creates a UpdateOrganizationSettingsNoContent with default headers values
func NewUpdateOrganizationSettingsNoContent() *UpdateOrganizationSettingsNoContent {
	return &UpdateOrganizationSettingsNoContent{}
}

/* UpdateOrganizationSettingsNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateOrganizationSettingsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization settings no content response has a 2xx status code
func (o *UpdateOrganizationSettingsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this update organization settings no content response has a 3xx status code
func (o *UpdateOrganizationSettingsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization settings no content response has a 4xx status code
func (o *UpdateOrganizationSettingsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this update organization settings no content response has a 5xx status code
func (o *UpdateOrganizationSettingsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization settings no content response a status code equal to that given
func (o *UpdateOrganizationSettingsNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *UpdateOrganizationSettingsNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsNoContent  %+v", 204, o.Payload)
}

func (o *UpdateOrganizationSettingsNoContent) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsNoContent  %+v", 204, o.Payload)
}

func (o *UpdateOrganizationSettingsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationSettingsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationSettingsForbidden creates a UpdateOrganizationSettingsForbidden with default headers values
func NewUpdateOrganizationSettingsForbidden() *UpdateOrganizationSettingsForbidden {
	return &UpdateOrganizationSettingsForbidden{}
}

/* UpdateOrganizationSettingsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateOrganizationSettingsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization settings forbidden response has a 2xx status code
func (o *UpdateOrganizationSettingsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update organization settings forbidden response has a 3xx status code
func (o *UpdateOrganizationSettingsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization settings forbidden response has a 4xx status code
func (o *UpdateOrganizationSettingsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this update organization settings forbidden response has a 5xx status code
func (o *UpdateOrganizationSettingsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization settings forbidden response a status code equal to that given
func (o *UpdateOrganizationSettingsForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *UpdateOrganizationSettingsForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsForbidden  %+v", 403, o.Payload)
}

func (o *UpdateOrganizationSettingsForbidden) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsForbidden  %+v", 403, o.Payload)
}

func (o *UpdateOrganizationSettingsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationSettingsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationSettingsNotFound creates a UpdateOrganizationSettingsNotFound with default headers values
func NewUpdateOrganizationSettingsNotFound() *UpdateOrganizationSettingsNotFound {
	return &UpdateOrganizationSettingsNotFound{}
}

/* UpdateOrganizationSettingsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateOrganizationSettingsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this update organization settings not found response has a 2xx status code
func (o *UpdateOrganizationSettingsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this update organization settings not found response has a 3xx status code
func (o *UpdateOrganizationSettingsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this update organization settings not found response has a 4xx status code
func (o *UpdateOrganizationSettingsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this update organization settings not found response has a 5xx status code
func (o *UpdateOrganizationSettingsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this update organization settings not found response a status code equal to that given
func (o *UpdateOrganizationSettingsNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *UpdateOrganizationSettingsNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsNotFound  %+v", 404, o.Payload)
}

func (o *UpdateOrganizationSettingsNotFound) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] updateOrganizationSettingsNotFound  %+v", 404, o.Payload)
}

func (o *UpdateOrganizationSettingsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateOrganizationSettingsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateOrganizationSettingsDefault creates a UpdateOrganizationSettingsDefault with default headers values
func NewUpdateOrganizationSettingsDefault(code int) *UpdateOrganizationSettingsDefault {
	return &UpdateOrganizationSettingsDefault{
		_statusCode: code,
	}
}

/* UpdateOrganizationSettingsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateOrganizationSettingsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update organization settings default response
func (o *UpdateOrganizationSettingsDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this update organization settings default response has a 2xx status code
func (o *UpdateOrganizationSettingsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this update organization settings default response has a 3xx status code
func (o *UpdateOrganizationSettingsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this update organization settings default response has a 4xx status code
func (o *UpdateOrganizationSettingsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this update organization settings default response has a 5xx status code
func (o *UpdateOrganizationSettingsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this update organization settings default response a status code equal to that given
func (o *UpdateOrganizationSettingsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *UpdateOrganizationSettingsDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] UpdateOrganizationSettings default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateOrganizationSettingsDefault) String() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/settings][%d] UpdateOrganizationSettings default  %+v", o._statusCode, o.Payload)
}

func (o *UpdateOrganizationSettingsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateOrganizationSettingsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

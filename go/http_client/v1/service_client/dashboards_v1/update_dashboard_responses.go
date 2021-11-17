// Copyright 2018-2021 Polyaxon, Inc.
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

package dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateDashboardReader is a Reader for the UpdateDashboard structure.
type UpdateDashboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateDashboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateDashboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateDashboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateDashboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateDashboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateDashboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateDashboardOK creates a UpdateDashboardOK with default headers values
func NewUpdateDashboardOK() *UpdateDashboardOK {
	return &UpdateDashboardOK{}
}

/* UpdateDashboardOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateDashboardOK struct {
	Payload *service_model.V1Dashboard
}

func (o *UpdateDashboardOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/dashboards/{dashboard.uuid}][%d] updateDashboardOK  %+v", 200, o.Payload)
}
func (o *UpdateDashboardOK) GetPayload() *service_model.V1Dashboard {
	return o.Payload
}

func (o *UpdateDashboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Dashboard)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateDashboardNoContent creates a UpdateDashboardNoContent with default headers values
func NewUpdateDashboardNoContent() *UpdateDashboardNoContent {
	return &UpdateDashboardNoContent{}
}

/* UpdateDashboardNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateDashboardNoContent struct {
	Payload interface{}
}

func (o *UpdateDashboardNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/dashboards/{dashboard.uuid}][%d] updateDashboardNoContent  %+v", 204, o.Payload)
}
func (o *UpdateDashboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateDashboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateDashboardForbidden creates a UpdateDashboardForbidden with default headers values
func NewUpdateDashboardForbidden() *UpdateDashboardForbidden {
	return &UpdateDashboardForbidden{}
}

/* UpdateDashboardForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateDashboardForbidden struct {
	Payload interface{}
}

func (o *UpdateDashboardForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/dashboards/{dashboard.uuid}][%d] updateDashboardForbidden  %+v", 403, o.Payload)
}
func (o *UpdateDashboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateDashboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateDashboardNotFound creates a UpdateDashboardNotFound with default headers values
func NewUpdateDashboardNotFound() *UpdateDashboardNotFound {
	return &UpdateDashboardNotFound{}
}

/* UpdateDashboardNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateDashboardNotFound struct {
	Payload interface{}
}

func (o *UpdateDashboardNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/dashboards/{dashboard.uuid}][%d] updateDashboardNotFound  %+v", 404, o.Payload)
}
func (o *UpdateDashboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateDashboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateDashboardDefault creates a UpdateDashboardDefault with default headers values
func NewUpdateDashboardDefault(code int) *UpdateDashboardDefault {
	return &UpdateDashboardDefault{
		_statusCode: code,
	}
}

/* UpdateDashboardDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateDashboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update dashboard default response
func (o *UpdateDashboardDefault) Code() int {
	return o._statusCode
}

func (o *UpdateDashboardDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/dashboards/{dashboard.uuid}][%d] UpdateDashboard default  %+v", o._statusCode, o.Payload)
}
func (o *UpdateDashboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateDashboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
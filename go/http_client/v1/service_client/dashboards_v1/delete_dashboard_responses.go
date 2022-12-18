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

// DeleteDashboardReader is a Reader for the DeleteDashboard structure.
type DeleteDashboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteDashboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteDashboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteDashboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteDashboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteDashboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteDashboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteDashboardOK creates a DeleteDashboardOK with default headers values
func NewDeleteDashboardOK() *DeleteDashboardOK {
	return &DeleteDashboardOK{}
}

/* DeleteDashboardOK describes a response with status code 200, with default header values.

A successful response.
*/
type DeleteDashboardOK struct {
}

// IsSuccess returns true when this delete dashboard o k response has a 2xx status code
func (o *DeleteDashboardOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete dashboard o k response has a 3xx status code
func (o *DeleteDashboardOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete dashboard o k response has a 4xx status code
func (o *DeleteDashboardOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete dashboard o k response has a 5xx status code
func (o *DeleteDashboardOK) IsServerError() bool {
	return false
}

// IsCode returns true when this delete dashboard o k response a status code equal to that given
func (o *DeleteDashboardOK) IsCode(code int) bool {
	return code == 200
}

func (o *DeleteDashboardOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardOK ", 200)
}

func (o *DeleteDashboardOK) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardOK ", 200)
}

func (o *DeleteDashboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteDashboardNoContent creates a DeleteDashboardNoContent with default headers values
func NewDeleteDashboardNoContent() *DeleteDashboardNoContent {
	return &DeleteDashboardNoContent{}
}

/* DeleteDashboardNoContent describes a response with status code 204, with default header values.

No content.
*/
type DeleteDashboardNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this delete dashboard no content response has a 2xx status code
func (o *DeleteDashboardNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete dashboard no content response has a 3xx status code
func (o *DeleteDashboardNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete dashboard no content response has a 4xx status code
func (o *DeleteDashboardNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete dashboard no content response has a 5xx status code
func (o *DeleteDashboardNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this delete dashboard no content response a status code equal to that given
func (o *DeleteDashboardNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *DeleteDashboardNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardNoContent  %+v", 204, o.Payload)
}

func (o *DeleteDashboardNoContent) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardNoContent  %+v", 204, o.Payload)
}

func (o *DeleteDashboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteDashboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteDashboardForbidden creates a DeleteDashboardForbidden with default headers values
func NewDeleteDashboardForbidden() *DeleteDashboardForbidden {
	return &DeleteDashboardForbidden{}
}

/* DeleteDashboardForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DeleteDashboardForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this delete dashboard forbidden response has a 2xx status code
func (o *DeleteDashboardForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete dashboard forbidden response has a 3xx status code
func (o *DeleteDashboardForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete dashboard forbidden response has a 4xx status code
func (o *DeleteDashboardForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete dashboard forbidden response has a 5xx status code
func (o *DeleteDashboardForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this delete dashboard forbidden response a status code equal to that given
func (o *DeleteDashboardForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *DeleteDashboardForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardForbidden  %+v", 403, o.Payload)
}

func (o *DeleteDashboardForbidden) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardForbidden  %+v", 403, o.Payload)
}

func (o *DeleteDashboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteDashboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteDashboardNotFound creates a DeleteDashboardNotFound with default headers values
func NewDeleteDashboardNotFound() *DeleteDashboardNotFound {
	return &DeleteDashboardNotFound{}
}

/* DeleteDashboardNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DeleteDashboardNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this delete dashboard not found response has a 2xx status code
func (o *DeleteDashboardNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete dashboard not found response has a 3xx status code
func (o *DeleteDashboardNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete dashboard not found response has a 4xx status code
func (o *DeleteDashboardNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete dashboard not found response has a 5xx status code
func (o *DeleteDashboardNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this delete dashboard not found response a status code equal to that given
func (o *DeleteDashboardNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *DeleteDashboardNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardNotFound  %+v", 404, o.Payload)
}

func (o *DeleteDashboardNotFound) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] deleteDashboardNotFound  %+v", 404, o.Payload)
}

func (o *DeleteDashboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteDashboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteDashboardDefault creates a DeleteDashboardDefault with default headers values
func NewDeleteDashboardDefault(code int) *DeleteDashboardDefault {
	return &DeleteDashboardDefault{
		_statusCode: code,
	}
}

/* DeleteDashboardDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DeleteDashboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete dashboard default response
func (o *DeleteDashboardDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this delete dashboard default response has a 2xx status code
func (o *DeleteDashboardDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this delete dashboard default response has a 3xx status code
func (o *DeleteDashboardDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this delete dashboard default response has a 4xx status code
func (o *DeleteDashboardDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this delete dashboard default response has a 5xx status code
func (o *DeleteDashboardDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this delete dashboard default response a status code equal to that given
func (o *DeleteDashboardDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *DeleteDashboardDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] DeleteDashboard default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteDashboardDefault) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/dashboards/{uuid}][%d] DeleteDashboard default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteDashboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteDashboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

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

package connections_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// DeleteConnectionReader is a Reader for the DeleteConnection structure.
type DeleteConnectionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteConnectionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteConnectionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteConnectionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteConnectionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteConnectionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteConnectionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteConnectionOK creates a DeleteConnectionOK with default headers values
func NewDeleteConnectionOK() *DeleteConnectionOK {
	return &DeleteConnectionOK{}
}

/* DeleteConnectionOK describes a response with status code 200, with default header values.

A successful response.
*/
type DeleteConnectionOK struct {
}

// IsSuccess returns true when this delete connection o k response has a 2xx status code
func (o *DeleteConnectionOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete connection o k response has a 3xx status code
func (o *DeleteConnectionOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete connection o k response has a 4xx status code
func (o *DeleteConnectionOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete connection o k response has a 5xx status code
func (o *DeleteConnectionOK) IsServerError() bool {
	return false
}

// IsCode returns true when this delete connection o k response a status code equal to that given
func (o *DeleteConnectionOK) IsCode(code int) bool {
	return code == 200
}

func (o *DeleteConnectionOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionOK ", 200)
}

func (o *DeleteConnectionOK) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionOK ", 200)
}

func (o *DeleteConnectionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteConnectionNoContent creates a DeleteConnectionNoContent with default headers values
func NewDeleteConnectionNoContent() *DeleteConnectionNoContent {
	return &DeleteConnectionNoContent{}
}

/* DeleteConnectionNoContent describes a response with status code 204, with default header values.

No content.
*/
type DeleteConnectionNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this delete connection no content response has a 2xx status code
func (o *DeleteConnectionNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete connection no content response has a 3xx status code
func (o *DeleteConnectionNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete connection no content response has a 4xx status code
func (o *DeleteConnectionNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete connection no content response has a 5xx status code
func (o *DeleteConnectionNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this delete connection no content response a status code equal to that given
func (o *DeleteConnectionNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *DeleteConnectionNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionNoContent  %+v", 204, o.Payload)
}

func (o *DeleteConnectionNoContent) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionNoContent  %+v", 204, o.Payload)
}

func (o *DeleteConnectionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteConnectionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteConnectionForbidden creates a DeleteConnectionForbidden with default headers values
func NewDeleteConnectionForbidden() *DeleteConnectionForbidden {
	return &DeleteConnectionForbidden{}
}

/* DeleteConnectionForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DeleteConnectionForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this delete connection forbidden response has a 2xx status code
func (o *DeleteConnectionForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete connection forbidden response has a 3xx status code
func (o *DeleteConnectionForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete connection forbidden response has a 4xx status code
func (o *DeleteConnectionForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete connection forbidden response has a 5xx status code
func (o *DeleteConnectionForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this delete connection forbidden response a status code equal to that given
func (o *DeleteConnectionForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *DeleteConnectionForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionForbidden  %+v", 403, o.Payload)
}

func (o *DeleteConnectionForbidden) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionForbidden  %+v", 403, o.Payload)
}

func (o *DeleteConnectionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteConnectionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteConnectionNotFound creates a DeleteConnectionNotFound with default headers values
func NewDeleteConnectionNotFound() *DeleteConnectionNotFound {
	return &DeleteConnectionNotFound{}
}

/* DeleteConnectionNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DeleteConnectionNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this delete connection not found response has a 2xx status code
func (o *DeleteConnectionNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete connection not found response has a 3xx status code
func (o *DeleteConnectionNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete connection not found response has a 4xx status code
func (o *DeleteConnectionNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete connection not found response has a 5xx status code
func (o *DeleteConnectionNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this delete connection not found response a status code equal to that given
func (o *DeleteConnectionNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *DeleteConnectionNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionNotFound  %+v", 404, o.Payload)
}

func (o *DeleteConnectionNotFound) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] deleteConnectionNotFound  %+v", 404, o.Payload)
}

func (o *DeleteConnectionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteConnectionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteConnectionDefault creates a DeleteConnectionDefault with default headers values
func NewDeleteConnectionDefault(code int) *DeleteConnectionDefault {
	return &DeleteConnectionDefault{
		_statusCode: code,
	}
}

/* DeleteConnectionDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DeleteConnectionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete connection default response
func (o *DeleteConnectionDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this delete connection default response has a 2xx status code
func (o *DeleteConnectionDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this delete connection default response has a 3xx status code
func (o *DeleteConnectionDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this delete connection default response has a 4xx status code
func (o *DeleteConnectionDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this delete connection default response has a 5xx status code
func (o *DeleteConnectionDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this delete connection default response a status code equal to that given
func (o *DeleteConnectionDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *DeleteConnectionDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] DeleteConnection default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteConnectionDefault) String() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/connections/{uuid}][%d] DeleteConnection default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteConnectionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteConnectionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

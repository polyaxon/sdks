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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// DeleteRunArtifactsReader is a Reader for the DeleteRunArtifacts structure.
type DeleteRunArtifactsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteRunArtifactsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteRunArtifactsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteRunArtifactsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteRunArtifactsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteRunArtifactsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteRunArtifactsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteRunArtifactsOK creates a DeleteRunArtifactsOK with default headers values
func NewDeleteRunArtifactsOK() *DeleteRunArtifactsOK {
	return &DeleteRunArtifactsOK{}
}

/* DeleteRunArtifactsOK describes a response with status code 200, with default header values.

A successful response.
*/
type DeleteRunArtifactsOK struct {
}

// IsSuccess returns true when this delete run artifacts o k response has a 2xx status code
func (o *DeleteRunArtifactsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete run artifacts o k response has a 3xx status code
func (o *DeleteRunArtifactsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete run artifacts o k response has a 4xx status code
func (o *DeleteRunArtifactsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete run artifacts o k response has a 5xx status code
func (o *DeleteRunArtifactsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this delete run artifacts o k response a status code equal to that given
func (o *DeleteRunArtifactsOK) IsCode(code int) bool {
	return code == 200
}

func (o *DeleteRunArtifactsOK) Error() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsOK ", 200)
}

func (o *DeleteRunArtifactsOK) String() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsOK ", 200)
}

func (o *DeleteRunArtifactsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteRunArtifactsNoContent creates a DeleteRunArtifactsNoContent with default headers values
func NewDeleteRunArtifactsNoContent() *DeleteRunArtifactsNoContent {
	return &DeleteRunArtifactsNoContent{}
}

/* DeleteRunArtifactsNoContent describes a response with status code 204, with default header values.

No content.
*/
type DeleteRunArtifactsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this delete run artifacts no content response has a 2xx status code
func (o *DeleteRunArtifactsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete run artifacts no content response has a 3xx status code
func (o *DeleteRunArtifactsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete run artifacts no content response has a 4xx status code
func (o *DeleteRunArtifactsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete run artifacts no content response has a 5xx status code
func (o *DeleteRunArtifactsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this delete run artifacts no content response a status code equal to that given
func (o *DeleteRunArtifactsNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *DeleteRunArtifactsNoContent) Error() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsNoContent  %+v", 204, o.Payload)
}

func (o *DeleteRunArtifactsNoContent) String() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsNoContent  %+v", 204, o.Payload)
}

func (o *DeleteRunArtifactsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteRunArtifactsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteRunArtifactsForbidden creates a DeleteRunArtifactsForbidden with default headers values
func NewDeleteRunArtifactsForbidden() *DeleteRunArtifactsForbidden {
	return &DeleteRunArtifactsForbidden{}
}

/* DeleteRunArtifactsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DeleteRunArtifactsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this delete run artifacts forbidden response has a 2xx status code
func (o *DeleteRunArtifactsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete run artifacts forbidden response has a 3xx status code
func (o *DeleteRunArtifactsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete run artifacts forbidden response has a 4xx status code
func (o *DeleteRunArtifactsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete run artifacts forbidden response has a 5xx status code
func (o *DeleteRunArtifactsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this delete run artifacts forbidden response a status code equal to that given
func (o *DeleteRunArtifactsForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *DeleteRunArtifactsForbidden) Error() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsForbidden  %+v", 403, o.Payload)
}

func (o *DeleteRunArtifactsForbidden) String() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsForbidden  %+v", 403, o.Payload)
}

func (o *DeleteRunArtifactsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteRunArtifactsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteRunArtifactsNotFound creates a DeleteRunArtifactsNotFound with default headers values
func NewDeleteRunArtifactsNotFound() *DeleteRunArtifactsNotFound {
	return &DeleteRunArtifactsNotFound{}
}

/* DeleteRunArtifactsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DeleteRunArtifactsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this delete run artifacts not found response has a 2xx status code
func (o *DeleteRunArtifactsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete run artifacts not found response has a 3xx status code
func (o *DeleteRunArtifactsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete run artifacts not found response has a 4xx status code
func (o *DeleteRunArtifactsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete run artifacts not found response has a 5xx status code
func (o *DeleteRunArtifactsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this delete run artifacts not found response a status code equal to that given
func (o *DeleteRunArtifactsNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *DeleteRunArtifactsNotFound) Error() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsNotFound  %+v", 404, o.Payload)
}

func (o *DeleteRunArtifactsNotFound) String() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] deleteRunArtifactsNotFound  %+v", 404, o.Payload)
}

func (o *DeleteRunArtifactsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteRunArtifactsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteRunArtifactsDefault creates a DeleteRunArtifactsDefault with default headers values
func NewDeleteRunArtifactsDefault(code int) *DeleteRunArtifactsDefault {
	return &DeleteRunArtifactsDefault{
		_statusCode: code,
	}
}

/* DeleteRunArtifactsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DeleteRunArtifactsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete run artifacts default response
func (o *DeleteRunArtifactsDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this delete run artifacts default response has a 2xx status code
func (o *DeleteRunArtifactsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this delete run artifacts default response has a 3xx status code
func (o *DeleteRunArtifactsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this delete run artifacts default response has a 4xx status code
func (o *DeleteRunArtifactsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this delete run artifacts default response has a 5xx status code
func (o *DeleteRunArtifactsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this delete run artifacts default response a status code equal to that given
func (o *DeleteRunArtifactsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *DeleteRunArtifactsDefault) Error() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] DeleteRunArtifacts default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteRunArtifactsDefault) String() string {
	return fmt.Sprintf("[DELETE /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/artifacts][%d] DeleteRunArtifacts default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteRunArtifactsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteRunArtifactsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

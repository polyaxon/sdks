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

package searches_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// PatchSearchReader is a Reader for the PatchSearch structure.
type PatchSearchReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchSearchReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchSearchOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchSearchNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchSearchForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchSearchNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchSearchDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchSearchOK creates a PatchSearchOK with default headers values
func NewPatchSearchOK() *PatchSearchOK {
	return &PatchSearchOK{}
}

/* PatchSearchOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchSearchOK struct {
	Payload *service_model.V1Search
}

// IsSuccess returns true when this patch search o k response has a 2xx status code
func (o *PatchSearchOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this patch search o k response has a 3xx status code
func (o *PatchSearchOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch search o k response has a 4xx status code
func (o *PatchSearchOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this patch search o k response has a 5xx status code
func (o *PatchSearchOK) IsServerError() bool {
	return false
}

// IsCode returns true when this patch search o k response a status code equal to that given
func (o *PatchSearchOK) IsCode(code int) bool {
	return code == 200
}

func (o *PatchSearchOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchOK  %+v", 200, o.Payload)
}

func (o *PatchSearchOK) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchOK  %+v", 200, o.Payload)
}

func (o *PatchSearchOK) GetPayload() *service_model.V1Search {
	return o.Payload
}

func (o *PatchSearchOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Search)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchSearchNoContent creates a PatchSearchNoContent with default headers values
func NewPatchSearchNoContent() *PatchSearchNoContent {
	return &PatchSearchNoContent{}
}

/* PatchSearchNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchSearchNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this patch search no content response has a 2xx status code
func (o *PatchSearchNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this patch search no content response has a 3xx status code
func (o *PatchSearchNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch search no content response has a 4xx status code
func (o *PatchSearchNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this patch search no content response has a 5xx status code
func (o *PatchSearchNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this patch search no content response a status code equal to that given
func (o *PatchSearchNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *PatchSearchNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchNoContent  %+v", 204, o.Payload)
}

func (o *PatchSearchNoContent) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchNoContent  %+v", 204, o.Payload)
}

func (o *PatchSearchNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchSearchNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchSearchForbidden creates a PatchSearchForbidden with default headers values
func NewPatchSearchForbidden() *PatchSearchForbidden {
	return &PatchSearchForbidden{}
}

/* PatchSearchForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchSearchForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this patch search forbidden response has a 2xx status code
func (o *PatchSearchForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this patch search forbidden response has a 3xx status code
func (o *PatchSearchForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch search forbidden response has a 4xx status code
func (o *PatchSearchForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this patch search forbidden response has a 5xx status code
func (o *PatchSearchForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this patch search forbidden response a status code equal to that given
func (o *PatchSearchForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *PatchSearchForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchForbidden  %+v", 403, o.Payload)
}

func (o *PatchSearchForbidden) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchForbidden  %+v", 403, o.Payload)
}

func (o *PatchSearchForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchSearchForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchSearchNotFound creates a PatchSearchNotFound with default headers values
func NewPatchSearchNotFound() *PatchSearchNotFound {
	return &PatchSearchNotFound{}
}

/* PatchSearchNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchSearchNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this patch search not found response has a 2xx status code
func (o *PatchSearchNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this patch search not found response has a 3xx status code
func (o *PatchSearchNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this patch search not found response has a 4xx status code
func (o *PatchSearchNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this patch search not found response has a 5xx status code
func (o *PatchSearchNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this patch search not found response a status code equal to that given
func (o *PatchSearchNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *PatchSearchNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchNotFound  %+v", 404, o.Payload)
}

func (o *PatchSearchNotFound) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] patchSearchNotFound  %+v", 404, o.Payload)
}

func (o *PatchSearchNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchSearchNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchSearchDefault creates a PatchSearchDefault with default headers values
func NewPatchSearchDefault(code int) *PatchSearchDefault {
	return &PatchSearchDefault{
		_statusCode: code,
	}
}

/* PatchSearchDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchSearchDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch search default response
func (o *PatchSearchDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this patch search default response has a 2xx status code
func (o *PatchSearchDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this patch search default response has a 3xx status code
func (o *PatchSearchDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this patch search default response has a 4xx status code
func (o *PatchSearchDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this patch search default response has a 5xx status code
func (o *PatchSearchDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this patch search default response a status code equal to that given
func (o *PatchSearchDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *PatchSearchDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] PatchSearch default  %+v", o._statusCode, o.Payload)
}

func (o *PatchSearchDefault) String() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/searches/{search.uuid}][%d] PatchSearch default  %+v", o._statusCode, o.Payload)
}

func (o *PatchSearchDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchSearchDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

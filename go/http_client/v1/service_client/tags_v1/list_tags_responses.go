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

package tags_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListTagsReader is a Reader for the ListTags structure.
type ListTagsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListTagsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListTagsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListTagsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListTagsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListTagsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListTagsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListTagsOK creates a ListTagsOK with default headers values
func NewListTagsOK() *ListTagsOK {
	return &ListTagsOK{}
}

/* ListTagsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListTagsOK struct {
	Payload *service_model.V1ListTagsResponse
}

// IsSuccess returns true when this list tags o k response has a 2xx status code
func (o *ListTagsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list tags o k response has a 3xx status code
func (o *ListTagsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list tags o k response has a 4xx status code
func (o *ListTagsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this list tags o k response has a 5xx status code
func (o *ListTagsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this list tags o k response a status code equal to that given
func (o *ListTagsOK) IsCode(code int) bool {
	return code == 200
}

func (o *ListTagsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsOK  %+v", 200, o.Payload)
}

func (o *ListTagsOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsOK  %+v", 200, o.Payload)
}

func (o *ListTagsOK) GetPayload() *service_model.V1ListTagsResponse {
	return o.Payload
}

func (o *ListTagsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListTagsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListTagsNoContent creates a ListTagsNoContent with default headers values
func NewListTagsNoContent() *ListTagsNoContent {
	return &ListTagsNoContent{}
}

/* ListTagsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListTagsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this list tags no content response has a 2xx status code
func (o *ListTagsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list tags no content response has a 3xx status code
func (o *ListTagsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list tags no content response has a 4xx status code
func (o *ListTagsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this list tags no content response has a 5xx status code
func (o *ListTagsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this list tags no content response a status code equal to that given
func (o *ListTagsNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *ListTagsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsNoContent  %+v", 204, o.Payload)
}

func (o *ListTagsNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsNoContent  %+v", 204, o.Payload)
}

func (o *ListTagsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListTagsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListTagsForbidden creates a ListTagsForbidden with default headers values
func NewListTagsForbidden() *ListTagsForbidden {
	return &ListTagsForbidden{}
}

/* ListTagsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListTagsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this list tags forbidden response has a 2xx status code
func (o *ListTagsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list tags forbidden response has a 3xx status code
func (o *ListTagsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list tags forbidden response has a 4xx status code
func (o *ListTagsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this list tags forbidden response has a 5xx status code
func (o *ListTagsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this list tags forbidden response a status code equal to that given
func (o *ListTagsForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *ListTagsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsForbidden  %+v", 403, o.Payload)
}

func (o *ListTagsForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsForbidden  %+v", 403, o.Payload)
}

func (o *ListTagsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListTagsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListTagsNotFound creates a ListTagsNotFound with default headers values
func NewListTagsNotFound() *ListTagsNotFound {
	return &ListTagsNotFound{}
}

/* ListTagsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListTagsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this list tags not found response has a 2xx status code
func (o *ListTagsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list tags not found response has a 3xx status code
func (o *ListTagsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list tags not found response has a 4xx status code
func (o *ListTagsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this list tags not found response has a 5xx status code
func (o *ListTagsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this list tags not found response a status code equal to that given
func (o *ListTagsNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *ListTagsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsNotFound  %+v", 404, o.Payload)
}

func (o *ListTagsNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] listTagsNotFound  %+v", 404, o.Payload)
}

func (o *ListTagsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListTagsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListTagsDefault creates a ListTagsDefault with default headers values
func NewListTagsDefault(code int) *ListTagsDefault {
	return &ListTagsDefault{
		_statusCode: code,
	}
}

/* ListTagsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListTagsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list tags default response
func (o *ListTagsDefault) Code() int {
	return o._statusCode
}

// IsSuccess returns true when this list tags default response has a 2xx status code
func (o *ListTagsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this list tags default response has a 3xx status code
func (o *ListTagsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this list tags default response has a 4xx status code
func (o *ListTagsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this list tags default response has a 5xx status code
func (o *ListTagsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this list tags default response a status code equal to that given
func (o *ListTagsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

func (o *ListTagsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] ListTags default  %+v", o._statusCode, o.Payload)
}

func (o *ListTagsDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/tags][%d] ListTags default  %+v", o._statusCode, o.Payload)
}

func (o *ListTagsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListTagsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

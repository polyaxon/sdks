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

package versions_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetCompatibilityReader is a Reader for the GetCompatibility structure.
type GetCompatibilityReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetCompatibilityReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetCompatibilityOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetCompatibilityNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetCompatibilityForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetCompatibilityNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetCompatibilityDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetCompatibilityOK creates a GetCompatibilityOK with default headers values
func NewGetCompatibilityOK() *GetCompatibilityOK {
	return &GetCompatibilityOK{}
}

/* GetCompatibilityOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetCompatibilityOK struct {
	Payload *service_model.V1Compatibility
}

func (o *GetCompatibilityOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/compatibility/{uuid}/{version}/{service}][%d] getCompatibilityOK  %+v", 200, o.Payload)
}
func (o *GetCompatibilityOK) GetPayload() *service_model.V1Compatibility {
	return o.Payload
}

func (o *GetCompatibilityOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Compatibility)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetCompatibilityNoContent creates a GetCompatibilityNoContent with default headers values
func NewGetCompatibilityNoContent() *GetCompatibilityNoContent {
	return &GetCompatibilityNoContent{}
}

/* GetCompatibilityNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetCompatibilityNoContent struct {
	Payload interface{}
}

func (o *GetCompatibilityNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/compatibility/{uuid}/{version}/{service}][%d] getCompatibilityNoContent  %+v", 204, o.Payload)
}
func (o *GetCompatibilityNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetCompatibilityNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetCompatibilityForbidden creates a GetCompatibilityForbidden with default headers values
func NewGetCompatibilityForbidden() *GetCompatibilityForbidden {
	return &GetCompatibilityForbidden{}
}

/* GetCompatibilityForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetCompatibilityForbidden struct {
	Payload interface{}
}

func (o *GetCompatibilityForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/compatibility/{uuid}/{version}/{service}][%d] getCompatibilityForbidden  %+v", 403, o.Payload)
}
func (o *GetCompatibilityForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetCompatibilityForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetCompatibilityNotFound creates a GetCompatibilityNotFound with default headers values
func NewGetCompatibilityNotFound() *GetCompatibilityNotFound {
	return &GetCompatibilityNotFound{}
}

/* GetCompatibilityNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetCompatibilityNotFound struct {
	Payload interface{}
}

func (o *GetCompatibilityNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/compatibility/{uuid}/{version}/{service}][%d] getCompatibilityNotFound  %+v", 404, o.Payload)
}
func (o *GetCompatibilityNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetCompatibilityNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetCompatibilityDefault creates a GetCompatibilityDefault with default headers values
func NewGetCompatibilityDefault(code int) *GetCompatibilityDefault {
	return &GetCompatibilityDefault{
		_statusCode: code,
	}
}

/* GetCompatibilityDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetCompatibilityDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get compatibility default response
func (o *GetCompatibilityDefault) Code() int {
	return o._statusCode
}

func (o *GetCompatibilityDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/compatibility/{uuid}/{version}/{service}][%d] GetCompatibility default  %+v", o._statusCode, o.Payload)
}
func (o *GetCompatibilityDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetCompatibilityDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

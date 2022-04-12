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

// GetLogHandlerReader is a Reader for the GetLogHandler structure.
type GetLogHandlerReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetLogHandlerReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetLogHandlerOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetLogHandlerNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetLogHandlerForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetLogHandlerNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetLogHandlerDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetLogHandlerOK creates a GetLogHandlerOK with default headers values
func NewGetLogHandlerOK() *GetLogHandlerOK {
	return &GetLogHandlerOK{}
}

/* GetLogHandlerOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetLogHandlerOK struct {
	Payload *service_model.V1LogHandler
}

func (o *GetLogHandlerOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/log_handler][%d] getLogHandlerOK  %+v", 200, o.Payload)
}
func (o *GetLogHandlerOK) GetPayload() *service_model.V1LogHandler {
	return o.Payload
}

func (o *GetLogHandlerOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1LogHandler)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetLogHandlerNoContent creates a GetLogHandlerNoContent with default headers values
func NewGetLogHandlerNoContent() *GetLogHandlerNoContent {
	return &GetLogHandlerNoContent{}
}

/* GetLogHandlerNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetLogHandlerNoContent struct {
	Payload interface{}
}

func (o *GetLogHandlerNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/log_handler][%d] getLogHandlerNoContent  %+v", 204, o.Payload)
}
func (o *GetLogHandlerNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetLogHandlerNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetLogHandlerForbidden creates a GetLogHandlerForbidden with default headers values
func NewGetLogHandlerForbidden() *GetLogHandlerForbidden {
	return &GetLogHandlerForbidden{}
}

/* GetLogHandlerForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetLogHandlerForbidden struct {
	Payload interface{}
}

func (o *GetLogHandlerForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/log_handler][%d] getLogHandlerForbidden  %+v", 403, o.Payload)
}
func (o *GetLogHandlerForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetLogHandlerForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetLogHandlerNotFound creates a GetLogHandlerNotFound with default headers values
func NewGetLogHandlerNotFound() *GetLogHandlerNotFound {
	return &GetLogHandlerNotFound{}
}

/* GetLogHandlerNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetLogHandlerNotFound struct {
	Payload interface{}
}

func (o *GetLogHandlerNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/log_handler][%d] getLogHandlerNotFound  %+v", 404, o.Payload)
}
func (o *GetLogHandlerNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetLogHandlerNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetLogHandlerDefault creates a GetLogHandlerDefault with default headers values
func NewGetLogHandlerDefault(code int) *GetLogHandlerDefault {
	return &GetLogHandlerDefault{
		_statusCode: code,
	}
}

/* GetLogHandlerDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetLogHandlerDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get log handler default response
func (o *GetLogHandlerDefault) Code() int {
	return o._statusCode
}

func (o *GetLogHandlerDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/log_handler][%d] GetLogHandler default  %+v", o._statusCode, o.Payload)
}
func (o *GetLogHandlerDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetLogHandlerDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

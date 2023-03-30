// Copyright 2018-2023 Polyaxon, Inc.
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

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// TransferVersionReader is a Reader for the TransferVersion structure.
type TransferVersionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *TransferVersionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewTransferVersionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewTransferVersionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewTransferVersionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewTransferVersionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewTransferVersionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewTransferVersionOK creates a TransferVersionOK with default headers values
func NewTransferVersionOK() *TransferVersionOK {
	return &TransferVersionOK{}
}

/*
TransferVersionOK describes a response with status code 200, with default header values.

A successful response.
*/
type TransferVersionOK struct {
}

// IsSuccess returns true when this transfer version o k response has a 2xx status code
func (o *TransferVersionOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this transfer version o k response has a 3xx status code
func (o *TransferVersionOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this transfer version o k response has a 4xx status code
func (o *TransferVersionOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this transfer version o k response has a 5xx status code
func (o *TransferVersionOK) IsServerError() bool {
	return false
}

// IsCode returns true when this transfer version o k response a status code equal to that given
func (o *TransferVersionOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the transfer version o k response
func (o *TransferVersionOK) Code() int {
	return 200
}

func (o *TransferVersionOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionOK ", 200)
}

func (o *TransferVersionOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionOK ", 200)
}

func (o *TransferVersionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewTransferVersionNoContent creates a TransferVersionNoContent with default headers values
func NewTransferVersionNoContent() *TransferVersionNoContent {
	return &TransferVersionNoContent{}
}

/*
TransferVersionNoContent describes a response with status code 204, with default header values.

No content.
*/
type TransferVersionNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this transfer version no content response has a 2xx status code
func (o *TransferVersionNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this transfer version no content response has a 3xx status code
func (o *TransferVersionNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this transfer version no content response has a 4xx status code
func (o *TransferVersionNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this transfer version no content response has a 5xx status code
func (o *TransferVersionNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this transfer version no content response a status code equal to that given
func (o *TransferVersionNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the transfer version no content response
func (o *TransferVersionNoContent) Code() int {
	return 204
}

func (o *TransferVersionNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionNoContent  %+v", 204, o.Payload)
}

func (o *TransferVersionNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionNoContent  %+v", 204, o.Payload)
}

func (o *TransferVersionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferVersionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferVersionForbidden creates a TransferVersionForbidden with default headers values
func NewTransferVersionForbidden() *TransferVersionForbidden {
	return &TransferVersionForbidden{}
}

/*
TransferVersionForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type TransferVersionForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this transfer version forbidden response has a 2xx status code
func (o *TransferVersionForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this transfer version forbidden response has a 3xx status code
func (o *TransferVersionForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this transfer version forbidden response has a 4xx status code
func (o *TransferVersionForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this transfer version forbidden response has a 5xx status code
func (o *TransferVersionForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this transfer version forbidden response a status code equal to that given
func (o *TransferVersionForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the transfer version forbidden response
func (o *TransferVersionForbidden) Code() int {
	return 403
}

func (o *TransferVersionForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionForbidden  %+v", 403, o.Payload)
}

func (o *TransferVersionForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionForbidden  %+v", 403, o.Payload)
}

func (o *TransferVersionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferVersionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferVersionNotFound creates a TransferVersionNotFound with default headers values
func NewTransferVersionNotFound() *TransferVersionNotFound {
	return &TransferVersionNotFound{}
}

/*
TransferVersionNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type TransferVersionNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this transfer version not found response has a 2xx status code
func (o *TransferVersionNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this transfer version not found response has a 3xx status code
func (o *TransferVersionNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this transfer version not found response has a 4xx status code
func (o *TransferVersionNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this transfer version not found response has a 5xx status code
func (o *TransferVersionNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this transfer version not found response a status code equal to that given
func (o *TransferVersionNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the transfer version not found response
func (o *TransferVersionNotFound) Code() int {
	return 404
}

func (o *TransferVersionNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionNotFound  %+v", 404, o.Payload)
}

func (o *TransferVersionNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] transferVersionNotFound  %+v", 404, o.Payload)
}

func (o *TransferVersionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferVersionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferVersionDefault creates a TransferVersionDefault with default headers values
func NewTransferVersionDefault(code int) *TransferVersionDefault {
	return &TransferVersionDefault{
		_statusCode: code,
	}
}

/*
TransferVersionDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type TransferVersionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this transfer version default response has a 2xx status code
func (o *TransferVersionDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this transfer version default response has a 3xx status code
func (o *TransferVersionDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this transfer version default response has a 4xx status code
func (o *TransferVersionDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this transfer version default response has a 5xx status code
func (o *TransferVersionDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this transfer version default response a status code equal to that given
func (o *TransferVersionDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the transfer version default response
func (o *TransferVersionDefault) Code() int {
	return o._statusCode
}

func (o *TransferVersionDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] TransferVersion default  %+v", o._statusCode, o.Payload)
}

func (o *TransferVersionDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}/transfer][%d] TransferVersion default  %+v", o._statusCode, o.Payload)
}

func (o *TransferVersionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *TransferVersionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

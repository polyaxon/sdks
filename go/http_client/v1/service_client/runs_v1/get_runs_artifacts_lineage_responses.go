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

// GetRunsArtifactsLineageReader is a Reader for the GetRunsArtifactsLineage structure.
type GetRunsArtifactsLineageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunsArtifactsLineageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunsArtifactsLineageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunsArtifactsLineageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunsArtifactsLineageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunsArtifactsLineageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunsArtifactsLineageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunsArtifactsLineageOK creates a GetRunsArtifactsLineageOK with default headers values
func NewGetRunsArtifactsLineageOK() *GetRunsArtifactsLineageOK {
	return &GetRunsArtifactsLineageOK{}
}

/*
GetRunsArtifactsLineageOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunsArtifactsLineageOK struct {
	Payload *service_model.V1ListRunArtifactsResponse
}

// IsSuccess returns true when this get runs artifacts lineage o k response has a 2xx status code
func (o *GetRunsArtifactsLineageOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get runs artifacts lineage o k response has a 3xx status code
func (o *GetRunsArtifactsLineageOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get runs artifacts lineage o k response has a 4xx status code
func (o *GetRunsArtifactsLineageOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get runs artifacts lineage o k response has a 5xx status code
func (o *GetRunsArtifactsLineageOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get runs artifacts lineage o k response a status code equal to that given
func (o *GetRunsArtifactsLineageOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get runs artifacts lineage o k response
func (o *GetRunsArtifactsLineageOK) Code() int {
	return 200
}

func (o *GetRunsArtifactsLineageOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageOK  %+v", 200, o.Payload)
}

func (o *GetRunsArtifactsLineageOK) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageOK  %+v", 200, o.Payload)
}

func (o *GetRunsArtifactsLineageOK) GetPayload() *service_model.V1ListRunArtifactsResponse {
	return o.Payload
}

func (o *GetRunsArtifactsLineageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListRunArtifactsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageNoContent creates a GetRunsArtifactsLineageNoContent with default headers values
func NewGetRunsArtifactsLineageNoContent() *GetRunsArtifactsLineageNoContent {
	return &GetRunsArtifactsLineageNoContent{}
}

/*
GetRunsArtifactsLineageNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunsArtifactsLineageNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get runs artifacts lineage no content response has a 2xx status code
func (o *GetRunsArtifactsLineageNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get runs artifacts lineage no content response has a 3xx status code
func (o *GetRunsArtifactsLineageNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get runs artifacts lineage no content response has a 4xx status code
func (o *GetRunsArtifactsLineageNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get runs artifacts lineage no content response has a 5xx status code
func (o *GetRunsArtifactsLineageNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get runs artifacts lineage no content response a status code equal to that given
func (o *GetRunsArtifactsLineageNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get runs artifacts lineage no content response
func (o *GetRunsArtifactsLineageNoContent) Code() int {
	return 204
}

func (o *GetRunsArtifactsLineageNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageNoContent  %+v", 204, o.Payload)
}

func (o *GetRunsArtifactsLineageNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageNoContent  %+v", 204, o.Payload)
}

func (o *GetRunsArtifactsLineageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageForbidden creates a GetRunsArtifactsLineageForbidden with default headers values
func NewGetRunsArtifactsLineageForbidden() *GetRunsArtifactsLineageForbidden {
	return &GetRunsArtifactsLineageForbidden{}
}

/*
GetRunsArtifactsLineageForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunsArtifactsLineageForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get runs artifacts lineage forbidden response has a 2xx status code
func (o *GetRunsArtifactsLineageForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get runs artifacts lineage forbidden response has a 3xx status code
func (o *GetRunsArtifactsLineageForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get runs artifacts lineage forbidden response has a 4xx status code
func (o *GetRunsArtifactsLineageForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get runs artifacts lineage forbidden response has a 5xx status code
func (o *GetRunsArtifactsLineageForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get runs artifacts lineage forbidden response a status code equal to that given
func (o *GetRunsArtifactsLineageForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get runs artifacts lineage forbidden response
func (o *GetRunsArtifactsLineageForbidden) Code() int {
	return 403
}

func (o *GetRunsArtifactsLineageForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageForbidden  %+v", 403, o.Payload)
}

func (o *GetRunsArtifactsLineageForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageForbidden  %+v", 403, o.Payload)
}

func (o *GetRunsArtifactsLineageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageNotFound creates a GetRunsArtifactsLineageNotFound with default headers values
func NewGetRunsArtifactsLineageNotFound() *GetRunsArtifactsLineageNotFound {
	return &GetRunsArtifactsLineageNotFound{}
}

/*
GetRunsArtifactsLineageNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunsArtifactsLineageNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get runs artifacts lineage not found response has a 2xx status code
func (o *GetRunsArtifactsLineageNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get runs artifacts lineage not found response has a 3xx status code
func (o *GetRunsArtifactsLineageNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get runs artifacts lineage not found response has a 4xx status code
func (o *GetRunsArtifactsLineageNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get runs artifacts lineage not found response has a 5xx status code
func (o *GetRunsArtifactsLineageNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get runs artifacts lineage not found response a status code equal to that given
func (o *GetRunsArtifactsLineageNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get runs artifacts lineage not found response
func (o *GetRunsArtifactsLineageNotFound) Code() int {
	return 404
}

func (o *GetRunsArtifactsLineageNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageNotFound  %+v", 404, o.Payload)
}

func (o *GetRunsArtifactsLineageNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] getRunsArtifactsLineageNotFound  %+v", 404, o.Payload)
}

func (o *GetRunsArtifactsLineageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageDefault creates a GetRunsArtifactsLineageDefault with default headers values
func NewGetRunsArtifactsLineageDefault(code int) *GetRunsArtifactsLineageDefault {
	return &GetRunsArtifactsLineageDefault{
		_statusCode: code,
	}
}

/*
GetRunsArtifactsLineageDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunsArtifactsLineageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get runs artifacts lineage default response has a 2xx status code
func (o *GetRunsArtifactsLineageDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get runs artifacts lineage default response has a 3xx status code
func (o *GetRunsArtifactsLineageDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get runs artifacts lineage default response has a 4xx status code
func (o *GetRunsArtifactsLineageDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get runs artifacts lineage default response has a 5xx status code
func (o *GetRunsArtifactsLineageDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get runs artifacts lineage default response a status code equal to that given
func (o *GetRunsArtifactsLineageDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get runs artifacts lineage default response
func (o *GetRunsArtifactsLineageDefault) Code() int {
	return o._statusCode
}

func (o *GetRunsArtifactsLineageDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] GetRunsArtifactsLineage default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunsArtifactsLineageDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/runs/lineage/artifacts][%d] GetRunsArtifactsLineage default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunsArtifactsLineageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunsArtifactsLineageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

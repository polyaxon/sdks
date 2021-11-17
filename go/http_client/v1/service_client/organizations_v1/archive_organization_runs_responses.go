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

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ArchiveOrganizationRunsReader is a Reader for the ArchiveOrganizationRuns structure.
type ArchiveOrganizationRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ArchiveOrganizationRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewArchiveOrganizationRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewArchiveOrganizationRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewArchiveOrganizationRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewArchiveOrganizationRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewArchiveOrganizationRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewArchiveOrganizationRunsOK creates a ArchiveOrganizationRunsOK with default headers values
func NewArchiveOrganizationRunsOK() *ArchiveOrganizationRunsOK {
	return &ArchiveOrganizationRunsOK{}
}

/* ArchiveOrganizationRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ArchiveOrganizationRunsOK struct {
}

func (o *ArchiveOrganizationRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/archive][%d] archiveOrganizationRunsOK ", 200)
}

func (o *ArchiveOrganizationRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewArchiveOrganizationRunsNoContent creates a ArchiveOrganizationRunsNoContent with default headers values
func NewArchiveOrganizationRunsNoContent() *ArchiveOrganizationRunsNoContent {
	return &ArchiveOrganizationRunsNoContent{}
}

/* ArchiveOrganizationRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ArchiveOrganizationRunsNoContent struct {
	Payload interface{}
}

func (o *ArchiveOrganizationRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/archive][%d] archiveOrganizationRunsNoContent  %+v", 204, o.Payload)
}
func (o *ArchiveOrganizationRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveOrganizationRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveOrganizationRunsForbidden creates a ArchiveOrganizationRunsForbidden with default headers values
func NewArchiveOrganizationRunsForbidden() *ArchiveOrganizationRunsForbidden {
	return &ArchiveOrganizationRunsForbidden{}
}

/* ArchiveOrganizationRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ArchiveOrganizationRunsForbidden struct {
	Payload interface{}
}

func (o *ArchiveOrganizationRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/archive][%d] archiveOrganizationRunsForbidden  %+v", 403, o.Payload)
}
func (o *ArchiveOrganizationRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveOrganizationRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveOrganizationRunsNotFound creates a ArchiveOrganizationRunsNotFound with default headers values
func NewArchiveOrganizationRunsNotFound() *ArchiveOrganizationRunsNotFound {
	return &ArchiveOrganizationRunsNotFound{}
}

/* ArchiveOrganizationRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ArchiveOrganizationRunsNotFound struct {
	Payload interface{}
}

func (o *ArchiveOrganizationRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/archive][%d] archiveOrganizationRunsNotFound  %+v", 404, o.Payload)
}
func (o *ArchiveOrganizationRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveOrganizationRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveOrganizationRunsDefault creates a ArchiveOrganizationRunsDefault with default headers values
func NewArchiveOrganizationRunsDefault(code int) *ArchiveOrganizationRunsDefault {
	return &ArchiveOrganizationRunsDefault{
		_statusCode: code,
	}
}

/* ArchiveOrganizationRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ArchiveOrganizationRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the archive organization runs default response
func (o *ArchiveOrganizationRunsDefault) Code() int {
	return o._statusCode
}

func (o *ArchiveOrganizationRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/archive][%d] ArchiveOrganizationRuns default  %+v", o._statusCode, o.Payload)
}
func (o *ArchiveOrganizationRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ArchiveOrganizationRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
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

// CreateRunArtifactsLineageReader is a Reader for the CreateRunArtifactsLineage structure.
type CreateRunArtifactsLineageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateRunArtifactsLineageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateRunArtifactsLineageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateRunArtifactsLineageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateRunArtifactsLineageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateRunArtifactsLineageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateRunArtifactsLineageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateRunArtifactsLineageOK creates a CreateRunArtifactsLineageOK with default headers values
func NewCreateRunArtifactsLineageOK() *CreateRunArtifactsLineageOK {
	return &CreateRunArtifactsLineageOK{}
}

/* CreateRunArtifactsLineageOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateRunArtifactsLineageOK struct {
}

func (o *CreateRunArtifactsLineageOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts][%d] createRunArtifactsLineageOK ", 200)
}

func (o *CreateRunArtifactsLineageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewCreateRunArtifactsLineageNoContent creates a CreateRunArtifactsLineageNoContent with default headers values
func NewCreateRunArtifactsLineageNoContent() *CreateRunArtifactsLineageNoContent {
	return &CreateRunArtifactsLineageNoContent{}
}

/* CreateRunArtifactsLineageNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateRunArtifactsLineageNoContent struct {
	Payload interface{}
}

func (o *CreateRunArtifactsLineageNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts][%d] createRunArtifactsLineageNoContent  %+v", 204, o.Payload)
}
func (o *CreateRunArtifactsLineageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateRunArtifactsLineageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateRunArtifactsLineageForbidden creates a CreateRunArtifactsLineageForbidden with default headers values
func NewCreateRunArtifactsLineageForbidden() *CreateRunArtifactsLineageForbidden {
	return &CreateRunArtifactsLineageForbidden{}
}

/* CreateRunArtifactsLineageForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateRunArtifactsLineageForbidden struct {
	Payload interface{}
}

func (o *CreateRunArtifactsLineageForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts][%d] createRunArtifactsLineageForbidden  %+v", 403, o.Payload)
}
func (o *CreateRunArtifactsLineageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateRunArtifactsLineageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateRunArtifactsLineageNotFound creates a CreateRunArtifactsLineageNotFound with default headers values
func NewCreateRunArtifactsLineageNotFound() *CreateRunArtifactsLineageNotFound {
	return &CreateRunArtifactsLineageNotFound{}
}

/* CreateRunArtifactsLineageNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateRunArtifactsLineageNotFound struct {
	Payload interface{}
}

func (o *CreateRunArtifactsLineageNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts][%d] createRunArtifactsLineageNotFound  %+v", 404, o.Payload)
}
func (o *CreateRunArtifactsLineageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateRunArtifactsLineageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateRunArtifactsLineageDefault creates a CreateRunArtifactsLineageDefault with default headers values
func NewCreateRunArtifactsLineageDefault(code int) *CreateRunArtifactsLineageDefault {
	return &CreateRunArtifactsLineageDefault{
		_statusCode: code,
	}
}

/* CreateRunArtifactsLineageDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateRunArtifactsLineageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create run artifacts lineage default response
func (o *CreateRunArtifactsLineageDefault) Code() int {
	return o._statusCode
}

func (o *CreateRunArtifactsLineageDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/artifacts][%d] CreateRunArtifactsLineage default  %+v", o._statusCode, o.Payload)
}
func (o *CreateRunArtifactsLineageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateRunArtifactsLineageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

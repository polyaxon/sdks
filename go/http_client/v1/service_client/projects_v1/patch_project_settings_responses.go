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

// PatchProjectSettingsReader is a Reader for the PatchProjectSettings structure.
type PatchProjectSettingsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchProjectSettingsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchProjectSettingsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchProjectSettingsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchProjectSettingsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchProjectSettingsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchProjectSettingsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchProjectSettingsOK creates a PatchProjectSettingsOK with default headers values
func NewPatchProjectSettingsOK() *PatchProjectSettingsOK {
	return &PatchProjectSettingsOK{}
}

/* PatchProjectSettingsOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchProjectSettingsOK struct {
	Payload *service_model.V1ProjectSettings
}

func (o *PatchProjectSettingsOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/settings][%d] patchProjectSettingsOK  %+v", 200, o.Payload)
}
func (o *PatchProjectSettingsOK) GetPayload() *service_model.V1ProjectSettings {
	return o.Payload
}

func (o *PatchProjectSettingsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ProjectSettings)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchProjectSettingsNoContent creates a PatchProjectSettingsNoContent with default headers values
func NewPatchProjectSettingsNoContent() *PatchProjectSettingsNoContent {
	return &PatchProjectSettingsNoContent{}
}

/* PatchProjectSettingsNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchProjectSettingsNoContent struct {
	Payload interface{}
}

func (o *PatchProjectSettingsNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/settings][%d] patchProjectSettingsNoContent  %+v", 204, o.Payload)
}
func (o *PatchProjectSettingsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchProjectSettingsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchProjectSettingsForbidden creates a PatchProjectSettingsForbidden with default headers values
func NewPatchProjectSettingsForbidden() *PatchProjectSettingsForbidden {
	return &PatchProjectSettingsForbidden{}
}

/* PatchProjectSettingsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchProjectSettingsForbidden struct {
	Payload interface{}
}

func (o *PatchProjectSettingsForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/settings][%d] patchProjectSettingsForbidden  %+v", 403, o.Payload)
}
func (o *PatchProjectSettingsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchProjectSettingsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchProjectSettingsNotFound creates a PatchProjectSettingsNotFound with default headers values
func NewPatchProjectSettingsNotFound() *PatchProjectSettingsNotFound {
	return &PatchProjectSettingsNotFound{}
}

/* PatchProjectSettingsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchProjectSettingsNotFound struct {
	Payload interface{}
}

func (o *PatchProjectSettingsNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/settings][%d] patchProjectSettingsNotFound  %+v", 404, o.Payload)
}
func (o *PatchProjectSettingsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchProjectSettingsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchProjectSettingsDefault creates a PatchProjectSettingsDefault with default headers values
func NewPatchProjectSettingsDefault(code int) *PatchProjectSettingsDefault {
	return &PatchProjectSettingsDefault{
		_statusCode: code,
	}
}

/* PatchProjectSettingsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchProjectSettingsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch project settings default response
func (o *PatchProjectSettingsDefault) Code() int {
	return o._statusCode
}

func (o *PatchProjectSettingsDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/settings][%d] PatchProjectSettings default  %+v", o._statusCode, o.Payload)
}
func (o *PatchProjectSettingsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchProjectSettingsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

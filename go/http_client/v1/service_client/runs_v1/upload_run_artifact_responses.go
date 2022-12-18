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
)

// UploadRunArtifactReader is a Reader for the UploadRunArtifact structure.
type UploadRunArtifactReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UploadRunArtifactReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUploadRunArtifactOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUploadRunArtifactNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUploadRunArtifactForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUploadRunArtifactNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewUploadRunArtifactOK creates a UploadRunArtifactOK with default headers values
func NewUploadRunArtifactOK() *UploadRunArtifactOK {
	return &UploadRunArtifactOK{}
}

/* UploadRunArtifactOK describes a response with status code 200, with default header values.

A successful response.
*/
type UploadRunArtifactOK struct {
}

// IsSuccess returns true when this upload run artifact o k response has a 2xx status code
func (o *UploadRunArtifactOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this upload run artifact o k response has a 3xx status code
func (o *UploadRunArtifactOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this upload run artifact o k response has a 4xx status code
func (o *UploadRunArtifactOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this upload run artifact o k response has a 5xx status code
func (o *UploadRunArtifactOK) IsServerError() bool {
	return false
}

// IsCode returns true when this upload run artifact o k response a status code equal to that given
func (o *UploadRunArtifactOK) IsCode(code int) bool {
	return code == 200
}

func (o *UploadRunArtifactOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactOK ", 200)
}

func (o *UploadRunArtifactOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactOK ", 200)
}

func (o *UploadRunArtifactOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewUploadRunArtifactNoContent creates a UploadRunArtifactNoContent with default headers values
func NewUploadRunArtifactNoContent() *UploadRunArtifactNoContent {
	return &UploadRunArtifactNoContent{}
}

/* UploadRunArtifactNoContent describes a response with status code 204, with default header values.

No content.
*/
type UploadRunArtifactNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this upload run artifact no content response has a 2xx status code
func (o *UploadRunArtifactNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this upload run artifact no content response has a 3xx status code
func (o *UploadRunArtifactNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this upload run artifact no content response has a 4xx status code
func (o *UploadRunArtifactNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this upload run artifact no content response has a 5xx status code
func (o *UploadRunArtifactNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this upload run artifact no content response a status code equal to that given
func (o *UploadRunArtifactNoContent) IsCode(code int) bool {
	return code == 204
}

func (o *UploadRunArtifactNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactNoContent  %+v", 204, o.Payload)
}

func (o *UploadRunArtifactNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactNoContent  %+v", 204, o.Payload)
}

func (o *UploadRunArtifactNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UploadRunArtifactNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUploadRunArtifactForbidden creates a UploadRunArtifactForbidden with default headers values
func NewUploadRunArtifactForbidden() *UploadRunArtifactForbidden {
	return &UploadRunArtifactForbidden{}
}

/* UploadRunArtifactForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UploadRunArtifactForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this upload run artifact forbidden response has a 2xx status code
func (o *UploadRunArtifactForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this upload run artifact forbidden response has a 3xx status code
func (o *UploadRunArtifactForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this upload run artifact forbidden response has a 4xx status code
func (o *UploadRunArtifactForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this upload run artifact forbidden response has a 5xx status code
func (o *UploadRunArtifactForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this upload run artifact forbidden response a status code equal to that given
func (o *UploadRunArtifactForbidden) IsCode(code int) bool {
	return code == 403
}

func (o *UploadRunArtifactForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactForbidden  %+v", 403, o.Payload)
}

func (o *UploadRunArtifactForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactForbidden  %+v", 403, o.Payload)
}

func (o *UploadRunArtifactForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UploadRunArtifactForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUploadRunArtifactNotFound creates a UploadRunArtifactNotFound with default headers values
func NewUploadRunArtifactNotFound() *UploadRunArtifactNotFound {
	return &UploadRunArtifactNotFound{}
}

/* UploadRunArtifactNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UploadRunArtifactNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this upload run artifact not found response has a 2xx status code
func (o *UploadRunArtifactNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this upload run artifact not found response has a 3xx status code
func (o *UploadRunArtifactNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this upload run artifact not found response has a 4xx status code
func (o *UploadRunArtifactNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this upload run artifact not found response has a 5xx status code
func (o *UploadRunArtifactNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this upload run artifact not found response a status code equal to that given
func (o *UploadRunArtifactNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *UploadRunArtifactNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactNotFound  %+v", 404, o.Payload)
}

func (o *UploadRunArtifactNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/artifacts/upload][%d] uploadRunArtifactNotFound  %+v", 404, o.Payload)
}

func (o *UploadRunArtifactNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UploadRunArtifactNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

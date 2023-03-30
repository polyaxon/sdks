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

package service_accounts_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListServiceAccountTokensReader is a Reader for the ListServiceAccountTokens structure.
type ListServiceAccountTokensReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListServiceAccountTokensReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListServiceAccountTokensOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListServiceAccountTokensNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListServiceAccountTokensForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListServiceAccountTokensNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListServiceAccountTokensDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListServiceAccountTokensOK creates a ListServiceAccountTokensOK with default headers values
func NewListServiceAccountTokensOK() *ListServiceAccountTokensOK {
	return &ListServiceAccountTokensOK{}
}

/*
ListServiceAccountTokensOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListServiceAccountTokensOK struct {
	Payload *service_model.V1ListTokenResponse
}

// IsSuccess returns true when this list service account tokens o k response has a 2xx status code
func (o *ListServiceAccountTokensOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list service account tokens o k response has a 3xx status code
func (o *ListServiceAccountTokensOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list service account tokens o k response has a 4xx status code
func (o *ListServiceAccountTokensOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this list service account tokens o k response has a 5xx status code
func (o *ListServiceAccountTokensOK) IsServerError() bool {
	return false
}

// IsCode returns true when this list service account tokens o k response a status code equal to that given
func (o *ListServiceAccountTokensOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the list service account tokens o k response
func (o *ListServiceAccountTokensOK) Code() int {
	return 200
}

func (o *ListServiceAccountTokensOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensOK  %+v", 200, o.Payload)
}

func (o *ListServiceAccountTokensOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensOK  %+v", 200, o.Payload)
}

func (o *ListServiceAccountTokensOK) GetPayload() *service_model.V1ListTokenResponse {
	return o.Payload
}

func (o *ListServiceAccountTokensOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListTokenResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountTokensNoContent creates a ListServiceAccountTokensNoContent with default headers values
func NewListServiceAccountTokensNoContent() *ListServiceAccountTokensNoContent {
	return &ListServiceAccountTokensNoContent{}
}

/*
ListServiceAccountTokensNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListServiceAccountTokensNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this list service account tokens no content response has a 2xx status code
func (o *ListServiceAccountTokensNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this list service account tokens no content response has a 3xx status code
func (o *ListServiceAccountTokensNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list service account tokens no content response has a 4xx status code
func (o *ListServiceAccountTokensNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this list service account tokens no content response has a 5xx status code
func (o *ListServiceAccountTokensNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this list service account tokens no content response a status code equal to that given
func (o *ListServiceAccountTokensNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the list service account tokens no content response
func (o *ListServiceAccountTokensNoContent) Code() int {
	return 204
}

func (o *ListServiceAccountTokensNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensNoContent  %+v", 204, o.Payload)
}

func (o *ListServiceAccountTokensNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensNoContent  %+v", 204, o.Payload)
}

func (o *ListServiceAccountTokensNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountTokensNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountTokensForbidden creates a ListServiceAccountTokensForbidden with default headers values
func NewListServiceAccountTokensForbidden() *ListServiceAccountTokensForbidden {
	return &ListServiceAccountTokensForbidden{}
}

/*
ListServiceAccountTokensForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListServiceAccountTokensForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this list service account tokens forbidden response has a 2xx status code
func (o *ListServiceAccountTokensForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list service account tokens forbidden response has a 3xx status code
func (o *ListServiceAccountTokensForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list service account tokens forbidden response has a 4xx status code
func (o *ListServiceAccountTokensForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this list service account tokens forbidden response has a 5xx status code
func (o *ListServiceAccountTokensForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this list service account tokens forbidden response a status code equal to that given
func (o *ListServiceAccountTokensForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the list service account tokens forbidden response
func (o *ListServiceAccountTokensForbidden) Code() int {
	return 403
}

func (o *ListServiceAccountTokensForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensForbidden  %+v", 403, o.Payload)
}

func (o *ListServiceAccountTokensForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensForbidden  %+v", 403, o.Payload)
}

func (o *ListServiceAccountTokensForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountTokensForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountTokensNotFound creates a ListServiceAccountTokensNotFound with default headers values
func NewListServiceAccountTokensNotFound() *ListServiceAccountTokensNotFound {
	return &ListServiceAccountTokensNotFound{}
}

/*
ListServiceAccountTokensNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListServiceAccountTokensNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this list service account tokens not found response has a 2xx status code
func (o *ListServiceAccountTokensNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this list service account tokens not found response has a 3xx status code
func (o *ListServiceAccountTokensNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this list service account tokens not found response has a 4xx status code
func (o *ListServiceAccountTokensNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this list service account tokens not found response has a 5xx status code
func (o *ListServiceAccountTokensNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this list service account tokens not found response a status code equal to that given
func (o *ListServiceAccountTokensNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the list service account tokens not found response
func (o *ListServiceAccountTokensNotFound) Code() int {
	return 404
}

func (o *ListServiceAccountTokensNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensNotFound  %+v", 404, o.Payload)
}

func (o *ListServiceAccountTokensNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] listServiceAccountTokensNotFound  %+v", 404, o.Payload)
}

func (o *ListServiceAccountTokensNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListServiceAccountTokensNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListServiceAccountTokensDefault creates a ListServiceAccountTokensDefault with default headers values
func NewListServiceAccountTokensDefault(code int) *ListServiceAccountTokensDefault {
	return &ListServiceAccountTokensDefault{
		_statusCode: code,
	}
}

/*
ListServiceAccountTokensDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListServiceAccountTokensDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this list service account tokens default response has a 2xx status code
func (o *ListServiceAccountTokensDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this list service account tokens default response has a 3xx status code
func (o *ListServiceAccountTokensDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this list service account tokens default response has a 4xx status code
func (o *ListServiceAccountTokensDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this list service account tokens default response has a 5xx status code
func (o *ListServiceAccountTokensDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this list service account tokens default response a status code equal to that given
func (o *ListServiceAccountTokensDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the list service account tokens default response
func (o *ListServiceAccountTokensDefault) Code() int {
	return o._statusCode
}

func (o *ListServiceAccountTokensDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] ListServiceAccountTokens default  %+v", o._statusCode, o.Payload)
}

func (o *ListServiceAccountTokensDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/sa/{uuid}/tokens][%d] ListServiceAccountTokens default  %+v", o._statusCode, o.Payload)
}

func (o *ListServiceAccountTokensDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListServiceAccountTokensDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

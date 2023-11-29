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

// SetRunEdgesLineageReader is a Reader for the SetRunEdgesLineage structure.
type SetRunEdgesLineageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SetRunEdgesLineageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSetRunEdgesLineageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewSetRunEdgesLineageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewSetRunEdgesLineageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewSetRunEdgesLineageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewSetRunEdgesLineageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewSetRunEdgesLineageOK creates a SetRunEdgesLineageOK with default headers values
func NewSetRunEdgesLineageOK() *SetRunEdgesLineageOK {
	return &SetRunEdgesLineageOK{}
}

/*
SetRunEdgesLineageOK describes a response with status code 200, with default header values.

A successful response.
*/
type SetRunEdgesLineageOK struct {
}

// IsSuccess returns true when this set run edges lineage o k response has a 2xx status code
func (o *SetRunEdgesLineageOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this set run edges lineage o k response has a 3xx status code
func (o *SetRunEdgesLineageOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this set run edges lineage o k response has a 4xx status code
func (o *SetRunEdgesLineageOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this set run edges lineage o k response has a 5xx status code
func (o *SetRunEdgesLineageOK) IsServerError() bool {
	return false
}

// IsCode returns true when this set run edges lineage o k response a status code equal to that given
func (o *SetRunEdgesLineageOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the set run edges lineage o k response
func (o *SetRunEdgesLineageOK) Code() int {
	return 200
}

func (o *SetRunEdgesLineageOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageOK ", 200)
}

func (o *SetRunEdgesLineageOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageOK ", 200)
}

func (o *SetRunEdgesLineageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewSetRunEdgesLineageNoContent creates a SetRunEdgesLineageNoContent with default headers values
func NewSetRunEdgesLineageNoContent() *SetRunEdgesLineageNoContent {
	return &SetRunEdgesLineageNoContent{}
}

/*
SetRunEdgesLineageNoContent describes a response with status code 204, with default header values.

No content.
*/
type SetRunEdgesLineageNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this set run edges lineage no content response has a 2xx status code
func (o *SetRunEdgesLineageNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this set run edges lineage no content response has a 3xx status code
func (o *SetRunEdgesLineageNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this set run edges lineage no content response has a 4xx status code
func (o *SetRunEdgesLineageNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this set run edges lineage no content response has a 5xx status code
func (o *SetRunEdgesLineageNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this set run edges lineage no content response a status code equal to that given
func (o *SetRunEdgesLineageNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the set run edges lineage no content response
func (o *SetRunEdgesLineageNoContent) Code() int {
	return 204
}

func (o *SetRunEdgesLineageNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageNoContent  %+v", 204, o.Payload)
}

func (o *SetRunEdgesLineageNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageNoContent  %+v", 204, o.Payload)
}

func (o *SetRunEdgesLineageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *SetRunEdgesLineageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSetRunEdgesLineageForbidden creates a SetRunEdgesLineageForbidden with default headers values
func NewSetRunEdgesLineageForbidden() *SetRunEdgesLineageForbidden {
	return &SetRunEdgesLineageForbidden{}
}

/*
SetRunEdgesLineageForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type SetRunEdgesLineageForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this set run edges lineage forbidden response has a 2xx status code
func (o *SetRunEdgesLineageForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this set run edges lineage forbidden response has a 3xx status code
func (o *SetRunEdgesLineageForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this set run edges lineage forbidden response has a 4xx status code
func (o *SetRunEdgesLineageForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this set run edges lineage forbidden response has a 5xx status code
func (o *SetRunEdgesLineageForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this set run edges lineage forbidden response a status code equal to that given
func (o *SetRunEdgesLineageForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the set run edges lineage forbidden response
func (o *SetRunEdgesLineageForbidden) Code() int {
	return 403
}

func (o *SetRunEdgesLineageForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageForbidden  %+v", 403, o.Payload)
}

func (o *SetRunEdgesLineageForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageForbidden  %+v", 403, o.Payload)
}

func (o *SetRunEdgesLineageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *SetRunEdgesLineageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSetRunEdgesLineageNotFound creates a SetRunEdgesLineageNotFound with default headers values
func NewSetRunEdgesLineageNotFound() *SetRunEdgesLineageNotFound {
	return &SetRunEdgesLineageNotFound{}
}

/*
SetRunEdgesLineageNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type SetRunEdgesLineageNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this set run edges lineage not found response has a 2xx status code
func (o *SetRunEdgesLineageNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this set run edges lineage not found response has a 3xx status code
func (o *SetRunEdgesLineageNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this set run edges lineage not found response has a 4xx status code
func (o *SetRunEdgesLineageNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this set run edges lineage not found response has a 5xx status code
func (o *SetRunEdgesLineageNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this set run edges lineage not found response a status code equal to that given
func (o *SetRunEdgesLineageNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the set run edges lineage not found response
func (o *SetRunEdgesLineageNotFound) Code() int {
	return 404
}

func (o *SetRunEdgesLineageNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageNotFound  %+v", 404, o.Payload)
}

func (o *SetRunEdgesLineageNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] setRunEdgesLineageNotFound  %+v", 404, o.Payload)
}

func (o *SetRunEdgesLineageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *SetRunEdgesLineageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSetRunEdgesLineageDefault creates a SetRunEdgesLineageDefault with default headers values
func NewSetRunEdgesLineageDefault(code int) *SetRunEdgesLineageDefault {
	return &SetRunEdgesLineageDefault{
		_statusCode: code,
	}
}

/*
SetRunEdgesLineageDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type SetRunEdgesLineageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this set run edges lineage default response has a 2xx status code
func (o *SetRunEdgesLineageDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this set run edges lineage default response has a 3xx status code
func (o *SetRunEdgesLineageDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this set run edges lineage default response has a 4xx status code
func (o *SetRunEdgesLineageDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this set run edges lineage default response has a 5xx status code
func (o *SetRunEdgesLineageDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this set run edges lineage default response a status code equal to that given
func (o *SetRunEdgesLineageDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the set run edges lineage default response
func (o *SetRunEdgesLineageDefault) Code() int {
	return o._statusCode
}

func (o *SetRunEdgesLineageDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] SetRunEdgesLineage default  %+v", o._statusCode, o.Payload)
}

func (o *SetRunEdgesLineageDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/lineage/edges][%d] SetRunEdgesLineage default  %+v", o._statusCode, o.Payload)
}

func (o *SetRunEdgesLineageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *SetRunEdgesLineageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
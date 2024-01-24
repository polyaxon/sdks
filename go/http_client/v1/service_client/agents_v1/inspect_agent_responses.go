// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// InspectAgentReader is a Reader for the InspectAgent structure.
type InspectAgentReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *InspectAgentReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewInspectAgentOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewInspectAgentNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewInspectAgentForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewInspectAgentNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewInspectAgentDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewInspectAgentOK creates a InspectAgentOK with default headers values
func NewInspectAgentOK() *InspectAgentOK {
	return &InspectAgentOK{}
}

/*
InspectAgentOK describes a response with status code 200, with default header values.

A successful response.
*/
type InspectAgentOK struct {
	Payload interface{}
}

// IsSuccess returns true when this inspect agent o k response has a 2xx status code
func (o *InspectAgentOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this inspect agent o k response has a 3xx status code
func (o *InspectAgentOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this inspect agent o k response has a 4xx status code
func (o *InspectAgentOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this inspect agent o k response has a 5xx status code
func (o *InspectAgentOK) IsServerError() bool {
	return false
}

// IsCode returns true when this inspect agent o k response a status code equal to that given
func (o *InspectAgentOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the inspect agent o k response
func (o *InspectAgentOK) Code() int {
	return 200
}

func (o *InspectAgentOK) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentOK  %+v", 200, o.Payload)
}

func (o *InspectAgentOK) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentOK  %+v", 200, o.Payload)
}

func (o *InspectAgentOK) GetPayload() interface{} {
	return o.Payload
}

func (o *InspectAgentOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewInspectAgentNoContent creates a InspectAgentNoContent with default headers values
func NewInspectAgentNoContent() *InspectAgentNoContent {
	return &InspectAgentNoContent{}
}

/*
InspectAgentNoContent describes a response with status code 204, with default header values.

No content.
*/
type InspectAgentNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this inspect agent no content response has a 2xx status code
func (o *InspectAgentNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this inspect agent no content response has a 3xx status code
func (o *InspectAgentNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this inspect agent no content response has a 4xx status code
func (o *InspectAgentNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this inspect agent no content response has a 5xx status code
func (o *InspectAgentNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this inspect agent no content response a status code equal to that given
func (o *InspectAgentNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the inspect agent no content response
func (o *InspectAgentNoContent) Code() int {
	return 204
}

func (o *InspectAgentNoContent) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentNoContent  %+v", 204, o.Payload)
}

func (o *InspectAgentNoContent) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentNoContent  %+v", 204, o.Payload)
}

func (o *InspectAgentNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *InspectAgentNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewInspectAgentForbidden creates a InspectAgentForbidden with default headers values
func NewInspectAgentForbidden() *InspectAgentForbidden {
	return &InspectAgentForbidden{}
}

/*
InspectAgentForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type InspectAgentForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this inspect agent forbidden response has a 2xx status code
func (o *InspectAgentForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this inspect agent forbidden response has a 3xx status code
func (o *InspectAgentForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this inspect agent forbidden response has a 4xx status code
func (o *InspectAgentForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this inspect agent forbidden response has a 5xx status code
func (o *InspectAgentForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this inspect agent forbidden response a status code equal to that given
func (o *InspectAgentForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the inspect agent forbidden response
func (o *InspectAgentForbidden) Code() int {
	return 403
}

func (o *InspectAgentForbidden) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentForbidden  %+v", 403, o.Payload)
}

func (o *InspectAgentForbidden) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentForbidden  %+v", 403, o.Payload)
}

func (o *InspectAgentForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *InspectAgentForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewInspectAgentNotFound creates a InspectAgentNotFound with default headers values
func NewInspectAgentNotFound() *InspectAgentNotFound {
	return &InspectAgentNotFound{}
}

/*
InspectAgentNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type InspectAgentNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this inspect agent not found response has a 2xx status code
func (o *InspectAgentNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this inspect agent not found response has a 3xx status code
func (o *InspectAgentNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this inspect agent not found response has a 4xx status code
func (o *InspectAgentNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this inspect agent not found response has a 5xx status code
func (o *InspectAgentNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this inspect agent not found response a status code equal to that given
func (o *InspectAgentNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the inspect agent not found response
func (o *InspectAgentNotFound) Code() int {
	return 404
}

func (o *InspectAgentNotFound) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentNotFound  %+v", 404, o.Payload)
}

func (o *InspectAgentNotFound) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] inspectAgentNotFound  %+v", 404, o.Payload)
}

func (o *InspectAgentNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *InspectAgentNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewInspectAgentDefault creates a InspectAgentDefault with default headers values
func NewInspectAgentDefault(code int) *InspectAgentDefault {
	return &InspectAgentDefault{
		_statusCode: code,
	}
}

/*
InspectAgentDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type InspectAgentDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this inspect agent default response has a 2xx status code
func (o *InspectAgentDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this inspect agent default response has a 3xx status code
func (o *InspectAgentDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this inspect agent default response has a 4xx status code
func (o *InspectAgentDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this inspect agent default response has a 5xx status code
func (o *InspectAgentDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this inspect agent default response a status code equal to that given
func (o *InspectAgentDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the inspect agent default response
func (o *InspectAgentDefault) Code() int {
	return o._statusCode
}

func (o *InspectAgentDefault) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] InspectAgent default  %+v", o._statusCode, o.Payload)
}

func (o *InspectAgentDefault) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/{owner}/agents/{uuid}/k8s_inspect][%d] InspectAgent default  %+v", o._statusCode, o.Payload)
}

func (o *InspectAgentDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *InspectAgentDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
// Code generated by go-swagger; DO NOT EDIT.

package policies_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetPolicyReader is a Reader for the GetPolicy structure.
type GetPolicyReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetPolicyReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetPolicyOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetPolicyNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetPolicyForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetPolicyNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetPolicyDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetPolicyOK creates a GetPolicyOK with default headers values
func NewGetPolicyOK() *GetPolicyOK {
	return &GetPolicyOK{}
}

/*
GetPolicyOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetPolicyOK struct {
	Payload *service_model.V1Policy
}

// IsSuccess returns true when this get policy o k response has a 2xx status code
func (o *GetPolicyOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get policy o k response has a 3xx status code
func (o *GetPolicyOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get policy o k response has a 4xx status code
func (o *GetPolicyOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get policy o k response has a 5xx status code
func (o *GetPolicyOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get policy o k response a status code equal to that given
func (o *GetPolicyOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get policy o k response
func (o *GetPolicyOK) Code() int {
	return 200
}

func (o *GetPolicyOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyOK  %+v", 200, o.Payload)
}

func (o *GetPolicyOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyOK  %+v", 200, o.Payload)
}

func (o *GetPolicyOK) GetPayload() *service_model.V1Policy {
	return o.Payload
}

func (o *GetPolicyOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Policy)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetPolicyNoContent creates a GetPolicyNoContent with default headers values
func NewGetPolicyNoContent() *GetPolicyNoContent {
	return &GetPolicyNoContent{}
}

/*
GetPolicyNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetPolicyNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get policy no content response has a 2xx status code
func (o *GetPolicyNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get policy no content response has a 3xx status code
func (o *GetPolicyNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get policy no content response has a 4xx status code
func (o *GetPolicyNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get policy no content response has a 5xx status code
func (o *GetPolicyNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get policy no content response a status code equal to that given
func (o *GetPolicyNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get policy no content response
func (o *GetPolicyNoContent) Code() int {
	return 204
}

func (o *GetPolicyNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyNoContent  %+v", 204, o.Payload)
}

func (o *GetPolicyNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyNoContent  %+v", 204, o.Payload)
}

func (o *GetPolicyNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetPolicyNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetPolicyForbidden creates a GetPolicyForbidden with default headers values
func NewGetPolicyForbidden() *GetPolicyForbidden {
	return &GetPolicyForbidden{}
}

/*
GetPolicyForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetPolicyForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get policy forbidden response has a 2xx status code
func (o *GetPolicyForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get policy forbidden response has a 3xx status code
func (o *GetPolicyForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get policy forbidden response has a 4xx status code
func (o *GetPolicyForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get policy forbidden response has a 5xx status code
func (o *GetPolicyForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get policy forbidden response a status code equal to that given
func (o *GetPolicyForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get policy forbidden response
func (o *GetPolicyForbidden) Code() int {
	return 403
}

func (o *GetPolicyForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyForbidden  %+v", 403, o.Payload)
}

func (o *GetPolicyForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyForbidden  %+v", 403, o.Payload)
}

func (o *GetPolicyForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetPolicyForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetPolicyNotFound creates a GetPolicyNotFound with default headers values
func NewGetPolicyNotFound() *GetPolicyNotFound {
	return &GetPolicyNotFound{}
}

/*
GetPolicyNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetPolicyNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get policy not found response has a 2xx status code
func (o *GetPolicyNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get policy not found response has a 3xx status code
func (o *GetPolicyNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get policy not found response has a 4xx status code
func (o *GetPolicyNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get policy not found response has a 5xx status code
func (o *GetPolicyNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get policy not found response a status code equal to that given
func (o *GetPolicyNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get policy not found response
func (o *GetPolicyNotFound) Code() int {
	return 404
}

func (o *GetPolicyNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyNotFound  %+v", 404, o.Payload)
}

func (o *GetPolicyNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] getPolicyNotFound  %+v", 404, o.Payload)
}

func (o *GetPolicyNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetPolicyNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetPolicyDefault creates a GetPolicyDefault with default headers values
func NewGetPolicyDefault(code int) *GetPolicyDefault {
	return &GetPolicyDefault{
		_statusCode: code,
	}
}

/*
GetPolicyDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetPolicyDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get policy default response has a 2xx status code
func (o *GetPolicyDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get policy default response has a 3xx status code
func (o *GetPolicyDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get policy default response has a 4xx status code
func (o *GetPolicyDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get policy default response has a 5xx status code
func (o *GetPolicyDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get policy default response a status code equal to that given
func (o *GetPolicyDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get policy default response
func (o *GetPolicyDefault) Code() int {
	return o._statusCode
}

func (o *GetPolicyDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] GetPolicy default  %+v", o._statusCode, o.Payload)
}

func (o *GetPolicyDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/policies/{uuid}][%d] GetPolicy default  %+v", o._statusCode, o.Payload)
}

func (o *GetPolicyDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetPolicyDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
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

// CreatePolicyReader is a Reader for the CreatePolicy structure.
type CreatePolicyReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreatePolicyReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreatePolicyOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreatePolicyNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreatePolicyForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreatePolicyNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreatePolicyDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreatePolicyOK creates a CreatePolicyOK with default headers values
func NewCreatePolicyOK() *CreatePolicyOK {
	return &CreatePolicyOK{}
}

/*
CreatePolicyOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreatePolicyOK struct {
	Payload *service_model.V1Policy
}

// IsSuccess returns true when this create policy o k response has a 2xx status code
func (o *CreatePolicyOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create policy o k response has a 3xx status code
func (o *CreatePolicyOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create policy o k response has a 4xx status code
func (o *CreatePolicyOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this create policy o k response has a 5xx status code
func (o *CreatePolicyOK) IsServerError() bool {
	return false
}

// IsCode returns true when this create policy o k response a status code equal to that given
func (o *CreatePolicyOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the create policy o k response
func (o *CreatePolicyOK) Code() int {
	return 200
}

func (o *CreatePolicyOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyOK  %+v", 200, o.Payload)
}

func (o *CreatePolicyOK) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyOK  %+v", 200, o.Payload)
}

func (o *CreatePolicyOK) GetPayload() *service_model.V1Policy {
	return o.Payload
}

func (o *CreatePolicyOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Policy)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreatePolicyNoContent creates a CreatePolicyNoContent with default headers values
func NewCreatePolicyNoContent() *CreatePolicyNoContent {
	return &CreatePolicyNoContent{}
}

/*
CreatePolicyNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreatePolicyNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this create policy no content response has a 2xx status code
func (o *CreatePolicyNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create policy no content response has a 3xx status code
func (o *CreatePolicyNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create policy no content response has a 4xx status code
func (o *CreatePolicyNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this create policy no content response has a 5xx status code
func (o *CreatePolicyNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this create policy no content response a status code equal to that given
func (o *CreatePolicyNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the create policy no content response
func (o *CreatePolicyNoContent) Code() int {
	return 204
}

func (o *CreatePolicyNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyNoContent  %+v", 204, o.Payload)
}

func (o *CreatePolicyNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyNoContent  %+v", 204, o.Payload)
}

func (o *CreatePolicyNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreatePolicyNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreatePolicyForbidden creates a CreatePolicyForbidden with default headers values
func NewCreatePolicyForbidden() *CreatePolicyForbidden {
	return &CreatePolicyForbidden{}
}

/*
CreatePolicyForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreatePolicyForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this create policy forbidden response has a 2xx status code
func (o *CreatePolicyForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create policy forbidden response has a 3xx status code
func (o *CreatePolicyForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create policy forbidden response has a 4xx status code
func (o *CreatePolicyForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this create policy forbidden response has a 5xx status code
func (o *CreatePolicyForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this create policy forbidden response a status code equal to that given
func (o *CreatePolicyForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the create policy forbidden response
func (o *CreatePolicyForbidden) Code() int {
	return 403
}

func (o *CreatePolicyForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyForbidden  %+v", 403, o.Payload)
}

func (o *CreatePolicyForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyForbidden  %+v", 403, o.Payload)
}

func (o *CreatePolicyForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreatePolicyForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreatePolicyNotFound creates a CreatePolicyNotFound with default headers values
func NewCreatePolicyNotFound() *CreatePolicyNotFound {
	return &CreatePolicyNotFound{}
}

/*
CreatePolicyNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreatePolicyNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this create policy not found response has a 2xx status code
func (o *CreatePolicyNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create policy not found response has a 3xx status code
func (o *CreatePolicyNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create policy not found response has a 4xx status code
func (o *CreatePolicyNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this create policy not found response has a 5xx status code
func (o *CreatePolicyNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this create policy not found response a status code equal to that given
func (o *CreatePolicyNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the create policy not found response
func (o *CreatePolicyNotFound) Code() int {
	return 404
}

func (o *CreatePolicyNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyNotFound  %+v", 404, o.Payload)
}

func (o *CreatePolicyNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] createPolicyNotFound  %+v", 404, o.Payload)
}

func (o *CreatePolicyNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreatePolicyNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreatePolicyDefault creates a CreatePolicyDefault with default headers values
func NewCreatePolicyDefault(code int) *CreatePolicyDefault {
	return &CreatePolicyDefault{
		_statusCode: code,
	}
}

/*
CreatePolicyDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreatePolicyDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this create policy default response has a 2xx status code
func (o *CreatePolicyDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this create policy default response has a 3xx status code
func (o *CreatePolicyDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this create policy default response has a 4xx status code
func (o *CreatePolicyDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this create policy default response has a 5xx status code
func (o *CreatePolicyDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this create policy default response a status code equal to that given
func (o *CreatePolicyDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the create policy default response
func (o *CreatePolicyDefault) Code() int {
	return o._statusCode
}

func (o *CreatePolicyDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] CreatePolicy default  %+v", o._statusCode, o.Payload)
}

func (o *CreatePolicyDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/policies][%d] CreatePolicy default  %+v", o._statusCode, o.Payload)
}

func (o *CreatePolicyDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreatePolicyDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// Code generated by go-swagger; DO NOT EDIT.

package users_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetWorkspacesReader is a Reader for the GetWorkspaces structure.
type GetWorkspacesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetWorkspacesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetWorkspacesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetWorkspacesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetWorkspacesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetWorkspacesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetWorkspacesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetWorkspacesOK creates a GetWorkspacesOK with default headers values
func NewGetWorkspacesOK() *GetWorkspacesOK {
	return &GetWorkspacesOK{}
}

/*
GetWorkspacesOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetWorkspacesOK struct {
	Payload interface{}
}

// IsSuccess returns true when this get workspaces o k response has a 2xx status code
func (o *GetWorkspacesOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get workspaces o k response has a 3xx status code
func (o *GetWorkspacesOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get workspaces o k response has a 4xx status code
func (o *GetWorkspacesOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get workspaces o k response has a 5xx status code
func (o *GetWorkspacesOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get workspaces o k response a status code equal to that given
func (o *GetWorkspacesOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get workspaces o k response
func (o *GetWorkspacesOK) Code() int {
	return 200
}

func (o *GetWorkspacesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesOK  %+v", 200, o.Payload)
}

func (o *GetWorkspacesOK) String() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesOK  %+v", 200, o.Payload)
}

func (o *GetWorkspacesOK) GetPayload() interface{} {
	return o.Payload
}

func (o *GetWorkspacesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetWorkspacesNoContent creates a GetWorkspacesNoContent with default headers values
func NewGetWorkspacesNoContent() *GetWorkspacesNoContent {
	return &GetWorkspacesNoContent{}
}

/*
GetWorkspacesNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetWorkspacesNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get workspaces no content response has a 2xx status code
func (o *GetWorkspacesNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get workspaces no content response has a 3xx status code
func (o *GetWorkspacesNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get workspaces no content response has a 4xx status code
func (o *GetWorkspacesNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get workspaces no content response has a 5xx status code
func (o *GetWorkspacesNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get workspaces no content response a status code equal to that given
func (o *GetWorkspacesNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get workspaces no content response
func (o *GetWorkspacesNoContent) Code() int {
	return 204
}

func (o *GetWorkspacesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesNoContent  %+v", 204, o.Payload)
}

func (o *GetWorkspacesNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesNoContent  %+v", 204, o.Payload)
}

func (o *GetWorkspacesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetWorkspacesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetWorkspacesForbidden creates a GetWorkspacesForbidden with default headers values
func NewGetWorkspacesForbidden() *GetWorkspacesForbidden {
	return &GetWorkspacesForbidden{}
}

/*
GetWorkspacesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetWorkspacesForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get workspaces forbidden response has a 2xx status code
func (o *GetWorkspacesForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get workspaces forbidden response has a 3xx status code
func (o *GetWorkspacesForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get workspaces forbidden response has a 4xx status code
func (o *GetWorkspacesForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get workspaces forbidden response has a 5xx status code
func (o *GetWorkspacesForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get workspaces forbidden response a status code equal to that given
func (o *GetWorkspacesForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get workspaces forbidden response
func (o *GetWorkspacesForbidden) Code() int {
	return 403
}

func (o *GetWorkspacesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesForbidden  %+v", 403, o.Payload)
}

func (o *GetWorkspacesForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesForbidden  %+v", 403, o.Payload)
}

func (o *GetWorkspacesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetWorkspacesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetWorkspacesNotFound creates a GetWorkspacesNotFound with default headers values
func NewGetWorkspacesNotFound() *GetWorkspacesNotFound {
	return &GetWorkspacesNotFound{}
}

/*
GetWorkspacesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetWorkspacesNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get workspaces not found response has a 2xx status code
func (o *GetWorkspacesNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get workspaces not found response has a 3xx status code
func (o *GetWorkspacesNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get workspaces not found response has a 4xx status code
func (o *GetWorkspacesNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get workspaces not found response has a 5xx status code
func (o *GetWorkspacesNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get workspaces not found response a status code equal to that given
func (o *GetWorkspacesNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get workspaces not found response
func (o *GetWorkspacesNotFound) Code() int {
	return 404
}

func (o *GetWorkspacesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesNotFound  %+v", 404, o.Payload)
}

func (o *GetWorkspacesNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] getWorkspacesNotFound  %+v", 404, o.Payload)
}

func (o *GetWorkspacesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetWorkspacesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetWorkspacesDefault creates a GetWorkspacesDefault with default headers values
func NewGetWorkspacesDefault(code int) *GetWorkspacesDefault {
	return &GetWorkspacesDefault{
		_statusCode: code,
	}
}

/*
GetWorkspacesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetWorkspacesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get workspaces default response has a 2xx status code
func (o *GetWorkspacesDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get workspaces default response has a 3xx status code
func (o *GetWorkspacesDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get workspaces default response has a 4xx status code
func (o *GetWorkspacesDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get workspaces default response has a 5xx status code
func (o *GetWorkspacesDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get workspaces default response a status code equal to that given
func (o *GetWorkspacesDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get workspaces default response
func (o *GetWorkspacesDefault) Code() int {
	return o._statusCode
}

func (o *GetWorkspacesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] GetWorkspaces default  %+v", o._statusCode, o.Payload)
}

func (o *GetWorkspacesDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/users/workspaces][%d] GetWorkspaces default  %+v", o._statusCode, o.Payload)
}

func (o *GetWorkspacesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetWorkspacesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

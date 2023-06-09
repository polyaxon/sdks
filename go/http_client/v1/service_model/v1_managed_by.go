// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/validate"
)

// V1ManagedBy v1 managed by
//
// swagger:model v1ManagedBy
type V1ManagedBy string

func NewV1ManagedBy(value V1ManagedBy) *V1ManagedBy {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1ManagedBy.
func (m V1ManagedBy) Pointer() *V1ManagedBy {
	return &m
}

const (

	// V1ManagedByClient captures enum value "client"
	V1ManagedByClient V1ManagedBy = "client"

	// V1ManagedByCli captures enum value "cli"
	V1ManagedByCli V1ManagedBy = "cli"

	// V1ManagedByAgent captures enum value "agent"
	V1ManagedByAgent V1ManagedBy = "agent"
)

// for schema
var v1ManagedByEnum []interface{}

func init() {
	var res []V1ManagedBy
	if err := json.Unmarshal([]byte(`["client","cli","agent"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1ManagedByEnum = append(v1ManagedByEnum, v)
	}
}

func (m V1ManagedBy) validateV1ManagedByEnum(path, location string, value V1ManagedBy) error {
	if err := validate.EnumCase(path, location, value, v1ManagedByEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 managed by
func (m V1ManagedBy) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1ManagedByEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 managed by based on context it is used
func (m V1ManagedBy) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}
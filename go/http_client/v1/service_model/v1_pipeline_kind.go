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

// V1PipelineKind v1 pipeline kind
//
// swagger:model v1PipelineKind
type V1PipelineKind string

func NewV1PipelineKind(value V1PipelineKind) *V1PipelineKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1PipelineKind.
func (m V1PipelineKind) Pointer() *V1PipelineKind {
	return &m
}

const (

	// V1PipelineKindDag captures enum value "dag"
	V1PipelineKindDag V1PipelineKind = "dag"

	// V1PipelineKindMatrix captures enum value "matrix"
	V1PipelineKindMatrix V1PipelineKind = "matrix"
)

// for schema
var v1PipelineKindEnum []interface{}

func init() {
	var res []V1PipelineKind
	if err := json.Unmarshal([]byte(`["dag","matrix"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1PipelineKindEnum = append(v1PipelineKindEnum, v)
	}
}

func (m V1PipelineKind) validateV1PipelineKindEnum(path, location string, value V1PipelineKind) error {
	if err := validate.EnumCase(path, location, value, v1PipelineKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 pipeline kind
func (m V1PipelineKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1PipelineKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 pipeline kind based on context it is used
func (m V1PipelineKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

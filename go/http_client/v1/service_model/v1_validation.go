// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Validation Validation specification based on pydantic
//
// swagger:model v1Validation
type V1Validation struct {

	// Generic
	Contains []interface{} `json:"contains"`

	// contains keys
	ContainsKeys []string `json:"containsKeys"`

	// decimal places
	DecimalPlaces int32 `json:"decimalPlaces,omitempty"`

	// Validation delay
	Delay bool `json:"delay,omitempty"`

	// excludes
	Excludes []interface{} `json:"excludes"`

	// excludes keys
	ExcludesKeys []string `json:"excludesKeys"`

	// ge
	Ge int32 `json:"ge,omitempty"`

	// Numeric Constraints (these constraints are also applied item wise for lists and for dict values)
	Gt int32 `json:"gt,omitempty"`

	// Dict keys Constraints
	Keys []string `json:"keys"`

	// le
	Le int32 `json:"le,omitempty"`

	// lt
	Lt int32 `json:"lt,omitempty"`

	// max digits
	MaxDigits int32 `json:"maxDigits,omitempty"`

	// max items
	MaxItems int32 `json:"maxItems,omitempty"`

	// max length
	MaxLength int32 `json:"maxLength,omitempty"`

	// Decimal Constraints (these constraints are also applied item wise for lists and for dict values)
	MinDigits int32 `json:"minDigits,omitempty"`

	// Items Constraints
	MinItems int32 `json:"minItems,omitempty"`

	// min length
	MinLength int32 `json:"minLength,omitempty"`

	// multiple of
	MultipleOf int32 `json:"multipleOf,omitempty"`

	// options
	Options []interface{} `json:"options"`

	// String Constraints (these constraints are also applied item wise for lists and for dict values)
	Regex string `json:"regex,omitempty"`
}

// Validate validates this v1 validation
func (m *V1Validation) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 validation based on context it is used
func (m *V1Validation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Validation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Validation) UnmarshalBinary(b []byte) error {
	var res V1Validation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

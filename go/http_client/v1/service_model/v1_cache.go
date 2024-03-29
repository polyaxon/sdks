// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Cache Cache specification
// Cache is calculated based on inputs state as well as component version if used
//
// swagger:model v1Cache
type V1Cache struct {

	// Optional flag to disable cache, Cache is enabled by default
	Disable bool `json:"disable,omitempty"`

	// Optional Inputs/Outputs' names to consider for the cache, default behavior to consider all inputs/outputs
	Io []string `json:"io"`

	// Optional sections to consider for the cache, default behavior to consider container(command, args), init section, and connections section
	Sections []string `json:"sections"`

	// Optional time to live for the cache before it gets invalidated automatically,
	// the TTL is calculated based on the time the run starts
	TTL int32 `json:"ttl,omitempty"`
}

// Validate validates this v1 cache
func (m *V1Cache) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 cache based on context it is used
func (m *V1Cache) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Cache) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Cache) UnmarshalBinary(b []byte) error {
	var res V1Cache
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

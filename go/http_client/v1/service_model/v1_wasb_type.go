// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1WasbType Wasb type specification
//
// swagger:model v1WasbType
type V1WasbType struct {

	// Optional container
	Container string `json:"container,omitempty"`

	// Optional path
	Path bool `json:"path,omitempty"`

	// Optional storage_account
	StorageAccount string `json:"storageAccount,omitempty"`
}

// Validate validates this v1 wasb type
func (m *V1WasbType) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 wasb type based on context it is used
func (m *V1WasbType) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1WasbType) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1WasbType) UnmarshalBinary(b []byte) error {
	var res V1WasbType
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

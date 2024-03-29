// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Tag Tag specification
//
// swagger:model v1Tag
type V1Tag struct {

	// Optional Tag color
	Color string `json:"color,omitempty"`

	// Optional tag description
	Description string `json:"description,omitempty"`

	// Optional tag icon
	Icon string `json:"icon,omitempty"`

	// Tag name
	Name string `json:"name,omitempty"`

	// Optional tag stats
	Stats interface{} `json:"stats,omitempty"`

	// UUID
	UUID string `json:"uuid,omitempty"`
}

// Validate validates this v1 tag
func (m *V1Tag) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 tag based on context it is used
func (m *V1Tag) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Tag) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Tag) UnmarshalBinary(b []byte) error {
	var res V1Tag
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

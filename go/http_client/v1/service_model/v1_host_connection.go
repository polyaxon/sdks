// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1HostConnection Host connection schema validation connection
//
// swagger:model v1HostConnection
type V1HostConnection struct {

	// insecure
	Insecure bool `json:"insecure,omitempty"`

	// Url
	URL string `json:"url,omitempty"`
}

// Validate validates this v1 host connection
func (m *V1HostConnection) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 host connection based on context it is used
func (m *V1HostConnection) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1HostConnection) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1HostConnection) UnmarshalBinary(b []byte) error {
	var res V1HostConnection
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

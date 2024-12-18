// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Installation v1 installation
//
// swagger:model v1Installation
type V1Installation struct {

	// auth
	Auth []string `json:"auth"`

	// default streams Url
	DefaultStreamsURL string `json:"defaultStreamsUrl,omitempty"`

	// dist
	Dist string `json:"dist,omitempty"`

	// hmac
	Hmac string `json:"hmac,omitempty"`

	// host
	Host string `json:"host,omitempty"`

	// key
	Key string `json:"key,omitempty"`

	// mode
	Mode string `json:"mode,omitempty"`

	// orgs
	Orgs bool `json:"orgs,omitempty"`

	// single Url
	SingleURL bool `json:"singleUrl,omitempty"`

	// version
	Version string `json:"version,omitempty"`
}

// Validate validates this v1 installation
func (m *V1Installation) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 installation based on context it is used
func (m *V1Installation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Installation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Installation) UnmarshalBinary(b []byte) error {
	var res V1Installation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

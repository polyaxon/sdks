// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1OrganizationMember Organization member specification
//
// swagger:model v1OrganizationMember
type V1OrganizationMember struct {

	// Optional time when the entity was created
	// Format: date-time
	CreatedAt strfmt.DateTime `json:"created_at,omitempty"`

	// Kind
	Kind string `json:"kind,omitempty"`

	// Role
	Role string `json:"role,omitempty"`

	// Optional last time the entity was updated
	// Format: date-time
	UpdatedAt strfmt.DateTime `json:"updated_at,omitempty"`

	// User
	User string `json:"user,omitempty"`

	// Read-only User email
	UserEmail string `json:"user_email,omitempty"`
}

// Validate validates this v1 organization member
func (m *V1OrganizationMember) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCreatedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUpdatedAt(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1OrganizationMember) validateCreatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.CreatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("created_at", "body", "date-time", m.CreatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1OrganizationMember) validateUpdatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.UpdatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("updated_at", "body", "date-time", m.UpdatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this v1 organization member based on context it is used
func (m *V1OrganizationMember) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1OrganizationMember) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1OrganizationMember) UnmarshalBinary(b []byte) error {
	var res V1OrganizationMember
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

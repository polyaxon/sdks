// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1ListOrganizationsResponse Contains list of organizations
//
// swagger:model v1ListOrganizationsResponse
type V1ListOrganizationsResponse struct {

	// Count of the entities
	Count int32 `json:"count,omitempty"`

	// Next page
	Next string `json:"next,omitempty"`

	// Previous page
	Previous string `json:"previous,omitempty"`

	// List of all entities
	Results []*V1Organization `json:"results"`
}

// Validate validates this v1 list organizations response
func (m *V1ListOrganizationsResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateResults(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1ListOrganizationsResponse) validateResults(formats strfmt.Registry) error {
	if swag.IsZero(m.Results) { // not required
		return nil
	}

	for i := 0; i < len(m.Results); i++ {
		if swag.IsZero(m.Results[i]) { // not required
			continue
		}

		if m.Results[i] != nil {
			if err := m.Results[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("results" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("results" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 list organizations response based on the context it is used
func (m *V1ListOrganizationsResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateResults(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1ListOrganizationsResponse) contextValidateResults(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Results); i++ {

		if m.Results[i] != nil {

			if swag.IsZero(m.Results[i]) { // not required
				return nil
			}

			if err := m.Results[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("results" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("results" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1ListOrganizationsResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1ListOrganizationsResponse) UnmarshalBinary(b []byte) error {
	var res V1ListOrganizationsResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

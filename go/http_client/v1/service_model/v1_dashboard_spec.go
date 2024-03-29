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

// V1DashboardSpec Dashboard spec definition
//
// swagger:model v1DashboardSpec
type V1DashboardSpec struct {

	// Ignore outliers
	IgnoreOutliers bool `json:"ignore_outliers,omitempty"`

	// Sample size
	SampleSize int32 `json:"sample_size,omitempty"`

	// Section Spec
	Sections []*V1SectionSpec `json:"sections"`

	// Smoothing
	Smoothing int32 `json:"smoothing,omitempty"`

	// xaxis
	Xaxis string `json:"xaxis,omitempty"`
}

// Validate validates this v1 dashboard spec
func (m *V1DashboardSpec) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateSections(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1DashboardSpec) validateSections(formats strfmt.Registry) error {
	if swag.IsZero(m.Sections) { // not required
		return nil
	}

	for i := 0; i < len(m.Sections); i++ {
		if swag.IsZero(m.Sections[i]) { // not required
			continue
		}

		if m.Sections[i] != nil {
			if err := m.Sections[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("sections" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("sections" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 dashboard spec based on the context it is used
func (m *V1DashboardSpec) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateSections(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1DashboardSpec) contextValidateSections(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Sections); i++ {

		if m.Sections[i] != nil {

			if swag.IsZero(m.Sections[i]) { // not required
				return nil
			}

			if err := m.Sections[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("sections" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("sections" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1DashboardSpec) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1DashboardSpec) UnmarshalBinary(b []byte) error {
	var res V1DashboardSpec
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

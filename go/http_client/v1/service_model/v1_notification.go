// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Notification Notification message
//
// swagger:model v1Notification
type V1Notification struct {

	// Connections to use for notification
	Connections []string `json:"connections"`

	// Optional trigger policy, default done
	Trigger *V1Statuses `json:"trigger,omitempty"`
}

// Validate validates this v1 notification
func (m *V1Notification) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateTrigger(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Notification) validateTrigger(formats strfmt.Registry) error {
	if swag.IsZero(m.Trigger) { // not required
		return nil
	}

	if m.Trigger != nil {
		if err := m.Trigger.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 notification based on the context it is used
func (m *V1Notification) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateTrigger(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Notification) contextValidateTrigger(ctx context.Context, formats strfmt.Registry) error {

	if m.Trigger != nil {

		if swag.IsZero(m.Trigger) { // not required
			return nil
		}

		if err := m.Trigger.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Notification) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Notification) UnmarshalBinary(b []byte) error {
	var res V1Notification
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

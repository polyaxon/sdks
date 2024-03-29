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

// V1Service Service specification
//
// swagger:model v1Service
type V1Service struct {

	// Optional connections section
	Connections []string `json:"connections"`

	// Optional container to notification
	Container V1Container `json:"container,omitempty"`

	// Optional environment section
	Environment *V1Environment `json:"environment,omitempty"`

	// Optional init connections/containers section
	Init []*V1Init `json:"init"`

	// Optional flag to signal to Polyaxon that this service should not go through Polyaxon's auth
	// Default is false, the service will be controlled by Polyaxon's auth.
	IsExternal bool `json:"isExternal,omitempty"`

	// Optional component kind, should be equal to 'service'
	Kind *string `json:"kind,omitempty"`

	// Optional service section
	Ports []int32 `json:"ports"`

	// Optional value to provision more than a single replica for the service
	Replicas int32 `json:"replicas,omitempty"`

	// Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/).
	// Default is false, the service shoud handle a base url.
	RewritePath bool `json:"rewritePath,omitempty"`

	// Optional sidecars section
	Sidecars []V1Container `json:"sidecars"`

	// Volumes is a list of volumes that can be mounted.
	Volumes []V1Volume `json:"volumes"`
}

// Validate validates this v1 service
func (m *V1Service) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEnvironment(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateInit(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Service) validateEnvironment(formats strfmt.Registry) error {
	if swag.IsZero(m.Environment) { // not required
		return nil
	}

	if m.Environment != nil {
		if err := m.Environment.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("environment")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("environment")
			}
			return err
		}
	}

	return nil
}

func (m *V1Service) validateInit(formats strfmt.Registry) error {
	if swag.IsZero(m.Init) { // not required
		return nil
	}

	for i := 0; i < len(m.Init); i++ {
		if swag.IsZero(m.Init[i]) { // not required
			continue
		}

		if m.Init[i] != nil {
			if err := m.Init[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("init" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("init" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 service based on the context it is used
func (m *V1Service) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateEnvironment(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateInit(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Service) contextValidateEnvironment(ctx context.Context, formats strfmt.Registry) error {

	if m.Environment != nil {

		if swag.IsZero(m.Environment) { // not required
			return nil
		}

		if err := m.Environment.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("environment")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("environment")
			}
			return err
		}
	}

	return nil
}

func (m *V1Service) contextValidateInit(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Init); i++ {

		if m.Init[i] != nil {

			if swag.IsZero(m.Init[i]) { // not required
				return nil
			}

			if err := m.Init[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("init" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("init" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Service) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Service) UnmarshalBinary(b []byte) error {
	var res V1Service
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

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

// V1RayJob Ray specification
//
// swagger:model v1RayJob
type V1RayJob struct {

	// Entrypoint of the ray application, e.g. python path/to/run.py
	Entrypoint string `json:"entrypoint,omitempty"`

	// Ray head goupr section
	Head *V1RayReplica `json:"head,omitempty"`

	// Kind of runtime, should be equal to "rayjob"
	Kind *string `json:"kind,omitempty"`

	// Optional metadata section
	Metadata map[string]string `json:"metadata,omitempty"`

	// Cluster ray version, must be equal to the ray image version
	RayVersion string `json:"rayVersion,omitempty"`

	// Optional run environment section to install pip packages or expose env vars
	RuntimeEnv interface{} `json:"runtimeEnv,omitempty"`

	// Ray workers group section
	Workers []*V1RayReplica `json:"workers"`
}

// Validate validates this v1 ray job
func (m *V1RayJob) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateHead(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateWorkers(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RayJob) validateHead(formats strfmt.Registry) error {
	if swag.IsZero(m.Head) { // not required
		return nil
	}

	if m.Head != nil {
		if err := m.Head.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("head")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("head")
			}
			return err
		}
	}

	return nil
}

func (m *V1RayJob) validateWorkers(formats strfmt.Registry) error {
	if swag.IsZero(m.Workers) { // not required
		return nil
	}

	for i := 0; i < len(m.Workers); i++ {
		if swag.IsZero(m.Workers[i]) { // not required
			continue
		}

		if m.Workers[i] != nil {
			if err := m.Workers[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("workers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("workers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 ray job based on the context it is used
func (m *V1RayJob) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateHead(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateWorkers(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RayJob) contextValidateHead(ctx context.Context, formats strfmt.Registry) error {

	if m.Head != nil {

		if swag.IsZero(m.Head) { // not required
			return nil
		}

		if err := m.Head.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("head")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("head")
			}
			return err
		}
	}

	return nil
}

func (m *V1RayJob) contextValidateWorkers(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Workers); i++ {

		if m.Workers[i] != nil {

			if swag.IsZero(m.Workers[i]) { // not required
				return nil
			}

			if err := m.Workers[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("workers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("workers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1RayJob) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1RayJob) UnmarshalBinary(b []byte) error {
	var res V1RayJob
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

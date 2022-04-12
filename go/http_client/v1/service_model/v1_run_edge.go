// Copyright 2018-2022 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

// V1RunEdge v1 run edge
//
// swagger:model v1RunEdge
type V1RunEdge struct {

	// Optional name of the edge run
	Downstream *V1Run `json:"downstream,omitempty"`

	// Optional edge run kind
	Kind *V1RunEdgeKind `json:"kind,omitempty"`

	// Options statuses events
	Statuses []*V1Statuses `json:"statuses"`

	// Optional uuid of the edge run
	Upstream *V1Run `json:"upstream,omitempty"`

	// Optional edge values
	Values interface{} `json:"values,omitempty"`
}

// Validate validates this v1 run edge
func (m *V1RunEdge) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDownstream(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateKind(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStatuses(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUpstream(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RunEdge) validateDownstream(formats strfmt.Registry) error {
	if swag.IsZero(m.Downstream) { // not required
		return nil
	}

	if m.Downstream != nil {
		if err := m.Downstream.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("downstream")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("downstream")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunEdge) validateKind(formats strfmt.Registry) error {
	if swag.IsZero(m.Kind) { // not required
		return nil
	}

	if m.Kind != nil {
		if err := m.Kind.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("kind")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("kind")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunEdge) validateStatuses(formats strfmt.Registry) error {
	if swag.IsZero(m.Statuses) { // not required
		return nil
	}

	for i := 0; i < len(m.Statuses); i++ {
		if swag.IsZero(m.Statuses[i]) { // not required
			continue
		}

		if m.Statuses[i] != nil {
			if err := m.Statuses[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("statuses" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("statuses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1RunEdge) validateUpstream(formats strfmt.Registry) error {
	if swag.IsZero(m.Upstream) { // not required
		return nil
	}

	if m.Upstream != nil {
		if err := m.Upstream.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("upstream")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("upstream")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 run edge based on the context it is used
func (m *V1RunEdge) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateDownstream(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateKind(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateStatuses(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateUpstream(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RunEdge) contextValidateDownstream(ctx context.Context, formats strfmt.Registry) error {

	if m.Downstream != nil {
		if err := m.Downstream.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("downstream")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("downstream")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunEdge) contextValidateKind(ctx context.Context, formats strfmt.Registry) error {

	if m.Kind != nil {
		if err := m.Kind.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("kind")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("kind")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunEdge) contextValidateStatuses(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Statuses); i++ {

		if m.Statuses[i] != nil {
			if err := m.Statuses[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("statuses" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("statuses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1RunEdge) contextValidateUpstream(ctx context.Context, formats strfmt.Registry) error {

	if m.Upstream != nil {
		if err := m.Upstream.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("upstream")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("upstream")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1RunEdge) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1RunEdge) UnmarshalBinary(b []byte) error {
	var res V1RunEdge
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

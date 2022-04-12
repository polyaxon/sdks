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

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1EntityStageBodyRequest Request data to create/update entity stage
//
// swagger:model v1EntityStageBodyRequest
type V1EntityStageBodyRequest struct {

	// Stage to set
	Condition *V1StageCondition `json:"condition,omitempty"`

	// Entity namespace
	Entity string `json:"entity,omitempty"`

	// Optional kind, only required for an version entity
	Kind string `json:"kind,omitempty"`

	// Name of the entity to apply the stage to
	Name string `json:"name,omitempty"`

	// Owner of the namespace
	Owner string `json:"owner,omitempty"`
}

// Validate validates this v1 entity stage body request
func (m *V1EntityStageBodyRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCondition(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1EntityStageBodyRequest) validateCondition(formats strfmt.Registry) error {
	if swag.IsZero(m.Condition) { // not required
		return nil
	}

	if m.Condition != nil {
		if err := m.Condition.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("condition")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("condition")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 entity stage body request based on the context it is used
func (m *V1EntityStageBodyRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateCondition(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1EntityStageBodyRequest) contextValidateCondition(ctx context.Context, formats strfmt.Registry) error {

	if m.Condition != nil {
		if err := m.Condition.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("condition")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("condition")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1EntityStageBodyRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1EntityStageBodyRequest) UnmarshalBinary(b []byte) error {
	var res V1EntityStageBodyRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

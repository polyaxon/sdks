// Copyright 2018-2021 Polyaxon, Inc.
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
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/validate"
)

// V1CleanPodPolicy CleanPodPolicy
//
// swagger:model v1CleanPodPolicy
type V1CleanPodPolicy string

func NewV1CleanPodPolicy(value V1CleanPodPolicy) *V1CleanPodPolicy {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1CleanPodPolicy.
func (m V1CleanPodPolicy) Pointer() *V1CleanPodPolicy {
	return &m
}

const (

	// V1CleanPodPolicyAll captures enum value "All"
	V1CleanPodPolicyAll V1CleanPodPolicy = "All"

	// V1CleanPodPolicyRunning captures enum value "Running"
	V1CleanPodPolicyRunning V1CleanPodPolicy = "Running"

	// V1CleanPodPolicyNone captures enum value "None"
	V1CleanPodPolicyNone V1CleanPodPolicy = "None"
)

// for schema
var v1CleanPodPolicyEnum []interface{}

func init() {
	var res []V1CleanPodPolicy
	if err := json.Unmarshal([]byte(`["All","Running","None"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1CleanPodPolicyEnum = append(v1CleanPodPolicyEnum, v)
	}
}

func (m V1CleanPodPolicy) validateV1CleanPodPolicyEnum(path, location string, value V1CleanPodPolicy) error {
	if err := validate.EnumCase(path, location, value, v1CleanPodPolicyEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 clean pod policy
func (m V1CleanPodPolicy) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1CleanPodPolicyEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 clean pod policy based on context it is used
func (m V1CleanPodPolicy) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

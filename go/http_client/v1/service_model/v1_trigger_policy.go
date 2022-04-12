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
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/validate"
)

// V1TriggerPolicy TriggerPolicy enum
//
// swagger:model v1TriggerPolicy
type V1TriggerPolicy string

func NewV1TriggerPolicy(value V1TriggerPolicy) *V1TriggerPolicy {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1TriggerPolicy.
func (m V1TriggerPolicy) Pointer() *V1TriggerPolicy {
	return &m
}

const (

	// V1TriggerPolicyAllSucceeded captures enum value "all_succeeded"
	V1TriggerPolicyAllSucceeded V1TriggerPolicy = "all_succeeded"

	// V1TriggerPolicyAllFailed captures enum value "all_failed"
	V1TriggerPolicyAllFailed V1TriggerPolicy = "all_failed"

	// V1TriggerPolicyAllDone captures enum value "all_done"
	V1TriggerPolicyAllDone V1TriggerPolicy = "all_done"

	// V1TriggerPolicyOneSucceeded captures enum value "one_succeeded"
	V1TriggerPolicyOneSucceeded V1TriggerPolicy = "one_succeeded"

	// V1TriggerPolicyOneFailed captures enum value "one_failed"
	V1TriggerPolicyOneFailed V1TriggerPolicy = "one_failed"

	// V1TriggerPolicyOneDone captures enum value "one_done"
	V1TriggerPolicyOneDone V1TriggerPolicy = "one_done"
)

// for schema
var v1TriggerPolicyEnum []interface{}

func init() {
	var res []V1TriggerPolicy
	if err := json.Unmarshal([]byte(`["all_succeeded","all_failed","all_done","one_succeeded","one_failed","one_done"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1TriggerPolicyEnum = append(v1TriggerPolicyEnum, v)
	}
}

func (m V1TriggerPolicy) validateV1TriggerPolicyEnum(path, location string, value V1TriggerPolicy) error {
	if err := validate.EnumCase(path, location, value, v1TriggerPolicyEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 trigger policy
func (m V1TriggerPolicy) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1TriggerPolicyEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 trigger policy based on context it is used
func (m V1TriggerPolicy) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

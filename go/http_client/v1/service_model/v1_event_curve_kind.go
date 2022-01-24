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

// V1EventCurveKind Curve kind
//
// - roc: ROC curve
//  - pr: Precision Recall curve
//  - custom: Custom curve
//
// swagger:model v1EventCurveKind
type V1EventCurveKind string

func NewV1EventCurveKind(value V1EventCurveKind) *V1EventCurveKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1EventCurveKind.
func (m V1EventCurveKind) Pointer() *V1EventCurveKind {
	return &m
}

const (

	// V1EventCurveKindRoc captures enum value "roc"
	V1EventCurveKindRoc V1EventCurveKind = "roc"

	// V1EventCurveKindPr captures enum value "pr"
	V1EventCurveKindPr V1EventCurveKind = "pr"

	// V1EventCurveKindCustom captures enum value "custom"
	V1EventCurveKindCustom V1EventCurveKind = "custom"
)

// for schema
var v1EventCurveKindEnum []interface{}

func init() {
	var res []V1EventCurveKind
	if err := json.Unmarshal([]byte(`["roc","pr","custom"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1EventCurveKindEnum = append(v1EventCurveKindEnum, v)
	}
}

func (m V1EventCurveKind) validateV1EventCurveKindEnum(path, location string, value V1EventCurveKind) error {
	if err := validate.EnumCase(path, location, value, v1EventCurveKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 event curve kind
func (m V1EventCurveKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1EventCurveKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 event curve kind based on context it is used
func (m V1EventCurveKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

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

// V1ProjectVersionKind v1 project version kind
//
// swagger:model v1ProjectVersionKind
type V1ProjectVersionKind string

func NewV1ProjectVersionKind(value V1ProjectVersionKind) *V1ProjectVersionKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1ProjectVersionKind.
func (m V1ProjectVersionKind) Pointer() *V1ProjectVersionKind {
	return &m
}

const (

	// V1ProjectVersionKindComponent captures enum value "component"
	V1ProjectVersionKindComponent V1ProjectVersionKind = "component"

	// V1ProjectVersionKindModel captures enum value "model"
	V1ProjectVersionKindModel V1ProjectVersionKind = "model"

	// V1ProjectVersionKindArtifact captures enum value "artifact"
	V1ProjectVersionKindArtifact V1ProjectVersionKind = "artifact"
)

// for schema
var v1ProjectVersionKindEnum []interface{}

func init() {
	var res []V1ProjectVersionKind
	if err := json.Unmarshal([]byte(`["component","model","artifact"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1ProjectVersionKindEnum = append(v1ProjectVersionKindEnum, v)
	}
}

func (m V1ProjectVersionKind) validateV1ProjectVersionKindEnum(path, location string, value V1ProjectVersionKind) error {
	if err := validate.EnumCase(path, location, value, v1ProjectVersionKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 project version kind
func (m V1ProjectVersionKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1ProjectVersionKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 project version kind based on context it is used
func (m V1ProjectVersionKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

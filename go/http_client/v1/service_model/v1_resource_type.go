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

// V1ResourceType ResourceTypes enum for optmiztion resources
//
// - int: Int resource
//  - float: Float resource
//
// swagger:model v1ResourceType
type V1ResourceType string

func NewV1ResourceType(value V1ResourceType) *V1ResourceType {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1ResourceType.
func (m V1ResourceType) Pointer() *V1ResourceType {
	return &m
}

const (

	// V1ResourceTypeInt captures enum value "int"
	V1ResourceTypeInt V1ResourceType = "int"

	// V1ResourceTypeFloat captures enum value "float"
	V1ResourceTypeFloat V1ResourceType = "float"
)

// for schema
var v1ResourceTypeEnum []interface{}

func init() {
	var res []V1ResourceType
	if err := json.Unmarshal([]byte(`["int","float"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1ResourceTypeEnum = append(v1ResourceTypeEnum, v)
	}
}

func (m V1ResourceType) validateV1ResourceTypeEnum(path, location string, value V1ResourceType) error {
	if err := validate.EnumCase(path, location, value, v1ResourceTypeEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 resource type
func (m V1ResourceType) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1ResourceTypeEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 resource type based on context it is used
func (m V1ResourceType) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

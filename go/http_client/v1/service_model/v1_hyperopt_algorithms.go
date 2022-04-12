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

// V1HyperoptAlgorithms Hyperopt algorithms enum
//
// - tpe: tpe algorithm
//  - rand: random algorithm
//  - anneal: anneal algorithm
//
// swagger:model v1HyperoptAlgorithms
type V1HyperoptAlgorithms string

func NewV1HyperoptAlgorithms(value V1HyperoptAlgorithms) *V1HyperoptAlgorithms {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1HyperoptAlgorithms.
func (m V1HyperoptAlgorithms) Pointer() *V1HyperoptAlgorithms {
	return &m
}

const (

	// V1HyperoptAlgorithmsTpe captures enum value "tpe"
	V1HyperoptAlgorithmsTpe V1HyperoptAlgorithms = "tpe"

	// V1HyperoptAlgorithmsRand captures enum value "rand"
	V1HyperoptAlgorithmsRand V1HyperoptAlgorithms = "rand"

	// V1HyperoptAlgorithmsAnneal captures enum value "anneal"
	V1HyperoptAlgorithmsAnneal V1HyperoptAlgorithms = "anneal"
)

// for schema
var v1HyperoptAlgorithmsEnum []interface{}

func init() {
	var res []V1HyperoptAlgorithms
	if err := json.Unmarshal([]byte(`["tpe","rand","anneal"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1HyperoptAlgorithmsEnum = append(v1HyperoptAlgorithmsEnum, v)
	}
}

func (m V1HyperoptAlgorithms) validateV1HyperoptAlgorithmsEnum(path, location string, value V1HyperoptAlgorithms) error {
	if err := validate.EnumCase(path, location, value, v1HyperoptAlgorithmsEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 hyperopt algorithms
func (m V1HyperoptAlgorithms) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1HyperoptAlgorithmsEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 hyperopt algorithms based on context it is used
func (m V1HyperoptAlgorithms) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

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

// V1RunKind Run kind enum
// Kinds: job, service, dag, matrix, schedule
// Runtime kinds: job, service, dag, spark, dask, flink, ray, mpijob, tfjob
// helper kinds: tuner, watchdog, notifier, cleaner, build
//
// swagger:model v1RunKind
type V1RunKind string

func NewV1RunKind(value V1RunKind) *V1RunKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1RunKind.
func (m V1RunKind) Pointer() *V1RunKind {
	return &m
}

const (

	// V1RunKindJob captures enum value "job"
	V1RunKindJob V1RunKind = "job"

	// V1RunKindService captures enum value "service"
	V1RunKindService V1RunKind = "service"

	// V1RunKindDag captures enum value "dag"
	V1RunKindDag V1RunKind = "dag"

	// V1RunKindSpark captures enum value "spark"
	V1RunKindSpark V1RunKind = "spark"

	// V1RunKindDask captures enum value "dask"
	V1RunKindDask V1RunKind = "dask"

	// V1RunKindFlink captures enum value "flink"
	V1RunKindFlink V1RunKind = "flink"

	// V1RunKindRay captures enum value "ray"
	V1RunKindRay V1RunKind = "ray"

	// V1RunKindMpijob captures enum value "mpijob"
	V1RunKindMpijob V1RunKind = "mpijob"

	// V1RunKindTfjob captures enum value "tfjob"
	V1RunKindTfjob V1RunKind = "tfjob"

	// V1RunKindPytorchjob captures enum value "pytorchjob"
	V1RunKindPytorchjob V1RunKind = "pytorchjob"

	// V1RunKindMxjob captures enum value "mxjob"
	V1RunKindMxjob V1RunKind = "mxjob"

	// V1RunKindXgbjob captures enum value "xgbjob"
	V1RunKindXgbjob V1RunKind = "xgbjob"

	// V1RunKindMatrix captures enum value "matrix"
	V1RunKindMatrix V1RunKind = "matrix"

	// V1RunKindSchedule captures enum value "schedule"
	V1RunKindSchedule V1RunKind = "schedule"

	// V1RunKindTuner captures enum value "tuner"
	V1RunKindTuner V1RunKind = "tuner"

	// V1RunKindWatchdog captures enum value "watchdog"
	V1RunKindWatchdog V1RunKind = "watchdog"

	// V1RunKindNotifier captures enum value "notifier"
	V1RunKindNotifier V1RunKind = "notifier"

	// V1RunKindCleaner captures enum value "cleaner"
	V1RunKindCleaner V1RunKind = "cleaner"

	// V1RunKindBuilder captures enum value "builder"
	V1RunKindBuilder V1RunKind = "builder"
)

// for schema
var v1RunKindEnum []interface{}

func init() {
	var res []V1RunKind
	if err := json.Unmarshal([]byte(`["job","service","dag","spark","dask","flink","ray","mpijob","tfjob","pytorchjob","mxjob","xgbjob","matrix","schedule","tuner","watchdog","notifier","cleaner","builder"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1RunKindEnum = append(v1RunKindEnum, v)
	}
}

func (m V1RunKind) validateV1RunKindEnum(path, location string, value V1RunKind) error {
	if err := validate.EnumCase(path, location, value, v1RunKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 run kind
func (m V1RunKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1RunKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 run kind based on context it is used
func (m V1RunKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

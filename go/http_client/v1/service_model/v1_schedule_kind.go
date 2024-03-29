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

// V1ScheduleKind v1 schedule kind
//
// swagger:model v1ScheduleKind
type V1ScheduleKind string

func NewV1ScheduleKind(value V1ScheduleKind) *V1ScheduleKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1ScheduleKind.
func (m V1ScheduleKind) Pointer() *V1ScheduleKind {
	return &m
}

const (

	// V1ScheduleKindCron captures enum value "cron"
	V1ScheduleKindCron V1ScheduleKind = "cron"

	// V1ScheduleKindInterval captures enum value "interval"
	V1ScheduleKindInterval V1ScheduleKind = "interval"

	// V1ScheduleKindDatetime captures enum value "datetime"
	V1ScheduleKindDatetime V1ScheduleKind = "datetime"
)

// for schema
var v1ScheduleKindEnum []interface{}

func init() {
	var res []V1ScheduleKind
	if err := json.Unmarshal([]byte(`["cron","interval","datetime"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1ScheduleKindEnum = append(v1ScheduleKindEnum, v)
	}
}

func (m V1ScheduleKind) validateV1ScheduleKindEnum(path, location string, value V1ScheduleKind) error {
	if err := validate.EnumCase(path, location, value, v1ScheduleKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 schedule kind
func (m V1ScheduleKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1ScheduleKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 schedule kind based on context it is used
func (m V1ScheduleKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

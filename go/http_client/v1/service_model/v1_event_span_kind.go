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

// V1EventSpanKind Curve kind
//
// swagger:model v1EventSpanKind
type V1EventSpanKind string

func NewV1EventSpanKind(value V1EventSpanKind) *V1EventSpanKind {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1EventSpanKind.
func (m V1EventSpanKind) Pointer() *V1EventSpanKind {
	return &m
}

const (

	// V1EventSpanKindLlm captures enum value "llm"
	V1EventSpanKindLlm V1EventSpanKind = "llm"

	// V1EventSpanKindChain captures enum value "chain"
	V1EventSpanKindChain V1EventSpanKind = "chain"

	// V1EventSpanKindAgent captures enum value "agent"
	V1EventSpanKindAgent V1EventSpanKind = "agent"

	// V1EventSpanKindTool captures enum value "tool"
	V1EventSpanKindTool V1EventSpanKind = "tool"

	// V1EventSpanKindEmbedding captures enum value "embedding"
	V1EventSpanKindEmbedding V1EventSpanKind = "embedding"

	// V1EventSpanKindRetriever captures enum value "retriever"
	V1EventSpanKindRetriever V1EventSpanKind = "retriever"
)

// for schema
var v1EventSpanKindEnum []interface{}

func init() {
	var res []V1EventSpanKind
	if err := json.Unmarshal([]byte(`["llm","chain","agent","tool","embedding","retriever"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1EventSpanKindEnum = append(v1EventSpanKindEnum, v)
	}
}

func (m V1EventSpanKind) validateV1EventSpanKindEnum(path, location string, value V1EventSpanKind) error {
	if err := validate.EnumCase(path, location, value, v1EventSpanKindEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 event span kind
func (m V1EventSpanKind) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1EventSpanKindEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 event span kind based on context it is used
func (m V1EventSpanKind) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

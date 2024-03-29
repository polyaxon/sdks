// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1DiffStoppingPolicy Early stopping with diff factor stopping, this policy computes checks runs against the best run
// and stops those whose performance is worse than the best by the factor defined by the user.
//
// swagger:model v1DiffStoppingPolicy
type V1DiffStoppingPolicy struct {

	// Interval/Frequency for applying the policy.
	EvaluationInterval int32 `json:"evaluationInterval,omitempty"`

	// Kind of this stopping policy, should be equal to "average"
	Kind string `json:"kind,omitempty"`

	// Min interval (e.g steps) before starting the process
	MinInterval int32 `json:"minInterval,omitempty"`

	// Min samples runs succeeded before starting the process
	MinSamples int32 `json:"minSamples,omitempty"`

	// The diff factor, if not given than a zero tolerance policy is applied
	Percent float32 `json:"percent,omitempty"`
}

// Validate validates this v1 diff stopping policy
func (m *V1DiffStoppingPolicy) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 diff stopping policy based on context it is used
func (m *V1DiffStoppingPolicy) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1DiffStoppingPolicy) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1DiffStoppingPolicy) UnmarshalBinary(b []byte) error {
	var res V1DiffStoppingPolicy
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

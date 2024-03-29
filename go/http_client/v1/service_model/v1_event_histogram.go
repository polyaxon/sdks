// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1EventHistogram Histogram spec definition
//
// swagger:model v1EventHistogram
type V1EventHistogram struct {

	// counts
	Counts []float64 `json:"counts"`

	// values
	Values []float64 `json:"values"`
}

// Validate validates this v1 event histogram
func (m *V1EventHistogram) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 event histogram based on context it is used
func (m *V1EventHistogram) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1EventHistogram) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1EventHistogram) UnmarshalBinary(b []byte) error {
	var res V1EventHistogram
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

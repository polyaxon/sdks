// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1RunEdgeLineage single run edge
//
// swagger:model v1RunEdgeLineage
type V1RunEdgeLineage struct {

	// Optional edge run direction
	IsUpstream bool `json:"is_upstream,omitempty"`

	// Run uuid to link
	UUID string `json:"uuid,omitempty"`

	// Optional edge values
	Values interface{} `json:"values,omitempty"`
}

// Validate validates this v1 run edge lineage
func (m *V1RunEdgeLineage) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this v1 run edge lineage based on context it is used
func (m *V1RunEdgeLineage) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1RunEdgeLineage) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1RunEdgeLineage) UnmarshalBinary(b []byte) error {
	var res V1RunEdgeLineage
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

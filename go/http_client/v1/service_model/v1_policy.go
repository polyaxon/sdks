// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Policy Organization policy
//
// swagger:model v1Policy
type V1Policy struct {

	// Authorized agents
	Agents []string `json:"agents"`

	// Optional project archived deletion interval
	ArchivedDeletionInterval int32 `json:"archived_deletion_interval,omitempty"`

	// Connected projects
	ConnectedProjects []string `json:"connected_projects"`

	// Authorized connections
	Connections []string `json:"connections"`

	// Optional time when the entity was created
	// Format: date-time
	CreatedAt strfmt.DateTime `json:"created_at,omitempty"`

	// Default Presets
	DefaultPresets []string `json:"default_presets"`

	// Default Presets ordered
	DefaultPresetsOrdered []string `json:"default_presets_ordered"`

	// Optional description
	Description string `json:"description,omitempty"`

	// Optional project excluded features
	ExcludedFeatures []string `json:"excluded_features"`

	// Optional project excluded runtimes
	ExcludedRuntimes []string `json:"excluded_runtimes"`

	// Required name
	Name string `json:"name,omitempty"`

	// Authorized namespaces
	Namespaces []string `json:"namespaces"`

	// Owner/namespace where the project was created
	Owner string `json:"owner,omitempty"`

	// Authorized Presets
	Presets []string `json:"presets"`

	// Authorized projects
	Projects []string `json:"projects"`

	// Default Queue
	Queue string `json:"queue,omitempty"`

	// Authorized queues
	Queues []string `json:"queues"`

	// Optional tags of this entity
	Tags []string `json:"tags"`

	// Authorized teams
	Teams []string `json:"teams"`

	// Optional last time the entity was updated
	// Format: date-time
	UpdatedAt strfmt.DateTime `json:"updated_at,omitempty"`

	// Authorized users
	UserAccesses []*V1UserAccess `json:"user_accesses"`

	// UUID
	UUID string `json:"uuid,omitempty"`
}

// Validate validates this v1 policy
func (m *V1Policy) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCreatedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUpdatedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUserAccesses(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Policy) validateCreatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.CreatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("created_at", "body", "date-time", m.CreatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1Policy) validateUpdatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.UpdatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("updated_at", "body", "date-time", m.UpdatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1Policy) validateUserAccesses(formats strfmt.Registry) error {
	if swag.IsZero(m.UserAccesses) { // not required
		return nil
	}

	for i := 0; i < len(m.UserAccesses); i++ {
		if swag.IsZero(m.UserAccesses[i]) { // not required
			continue
		}

		if m.UserAccesses[i] != nil {
			if err := m.UserAccesses[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("user_accesses" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("user_accesses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 policy based on the context it is used
func (m *V1Policy) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateUserAccesses(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Policy) contextValidateUserAccesses(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.UserAccesses); i++ {

		if m.UserAccesses[i] != nil {

			if swag.IsZero(m.UserAccesses[i]) { // not required
				return nil
			}

			if err := m.UserAccesses[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("user_accesses" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("user_accesses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Policy) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Policy) UnmarshalBinary(b []byte) error {
	var res V1Policy
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

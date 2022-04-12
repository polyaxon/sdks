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

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Organization Organization specification
//
// swagger:model v1Organization
type V1Organization struct {

	// Auth Settings
	Auth interface{} `json:"auth,omitempty"`

	// Optional time when the entity was created
	// Format: date-time
	CreatedAt strfmt.DateTime `json:"created_at,omitempty"`

	// Optional expiration for support
	Expiration int32 `json:"expiration,omitempty"`

	// Setting to enable viewable metadata on cloud
	IsCloudViewable bool `json:"is_cloud_viewable,omitempty"`

	// Optional flag to tell if this organization is public
	IsPublic bool `json:"is_public,omitempty"`

	// Name
	Name string `json:"name,omitempty"`

	// Plan settings
	Plan interface{} `json:"plan,omitempty"`

	// Default preset
	Preset string `json:"preset,omitempty"`

	// Default queue
	Queue string `json:"queue,omitempty"`

	// Current user's role in this org
	Role string `json:"role,omitempty"`

	// Optional time to revoke support access
	// Format: date-time
	SupportRevokeAt strfmt.DateTime `json:"support_revoke_at,omitempty"`

	// Optional last time the entity was updated
	// Format: date-time
	UpdatedAt strfmt.DateTime `json:"updated_at,omitempty"`

	// Usage info
	Usage interface{} `json:"usage,omitempty"`

	// User
	User string `json:"user,omitempty"`

	// Read-only User email
	UserEmail string `json:"user_email,omitempty"`
}

// Validate validates this v1 organization
func (m *V1Organization) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCreatedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSupportRevokeAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUpdatedAt(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Organization) validateCreatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.CreatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("created_at", "body", "date-time", m.CreatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1Organization) validateSupportRevokeAt(formats strfmt.Registry) error {
	if swag.IsZero(m.SupportRevokeAt) { // not required
		return nil
	}

	if err := validate.FormatOf("support_revoke_at", "body", "date-time", m.SupportRevokeAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1Organization) validateUpdatedAt(formats strfmt.Registry) error {
	if swag.IsZero(m.UpdatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("updated_at", "body", "date-time", m.UpdatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this v1 organization based on context it is used
func (m *V1Organization) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Organization) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Organization) UnmarshalBinary(b []byte) error {
	var res V1Organization
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

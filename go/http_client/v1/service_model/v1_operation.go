// Copyright 2018-2021 Polyaxon, Inc.
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
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Operation Operation specification
//
// swagger:model v1Operation
type V1Operation struct {

	// Optional build process
	Build *V1Build `json:"build,omitempty"`

	// Optional flag to disable cache validation and force run this operation
	Cache *V1Cache `json:"cache,omitempty"`

	// component
	Component *V1Component `json:"component,omitempty"`

	// An optional template containing conditions to check before starting the run
	Conditions string `json:"conditions,omitempty"`

	// Optional field to assign cost to this Component
	Cost float32 `json:"cost,omitempty"`

	// dag ref
	DagRef string `json:"dagRef,omitempty"`

	// Optional graph dependencies of this op
	Dependencies []string `json:"dependencies"`

	// Optional component description override
	Description string `json:"description,omitempty"`

	// Optional events section, must be a valid List of EventTrigger option (Run/Git/Alert/Webhook/Dataset)
	Events []*V1EventTrigger `json:"events"`

	// Optional hooks section
	Hooks []*V1Hook `json:"hooks"`

	// hub ref
	HubRef string `json:"hubRef,omitempty"`

	// Optional flag to mark this specification requires approval before running
	IsApproved bool `json:"isApproved,omitempty"`

	// Optional flag to mark this specification as preset
	IsPreset bool `json:"isPreset,omitempty"`

	// Optional dict of joins
	Joins map[string]V1Join `json:"joins,omitempty"`

	// Optional component kind, should be equal to 'operation'
	Kind string `json:"kind,omitempty"`

	// Optional matrix section, must be a valid matrix option (Random/Grid/BO/Hyperband/Hyperopt/Mapping/Iterative)
	Matrix interface{} `json:"matrix,omitempty"`

	// Optional component name override, should a valid slug
	Name string `json:"name,omitempty"`

	// Optional dict of params
	Params map[string]V1Param `json:"params,omitempty"`

	// Optional patch strategy, default post_merge
	PatchStrategy *V1PatchStrategy `json:"patchStrategy,omitempty"`

	// path ref
	PathRef string `json:"pathRef,omitempty"`

	// Optional plugins to enable
	Plugins *V1Plugins `json:"plugins,omitempty"`

	// Optional list of presets to use for running this operation
	Presets []string `json:"presets"`

	// Optional queue to use for running this operation
	Queue string `json:"queue,omitempty"`

	// Optional a run section to override the content of the run in the template
	// should be one of: Job/Service/Spark/Flink/Kubeflow/Dask/Dag
	RunPatch interface{} `json:"runPatch,omitempty"`

	// Optional schedule section, must be a valid Schedule option (Cron/Interval/Repeatable/ExactTime)
	Schedule interface{} `json:"schedule,omitempty"`

	// Optional flag to skip this run if upstream was skipped
	SkipOnUpstreamSkip bool `json:"skipOnUpstreamSkip,omitempty"`

	// Optional component tags override
	Tags []string `json:"tags"`

	// Optional to mark this specification as template with instructions
	Template *V1Template `json:"template,omitempty"`

	// optional termination section
	Termination *V1Termination `json:"termination,omitempty"`

	// Optional trigger policy
	Trigger *V1TriggerPolicy `json:"trigger,omitempty"`

	// url ref
	URLRef string `json:"urlRef,omitempty"`

	// Spec version
	Version float32 `json:"version,omitempty"`
}

// Validate validates this v1 operation
func (m *V1Operation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBuild(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateCache(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateComponent(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEvents(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateHooks(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateJoins(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateParams(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePatchStrategy(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePlugins(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTemplate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTermination(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTrigger(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Operation) validateBuild(formats strfmt.Registry) error {
	if swag.IsZero(m.Build) { // not required
		return nil
	}

	if m.Build != nil {
		if err := m.Build.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("build")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("build")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateCache(formats strfmt.Registry) error {
	if swag.IsZero(m.Cache) { // not required
		return nil
	}

	if m.Cache != nil {
		if err := m.Cache.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateComponent(formats strfmt.Registry) error {
	if swag.IsZero(m.Component) { // not required
		return nil
	}

	if m.Component != nil {
		if err := m.Component.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("component")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("component")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateEvents(formats strfmt.Registry) error {
	if swag.IsZero(m.Events) { // not required
		return nil
	}

	for i := 0; i < len(m.Events); i++ {
		if swag.IsZero(m.Events[i]) { // not required
			continue
		}

		if m.Events[i] != nil {
			if err := m.Events[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("events" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("events" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) validateHooks(formats strfmt.Registry) error {
	if swag.IsZero(m.Hooks) { // not required
		return nil
	}

	for i := 0; i < len(m.Hooks); i++ {
		if swag.IsZero(m.Hooks[i]) { // not required
			continue
		}

		if m.Hooks[i] != nil {
			if err := m.Hooks[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("hooks" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("hooks" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) validateJoins(formats strfmt.Registry) error {
	if swag.IsZero(m.Joins) { // not required
		return nil
	}

	for k := range m.Joins {

		if err := validate.Required("joins"+"."+k, "body", m.Joins[k]); err != nil {
			return err
		}
		if val, ok := m.Joins[k]; ok {
			if err := val.Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("joins" + "." + k)
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("joins" + "." + k)
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) validateParams(formats strfmt.Registry) error {
	if swag.IsZero(m.Params) { // not required
		return nil
	}

	for k := range m.Params {

		if err := validate.Required("params"+"."+k, "body", m.Params[k]); err != nil {
			return err
		}
		if val, ok := m.Params[k]; ok {
			if err := val.Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("params" + "." + k)
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("params" + "." + k)
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) validatePatchStrategy(formats strfmt.Registry) error {
	if swag.IsZero(m.PatchStrategy) { // not required
		return nil
	}

	if m.PatchStrategy != nil {
		if err := m.PatchStrategy.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("patchStrategy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("patchStrategy")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validatePlugins(formats strfmt.Registry) error {
	if swag.IsZero(m.Plugins) { // not required
		return nil
	}

	if m.Plugins != nil {
		if err := m.Plugins.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("plugins")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("plugins")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateTemplate(formats strfmt.Registry) error {
	if swag.IsZero(m.Template) { // not required
		return nil
	}

	if m.Template != nil {
		if err := m.Template.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("template")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("template")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateTermination(formats strfmt.Registry) error {
	if swag.IsZero(m.Termination) { // not required
		return nil
	}

	if m.Termination != nil {
		if err := m.Termination.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("termination")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("termination")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) validateTrigger(formats strfmt.Registry) error {
	if swag.IsZero(m.Trigger) { // not required
		return nil
	}

	if m.Trigger != nil {
		if err := m.Trigger.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 operation based on the context it is used
func (m *V1Operation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateBuild(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateCache(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateComponent(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateEvents(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateHooks(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateJoins(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateParams(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidatePatchStrategy(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidatePlugins(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTemplate(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTermination(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTrigger(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Operation) contextValidateBuild(ctx context.Context, formats strfmt.Registry) error {

	if m.Build != nil {
		if err := m.Build.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("build")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("build")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateCache(ctx context.Context, formats strfmt.Registry) error {

	if m.Cache != nil {
		if err := m.Cache.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateComponent(ctx context.Context, formats strfmt.Registry) error {

	if m.Component != nil {
		if err := m.Component.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("component")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("component")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateEvents(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Events); i++ {

		if m.Events[i] != nil {
			if err := m.Events[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("events" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("events" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) contextValidateHooks(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Hooks); i++ {

		if m.Hooks[i] != nil {
			if err := m.Hooks[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("hooks" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("hooks" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) contextValidateJoins(ctx context.Context, formats strfmt.Registry) error {

	for k := range m.Joins {

		if val, ok := m.Joins[k]; ok {
			if err := val.ContextValidate(ctx, formats); err != nil {
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) contextValidateParams(ctx context.Context, formats strfmt.Registry) error {

	for k := range m.Params {

		if val, ok := m.Params[k]; ok {
			if err := val.ContextValidate(ctx, formats); err != nil {
				return err
			}
		}

	}

	return nil
}

func (m *V1Operation) contextValidatePatchStrategy(ctx context.Context, formats strfmt.Registry) error {

	if m.PatchStrategy != nil {
		if err := m.PatchStrategy.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("patchStrategy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("patchStrategy")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidatePlugins(ctx context.Context, formats strfmt.Registry) error {

	if m.Plugins != nil {
		if err := m.Plugins.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("plugins")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("plugins")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateTemplate(ctx context.Context, formats strfmt.Registry) error {

	if m.Template != nil {
		if err := m.Template.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("template")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("template")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateTermination(ctx context.Context, formats strfmt.Registry) error {

	if m.Termination != nil {
		if err := m.Termination.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("termination")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("termination")
			}
			return err
		}
	}

	return nil
}

func (m *V1Operation) contextValidateTrigger(ctx context.Context, formats strfmt.Registry) error {

	if m.Trigger != nil {
		if err := m.Trigger.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Operation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Operation) UnmarshalBinary(b []byte) error {
	var res V1Operation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

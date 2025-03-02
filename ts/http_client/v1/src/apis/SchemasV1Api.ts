/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RuntimeError,
  V1Schemas,
} from '../models';
import {
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1SchemasFromJSON,
    V1SchemasToJSON,
} from '../models';

/**
 *
 */
export class SchemasV1Api extends runtime.BaseAPI {

    /**
     * NoOp
     */
    async noOpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Schemas>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/schemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SchemasFromJSON(jsonValue));
    }

    /**
     * NoOp
     */
    async noOp(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Schemas> {
        const response = await this.noOpRaw(initOverrides);
        return await response.value();
    }

}

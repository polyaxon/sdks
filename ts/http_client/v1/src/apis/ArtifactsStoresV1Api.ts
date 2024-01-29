/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface UploadArtifactRequest {
    owner: string;
    uuid: string;
    uploadfile: Blob;
    path?: string;
    overwrite?: boolean;
}

/**
 *
 */
export class ArtifactsStoresV1Api extends runtime.BaseAPI {

    /**
     * Upload artifact to a store
     */
    async uploadArtifactRaw(requestParameters: UploadArtifactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling uploadArtifact.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling uploadArtifact.');
        }

        if (requestParameters.uploadfile === null || requestParameters.uploadfile === undefined) {
            throw new runtime.RequiredError('uploadfile','Required parameter requestParameters.uploadfile was null or undefined when calling uploadArtifact.');
        }

        const queryParameters: any = {};

        if (requestParameters.path !== undefined) {
            queryParameters['path'] = requestParameters.path;
        }

        if (requestParameters.overwrite !== undefined) {
            queryParameters['overwrite'] = requestParameters.overwrite;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.uploadfile !== undefined) {
            formParams.append('uploadfile', requestParameters.uploadfile as any);
        }

        const response = await this.request({
            path: `/api/v1/catalogs/{owner}/artifacts/{uuid}/upload`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload artifact to a store
     */
    async uploadArtifact(requestParameters: UploadArtifactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uploadArtifactRaw(requestParameters, initOverrides);
    }

}

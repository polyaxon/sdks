/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1Environment
 */
export interface V1Environment {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Environment
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Environment
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Environment
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * 
     * @type {object}
     * @memberof V1Environment
     */
    affinity?: object;
    /**
     * Optional Tolerations to apply.
     * @type {Array<object>}
     * @memberof V1Environment
     */
    tolerations?: Array<object>;
    /**
     * Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty,
     * the scheduler simply schedules this pod onto that node, assuming that it fits resource
     * requirements.
     * @type {string}
     * @memberof V1Environment
     */
    nodeName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Environment
     */
    serviceAccountName?: string;
    /**
     * Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.
     * @type {Array<object>}
     * @memberof V1Environment
     */
    hostAliases?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof V1Environment
     */
    securityContext?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Environment
     */
    imagePullSecrets?: Array<string>;
    /**
     * Host networking requested for this workflow pod. Default to false.
     * @type {boolean}
     * @memberof V1Environment
     */
    hostNetwork?: boolean;
    /**
     * Use the host's pid namespace. Default to false.
     * @type {string}
     * @memberof V1Environment
     */
    hostPID?: string;
    /**
     * Set DNS policy for the pod.
     * Defaults to "ClusterFirst".
     * Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'.
     * DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.
     * To have DNS options set along with hostNetwork, you have to specify DNS policy
     * explicitly to 'ClusterFirstWithHostNet'.
     * @type {string}
     * @memberof V1Environment
     */
    dnsPolicy?: string;
    /**
     * 
     * @type {object}
     * @memberof V1Environment
     */
    dnsConfig?: object;
    /**
     * 
     * @type {string}
     * @memberof V1Environment
     */
    schedulerName?: string;
    /**
     * If specified, indicates the pod's priority. "system-node-critical" and
     * "system-cluster-critical" are two special keywords which indicate the
     * highest priorities with the former being the highest priority. Any other
     * name must be defined by creating a PriorityClass object with that name.
     * If not specified, the pod priority will be default or zero if there is no
     * default.
     * @type {string}
     * @memberof V1Environment
     */
    priorityClassName?: string;
    /**
     * The priority value. Various system components use this field to find the
     * priority of the pod. When Priority Admission Controller is enabled, it
     * prevents users from setting this field. The admission controller populates
     * this field from PriorityClassName.
     * The higher the value, the higher the priority.
     * @type {number}
     * @memberof V1Environment
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof V1Environment
     */
    restartPolicy?: string;
}

/**
 * Check if a given object implements the V1Environment interface.
 */
export function instanceOfV1Environment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EnvironmentFromJSON(json: any): V1Environment {
    return V1EnvironmentFromJSONTyped(json, false);
}

export function V1EnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Environment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'nodeSelector': !exists(json, 'nodeSelector') ? undefined : json['nodeSelector'],
        'affinity': !exists(json, 'affinity') ? undefined : json['affinity'],
        'tolerations': !exists(json, 'tolerations') ? undefined : json['tolerations'],
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'hostAliases': !exists(json, 'hostAliases') ? undefined : json['hostAliases'],
        'securityContext': !exists(json, 'securityContext') ? undefined : json['securityContext'],
        'imagePullSecrets': !exists(json, 'imagePullSecrets') ? undefined : json['imagePullSecrets'],
        'hostNetwork': !exists(json, 'hostNetwork') ? undefined : json['hostNetwork'],
        'hostPID': !exists(json, 'hostPID') ? undefined : json['hostPID'],
        'dnsPolicy': !exists(json, 'dnsPolicy') ? undefined : json['dnsPolicy'],
        'dnsConfig': !exists(json, 'dnsConfig') ? undefined : json['dnsConfig'],
        'schedulerName': !exists(json, 'schedulerName') ? undefined : json['schedulerName'],
        'priorityClassName': !exists(json, 'priorityClassName') ? undefined : json['priorityClassName'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'restartPolicy': !exists(json, 'restartPolicy') ? undefined : json['restartPolicy'],
    };
}

export function V1EnvironmentToJSON(value?: V1Environment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'annotations': value.annotations,
        'nodeSelector': value.nodeSelector,
        'affinity': value.affinity,
        'tolerations': value.tolerations,
        'nodeName': value.nodeName,
        'serviceAccountName': value.serviceAccountName,
        'hostAliases': value.hostAliases,
        'securityContext': value.securityContext,
        'imagePullSecrets': value.imagePullSecrets,
        'hostNetwork': value.hostNetwork,
        'hostPID': value.hostPID,
        'dnsPolicy': value.dnsPolicy,
        'dnsConfig': value.dnsConfig,
        'schedulerName': value.schedulerName,
        'priorityClassName': value.priorityClassName,
        'priority': value.priority,
        'restartPolicy': value.restartPolicy,
    };
}


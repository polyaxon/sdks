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

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.17.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum V1ConnectionKind {
    HostPath = 'host_path',
    VolumeClaim = 'volume_claim',
    Gcs = 'gcs',
    S3 = 's3',
    Wasb = 'wasb',
    Registry = 'registry',
    Git = 'git',
    Aws = 'aws',
    Gcp = 'gcp',
    Azure = 'azure',
    Mysql = 'mysql',
    Postgres = 'postgres',
    Oracle = 'oracle',
    Vertica = 'vertica',
    Sqlite = 'sqlite',
    Mssql = 'mssql',
    Redis = 'redis',
    Presto = 'presto',
    Mongo = 'mongo',
    Cassandra = 'cassandra',
    Ftp = 'ftp',
    Grpc = 'grpc',
    Hdfs = 'hdfs',
    Http = 'http',
    PigCli = 'pig_cli',
    HiveCli = 'hive_cli',
    HiveMetastore = 'hive_metastore',
    HiveServer2 = 'hive_server2',
    Jdbc = 'jdbc',
    Jenkins = 'jenkins',
    Samba = 'samba',
    Snowflake = 'snowflake',
    Ssh = 'ssh',
    Cloudant = 'cloudant',
    Databricks = 'databricks',
    Segment = 'segment',
    Slack = 'slack',
    Discord = 'discord',
    Mattermost = 'mattermost',
    Pagerduty = 'pagerduty',
    Hipchat = 'hipchat',
    Webhook = 'webhook',
    Custom = 'custom'
}

export function V1ConnectionKindFromJSON(json: any): V1ConnectionKind {
    return V1ConnectionKindFromJSONTyped(json, false);
}

export function V1ConnectionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectionKind {
    return json as V1ConnectionKind;
}

export function V1ConnectionKindToJSON(value?: V1ConnectionKind | null): any {
    return value as any;
}


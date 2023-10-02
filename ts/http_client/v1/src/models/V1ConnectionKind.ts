/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc50
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 * @export
 */
export const V1ConnectionKind = {
    HostPath: 'host_path',
    VolumeClaim: 'volume_claim',
    Gcs: 'gcs',
    S3: 's3',
    Wasb: 'wasb',
    Registry: 'registry',
    Git: 'git',
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure',
    Mysql: 'mysql',
    Postgres: 'postgres',
    Oracle: 'oracle',
    Vertica: 'vertica',
    Sqlite: 'sqlite',
    Mssql: 'mssql',
    Redis: 'redis',
    Presto: 'presto',
    Mongo: 'mongo',
    Cassandra: 'cassandra',
    Ftp: 'ftp',
    Grpc: 'grpc',
    Hdfs: 'hdfs',
    Http: 'http',
    PigCli: 'pig_cli',
    HiveCli: 'hive_cli',
    HiveMetastore: 'hive_metastore',
    HiveServer2: 'hive_server2',
    Jdbc: 'jdbc',
    Jenkins: 'jenkins',
    Samba: 'samba',
    Snowflake: 'snowflake',
    Ssh: 'ssh',
    Cloudant: 'cloudant',
    Databricks: 'databricks',
    Segment: 'segment',
    Slack: 'slack',
    Discord: 'discord',
    Mattermost: 'mattermost',
    Pagerduty: 'pagerduty',
    Hipchat: 'hipchat',
    Webhook: 'webhook',
    Custom: 'custom'
} as const;
export type V1ConnectionKind = typeof V1ConnectionKind[keyof typeof V1ConnectionKind];


export function V1ConnectionKindFromJSON(json: any): V1ConnectionKind {
    return V1ConnectionKindFromJSONTyped(json, false);
}

export function V1ConnectionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectionKind {
    return json as V1ConnectionKind;
}

export function V1ConnectionKindToJSON(value?: V1ConnectionKind | null): any {
    return value as any;
}


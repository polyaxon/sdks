# V1SparkJob


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'spark_job']
**connections** | **List[str]** |  | [optional] 
**volumes** | **List[object]** | Volumes is a list of volumes that can be mounted. | [optional] 
**type** | [**V1SparkJobType**](V1SparkJobType.md) |  | [optional] 
**spark_version** | **str** | Spark version is the version of Spark the application uses. | [optional] 
**python_version** | **str** | Spark version is the version of Spark the application uses. | [optional] 
**deploy_mode** | [**SparkJobDeployMode**](SparkJobDeployMode.md) |  | [optional] 
**main_class** | **str** | MainClass is the fully-qualified main class of the Spark application. This only applies to Java/Scala Spark applications. | [optional] 
**main_application_file** | **str** | MainFile is the path to a bundled JAR, Python, or R file of the application. | [optional] 
**arguments** | **List[str]** | Arguments is a list of arguments to be passed to the application. | [optional] 
**hadoop_conf** | **Dict[str, str]** | HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \&quot;--conf\&quot; option in spark-submit.  The SparkApplication controller automatically adds prefix \&quot;spark.hadoop.\&quot; to Hadoop configuration properties. | [optional] 
**spark_conf** | **Dict[str, str]** | HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \&quot;--conf\&quot; option in spark-submit.  The SparkApplication controller automatically adds prefix \&quot;spark.hadoop.\&quot; to Hadoop configuration properties. | [optional] 
**spark_config_map** | **str** | SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties. The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to. | [optional] 
**hadoop_config_map** | **str** | HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml. The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to. | [optional] 
**executor** | [**V1SparkReplica**](V1SparkReplica.md) |  | [optional] 
**driver** | [**V1SparkReplica**](V1SparkReplica.md) |  | [optional] 

## Example

```python
from polyaxon_sdk.models.v1_spark_job import V1SparkJob

# TODO update the JSON string below
json = "{}"
# create an instance of V1SparkJob from a JSON string
v1_spark_job_instance = V1SparkJob.from_json(json)
# print the JSON string representation of the object
print V1SparkJob.to_json()

# convert the object into a dict
v1_spark_job_dict = v1_spark_job_instance.to_dict()
# create an instance of V1SparkJob from a dict
v1_spark_job_form_dict = v1_spark_job.from_dict(v1_spark_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



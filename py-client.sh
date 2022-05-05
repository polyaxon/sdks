if [ $? -eq 0 ]; then
    if [ "$1" = "sync" ]; then
        mkdir -p python/http_client/v1/polyaxon_sdk/sync_client
        mv python/http_client/v1/polyaxon_sdk/api_client.py python/http_client/v1/polyaxon_sdk/sync_client/
        mv python/http_client/v1/polyaxon_sdk/rest.py python/http_client/v1/polyaxon_sdk/sync_client/
        rm -rf python/http_client/v1/polyaxon_sdk/configuration.py python/http_client/v1/polyaxon_sdk/sync_client/
    elif [ "$1" = "async" ]; then
        mkdir -p python/http_client/v1/polyaxon_sdk/async_client
        mv python/http_client/v1/polyaxon_sdk/api_client.py python/http_client/v1/polyaxon_sdk/async_client/
        mv python/http_client/v1/polyaxon_sdk/rest.py python/http_client/v1/polyaxon_sdk/async_client/
        rm -rf python/http_client/v1/polyaxon_sdk/configuration.py python/http_client/v1/polyaxon_sdk/async_client/
    fi
fi

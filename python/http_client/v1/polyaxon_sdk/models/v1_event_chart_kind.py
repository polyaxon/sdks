# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.3-rc0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1EventChartKind(str, Enum):
    """
    - plotly: Plotly chart  - bokeh: Bokeh chart  - vega: Vega chart
    """

    """
    allowed enum values
    """
    PLOTLY = 'plotly'
    BOKEH = 'bokeh'
    VEGA = 'vega'


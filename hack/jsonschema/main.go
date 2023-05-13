package main

import (
	"encoding/json"
	"os"
)

func main() {
	swagger := obj{}
	{
		f, err := os.Open("jsonschema/v1/polyaxon_sdk.swagger.json")
		if err != nil {
			panic(err)
		}
		err = json.NewDecoder(f).Decode(&swagger)
		if err != nil {
			panic(err)
		}
	}
	{
		definitions := swagger["definitions"]
		schema := obj{
			"$id":     "http://core.polyaxon.com/operations.json",
			"$schema": "http://json-schema.org/schema#",
			"type":    "object",
			"oneOf": []interface{}{
				obj{"$ref": "#/definitions/v1CompiledOperation"},
				obj{"$ref": "#/definitions/v1Operation"},
				obj{"$ref": "#/definitions/v1Component"},
			},
			"definitions": definitions,
		}
		f, err := os.Create("jsonschema/v1/polyaxonfile.schema.json")
		if err != nil {
			panic(err)
		}
		e := json.NewEncoder(f)
		e.SetIndent("", "  ")
		err = e.Encode(schema)
		if err != nil {
			panic(err)
		}
		err = f.Close()
		if err != nil {
			panic(err)
		}
	}
}


export const schema = {
  "title": "",
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {"type": "string", "title": "Title", "default": "A new task"},
    "date": {"type": "string", "title": "Date", "format": "date"},
    "done": {"type": "boolean", "title": "Done?", "default": false}
  }
};

export const uischema =  {
  "title": { classNames: "col-xs-12 col-md-8 col-lg-3" },
  "date": { classNames: "col-xs-12 col-md-8 col-lg-3" }
};

export const swaggerschema = {
  "swagger": "2.0", "info": { "version": "v1", "title": "ToWeb.JsonApi" }, "host": "localhost:62885", "schemes": ["http"], "paths": { "/api/GetById": { "get": { "tags": ["StaticPocoDictionary"], "operationId": "StaticPocoDictionary_Get", "consumes": [], "produces": ["application/json", "text/json", "application/xml", "text/xml"], "parameters": [{ "name": "key", "in": "query", "required": true, "type": "string" }], "responses": { "200": { "description": "OK", "schema": { "$ref": "#/definitions/Poco" } }, "404": { "description": "NotFound" } }, "deprecated": false } }, "/api/GetAll": { "get": { "tags": ["StaticPocoDictionary"], "operationId": "StaticPocoDictionary_GetAll", "consumes": [], "produces": ["application/json", "text/json", "application/xml", "text/xml"], "responses": { "200": { "description": "OK", "schema": { "type": "object", "additionalProperties": { "$ref": "#/definitions/Poco" } } } }, "deprecated": false } }, "/api/Post": { "post": { "tags": ["StaticPocoDictionary"], "operationId": "StaticPocoDictionary_Post", "consumes": ["application/json", "text/json", "application/xml", "text/xml", "application/x-www-form-urlencoded"], "produces": ["application/json", "text/json", "application/xml", "text/xml"], "parameters": [{ "name": "key", "in": "query", "required": true, "type": "string" }, { "name": "poco", "in": "body", "required": true, "schema": { "$ref": "#/definitions/Poco" } }], "responses": { "200": { "description": "OK", "schema": { "$ref": "#/definitions/PocoContainer" } }, "201": { "description": "Created", "schema": { "$ref": "#/definitions/PocoContainer" } }, "400": { "description": "BadRequest" }, "404": { "description": "NotFound" } }, "deprecated": false } }, "/api/Delete": { "delete": { "tags": ["StaticPocoDictionary"], "operationId": "StaticPocoDictionary_Delete", "consumes": [], "produces": [], "parameters": [{ "name": "key", "in": "query", "required": true, "type": "string" }], "responses": { "204": { "description": "No Content" } }, "deprecated": false } } }, "definitions": { "Object": { "type": "object", "properties": {} }, "Poco": { "required": ["Title", "Date"], "type": "object", "properties": { "Title": { "type": "string" }, "Date": { "format": "date-time", "type": "string" }, "Comment": { "maxLength": 200, "minLength": 0, "type": "string" }, "Done": { "type": "boolean" } } }, "PocoContainer": { "type": "object", "properties": { "Key": { "type": "string" }, "Body": { "$ref": "#/definitions/Poco" }, "Errors": { "type": "array", "items": { "$ref": "#/definitions/Error" } } } }, "Error": { "type": "object", "properties": { "MemberName": { "type": "string" }, "ErrorMessage": { "type": "string" } } } }
}
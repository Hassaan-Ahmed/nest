type JSONValue = string | number | boolean | null | JSONArray | JSONObject;

export interface JSONObject {
  [k: string]: JSONValue;
}

export type JSONArray = Array<JSONValue>

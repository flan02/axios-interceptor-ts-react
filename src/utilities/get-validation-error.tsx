import { TypeWithKey } from "../models/type-with-keys"

export const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    "ERR_NETWORK": "Se rompio toda la red, no se puede conectar al servidor",
    "ERR_NAME_NOT_RESOLVED": "No se pudo resolver el nombre del servidor",
  }
  return codeMatcher[errorCode]
}
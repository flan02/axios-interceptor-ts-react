import { TypeWithKey } from "../models/type-with-keys"

// TODO Estos codigos de error tienen que estar consentidos con el backend deben ser iguales
// ? Zod tiene un metodo para validar los errores de validacion iguales entre el backend y el frontend

export const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    "required": "Este campo es requerido",
    "minLength": "Este campo debe tener al menos 8 caracteres",
    "maxLength": "Este campo debe tener menos de 20 caracteres",
    "pattern": "Este campo no es valido",
    "min": "Este campo debe ser mayor a 0",
    "max": "Este campo debe ser menor a 100",
    "email": "Este campo debe ser un correo valido",
    "notEqual": "Los campos deben ser iguales",
    "alreadyExists": "Este campo ya existe",
    "withoutSpecialCharacters": "Este campo no debe tener caracteres especiales",
    "ECONNABORTED": "La conexion fue abortada",
    "ERR_NETWORK": "Se rompio toda la red, no se puede conectar al servidor",
    "ERR_NAME_NOT_RESOLVED": "No se pudo resolver el nombre del servidor",
    "ERR_CONNECTION_REFUSED": "El servidor rechazo la conexion",
    "ERR_EMPTY_RESPONSE": "El servidor no responde",
    "ERR_ABORTED": "La conexion fue abortada",
    "ERR_CONNECTION_RESET": "La conexion fue reiniciada",
    "ERR_INTERNET_DISCONNECTED": "No hay conexion a internet",
    "ERR_CONNECTION_TIMED_OUT": "La conexion se agoto",
    "ERR_CERT_AUTHORITY_INVALID": "El certificado no es valido",
    "ERR_CERT_COMMON_NAME_INVALID": "El nombre del certificado no es valido",
    "ERR_CERT_DATE_INVALID": "El certificado esta vencido",
    "ERR_CERT_END": "El certificado no es valido",
    "ERR_CERT_ERROR_IN_SSL_RENEGOTIATION": "Error en la renegociacion del certificado",
    "ERR_CERT_INVALID": "El certificado no es valido",
  }
  return codeMatcher[errorCode]
}
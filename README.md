# axios-interceptor-ts-react
Handling data with Axios Interceptor written in TS

# Error Boundaries funciona en dos casos fundamentales
1 - Se orienta a errores de javascript durante el Render
2 - Los errores se dan durante un hook, como ejemplo useEffect
* Cualquier otra cosa, como los setTimeout, no se pueden manejar con Error Boundaries

## Error Boundaries hace burbujeo de errores
Si un componente padre no tiene error boundaries, el error se va a propagar e ir al hijo y se evaluara si tiene error, sino tiene error pero tiene hijos se seguira propagando y tambien los evaluara.

### Aunque es mejor practica utilizar los Errorboundaries por secciones que yo desee que yo conozca qe puede saltar un error, asi controlo que no explote toda la aplicacion.

## En nuestro proyecto profesional, cada seccion debe tener un manejo de Error para cada seccion, para que no explote toda la aplicacion.
Evitemos el error 500 para que no explote toda la aplicacion, y que siga funcionando.
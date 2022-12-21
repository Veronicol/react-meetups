# React-Meetup

## Arrancar el proyecto

### Prerrequisitos

Tener instalado `Node.js`.

### `npm start`

Para abrir la aplicación en modo de desarrollo:
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

### `npm test`

Lanza los tests de la aplicación y se queda realizando una escucha activa que los relanza si hay cambios.

## Decisiones de proyecto

He utilizado componentes funcionales y hooks para manejo de los ciclos de vida, tratando de generar los mínimos renderizados indispensables para la actualización de la información.

He instalado las siguientes librerías externas:

- `react-router` para la implementación de rutas de navegación
- `redux` para el manejo de estado global
- `uuid` para la creación de ids únicos en las altas de meetups

### Organización

Aunque es un proyecto muy pequeño, he organizado los archivos y carpetas para que éste sea fácilmente escalable. He separado las capas del proyecto siguiendo el principio de responsabilidad única, y por ello he creado un servicio para las llamadas (que en un futuro podrían ser a una API) y un modelo para el mapeo de datos necesario para el renderizado en los componentes.

### Testing

He modificado los tests existentes en el código recibido para que fueran correctos tras los cambios implementados, y he completado la suite de tests del componente `MeetupItem`.
Como librería de testing unitario, he continuado utilizando `enzyme`, ya que era la implementada en el código recibido.

### Redux

He implantado Redux para la gestión del estado global de la aplicación, en cuya store se centralizan los datos de listado de meetups (existentes definidos en el proyecto y nuevos creados mediante el formulario de alta), y favoritos.
La decisión de optar por una librería externa, como es Redux, en lugar de utilizar directamente los Context de React ha venido derivada por la escaliabilidad que aporta la solución elegida. En caso de tener que implementar algún estado transversal a toda la aplicación, como Idioma o Tema global (modo claro-oscuro, por ejemplo), habría optado por Context.

## Próximas iteraciones

En caso de seguir desarrollando este proyecto, los pasos más inmediatos serían:

- Implementación de una API para la persistencia de datos
- Gestión de errores en las llamadas que actualizan el estado global
- Loading durante la carga de datos
- Utilizar testing-library como librería de tests unitarios en lugar de enzyme.
- Completar el testing de la aplicación

### Proyecto Final GSC-UTN
## Alumno
Pucheta, Juan Ignacio - Legajo 46899

## Encunciado del TP
La idea es desarrollar un sistema de préstamos de objetos (de aquí en adelante, les diremos
cosas ya que “objeto” se puede confundir con la palabra reservada object).
A quien no le sucedió que le prestó algo a un amigo o amiga y más tarde se olvido a quien se lo
prestó y cuando. La idea de este sistema es ayudarnos a recordar a quien y cuando se lo
prestamos.
El sistema va a contar con 4 entidades. Categorías, Cosas, Personas y Préstamos (relación
entre cosas y personas). Modelo de Dominio al final
Para el final del curso, como mínimo, cada alumno deberá entregar:
- Alta de Categorías por defecto en una aplicación de consola (o WebAPI). La aplicación
solo debe agregar las categorías en caso de que las mismas no existan.
- ABM de Personas con Web API
- ABM de Cosas en una aplicación MVC
- Marcar el préstamo como devuelto con una llamada de gRPC.
- Proyecto de UnitTests que pruebe un controller (puede ser del proyecto de MVC o del
proyecto de WebAPI).
- Del lado del frontend (Angular), armar una página de Login, que me permita acceder al
sistema (Llamando a las APIs de Autenticacion). Una vez ingresado vamos a poder
acceder a un ABM de personas la cual debe estar segurizada usando JWT.

**Requisitos Tecnicos**
- App en NetCore 7 u 8
- Uso de EntityFramework Core en toda la solución
- La solución debe ser entregada en Github y compartida con el del profesor.

**Opcional**
- Implementar Logging en archivos
- Implementar Automapper

# Aplicacion de Angular

> [!NOTE]  
> La información completa de este proyecto se encontrará en el siguiente repositorio:
> https://github.com/Derek486/hotelier-management-stack.git 

Para ejecutar esta aplicación puede ser utilizado el comando `ng serve` y dirigirse a `http://localhost:4200/`, para ello será necesario primero tener configurado el backend y el CORS al puerto 4200. 

## Ejecución con nginx:

Si se desea hacer uso del servidor de nginx, primero se deberá de comprimir el proyecto con `ng build` y modificar el archivo `nginx-custom.conf` para que el root direccione al index.html del directorio `dist/<proyect>/` resultante luego de construir el proyecto con `ng build`, el archivo de configuración de nginx iría dentro de las configuraciones de donde esté ubicado el servidor en su máquina local, o sino también puede reemplazar su contenido con el ya existente.

Para iniciar el servidor de nginx se puede hacer uso del comando `start nginx` en windows, si está utilizando Docker pues puede ejecutar los siguientes comandos:

```
docker build -t angular_pweb .
docker run -d -p 80:80 --name angular angular_pweb
```

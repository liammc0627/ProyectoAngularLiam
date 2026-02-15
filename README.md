# Gestión Carta Restaurante - Angular

Proyecto de gestión de carta de restaurante desarrollado con Angular.

## Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Instalar Bootstrap:

```bash
npm install bootstrap
```

## Ejecutar el proyecto

1. Iniciar el servidor JSON (desde la carpeta server):

```bash
cd server
npx json-server --watch db.json
```

2. En otra terminal, iniciar Angular:

```bash
ng serve
```

3. Abrir el navegador en `http://localhost:4200`

## Usuarios de prueba

- **Chef**: usuario: `chef`, contraseña: `chef`
- **Usuario**: usuario: `user1`, contraseña: `1234`

## Características

- ✅ Componentes standalone con imports
- ✅ Rutas con RouterOutlet y RouterLink
- ✅ Servicios con HttpClient (GET, POST, PUT, PATCH, DELETE)
- ✅ Observables con async pipe
- ✅ Property binding y Event binding
- ✅ Two-way binding con ngModel
- ✅ Pipes personalizados para filtrado
- ✅ @if y @for para control de flujo
- ✅ @Input y @Output (si decides añadir componentes hijos)
- ✅ Validación manual de formularios
- ✅ Login simplificado sin guards (estado en servicio)

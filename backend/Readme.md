# Proyecto Hito 2 - Backend

## Descripción
Este repositorio contiene el backend del proyecto "Hito 3" desarrollado con Node.js, Express y PostgreSQL. Proporciona la API REST para la gestión de usuarios, productos, categorías y carrito.

## Requerimientos del Hito
Se intentó cumplir con los siguientes puntos:

1. **Proyecto npm e instalación de dependencias** ✅
2. **Uso de pg para PostgreSQL** ✅
3. **Autenticación y autorización con JWT** ✅
4. **Uso de CORS para permitir consultas cruzadas** ✅
5. **Middlewares para validar credenciales y tokens** ✅
6. **Test de al menos 4 rutas** ⚠️  
   - Se escribieron los tests con Jest y Supertest.  
   - Actualmente, debido al uso de ES Modules (`import`/`export`), Jest no ejecuta los tests correctamente sin configuración adicional (Babel o `"type": "module"`).  
   - Por esta razón, los tests no se ejecutan en este entorno, pero la API puede probarse manualmente.

## Instalación
1. Clonar el repositorio:  
```bash
git clone https://github.com/jara30-ch/hito-3-backend.git

Instalar dependencias:

cd hito-3-backend
npm install

Ejecutar servidor:

npm start
Endpoints principales

/api/auth → Registro y login

/api/users → Gestión de usuarios

/api/products → CRUD de productos

/api/categories → Gestión de categorías

/api/cart → Gestión del carrito

Notas

Los endpoints protegidos requieren JWT.

La API está funcional y puede ser probada desde Postman o desde el frontend.

Los tests escritos no se ejecutan debido a la configuración de módulos en Node.js.

Tambien logre conectar al frontend, pero aun faltan funcionalidades, pero se puede probar al ejecutar ambas partes.
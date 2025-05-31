# hd-22016-grupo6-apf1

## Configuración Inicial

### 1. Clonar el Repositorio

```bash
git clone https://github.com/CBElmer28/hd-22016-grupo6-apf1.git
cd hd-22016-grupo6-apf1.git
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará las dependencias del proyecto, incluyendo Husky, ESLint, Prettier, Lint-Staged, Commitlint y otros paquetes de desarrollo.

## Herramientas de Calidad de Código y Convenciones

Este proyecto utiliza varias herramientas de calidad de código que se ejecutan automáticamente durante el desarrollo.

### Husky

**Husky** asegura que todo el código subido pase verificaciones:

- **pre-commit:** ejecuta Lint-Staged.
- **commit-msg:** valida mensajes de commit con Commitlint.

### Lint-Staged

Lint-Staged verifica los archivos en staging:

```
{
  "*.ts": ["prettier --write", "eslint"],
  "*.html": ["eslint", "prettier --write"],
  "*.css": "prettier --write"
}
```

### ESLint y Prettier

**ESLint** y **Prettier** ayudan a mantener un estilo y estructura de código consistentes.

- **ESLint** se configura para forzar buenas prácticas de desarrollo en TypeScript y Angular.
- **Prettier** se encarga de formatear el código automáticamente, siguiendo las reglas definidas en `.prettierrc`.

### Commitlint

**Commitlint** asegura que todos los mensajes de commit sigan el formato establecido.

#### Ejemplo de Mensaje de Commit

Los mensajes de commit deben seguir el siguiente formato

```plaintext
<tipo>(<alcance>): <descripción corta>
```

#### Tipos de commit disponibles:

- **feat:** Añadir una nueva funcionalidad.
- **fix:** Corregir un error.
- **docs:** Documentación relacionada.
- **style:** Cambios que no afectan la lógica (espacios, formato, etc.).
- **refactor:** Cambios en el código que no corrigen errores ni añaden funcionalidades.
- **perf:** Cambios que mejoran el rendimiento.
- **test:** Añadir pruebas faltantes o corregir pruebas existentes.
- **build:** Cambios que afectan el sistema de construcción o dependencias externas.
- **ci:** Cambios en los archivos de configuración de CI.
- **chore:** Cambios menores que no afectan el código de la aplicación.
- **revert:** Revertir un commit anterior.

Ejemplos:

```plaintext
feat(ui): agregar formulario de contacto
fix(reports): corregir error en la generacion de reportes
docs(auth): actualizar documentación sobre autenticación
```

## Flujo de Trabajo

1. **Crear una Rama para el Cambio:** Crea una nueva rama para cada tarea o cambio.

```bash
git checkout -b nombre-de-la-rama
```

2. **Desarrollar Funcionalidad:** Realiza los cambios en el código siguiendo las convenciones y ejecutando comandos de linting y pruebas localmente.

3. **Validar Código:** Antes de hacer commit, asegúrate de que el código pase las verificaciones de ESLint y Prettier:

```bash
npm run format
npm run lint
```

4. **Hacer Commit:** Escribe un mensaje de commit claro y conciso, siguiendo las convenciones establecidas. Al hacer commit, `Husky` y `Lint-Staged` ejecutarán automáticamente los linters configurados.

```bash
git add .
git commit -m "feat(ui): agregar formulario de contacto"
```

5. **Enviar los Cambios:** Cuando todo esté en orden, sube la rama y abre un Pull Request (PR) para revisión.

```bash
git push origin nombre-de-la-rama
```

## Comandos Útiles

- **Ejecutar ESLint:** npm run lint
- **Formatear con Prettier:** npm run format

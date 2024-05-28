### PROCESO

#### Instalaciones iniciales
bun / npm
1- bun add prisma -D
2- bunx prisma init --datasource-provider sqlite
3- bunx shadcn-ui@latest init
4- bun install next-themes
5- bunx shadcn-ui@latest add button
6- bunx shadcn-ui@latest add dropdown-menu
7- bunx shadcn-ui@latest add card input label select
7- bunx shadcn-ui@latest add textarea
8- bunx prisma migrate dev --name init

#### Configuraci'on de shadcnui
- limpiamos globals.css
- limpiamos page.tsx
- agregamos fontFamily & cn classname
- agregamos el fontFamily a tailwind.config.ts y lo importamos
- instalamos next themes y configuramos dark y light mode (comando 4)
- pegamos el componente de tema en components/theme-provider.tsx
- ponemos el theme-provider en el main layout alrededor de children
- agregamos el bot'on de tema en components/theme-toggle-button.tsx
- importamos el button y dropdownmenu de shad porq lo necesita el toggle (comandos 5-6)
- hacemos el componente components/navbar.tsx con un titulo, y el bot'on de tema, todo wrapped en un nav tag html porq es una nav
- agregamos el componente navbar al layout y le ponemos styling con tailwindcss
- creamos el componente task-form copiando de shad, pero en la ruta /new/_c/task-form.tsx
- instalamos los componentes de shad que necesita (comando 7)
- agregamos styling para centrarlo
- modificamos los datos e instalamos el textarea de shad (comando 8)
- agregamos los name a cada parte de datos que queremos recopilar ya sea input, select o textarea, y por medio de una server action declarada en el mismo task form, cuando esta es llamada desde el form action={createTask}, podemos recopilar los datos desde formData.get y el nombre que pusimos a cada parte.

#### Configuracion de prisma
- En prisma creamos el modelo de task con los atributos que queremos
- Corremos prisma migrate (comando 8)
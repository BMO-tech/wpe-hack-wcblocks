# Web Component Blocks

Create Gutenberg blocks with StencilJS Web Components

## Quick Start

- Create `.env` file (use example below)
- Update `/etc/hosts` file (see below)
- `make setup`
- Visit `http://wp.wcblocks.local` to setup WP

### Example `.env`

```
## WORDPRESS
WORDPRESS_DB_HOST=db.wcblocks
WORDPRESS_DB_USER=wcblocks
WORDPRESS_DB_PASSWORD=wcblocks
WORDPRESS_DB_NAME=wcblocks
WORDPRESS_HOST=wp.wcblocks.local

## DB
MYSQL_DATABASE=wcblocks
MYSQL_USER=wcblocks
MYSQL_PASSWORD=wcblocks
MYSQL_ROOT_PASSWORD=supersecret

## ADMINER
ADMINER_HOST=adminer.wcblocks.local

## VERDACCIO
VERDACCIO_HOST=npm.wcblocks.local
```

### Hosts file

```
## WCBLOCKS
127.0.0.0   wp.wcblocks.local adminer.wcblocks.local npm.wcblocks.local
```

## Make commands

- `make install` Runs `npm install` for `stencil` and `wcblocks` directories
- `make build` Runs `npm run build` for `stencil` and `wcblocks` directories
- `make up-g` Runs `docker-compose up -d` for the `global-compose.yml` config
- `make up` Runs `docker-compose up -d` for the `docker-compose.yml` config
- `make down-g` Runs `docker-compose down -v --remove-orphans`
  for the `global-compose.yml` config
- `make down` Runs `docker-compose down` for the `docker-compose.yml` config
- `make clean` || `make clear` Runs `docker-compose down -v --remove-orphans`
  for both `docker-compose.yml` and `global-compose.yml` files
- `make build` Runs `npm run build` for `stencil` and `wcblocks` directories
- `make lint` Runs `npm run lint` for `stencil` and `wcblocks` directories
- `make test` Runs `npm run test` for `stencil` and `wcblocks` directories

## Docker Compose Configurations

### Global Compose

- Runs `nginx.wcblocks`
- Runs `db.wcblocks`
- Runs `adminer.wcblocks`
- Runs `npm.wcblocks`
- Manages `wcblocks` network

### Docker Compose

- Runs `wp.wcblocks`

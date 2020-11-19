## Include .env file
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

## Set more variables
DOCKER_COMPOSE_CMD  ?= docker-compose
DOCKER_COMPOSE_CONF ?= docker-compose.yml
DOCKER_GLOBAL_CONF  ?= global-compose.yml
PARENT_PATH         ?= $(abspath $(dir $(lastword $(MAKEFILE_LIST)))/.)
NETWORK_NAME        ?= wcblocks

SERVICES = next stencil wcblocks

## Define shortcup commands
up: .dc-up-d
up-g: .dc-g-up-d
down: .dc-down
down-g: .dc-g-down-v
restart: down up
start: .start-all
clean: clear
clear: .dc-down-v .dc-g-down-v
build: .build-all
install: .install-all
lint: .lint-all
test: .test-all

## Actual make commands
.dc-up-d:
	@echo
	@echo "# Running docker-compose up -d"
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_COMPOSE_CONF) up -d
	@echo

.dc-g-up-d:
	@echo
	@echo "# Running global-compose up -d"
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_GLOBAL_CONF) up -d
	@echo
	
.dc-down-v:
	@echo
	@echo "# Running docker-compose down -v"
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_COMPOSE_CONF) down -v --remove-orphans
	@echo

.dc-g-down-v:
	@echo
	@echo "# Running global-compose down -v"
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_GLOBAL_CONF) down -v --remove-orphans
	@echo

.dc-%:
	@echo
	@echo "# Running docker-compose $*"
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_COMPOSE_CONF) $*
	@echo

.build-all:
	@echo "# Building all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .build-$$service; \
	done

.build-%:
	@echo
	@echo "# Building $*"
	@npm run --prefix $* build
	
.start-all:
	@echo "# Starting all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .start-$$service; \
	done

.start-%:
	@echo
	@echo "# Starting $*"
	@npm run --prefix $* start

.install-all:
	@echo "# Installing all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .install-$$service; \
	done

.install-%:
	@echo
	@echo "# Installing $*"
	@npm install --prefix $*
	
.lint-all:
	@echo "# Linting all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .lint-$$service; \
	done

.lint-%:
	@echo
	@echo "# Linting $(PARENT_PATH)/$*"
	@npm run --prefix $* lint

.test-all:
	@echo "# Testing all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .test-$$service; \
	done

.test-%:
	@echo
	@echo "# Testing $*"
	@npm run --prefix $* test
	
.publish-all:
	@echo "# Installing all services"
	@for service in $(SERVICES); do \
		$(MAKE) -s .publish-$$service; \
	done

.publish-%:
	@echo
	@echo "# Publishing $*"
	@npm publish $* --registry http://$(VERDACCIO_HOST)
	
setup: clean .dc-g-up-d
	@echo "# Setting up the Dev Environment"
	@$(MAKE) -s .install-stencil
	@$(MAKE) -s .build-stencil
	@npm adduser --registry http://$(VERDACCIO_HOST)
	@npm set registry http://$(VERDACCIO_HOST)
	@$(MAKE) -s .publish-stencil
	@$(MAKE) -s .install-all
	@$(MAKE) -s .build-wcblocks
	@$(DOCKER_COMPOSE_CMD) -f $(DOCKER_COMPOSE_CONF) up -d
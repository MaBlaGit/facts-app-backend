## Facts API backend

#### Description

Simple backend application written in node / express, mainly for writing API E2E tests with usage of Supertest library.

#### Prerequisites

To run app on the local environment, you will need:

- node >= 18
- pnpm
- docker and docker-compose

#### Local setup

- clone this repo
- install all dependencies: `pnpm install`
- create database: `docker-compose up -d`
- seed DB by executing script: `seed-db.sh`
- run the app by executing: `pnpm start`

#### OpenAPI documentation

API documentation you can find under `/api-docs`

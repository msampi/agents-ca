---
name: add-feature
description: Add a new feature following Clean Architecture layers (domain, useCases, infrastructure, composition, ui). Use when creating entities, use cases, repositories, pages, or hooks in this project.
---

# Add Feature (Clean Architecture)

## Workflow

```
- [ ] 1. Domain: entity + port interface
- [ ] 2. Use case class with execute() (+ Validator if writes data)
- [ ] 3. Infrastructure: mapper + repository using HttpClientInterface
- [ ] 4. Register in composition/container.ts
- [ ] 5. UI: hook + page folder (index.tsx + ui.tsx)
```

## Step 1 — Domain

```
src/core/domain/entities/{Entity}.ts
src/core/domain/ports/{Entity}Repository.ts
src/core/domain/validators/Validator.ts   # if form/input validation needed
```

## Step 2 — Use case

```
src/core/useCases/{Verb}{Entity}.ts
```

- Class: `GetUsers`, `CreateUser` — no `UseCase` suffix

- Inject port interfaces only
- Validate inputs with `Validator` before side effects
- Return domain entities, not view models

## Step 3 — Infrastructure

```
src/core/infrastructure/mappers/{Entity}Mapper.ts
src/core/infrastructure/repositories/Http{Entity}Repository.ts
```

- Repository depends on `HttpClientInterface`, not concrete `HttpClient`
- Mapper converts API JSON → domain entity
- All HTTP goes through `HttpClient` in `infrastructure/http/`

## Step 4 — Composition

In `src/composition/container.ts`:

- Reuse shared `httpClient` instance
- Instantiate repository → use case
- Extend `Container` interface

## Step 5 — UI

```
src/ui/hooks/use{Feature}.ts
src/ui/pages/{Feature}Page/
  ├── index.tsx    # wrapper: hook, loading/error, passes props
  └── ui.tsx       # dumb: props + JSX only
```

- Hook maps entities to view models (plain interfaces)
- `ui.tsx` never imports from `@core`

## Checklist

- [ ] `core/` has zero React imports
- [ ] Validations in use cases via `Validator`, not in UI
- [ ] HTTP only in `HttpClient` / repositories
- [ ] Repository injects `HttpClientInterface` (testable)
- [ ] Page uses `index.tsx` + `ui.tsx` pattern

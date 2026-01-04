# Cerber Contract

This is the E2E test repository for Cerber v1.1.3.

## CERBER_CONTRACT

```yaml
mode: solo

schema:
  enabled: true
  mode: template_only
  file: BACKEND_SCHEMA.ts

guardian:
  enabled: true
  schemaFile: BACKEND_SCHEMA.ts
  hook: husky
  approvalsTag: "// ARCHITECT_APPROVED"

health:
  enabled: true
  endpoint: /api/health
  healthUrlVar: CERBER_HEALTH_URL
  failOn:
    critical: true
    error: true
    warning: false

ci:
  provider: github
  branches: ["main", "develop"]
  requiredOnPR: true
  postDeploy:
    enabled: false
    waitSeconds: 30
    healthUrlVar: CERBER_HEALTH_URL
    authHeaderSecret: CERBER_HEALTH_AUTH_HEADER
```

## Project Description

E2E test repository to validate Cerber v1.1.0 before npm publish.

Test scenarios:
- Team mode with guardian + health + postDeploy
- GitHub Actions workflow stability (Cerber CI / cerber-ci)
- CODEOWNERS generation
- Health check gate (pass/fail)
- Error handling for invalid contracts

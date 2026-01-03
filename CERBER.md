# Cerber Contract

This is the E2E test repository for Cerber v1.1.0.

## CERBER_CONTRACT

```yaml
mode: team

guardian:
  enabled: true
  schemaFile: BACKEND_SCHEMA.ts
  hook: husky
  approvalsTag: approved-by-team

health:
  enabled: true
  endpoint: /health
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

team:
  schemaOwners: ["@agataslezak"]
  reviewRequired: true
```

## Project Description

E2E test repository to validate Cerber v1.1.0 before npm publish.

Test scenarios:
- Team mode with guardian + health + postDeploy
- GitHub Actions workflow stability (Cerber CI / cerber-ci)
- CODEOWNERS generation
- Health check gate (pass/fail)
- Error handling for invalid contracts

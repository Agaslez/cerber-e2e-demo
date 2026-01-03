# Cerber E2E Demo

End-to-end test repository for validating Cerber v1.1.0 before npm publish.

## Setup

```bash
npm install
npx cerber init
```

## Test Scenarios

- ✅ Team mode (guardian + health + postDeploy)
- ✅ GitHub Actions workflow (Cerber CI)
- ✅ CODEOWNERS generation
- ✅ Post-deploy health gate
- ✅ Error handling

## Workflow

1. `npx cerber init` - Generate Cerber files
2. Commit and push - Trigger CI workflow
3. Create PR - Test workflow on pull requests
4. Mock health endpoint - Test postDeploy gate

## Critical Validation

- Workflow name stability: **Cerber CI** (branch protection)
- Job name stability: **cerber-ci** (status checks)
- Templates included in package
- Error messages are clear and helpful

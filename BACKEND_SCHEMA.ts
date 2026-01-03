/**
 * Backend schema for E2E testing
 * Minimal version to satisfy Cerber guardian validation
 */

export const BACKEND_SCHEMA = {
  version: "1.0.0",
  timestamp: new Date().toISOString(),
  endpoints: [
    {
      path: "/health",
      method: "GET",
      description: "Health check endpoint for Cerber monitoring"
    },
    {
      path: "/api/test",
      method: "POST",
      description: "Test endpoint for E2E validation"
    }
  ]
};

export default BACKEND_SCHEMA;

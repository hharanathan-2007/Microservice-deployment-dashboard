# API Integration

## Overview

The dashboard will consume data from the microservice deployment and validation services through REST APIs.

## Deployment Monitor APIs

The deployment monitoring service provides endpoints for:

- Creating a deployment
- Starting a deployment
- Completing a deployment stage
- Failing a deployment stage
- Retrieving deployment details

### Deployment Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/deployments` | Create a deployment |
| POST | `/deployments/{id}/start` | Start deployment |
| POST | `/deployments/{id}/complete` | Complete current stage |
| POST | `/deployments/{id}/fail` | Fail current stage |
| GET | `/deployments/{id}` | Retrieve deployment |

## Validation APIs

The validation service provides endpoints for:

- Making deployment validation decisions
- Viewing violations
- Updating violation status
- Waiving violations
- Viewing services and validation history

### Validation Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/v1/decisions` | Evaluate a validation decision |
| GET | `/api/v1/violations` | Retrieve violations |
| POST | `/api/v1/violations/{id}/status` | Update violation status |
| POST | `/api/v1/violations/{id}/waive` | Waive a violation |
| GET | `/api/v1/services/tree` | Retrieve service information |
| GET | `/api/v1/evaluations` | Retrieve evaluations |

## Dashboard Integration

The dashboard will use these APIs to display:

- Deployment status
- Current deployment stage
- Stage-by-stage status
- Validation results
- Violations and findings
- Service information

## Note

API integration will be connected to the running backend services during the integration phase. The dashboard currently uses sample data for frontend development.
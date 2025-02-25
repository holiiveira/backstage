/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export * from './service/router';
export type { RouterOptions } from './service/router';

export { buildTechInsightsContext } from './service/techInsightsContextBuilder';
export type {
  TechInsightsOptions,
  TechInsightsContext,
} from './service/techInsightsContextBuilder';

export type { PersistenceContext } from './service/persistence/persistenceContext';
export { createFactRetrieverRegistration } from './service/fact/createFactRetriever';
export type { FactRetrieverRegistry } from './service/fact/FactRetrieverRegistry';
export type { FactRetrieverRegistrationOptions } from './service/fact/createFactRetriever';
export * from './service/fact/factRetrievers';

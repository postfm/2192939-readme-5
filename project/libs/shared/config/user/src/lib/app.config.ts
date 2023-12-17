import { registerAs } from '@nestjs/config';
import Joi = require('joi');

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = (typeof ENVIRONMENTS)[number];

export interface ApplicationConfig {
  environment: string;
  port: number;
}

const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

/**
 * Validates the given configuration object against a validation schema.
 * If any validation errors occur, an error message is thrown.
 *
 * @param config - The configuration object to be validated.
 * @throws {Error} - If validation fails, an error message is thrown.
 */
function validateConfig(config: ApplicationConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Application Config Validation Error]: ${error.message}`);
  }
}

/**
 * Retrieves the application configuration based on environment variables.
 * @returns {ApplicationConfig} The application configuration object.
 * @throws {Error} If the configuration object fails validation.
 */
function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `{DEFAULT_PORT}`, 10),
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);

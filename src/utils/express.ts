import { Request, Response } from 'express';

export interface RequestType extends Request {
  tenantId?: string;
  user?: any;
  brandId?: string;
}

export interface ResponseType extends Response {}

export interface Health {
  status: number;
  message: string;
  env: string;
  service: string;
  version: string;
  timestamp: string;
}

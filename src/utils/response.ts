export type ResponseStatus = 'SUCCESS' | 'FAILURE' | 'ERROR' | 'PARTIAL-SUCCESS' | 'PARTIAL-FAILURE';

export interface ResponseObject {
  httpCode: number;
  message: string;
  status: ResponseStatus;
  info?: any;
}

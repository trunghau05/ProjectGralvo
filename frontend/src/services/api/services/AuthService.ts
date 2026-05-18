/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerFacebookLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/facebook',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerFacebookCallback(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/facebook/callback',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerGoogleLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerGoogleCallback(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google/callback',
        });
    }
}

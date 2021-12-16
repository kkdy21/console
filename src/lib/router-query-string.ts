import { forEach } from 'lodash';
import { Location } from 'vue-router';
import { SpaceRouter } from '@/router';


export type RouteQueryString = string | (string | null)[] | null | undefined;
export interface ConvertValueToQueryString {
    (value?: any): RouteQueryString;
}
export interface ConvertQueryStringToValue<T = any> {
    (queryString?: RouteQueryString): T|undefined;
}

/**
 * @param key?
 * @param value?
 * @description replace url query. if no key is given, it replace empty query.
 */
export const replaceUrlQuery = async (key?: string, value?: RouteQueryString) => {
    let query: Location['query'];

    if (key) {
        query = { ...SpaceRouter.router.currentRoute.query };
        if ((value === null || value === undefined) && query[key]) delete query[key];
        else query[key] = value;
    } else {
        query = {};
    }

    try {
        await SpaceRouter.router.replace({ query });
    } catch (e) {}
};


/** QueryString to Value Converter Helpers */

/**
 * @param queryString
 * @description convert url query string to array or undefined.
 */
export function queryStringToArray<T = any>(queryString: RouteQueryString): T[]|undefined {
    if (queryString) {
        if (Array.isArray(queryString)) {
            return queryString.map((d) => {
                if (d) return JSON.parse(d);
                return d;
            });
        }
        const value = JSON.parse(queryString);
        if (Array.isArray(value)) return value;
    }

    return undefined;
}

/**
 * @param queryString
 * @description convert url query string to object or undefined.
 */
export function queryStringToObject<T = any>(queryString: RouteQueryString): T|undefined {
    let value;

    if (queryString) {
        if (Array.isArray(queryString)) {
            const firstItem = queryString[0];
            if (!firstItem) return undefined;

            value = JSON.parse(firstItem);
        } else {
            value = JSON.parse(queryString);
        }
    }

    return typeof value === 'object' ? value : undefined;
}

/**
 * @param queryString
 * @description convert url query string to boolean or undefined.
 */
export const queryStringToBoolean = (queryString: RouteQueryString): boolean|undefined => {
    if (queryString && typeof queryString === 'string') {
        const value = JSON.parse(queryString);
        if (typeof value === 'boolean') return value;
    }

    return undefined;
};

/**
 * @param queryString
 * @description convert url query string to number or undefined.
 */
export const queryStringToNumber = (queryString: RouteQueryString): number|undefined => {
    if (queryString && typeof queryString === 'string') {
        const value = JSON.parse(queryString);
        if (typeof value === 'number') return value;
    }

    return undefined;
};

/**
 * @param queryString
 * @description convert url query string to string or undefined.
 */
export const queryStringToString = (queryString: RouteQueryString): string|undefined => {
    if (typeof queryString === 'string') {
        return JSON.parse(queryString) || undefined;
    }

    return undefined;
};


/** Value to QueryString Converter Helpers */

/**
 * @param value
 * @description convert boolean, string, number or undefined to url query string.
 */
export const primitiveToQueryString = (value?: string|boolean|number): RouteQueryString => {
    if (value === undefined) return undefined;
    return JSON.stringify(value);
};

/**
 * @param value
 * @description convert object or undefined to url query string.
 */
export const objectToQueryString = (value?: Record<string|number, any>): RouteQueryString => {
    if (!value || Object.keys(value).length === 0) return undefined;
    return JSON.stringify(value);
};

/**
 * @param value
 * @description convert array or undefined to url query string.
 */
export const arrayToQueryString = (value?: any[]): RouteQueryString => {
    if (!value || value.length === 0) return undefined;
    return JSON.stringify(value);
};


/**
 * @param locationQuery
 * @description convert location query to search filters. will be DEPRECATED.
 */
export const locationQueryToString = (locationQuery: Location['query']): string => {
    if (!locationQuery) return '';
    const queryStrings: string[] = [];
    forEach(locationQuery, (v, k) => {
        if (k === 'filters') {
            let filters: string[] = locationQuery.filters as string[];
            filters = filters.map(d => `filters=${d}`);
            queryStrings.push(...filters);
        } else {
            queryStrings.push(`${k}=${v}`);
        }
    });
    return queryStrings.join('&');
};

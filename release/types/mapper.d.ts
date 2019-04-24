/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Countries mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the current request country.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the country entity.
     * @throws Throws an error when the country wasn't found.
     */
    loadMe(fields?: string[]): Promise<Entity>;
    /**
     * List all countries that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the country list.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[]>;
}

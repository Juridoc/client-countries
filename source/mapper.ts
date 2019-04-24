/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import { Entity } from './entity';

/**
 * Countries mapper class.
 */
@Injection.Describe({ singleton: true, name: 'countries' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load the current request country.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the country entity.
   * @throws Throws an error when the country wasn't found.
   */
  @Class.Public()
  public async loadMe(fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById('me', fields))!;
  }

  /**
   * List all countries that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the country list.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[]> {
    const list = await this.mapper.find(query, fields);
    if (list == void 0) {
      if (this.error !== void 0) {
        throw new Error(this.error.text);
      }
      return [];
    }
    return list;
  }
}

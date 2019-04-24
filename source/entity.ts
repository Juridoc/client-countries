/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Country entity class.
 */
@RestDB.Schema.Entity('countries')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Country Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Country code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public code!: string;

  /**
   * Country name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Native country name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public nativeName!: string;

  /**
   * Country IDD Code.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public idd?: string;
}

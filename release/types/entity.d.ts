/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Country entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Country Id.
     */
    id: string;
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    name: string;
    /**
     * Native country name.
     */
    nativeName: string;
    /**
     * Country IDD Code.
     */
    idd?: string;
}

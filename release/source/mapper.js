"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const entity_1 = require("./entity");
/**
 * Countries mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Load the current request country.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the country entity.
     * @throws Throws an error when the country wasn't found.
     */
    async loadMe(fields) {
        return (await this.mapper.findById('me', fields));
    }
    /**
     * List all countries that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the country list.
     */
    async list(query, fields) {
        const list = await this.mapper.find(query, fields);
        if (list == void 0) {
            if (this.error !== void 0) {
                throw new Error(this.error.text);
            }
            return [];
        }
        return list;
    }
};
__decorate([
    Injection.Inject(Core.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "loadMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'countries' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map
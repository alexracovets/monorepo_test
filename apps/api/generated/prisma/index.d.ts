
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PhysicalPerson
 * 
 */
export type PhysicalPerson = $Result.DefaultSelection<Prisma.$PhysicalPersonPayload>
/**
 * Model LegalEntity
 * 
 */
export type LegalEntity = $Result.DefaultSelection<Prisma.$LegalEntityPayload>
/**
 * Model LocalUser
 * 
 */
export type LocalUser = $Result.DefaultSelection<Prisma.$LocalUserPayload>
/**
 * Model OrganizationType
 * 
 */
export type OrganizationType = $Result.DefaultSelection<Prisma.$OrganizationTypePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  LIMITED: 'LIMITED',
  PHYSICAL: 'PHYSICAL',
  LEGAL: 'LEGAL',
  LOCAL: 'LOCAL'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.physicalPerson`: Exposes CRUD operations for the **PhysicalPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalPeople
    * const physicalPeople = await prisma.physicalPerson.findMany()
    * ```
    */
  get physicalPerson(): Prisma.PhysicalPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legalEntity`: Exposes CRUD operations for the **LegalEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalEntities
    * const legalEntities = await prisma.legalEntity.findMany()
    * ```
    */
  get legalEntity(): Prisma.LegalEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localUser`: Exposes CRUD operations for the **LocalUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalUsers
    * const localUsers = await prisma.localUser.findMany()
    * ```
    */
  get localUser(): Prisma.LocalUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationType`: Exposes CRUD operations for the **OrganizationType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationTypes
    * const organizationTypes = await prisma.organizationType.findMany()
    * ```
    */
  get organizationType(): Prisma.OrganizationTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PhysicalPerson: 'PhysicalPerson',
    LegalEntity: 'LegalEntity',
    LocalUser: 'LocalUser',
    OrganizationType: 'OrganizationType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "physicalPerson" | "legalEntity" | "localUser" | "organizationType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PhysicalPerson: {
        payload: Prisma.$PhysicalPersonPayload<ExtArgs>
        fields: Prisma.PhysicalPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          findFirst: {
            args: Prisma.PhysicalPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          findMany: {
            args: Prisma.PhysicalPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>[]
          }
          create: {
            args: Prisma.PhysicalPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          createMany: {
            args: Prisma.PhysicalPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhysicalPersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>[]
          }
          delete: {
            args: Prisma.PhysicalPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          update: {
            args: Prisma.PhysicalPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhysicalPersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>[]
          }
          upsert: {
            args: Prisma.PhysicalPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalPersonPayload>
          }
          aggregate: {
            args: Prisma.PhysicalPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalPerson>
          }
          groupBy: {
            args: Prisma.PhysicalPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalPersonCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalPersonCountAggregateOutputType> | number
          }
        }
      }
      LegalEntity: {
        payload: Prisma.$LegalEntityPayload<ExtArgs>
        fields: Prisma.LegalEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          findFirst: {
            args: Prisma.LegalEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          findMany: {
            args: Prisma.LegalEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>[]
          }
          create: {
            args: Prisma.LegalEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          createMany: {
            args: Prisma.LegalEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegalEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>[]
          }
          delete: {
            args: Prisma.LegalEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          update: {
            args: Prisma.LegalEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          deleteMany: {
            args: Prisma.LegalEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegalEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegalEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>[]
          }
          upsert: {
            args: Prisma.LegalEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalEntityPayload>
          }
          aggregate: {
            args: Prisma.LegalEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegalEntity>
          }
          groupBy: {
            args: Prisma.LegalEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegalEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalEntityCountArgs<ExtArgs>
            result: $Utils.Optional<LegalEntityCountAggregateOutputType> | number
          }
        }
      }
      LocalUser: {
        payload: Prisma.$LocalUserPayload<ExtArgs>
        fields: Prisma.LocalUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          findFirst: {
            args: Prisma.LocalUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          findMany: {
            args: Prisma.LocalUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>[]
          }
          create: {
            args: Prisma.LocalUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          createMany: {
            args: Prisma.LocalUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>[]
          }
          delete: {
            args: Prisma.LocalUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          update: {
            args: Prisma.LocalUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          deleteMany: {
            args: Prisma.LocalUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>[]
          }
          upsert: {
            args: Prisma.LocalUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalUserPayload>
          }
          aggregate: {
            args: Prisma.LocalUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalUser>
          }
          groupBy: {
            args: Prisma.LocalUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalUserCountArgs<ExtArgs>
            result: $Utils.Optional<LocalUserCountAggregateOutputType> | number
          }
        }
      }
      OrganizationType: {
        payload: Prisma.$OrganizationTypePayload<ExtArgs>
        fields: Prisma.OrganizationTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          findFirst: {
            args: Prisma.OrganizationTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          findMany: {
            args: Prisma.OrganizationTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>[]
          }
          create: {
            args: Prisma.OrganizationTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          createMany: {
            args: Prisma.OrganizationTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>[]
          }
          delete: {
            args: Prisma.OrganizationTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          update: {
            args: Prisma.OrganizationTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          deleteMany: {
            args: Prisma.OrganizationTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>[]
          }
          upsert: {
            args: Prisma.OrganizationTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationTypePayload>
          }
          aggregate: {
            args: Prisma.OrganizationTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationType>
          }
          groupBy: {
            args: Prisma.OrganizationTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationTypeCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    physicalPerson?: PhysicalPersonOmit
    legalEntity?: LegalEntityOmit
    localUser?: LocalUserOmit
    organizationType?: OrganizationTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationTypeCountOutputType
   */

  export type OrganizationTypeCountOutputType = {
    legalEntities: number
  }

  export type OrganizationTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legalEntities?: boolean | OrganizationTypeCountOutputTypeCountLegalEntitiesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationTypeCountOutputType without action
   */
  export type OrganizationTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationTypeCountOutputType
     */
    select?: OrganizationTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationTypeCountOutputType without action
   */
  export type OrganizationTypeCountOutputTypeCountLegalEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalEntityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    type: $Enums.UserType | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    type: $Enums.UserType | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    type: number
    isBlocked: number
    createdAt: number
    updatedAt: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    type?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    type?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    type?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    type: $Enums.UserType
    isBlocked: boolean
    createdAt: Date
    updatedAt: Date
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    physicalPerson?: boolean | User$physicalPersonArgs<ExtArgs>
    legalEntity?: boolean | User$legalEntityArgs<ExtArgs>
    localUser?: boolean | User$localUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    type?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "isBlocked" | "createdAt" | "updatedAt" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalPerson?: boolean | User$physicalPersonArgs<ExtArgs>
    legalEntity?: boolean | User$legalEntityArgs<ExtArgs>
    localUser?: boolean | User$localUserArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      physicalPerson: Prisma.$PhysicalPersonPayload<ExtArgs> | null
      legalEntity: Prisma.$LegalEntityPayload<ExtArgs> | null
      localUser: Prisma.$LocalUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.UserType
      isBlocked: boolean
      createdAt: Date
      updatedAt: Date
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    physicalPerson<T extends User$physicalPersonArgs<ExtArgs> = {}>(args?: Subset<T, User$physicalPersonArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    legalEntity<T extends User$legalEntityArgs<ExtArgs> = {}>(args?: Subset<T, User$legalEntityArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    localUser<T extends User$localUserArgs<ExtArgs> = {}>(args?: Subset<T, User$localUserArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.physicalPerson
   */
  export type User$physicalPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    where?: PhysicalPersonWhereInput
  }

  /**
   * User.legalEntity
   */
  export type User$legalEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    where?: LegalEntityWhereInput
  }

  /**
   * User.localUser
   */
  export type User$localUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    where?: LocalUserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PhysicalPerson
   */

  export type AggregatePhysicalPerson = {
    _count: PhysicalPersonCountAggregateOutputType | null
    _min: PhysicalPersonMinAggregateOutputType | null
    _max: PhysicalPersonMaxAggregateOutputType | null
  }

  export type PhysicalPersonMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    lastName: string | null
    firstName: string | null
    middleName: string | null
    email: string | null
    city: string | null
    region: string | null
    website: string | null
    volunteerDocBytes: Uint8Array | null
  }

  export type PhysicalPersonMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    lastName: string | null
    firstName: string | null
    middleName: string | null
    email: string | null
    city: string | null
    region: string | null
    website: string | null
    volunteerDocBytes: Uint8Array | null
  }

  export type PhysicalPersonCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    lastName: number
    firstName: number
    middleName: number
    email: number
    city: number
    region: number
    website: number
    volunteerDocBytes: number
    _all: number
  }


  export type PhysicalPersonMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    lastName?: true
    firstName?: true
    middleName?: true
    email?: true
    city?: true
    region?: true
    website?: true
    volunteerDocBytes?: true
  }

  export type PhysicalPersonMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    lastName?: true
    firstName?: true
    middleName?: true
    email?: true
    city?: true
    region?: true
    website?: true
    volunteerDocBytes?: true
  }

  export type PhysicalPersonCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    lastName?: true
    firstName?: true
    middleName?: true
    email?: true
    city?: true
    region?: true
    website?: true
    volunteerDocBytes?: true
    _all?: true
  }

  export type PhysicalPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalPerson to aggregate.
     */
    where?: PhysicalPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalPeople to fetch.
     */
    orderBy?: PhysicalPersonOrderByWithRelationInput | PhysicalPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalPeople
    **/
    _count?: true | PhysicalPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalPersonMaxAggregateInputType
  }

  export type GetPhysicalPersonAggregateType<T extends PhysicalPersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalPerson[P]>
      : GetScalarType<T[P], AggregatePhysicalPerson[P]>
  }




  export type PhysicalPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalPersonWhereInput
    orderBy?: PhysicalPersonOrderByWithAggregationInput | PhysicalPersonOrderByWithAggregationInput[]
    by: PhysicalPersonScalarFieldEnum[] | PhysicalPersonScalarFieldEnum
    having?: PhysicalPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalPersonCountAggregateInputType | true
    _min?: PhysicalPersonMinAggregateInputType
    _max?: PhysicalPersonMaxAggregateInputType
  }

  export type PhysicalPersonGroupByOutputType = {
    id: string
    userId: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city: string | null
    region: string | null
    website: string | null
    volunteerDocBytes: Uint8Array | null
    _count: PhysicalPersonCountAggregateOutputType | null
    _min: PhysicalPersonMinAggregateOutputType | null
    _max: PhysicalPersonMaxAggregateOutputType | null
  }

  type GetPhysicalPersonGroupByPayload<T extends PhysicalPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalPersonGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalPersonGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    lastName?: boolean
    firstName?: boolean
    middleName?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    website?: boolean
    volunteerDocBytes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalPerson"]>

  export type PhysicalPersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    lastName?: boolean
    firstName?: boolean
    middleName?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    website?: boolean
    volunteerDocBytes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalPerson"]>

  export type PhysicalPersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    lastName?: boolean
    firstName?: boolean
    middleName?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    website?: boolean
    volunteerDocBytes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalPerson"]>

  export type PhysicalPersonSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    lastName?: boolean
    firstName?: boolean
    middleName?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    website?: boolean
    volunteerDocBytes?: boolean
  }

  export type PhysicalPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "lastName" | "firstName" | "middleName" | "email" | "city" | "region" | "website" | "volunteerDocBytes", ExtArgs["result"]["physicalPerson"]>
  export type PhysicalPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhysicalPersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhysicalPersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhysicalPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalPerson"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string
      lastName: string
      firstName: string
      middleName: string
      email: string
      city: string | null
      region: string | null
      website: string | null
      volunteerDocBytes: Uint8Array | null
    }, ExtArgs["result"]["physicalPerson"]>
    composites: {}
  }

  type PhysicalPersonGetPayload<S extends boolean | null | undefined | PhysicalPersonDefaultArgs> = $Result.GetResult<Prisma.$PhysicalPersonPayload, S>

  type PhysicalPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhysicalPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhysicalPersonCountAggregateInputType | true
    }

  export interface PhysicalPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalPerson'], meta: { name: 'PhysicalPerson' } }
    /**
     * Find zero or one PhysicalPerson that matches the filter.
     * @param {PhysicalPersonFindUniqueArgs} args - Arguments to find a PhysicalPerson
     * @example
     * // Get one PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalPersonFindUniqueArgs>(args: SelectSubset<T, PhysicalPersonFindUniqueArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhysicalPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhysicalPersonFindUniqueOrThrowArgs} args - Arguments to find a PhysicalPerson
     * @example
     * // Get one PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonFindFirstArgs} args - Arguments to find a PhysicalPerson
     * @example
     * // Get one PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalPersonFindFirstArgs>(args?: SelectSubset<T, PhysicalPersonFindFirstArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonFindFirstOrThrowArgs} args - Arguments to find a PhysicalPerson
     * @example
     * // Get one PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhysicalPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalPeople
     * const physicalPeople = await prisma.physicalPerson.findMany()
     * 
     * // Get first 10 PhysicalPeople
     * const physicalPeople = await prisma.physicalPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalPersonWithIdOnly = await prisma.physicalPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalPersonFindManyArgs>(args?: SelectSubset<T, PhysicalPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhysicalPerson.
     * @param {PhysicalPersonCreateArgs} args - Arguments to create a PhysicalPerson.
     * @example
     * // Create one PhysicalPerson
     * const PhysicalPerson = await prisma.physicalPerson.create({
     *   data: {
     *     // ... data to create a PhysicalPerson
     *   }
     * })
     * 
     */
    create<T extends PhysicalPersonCreateArgs>(args: SelectSubset<T, PhysicalPersonCreateArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhysicalPeople.
     * @param {PhysicalPersonCreateManyArgs} args - Arguments to create many PhysicalPeople.
     * @example
     * // Create many PhysicalPeople
     * const physicalPerson = await prisma.physicalPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalPersonCreateManyArgs>(args?: SelectSubset<T, PhysicalPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhysicalPeople and returns the data saved in the database.
     * @param {PhysicalPersonCreateManyAndReturnArgs} args - Arguments to create many PhysicalPeople.
     * @example
     * // Create many PhysicalPeople
     * const physicalPerson = await prisma.physicalPerson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhysicalPeople and only return the `id`
     * const physicalPersonWithIdOnly = await prisma.physicalPerson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhysicalPersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PhysicalPersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhysicalPerson.
     * @param {PhysicalPersonDeleteArgs} args - Arguments to delete one PhysicalPerson.
     * @example
     * // Delete one PhysicalPerson
     * const PhysicalPerson = await prisma.physicalPerson.delete({
     *   where: {
     *     // ... filter to delete one PhysicalPerson
     *   }
     * })
     * 
     */
    delete<T extends PhysicalPersonDeleteArgs>(args: SelectSubset<T, PhysicalPersonDeleteArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhysicalPerson.
     * @param {PhysicalPersonUpdateArgs} args - Arguments to update one PhysicalPerson.
     * @example
     * // Update one PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalPersonUpdateArgs>(args: SelectSubset<T, PhysicalPersonUpdateArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhysicalPeople.
     * @param {PhysicalPersonDeleteManyArgs} args - Arguments to filter PhysicalPeople to delete.
     * @example
     * // Delete a few PhysicalPeople
     * const { count } = await prisma.physicalPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalPersonDeleteManyArgs>(args?: SelectSubset<T, PhysicalPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalPeople
     * const physicalPerson = await prisma.physicalPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalPersonUpdateManyArgs>(args: SelectSubset<T, PhysicalPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalPeople and returns the data updated in the database.
     * @param {PhysicalPersonUpdateManyAndReturnArgs} args - Arguments to update many PhysicalPeople.
     * @example
     * // Update many PhysicalPeople
     * const physicalPerson = await prisma.physicalPerson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhysicalPeople and only return the `id`
     * const physicalPersonWithIdOnly = await prisma.physicalPerson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhysicalPersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PhysicalPersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhysicalPerson.
     * @param {PhysicalPersonUpsertArgs} args - Arguments to update or create a PhysicalPerson.
     * @example
     * // Update or create a PhysicalPerson
     * const physicalPerson = await prisma.physicalPerson.upsert({
     *   create: {
     *     // ... data to create a PhysicalPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalPerson we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalPersonUpsertArgs>(args: SelectSubset<T, PhysicalPersonUpsertArgs<ExtArgs>>): Prisma__PhysicalPersonClient<$Result.GetResult<Prisma.$PhysicalPersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhysicalPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonCountArgs} args - Arguments to filter PhysicalPeople to count.
     * @example
     * // Count the number of PhysicalPeople
     * const count = await prisma.physicalPerson.count({
     *   where: {
     *     // ... the filter for the PhysicalPeople we want to count
     *   }
     * })
    **/
    count<T extends PhysicalPersonCountArgs>(
      args?: Subset<T, PhysicalPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhysicalPersonAggregateArgs>(args: Subset<T, PhysicalPersonAggregateArgs>): Prisma.PrismaPromise<GetPhysicalPersonAggregateType<T>>

    /**
     * Group by PhysicalPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalPersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhysicalPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalPersonGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalPersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhysicalPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalPerson model
   */
  readonly fields: PhysicalPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhysicalPerson model
   */
  interface PhysicalPersonFieldRefs {
    readonly id: FieldRef<"PhysicalPerson", 'String'>
    readonly userId: FieldRef<"PhysicalPerson", 'String'>
    readonly phone: FieldRef<"PhysicalPerson", 'String'>
    readonly lastName: FieldRef<"PhysicalPerson", 'String'>
    readonly firstName: FieldRef<"PhysicalPerson", 'String'>
    readonly middleName: FieldRef<"PhysicalPerson", 'String'>
    readonly email: FieldRef<"PhysicalPerson", 'String'>
    readonly city: FieldRef<"PhysicalPerson", 'String'>
    readonly region: FieldRef<"PhysicalPerson", 'String'>
    readonly website: FieldRef<"PhysicalPerson", 'String'>
    readonly volunteerDocBytes: FieldRef<"PhysicalPerson", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalPerson findUnique
   */
  export type PhysicalPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalPerson to fetch.
     */
    where: PhysicalPersonWhereUniqueInput
  }

  /**
   * PhysicalPerson findUniqueOrThrow
   */
  export type PhysicalPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalPerson to fetch.
     */
    where: PhysicalPersonWhereUniqueInput
  }

  /**
   * PhysicalPerson findFirst
   */
  export type PhysicalPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalPerson to fetch.
     */
    where?: PhysicalPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalPeople to fetch.
     */
    orderBy?: PhysicalPersonOrderByWithRelationInput | PhysicalPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalPeople.
     */
    cursor?: PhysicalPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalPeople.
     */
    distinct?: PhysicalPersonScalarFieldEnum | PhysicalPersonScalarFieldEnum[]
  }

  /**
   * PhysicalPerson findFirstOrThrow
   */
  export type PhysicalPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalPerson to fetch.
     */
    where?: PhysicalPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalPeople to fetch.
     */
    orderBy?: PhysicalPersonOrderByWithRelationInput | PhysicalPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalPeople.
     */
    cursor?: PhysicalPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalPeople.
     */
    distinct?: PhysicalPersonScalarFieldEnum | PhysicalPersonScalarFieldEnum[]
  }

  /**
   * PhysicalPerson findMany
   */
  export type PhysicalPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalPeople to fetch.
     */
    where?: PhysicalPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalPeople to fetch.
     */
    orderBy?: PhysicalPersonOrderByWithRelationInput | PhysicalPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalPeople.
     */
    cursor?: PhysicalPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalPeople.
     */
    skip?: number
    distinct?: PhysicalPersonScalarFieldEnum | PhysicalPersonScalarFieldEnum[]
  }

  /**
   * PhysicalPerson create
   */
  export type PhysicalPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalPerson.
     */
    data: XOR<PhysicalPersonCreateInput, PhysicalPersonUncheckedCreateInput>
  }

  /**
   * PhysicalPerson createMany
   */
  export type PhysicalPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalPeople.
     */
    data: PhysicalPersonCreateManyInput | PhysicalPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalPerson createManyAndReturn
   */
  export type PhysicalPersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * The data used to create many PhysicalPeople.
     */
    data: PhysicalPersonCreateManyInput | PhysicalPersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalPerson update
   */
  export type PhysicalPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalPerson.
     */
    data: XOR<PhysicalPersonUpdateInput, PhysicalPersonUncheckedUpdateInput>
    /**
     * Choose, which PhysicalPerson to update.
     */
    where: PhysicalPersonWhereUniqueInput
  }

  /**
   * PhysicalPerson updateMany
   */
  export type PhysicalPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalPeople.
     */
    data: XOR<PhysicalPersonUpdateManyMutationInput, PhysicalPersonUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalPeople to update
     */
    where?: PhysicalPersonWhereInput
    /**
     * Limit how many PhysicalPeople to update.
     */
    limit?: number
  }

  /**
   * PhysicalPerson updateManyAndReturn
   */
  export type PhysicalPersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * The data used to update PhysicalPeople.
     */
    data: XOR<PhysicalPersonUpdateManyMutationInput, PhysicalPersonUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalPeople to update
     */
    where?: PhysicalPersonWhereInput
    /**
     * Limit how many PhysicalPeople to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalPerson upsert
   */
  export type PhysicalPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalPerson to update in case it exists.
     */
    where: PhysicalPersonWhereUniqueInput
    /**
     * In case the PhysicalPerson found by the `where` argument doesn't exist, create a new PhysicalPerson with this data.
     */
    create: XOR<PhysicalPersonCreateInput, PhysicalPersonUncheckedCreateInput>
    /**
     * In case the PhysicalPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalPersonUpdateInput, PhysicalPersonUncheckedUpdateInput>
  }

  /**
   * PhysicalPerson delete
   */
  export type PhysicalPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
    /**
     * Filter which PhysicalPerson to delete.
     */
    where: PhysicalPersonWhereUniqueInput
  }

  /**
   * PhysicalPerson deleteMany
   */
  export type PhysicalPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalPeople to delete
     */
    where?: PhysicalPersonWhereInput
    /**
     * Limit how many PhysicalPeople to delete.
     */
    limit?: number
  }

  /**
   * PhysicalPerson without action
   */
  export type PhysicalPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalPerson
     */
    select?: PhysicalPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalPerson
     */
    omit?: PhysicalPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalPersonInclude<ExtArgs> | null
  }


  /**
   * Model LegalEntity
   */

  export type AggregateLegalEntity = {
    _count: LegalEntityCountAggregateOutputType | null
    _min: LegalEntityMinAggregateOutputType | null
    _max: LegalEntityMaxAggregateOutputType | null
  }

  export type LegalEntityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    organizationName: string | null
    edrpouCode: string | null
    organizationTypeId: string | null
    contactPerson: string | null
    email: string | null
    website: string | null
    city: string | null
    region: string | null
    street: string | null
    nonprofitDocBytes: Uint8Array | null
    usesEDOViaVchasno: boolean | null
  }

  export type LegalEntityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    organizationName: string | null
    edrpouCode: string | null
    organizationTypeId: string | null
    contactPerson: string | null
    email: string | null
    website: string | null
    city: string | null
    region: string | null
    street: string | null
    nonprofitDocBytes: Uint8Array | null
    usesEDOViaVchasno: boolean | null
  }

  export type LegalEntityCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    organizationName: number
    edrpouCode: number
    organizationTypeId: number
    contactPerson: number
    email: number
    website: number
    city: number
    region: number
    street: number
    nonprofitDocBytes: number
    usesEDOViaVchasno: number
    _all: number
  }


  export type LegalEntityMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    organizationName?: true
    edrpouCode?: true
    organizationTypeId?: true
    contactPerson?: true
    email?: true
    website?: true
    city?: true
    region?: true
    street?: true
    nonprofitDocBytes?: true
    usesEDOViaVchasno?: true
  }

  export type LegalEntityMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    organizationName?: true
    edrpouCode?: true
    organizationTypeId?: true
    contactPerson?: true
    email?: true
    website?: true
    city?: true
    region?: true
    street?: true
    nonprofitDocBytes?: true
    usesEDOViaVchasno?: true
  }

  export type LegalEntityCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    organizationName?: true
    edrpouCode?: true
    organizationTypeId?: true
    contactPerson?: true
    email?: true
    website?: true
    city?: true
    region?: true
    street?: true
    nonprofitDocBytes?: true
    usesEDOViaVchasno?: true
    _all?: true
  }

  export type LegalEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalEntity to aggregate.
     */
    where?: LegalEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalEntities to fetch.
     */
    orderBy?: LegalEntityOrderByWithRelationInput | LegalEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalEntities
    **/
    _count?: true | LegalEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalEntityMaxAggregateInputType
  }

  export type GetLegalEntityAggregateType<T extends LegalEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalEntity[P]>
      : GetScalarType<T[P], AggregateLegalEntity[P]>
  }




  export type LegalEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalEntityWhereInput
    orderBy?: LegalEntityOrderByWithAggregationInput | LegalEntityOrderByWithAggregationInput[]
    by: LegalEntityScalarFieldEnum[] | LegalEntityScalarFieldEnum
    having?: LegalEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalEntityCountAggregateInputType | true
    _min?: LegalEntityMinAggregateInputType
    _max?: LegalEntityMaxAggregateInputType
  }

  export type LegalEntityGroupByOutputType = {
    id: string
    userId: string
    phone: string
    organizationName: string
    edrpouCode: string
    organizationTypeId: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes: Uint8Array | null
    usesEDOViaVchasno: boolean
    _count: LegalEntityCountAggregateOutputType | null
    _min: LegalEntityMinAggregateOutputType | null
    _max: LegalEntityMaxAggregateOutputType | null
  }

  type GetLegalEntityGroupByPayload<T extends LegalEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalEntityGroupByOutputType[P]>
            : GetScalarType<T[P], LegalEntityGroupByOutputType[P]>
        }
      >
    >


  export type LegalEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    organizationName?: boolean
    edrpouCode?: boolean
    organizationTypeId?: boolean
    contactPerson?: boolean
    email?: boolean
    website?: boolean
    city?: boolean
    region?: boolean
    street?: boolean
    nonprofitDocBytes?: boolean
    usesEDOViaVchasno?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalEntity"]>

  export type LegalEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    organizationName?: boolean
    edrpouCode?: boolean
    organizationTypeId?: boolean
    contactPerson?: boolean
    email?: boolean
    website?: boolean
    city?: boolean
    region?: boolean
    street?: boolean
    nonprofitDocBytes?: boolean
    usesEDOViaVchasno?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalEntity"]>

  export type LegalEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    organizationName?: boolean
    edrpouCode?: boolean
    organizationTypeId?: boolean
    contactPerson?: boolean
    email?: boolean
    website?: boolean
    city?: boolean
    region?: boolean
    street?: boolean
    nonprofitDocBytes?: boolean
    usesEDOViaVchasno?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalEntity"]>

  export type LegalEntitySelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    organizationName?: boolean
    edrpouCode?: boolean
    organizationTypeId?: boolean
    contactPerson?: boolean
    email?: boolean
    website?: boolean
    city?: boolean
    region?: boolean
    street?: boolean
    nonprofitDocBytes?: boolean
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "organizationName" | "edrpouCode" | "organizationTypeId" | "contactPerson" | "email" | "website" | "city" | "region" | "street" | "nonprofitDocBytes" | "usesEDOViaVchasno", ExtArgs["result"]["legalEntity"]>
  export type LegalEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }
  export type LegalEntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }
  export type LegalEntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organizationType?: boolean | OrganizationTypeDefaultArgs<ExtArgs>
  }

  export type $LegalEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalEntity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organizationType: Prisma.$OrganizationTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string
      organizationName: string
      edrpouCode: string
      organizationTypeId: string
      contactPerson: string
      email: string
      website: string
      city: string
      region: string
      street: string
      nonprofitDocBytes: Uint8Array | null
      usesEDOViaVchasno: boolean
    }, ExtArgs["result"]["legalEntity"]>
    composites: {}
  }

  type LegalEntityGetPayload<S extends boolean | null | undefined | LegalEntityDefaultArgs> = $Result.GetResult<Prisma.$LegalEntityPayload, S>

  type LegalEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegalEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegalEntityCountAggregateInputType | true
    }

  export interface LegalEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalEntity'], meta: { name: 'LegalEntity' } }
    /**
     * Find zero or one LegalEntity that matches the filter.
     * @param {LegalEntityFindUniqueArgs} args - Arguments to find a LegalEntity
     * @example
     * // Get one LegalEntity
     * const legalEntity = await prisma.legalEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegalEntityFindUniqueArgs>(args: SelectSubset<T, LegalEntityFindUniqueArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegalEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegalEntityFindUniqueOrThrowArgs} args - Arguments to find a LegalEntity
     * @example
     * // Get one LegalEntity
     * const legalEntity = await prisma.legalEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegalEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, LegalEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityFindFirstArgs} args - Arguments to find a LegalEntity
     * @example
     * // Get one LegalEntity
     * const legalEntity = await prisma.legalEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegalEntityFindFirstArgs>(args?: SelectSubset<T, LegalEntityFindFirstArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityFindFirstOrThrowArgs} args - Arguments to find a LegalEntity
     * @example
     * // Get one LegalEntity
     * const legalEntity = await prisma.legalEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegalEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, LegalEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegalEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalEntities
     * const legalEntities = await prisma.legalEntity.findMany()
     * 
     * // Get first 10 LegalEntities
     * const legalEntities = await prisma.legalEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalEntityWithIdOnly = await prisma.legalEntity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegalEntityFindManyArgs>(args?: SelectSubset<T, LegalEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegalEntity.
     * @param {LegalEntityCreateArgs} args - Arguments to create a LegalEntity.
     * @example
     * // Create one LegalEntity
     * const LegalEntity = await prisma.legalEntity.create({
     *   data: {
     *     // ... data to create a LegalEntity
     *   }
     * })
     * 
     */
    create<T extends LegalEntityCreateArgs>(args: SelectSubset<T, LegalEntityCreateArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegalEntities.
     * @param {LegalEntityCreateManyArgs} args - Arguments to create many LegalEntities.
     * @example
     * // Create many LegalEntities
     * const legalEntity = await prisma.legalEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegalEntityCreateManyArgs>(args?: SelectSubset<T, LegalEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegalEntities and returns the data saved in the database.
     * @param {LegalEntityCreateManyAndReturnArgs} args - Arguments to create many LegalEntities.
     * @example
     * // Create many LegalEntities
     * const legalEntity = await prisma.legalEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegalEntities and only return the `id`
     * const legalEntityWithIdOnly = await prisma.legalEntity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegalEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, LegalEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegalEntity.
     * @param {LegalEntityDeleteArgs} args - Arguments to delete one LegalEntity.
     * @example
     * // Delete one LegalEntity
     * const LegalEntity = await prisma.legalEntity.delete({
     *   where: {
     *     // ... filter to delete one LegalEntity
     *   }
     * })
     * 
     */
    delete<T extends LegalEntityDeleteArgs>(args: SelectSubset<T, LegalEntityDeleteArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegalEntity.
     * @param {LegalEntityUpdateArgs} args - Arguments to update one LegalEntity.
     * @example
     * // Update one LegalEntity
     * const legalEntity = await prisma.legalEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegalEntityUpdateArgs>(args: SelectSubset<T, LegalEntityUpdateArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegalEntities.
     * @param {LegalEntityDeleteManyArgs} args - Arguments to filter LegalEntities to delete.
     * @example
     * // Delete a few LegalEntities
     * const { count } = await prisma.legalEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegalEntityDeleteManyArgs>(args?: SelectSubset<T, LegalEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalEntities
     * const legalEntity = await prisma.legalEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegalEntityUpdateManyArgs>(args: SelectSubset<T, LegalEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalEntities and returns the data updated in the database.
     * @param {LegalEntityUpdateManyAndReturnArgs} args - Arguments to update many LegalEntities.
     * @example
     * // Update many LegalEntities
     * const legalEntity = await prisma.legalEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegalEntities and only return the `id`
     * const legalEntityWithIdOnly = await prisma.legalEntity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LegalEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, LegalEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegalEntity.
     * @param {LegalEntityUpsertArgs} args - Arguments to update or create a LegalEntity.
     * @example
     * // Update or create a LegalEntity
     * const legalEntity = await prisma.legalEntity.upsert({
     *   create: {
     *     // ... data to create a LegalEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalEntity we want to update
     *   }
     * })
     */
    upsert<T extends LegalEntityUpsertArgs>(args: SelectSubset<T, LegalEntityUpsertArgs<ExtArgs>>): Prisma__LegalEntityClient<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegalEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityCountArgs} args - Arguments to filter LegalEntities to count.
     * @example
     * // Count the number of LegalEntities
     * const count = await prisma.legalEntity.count({
     *   where: {
     *     // ... the filter for the LegalEntities we want to count
     *   }
     * })
    **/
    count<T extends LegalEntityCountArgs>(
      args?: Subset<T, LegalEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegalEntityAggregateArgs>(args: Subset<T, LegalEntityAggregateArgs>): Prisma.PrismaPromise<GetLegalEntityAggregateType<T>>

    /**
     * Group by LegalEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegalEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalEntityGroupByArgs['orderBy'] }
        : { orderBy?: LegalEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegalEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalEntity model
   */
  readonly fields: LegalEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizationType<T extends OrganizationTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationTypeDefaultArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegalEntity model
   */
  interface LegalEntityFieldRefs {
    readonly id: FieldRef<"LegalEntity", 'String'>
    readonly userId: FieldRef<"LegalEntity", 'String'>
    readonly phone: FieldRef<"LegalEntity", 'String'>
    readonly organizationName: FieldRef<"LegalEntity", 'String'>
    readonly edrpouCode: FieldRef<"LegalEntity", 'String'>
    readonly organizationTypeId: FieldRef<"LegalEntity", 'String'>
    readonly contactPerson: FieldRef<"LegalEntity", 'String'>
    readonly email: FieldRef<"LegalEntity", 'String'>
    readonly website: FieldRef<"LegalEntity", 'String'>
    readonly city: FieldRef<"LegalEntity", 'String'>
    readonly region: FieldRef<"LegalEntity", 'String'>
    readonly street: FieldRef<"LegalEntity", 'String'>
    readonly nonprofitDocBytes: FieldRef<"LegalEntity", 'Bytes'>
    readonly usesEDOViaVchasno: FieldRef<"LegalEntity", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LegalEntity findUnique
   */
  export type LegalEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter, which LegalEntity to fetch.
     */
    where: LegalEntityWhereUniqueInput
  }

  /**
   * LegalEntity findUniqueOrThrow
   */
  export type LegalEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter, which LegalEntity to fetch.
     */
    where: LegalEntityWhereUniqueInput
  }

  /**
   * LegalEntity findFirst
   */
  export type LegalEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter, which LegalEntity to fetch.
     */
    where?: LegalEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalEntities to fetch.
     */
    orderBy?: LegalEntityOrderByWithRelationInput | LegalEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalEntities.
     */
    cursor?: LegalEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalEntities.
     */
    distinct?: LegalEntityScalarFieldEnum | LegalEntityScalarFieldEnum[]
  }

  /**
   * LegalEntity findFirstOrThrow
   */
  export type LegalEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter, which LegalEntity to fetch.
     */
    where?: LegalEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalEntities to fetch.
     */
    orderBy?: LegalEntityOrderByWithRelationInput | LegalEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalEntities.
     */
    cursor?: LegalEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalEntities.
     */
    distinct?: LegalEntityScalarFieldEnum | LegalEntityScalarFieldEnum[]
  }

  /**
   * LegalEntity findMany
   */
  export type LegalEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter, which LegalEntities to fetch.
     */
    where?: LegalEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalEntities to fetch.
     */
    orderBy?: LegalEntityOrderByWithRelationInput | LegalEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalEntities.
     */
    cursor?: LegalEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalEntities.
     */
    skip?: number
    distinct?: LegalEntityScalarFieldEnum | LegalEntityScalarFieldEnum[]
  }

  /**
   * LegalEntity create
   */
  export type LegalEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalEntity.
     */
    data: XOR<LegalEntityCreateInput, LegalEntityUncheckedCreateInput>
  }

  /**
   * LegalEntity createMany
   */
  export type LegalEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalEntities.
     */
    data: LegalEntityCreateManyInput | LegalEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegalEntity createManyAndReturn
   */
  export type LegalEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * The data used to create many LegalEntities.
     */
    data: LegalEntityCreateManyInput | LegalEntityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegalEntity update
   */
  export type LegalEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalEntity.
     */
    data: XOR<LegalEntityUpdateInput, LegalEntityUncheckedUpdateInput>
    /**
     * Choose, which LegalEntity to update.
     */
    where: LegalEntityWhereUniqueInput
  }

  /**
   * LegalEntity updateMany
   */
  export type LegalEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalEntities.
     */
    data: XOR<LegalEntityUpdateManyMutationInput, LegalEntityUncheckedUpdateManyInput>
    /**
     * Filter which LegalEntities to update
     */
    where?: LegalEntityWhereInput
    /**
     * Limit how many LegalEntities to update.
     */
    limit?: number
  }

  /**
   * LegalEntity updateManyAndReturn
   */
  export type LegalEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * The data used to update LegalEntities.
     */
    data: XOR<LegalEntityUpdateManyMutationInput, LegalEntityUncheckedUpdateManyInput>
    /**
     * Filter which LegalEntities to update
     */
    where?: LegalEntityWhereInput
    /**
     * Limit how many LegalEntities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegalEntity upsert
   */
  export type LegalEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalEntity to update in case it exists.
     */
    where: LegalEntityWhereUniqueInput
    /**
     * In case the LegalEntity found by the `where` argument doesn't exist, create a new LegalEntity with this data.
     */
    create: XOR<LegalEntityCreateInput, LegalEntityUncheckedCreateInput>
    /**
     * In case the LegalEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalEntityUpdateInput, LegalEntityUncheckedUpdateInput>
  }

  /**
   * LegalEntity delete
   */
  export type LegalEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    /**
     * Filter which LegalEntity to delete.
     */
    where: LegalEntityWhereUniqueInput
  }

  /**
   * LegalEntity deleteMany
   */
  export type LegalEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalEntities to delete
     */
    where?: LegalEntityWhereInput
    /**
     * Limit how many LegalEntities to delete.
     */
    limit?: number
  }

  /**
   * LegalEntity without action
   */
  export type LegalEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
  }


  /**
   * Model LocalUser
   */

  export type AggregateLocalUser = {
    _count: LocalUserCountAggregateOutputType | null
    _min: LocalUserMinAggregateOutputType | null
    _max: LocalUserMaxAggregateOutputType | null
  }

  export type LocalUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isSuperAdmin: boolean | null
    email: string | null
  }

  export type LocalUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isSuperAdmin: boolean | null
    email: string | null
  }

  export type LocalUserCountAggregateOutputType = {
    id: number
    userId: number
    isSuperAdmin: number
    email: number
    _all: number
  }


  export type LocalUserMinAggregateInputType = {
    id?: true
    userId?: true
    isSuperAdmin?: true
    email?: true
  }

  export type LocalUserMaxAggregateInputType = {
    id?: true
    userId?: true
    isSuperAdmin?: true
    email?: true
  }

  export type LocalUserCountAggregateInputType = {
    id?: true
    userId?: true
    isSuperAdmin?: true
    email?: true
    _all?: true
  }

  export type LocalUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalUser to aggregate.
     */
    where?: LocalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalUsers to fetch.
     */
    orderBy?: LocalUserOrderByWithRelationInput | LocalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalUsers
    **/
    _count?: true | LocalUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalUserMaxAggregateInputType
  }

  export type GetLocalUserAggregateType<T extends LocalUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalUser[P]>
      : GetScalarType<T[P], AggregateLocalUser[P]>
  }




  export type LocalUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalUserWhereInput
    orderBy?: LocalUserOrderByWithAggregationInput | LocalUserOrderByWithAggregationInput[]
    by: LocalUserScalarFieldEnum[] | LocalUserScalarFieldEnum
    having?: LocalUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalUserCountAggregateInputType | true
    _min?: LocalUserMinAggregateInputType
    _max?: LocalUserMaxAggregateInputType
  }

  export type LocalUserGroupByOutputType = {
    id: string
    userId: string
    isSuperAdmin: boolean
    email: string
    _count: LocalUserCountAggregateOutputType | null
    _min: LocalUserMinAggregateOutputType | null
    _max: LocalUserMaxAggregateOutputType | null
  }

  type GetLocalUserGroupByPayload<T extends LocalUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalUserGroupByOutputType[P]>
            : GetScalarType<T[P], LocalUserGroupByOutputType[P]>
        }
      >
    >


  export type LocalUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isSuperAdmin?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localUser"]>

  export type LocalUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isSuperAdmin?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localUser"]>

  export type LocalUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isSuperAdmin?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localUser"]>

  export type LocalUserSelectScalar = {
    id?: boolean
    userId?: boolean
    isSuperAdmin?: boolean
    email?: boolean
  }

  export type LocalUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isSuperAdmin" | "email", ExtArgs["result"]["localUser"]>
  export type LocalUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocalUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocalUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocalUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isSuperAdmin: boolean
      email: string
    }, ExtArgs["result"]["localUser"]>
    composites: {}
  }

  type LocalUserGetPayload<S extends boolean | null | undefined | LocalUserDefaultArgs> = $Result.GetResult<Prisma.$LocalUserPayload, S>

  type LocalUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalUserCountAggregateInputType | true
    }

  export interface LocalUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalUser'], meta: { name: 'LocalUser' } }
    /**
     * Find zero or one LocalUser that matches the filter.
     * @param {LocalUserFindUniqueArgs} args - Arguments to find a LocalUser
     * @example
     * // Get one LocalUser
     * const localUser = await prisma.localUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalUserFindUniqueArgs>(args: SelectSubset<T, LocalUserFindUniqueArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalUserFindUniqueOrThrowArgs} args - Arguments to find a LocalUser
     * @example
     * // Get one LocalUser
     * const localUser = await prisma.localUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalUserFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserFindFirstArgs} args - Arguments to find a LocalUser
     * @example
     * // Get one LocalUser
     * const localUser = await prisma.localUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalUserFindFirstArgs>(args?: SelectSubset<T, LocalUserFindFirstArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserFindFirstOrThrowArgs} args - Arguments to find a LocalUser
     * @example
     * // Get one LocalUser
     * const localUser = await prisma.localUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalUserFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalUsers
     * const localUsers = await prisma.localUser.findMany()
     * 
     * // Get first 10 LocalUsers
     * const localUsers = await prisma.localUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localUserWithIdOnly = await prisma.localUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalUserFindManyArgs>(args?: SelectSubset<T, LocalUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalUser.
     * @param {LocalUserCreateArgs} args - Arguments to create a LocalUser.
     * @example
     * // Create one LocalUser
     * const LocalUser = await prisma.localUser.create({
     *   data: {
     *     // ... data to create a LocalUser
     *   }
     * })
     * 
     */
    create<T extends LocalUserCreateArgs>(args: SelectSubset<T, LocalUserCreateArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalUsers.
     * @param {LocalUserCreateManyArgs} args - Arguments to create many LocalUsers.
     * @example
     * // Create many LocalUsers
     * const localUser = await prisma.localUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalUserCreateManyArgs>(args?: SelectSubset<T, LocalUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalUsers and returns the data saved in the database.
     * @param {LocalUserCreateManyAndReturnArgs} args - Arguments to create many LocalUsers.
     * @example
     * // Create many LocalUsers
     * const localUser = await prisma.localUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalUsers and only return the `id`
     * const localUserWithIdOnly = await prisma.localUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalUserCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalUser.
     * @param {LocalUserDeleteArgs} args - Arguments to delete one LocalUser.
     * @example
     * // Delete one LocalUser
     * const LocalUser = await prisma.localUser.delete({
     *   where: {
     *     // ... filter to delete one LocalUser
     *   }
     * })
     * 
     */
    delete<T extends LocalUserDeleteArgs>(args: SelectSubset<T, LocalUserDeleteArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalUser.
     * @param {LocalUserUpdateArgs} args - Arguments to update one LocalUser.
     * @example
     * // Update one LocalUser
     * const localUser = await prisma.localUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalUserUpdateArgs>(args: SelectSubset<T, LocalUserUpdateArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalUsers.
     * @param {LocalUserDeleteManyArgs} args - Arguments to filter LocalUsers to delete.
     * @example
     * // Delete a few LocalUsers
     * const { count } = await prisma.localUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalUserDeleteManyArgs>(args?: SelectSubset<T, LocalUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalUsers
     * const localUser = await prisma.localUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalUserUpdateManyArgs>(args: SelectSubset<T, LocalUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalUsers and returns the data updated in the database.
     * @param {LocalUserUpdateManyAndReturnArgs} args - Arguments to update many LocalUsers.
     * @example
     * // Update many LocalUsers
     * const localUser = await prisma.localUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalUsers and only return the `id`
     * const localUserWithIdOnly = await prisma.localUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalUserUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalUser.
     * @param {LocalUserUpsertArgs} args - Arguments to update or create a LocalUser.
     * @example
     * // Update or create a LocalUser
     * const localUser = await prisma.localUser.upsert({
     *   create: {
     *     // ... data to create a LocalUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalUser we want to update
     *   }
     * })
     */
    upsert<T extends LocalUserUpsertArgs>(args: SelectSubset<T, LocalUserUpsertArgs<ExtArgs>>): Prisma__LocalUserClient<$Result.GetResult<Prisma.$LocalUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserCountArgs} args - Arguments to filter LocalUsers to count.
     * @example
     * // Count the number of LocalUsers
     * const count = await prisma.localUser.count({
     *   where: {
     *     // ... the filter for the LocalUsers we want to count
     *   }
     * })
    **/
    count<T extends LocalUserCountArgs>(
      args?: Subset<T, LocalUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalUserAggregateArgs>(args: Subset<T, LocalUserAggregateArgs>): Prisma.PrismaPromise<GetLocalUserAggregateType<T>>

    /**
     * Group by LocalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalUserGroupByArgs['orderBy'] }
        : { orderBy?: LocalUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalUser model
   */
  readonly fields: LocalUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocalUser model
   */
  interface LocalUserFieldRefs {
    readonly id: FieldRef<"LocalUser", 'String'>
    readonly userId: FieldRef<"LocalUser", 'String'>
    readonly isSuperAdmin: FieldRef<"LocalUser", 'Boolean'>
    readonly email: FieldRef<"LocalUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LocalUser findUnique
   */
  export type LocalUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter, which LocalUser to fetch.
     */
    where: LocalUserWhereUniqueInput
  }

  /**
   * LocalUser findUniqueOrThrow
   */
  export type LocalUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter, which LocalUser to fetch.
     */
    where: LocalUserWhereUniqueInput
  }

  /**
   * LocalUser findFirst
   */
  export type LocalUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter, which LocalUser to fetch.
     */
    where?: LocalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalUsers to fetch.
     */
    orderBy?: LocalUserOrderByWithRelationInput | LocalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalUsers.
     */
    cursor?: LocalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalUsers.
     */
    distinct?: LocalUserScalarFieldEnum | LocalUserScalarFieldEnum[]
  }

  /**
   * LocalUser findFirstOrThrow
   */
  export type LocalUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter, which LocalUser to fetch.
     */
    where?: LocalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalUsers to fetch.
     */
    orderBy?: LocalUserOrderByWithRelationInput | LocalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalUsers.
     */
    cursor?: LocalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalUsers.
     */
    distinct?: LocalUserScalarFieldEnum | LocalUserScalarFieldEnum[]
  }

  /**
   * LocalUser findMany
   */
  export type LocalUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter, which LocalUsers to fetch.
     */
    where?: LocalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalUsers to fetch.
     */
    orderBy?: LocalUserOrderByWithRelationInput | LocalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalUsers.
     */
    cursor?: LocalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalUsers.
     */
    skip?: number
    distinct?: LocalUserScalarFieldEnum | LocalUserScalarFieldEnum[]
  }

  /**
   * LocalUser create
   */
  export type LocalUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * The data needed to create a LocalUser.
     */
    data: XOR<LocalUserCreateInput, LocalUserUncheckedCreateInput>
  }

  /**
   * LocalUser createMany
   */
  export type LocalUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalUsers.
     */
    data: LocalUserCreateManyInput | LocalUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocalUser createManyAndReturn
   */
  export type LocalUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * The data used to create many LocalUsers.
     */
    data: LocalUserCreateManyInput | LocalUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalUser update
   */
  export type LocalUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * The data needed to update a LocalUser.
     */
    data: XOR<LocalUserUpdateInput, LocalUserUncheckedUpdateInput>
    /**
     * Choose, which LocalUser to update.
     */
    where: LocalUserWhereUniqueInput
  }

  /**
   * LocalUser updateMany
   */
  export type LocalUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalUsers.
     */
    data: XOR<LocalUserUpdateManyMutationInput, LocalUserUncheckedUpdateManyInput>
    /**
     * Filter which LocalUsers to update
     */
    where?: LocalUserWhereInput
    /**
     * Limit how many LocalUsers to update.
     */
    limit?: number
  }

  /**
   * LocalUser updateManyAndReturn
   */
  export type LocalUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * The data used to update LocalUsers.
     */
    data: XOR<LocalUserUpdateManyMutationInput, LocalUserUncheckedUpdateManyInput>
    /**
     * Filter which LocalUsers to update
     */
    where?: LocalUserWhereInput
    /**
     * Limit how many LocalUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalUser upsert
   */
  export type LocalUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * The filter to search for the LocalUser to update in case it exists.
     */
    where: LocalUserWhereUniqueInput
    /**
     * In case the LocalUser found by the `where` argument doesn't exist, create a new LocalUser with this data.
     */
    create: XOR<LocalUserCreateInput, LocalUserUncheckedCreateInput>
    /**
     * In case the LocalUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalUserUpdateInput, LocalUserUncheckedUpdateInput>
  }

  /**
   * LocalUser delete
   */
  export type LocalUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
    /**
     * Filter which LocalUser to delete.
     */
    where: LocalUserWhereUniqueInput
  }

  /**
   * LocalUser deleteMany
   */
  export type LocalUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalUsers to delete
     */
    where?: LocalUserWhereInput
    /**
     * Limit how many LocalUsers to delete.
     */
    limit?: number
  }

  /**
   * LocalUser without action
   */
  export type LocalUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalUser
     */
    select?: LocalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalUser
     */
    omit?: LocalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalUserInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationType
   */

  export type AggregateOrganizationType = {
    _count: OrganizationTypeCountAggregateOutputType | null
    _min: OrganizationTypeMinAggregateOutputType | null
    _max: OrganizationTypeMaxAggregateOutputType | null
  }

  export type OrganizationTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OrganizationTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OrganizationTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OrganizationTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OrganizationTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationType to aggregate.
     */
    where?: OrganizationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationTypes to fetch.
     */
    orderBy?: OrganizationTypeOrderByWithRelationInput | OrganizationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationTypes
    **/
    _count?: true | OrganizationTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationTypeMaxAggregateInputType
  }

  export type GetOrganizationTypeAggregateType<T extends OrganizationTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationType[P]>
      : GetScalarType<T[P], AggregateOrganizationType[P]>
  }




  export type OrganizationTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationTypeWhereInput
    orderBy?: OrganizationTypeOrderByWithAggregationInput | OrganizationTypeOrderByWithAggregationInput[]
    by: OrganizationTypeScalarFieldEnum[] | OrganizationTypeScalarFieldEnum
    having?: OrganizationTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationTypeCountAggregateInputType | true
    _min?: OrganizationTypeMinAggregateInputType
    _max?: OrganizationTypeMaxAggregateInputType
  }

  export type OrganizationTypeGroupByOutputType = {
    id: string
    name: string
    _count: OrganizationTypeCountAggregateOutputType | null
    _min: OrganizationTypeMinAggregateOutputType | null
    _max: OrganizationTypeMaxAggregateOutputType | null
  }

  type GetOrganizationTypeGroupByPayload<T extends OrganizationTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationTypeGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationTypeGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalEntities?: boolean | OrganizationType$legalEntitiesArgs<ExtArgs>
    _count?: boolean | OrganizationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationType"]>

  export type OrganizationTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["organizationType"]>

  export type OrganizationTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["organizationType"]>

  export type OrganizationTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OrganizationTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["organizationType"]>
  export type OrganizationTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legalEntities?: boolean | OrganizationType$legalEntitiesArgs<ExtArgs>
    _count?: boolean | OrganizationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationType"
    objects: {
      legalEntities: Prisma.$LegalEntityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["organizationType"]>
    composites: {}
  }

  type OrganizationTypeGetPayload<S extends boolean | null | undefined | OrganizationTypeDefaultArgs> = $Result.GetResult<Prisma.$OrganizationTypePayload, S>

  type OrganizationTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationTypeCountAggregateInputType | true
    }

  export interface OrganizationTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationType'], meta: { name: 'OrganizationType' } }
    /**
     * Find zero or one OrganizationType that matches the filter.
     * @param {OrganizationTypeFindUniqueArgs} args - Arguments to find a OrganizationType
     * @example
     * // Get one OrganizationType
     * const organizationType = await prisma.organizationType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationTypeFindUniqueArgs>(args: SelectSubset<T, OrganizationTypeFindUniqueArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationTypeFindUniqueOrThrowArgs} args - Arguments to find a OrganizationType
     * @example
     * // Get one OrganizationType
     * const organizationType = await prisma.organizationType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeFindFirstArgs} args - Arguments to find a OrganizationType
     * @example
     * // Get one OrganizationType
     * const organizationType = await prisma.organizationType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationTypeFindFirstArgs>(args?: SelectSubset<T, OrganizationTypeFindFirstArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeFindFirstOrThrowArgs} args - Arguments to find a OrganizationType
     * @example
     * // Get one OrganizationType
     * const organizationType = await prisma.organizationType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationTypes
     * const organizationTypes = await prisma.organizationType.findMany()
     * 
     * // Get first 10 OrganizationTypes
     * const organizationTypes = await prisma.organizationType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationTypeWithIdOnly = await prisma.organizationType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationTypeFindManyArgs>(args?: SelectSubset<T, OrganizationTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationType.
     * @param {OrganizationTypeCreateArgs} args - Arguments to create a OrganizationType.
     * @example
     * // Create one OrganizationType
     * const OrganizationType = await prisma.organizationType.create({
     *   data: {
     *     // ... data to create a OrganizationType
     *   }
     * })
     * 
     */
    create<T extends OrganizationTypeCreateArgs>(args: SelectSubset<T, OrganizationTypeCreateArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationTypes.
     * @param {OrganizationTypeCreateManyArgs} args - Arguments to create many OrganizationTypes.
     * @example
     * // Create many OrganizationTypes
     * const organizationType = await prisma.organizationType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationTypeCreateManyArgs>(args?: SelectSubset<T, OrganizationTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationTypes and returns the data saved in the database.
     * @param {OrganizationTypeCreateManyAndReturnArgs} args - Arguments to create many OrganizationTypes.
     * @example
     * // Create many OrganizationTypes
     * const organizationType = await prisma.organizationType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationTypes and only return the `id`
     * const organizationTypeWithIdOnly = await prisma.organizationType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationType.
     * @param {OrganizationTypeDeleteArgs} args - Arguments to delete one OrganizationType.
     * @example
     * // Delete one OrganizationType
     * const OrganizationType = await prisma.organizationType.delete({
     *   where: {
     *     // ... filter to delete one OrganizationType
     *   }
     * })
     * 
     */
    delete<T extends OrganizationTypeDeleteArgs>(args: SelectSubset<T, OrganizationTypeDeleteArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationType.
     * @param {OrganizationTypeUpdateArgs} args - Arguments to update one OrganizationType.
     * @example
     * // Update one OrganizationType
     * const organizationType = await prisma.organizationType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationTypeUpdateArgs>(args: SelectSubset<T, OrganizationTypeUpdateArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationTypes.
     * @param {OrganizationTypeDeleteManyArgs} args - Arguments to filter OrganizationTypes to delete.
     * @example
     * // Delete a few OrganizationTypes
     * const { count } = await prisma.organizationType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationTypeDeleteManyArgs>(args?: SelectSubset<T, OrganizationTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationTypes
     * const organizationType = await prisma.organizationType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationTypeUpdateManyArgs>(args: SelectSubset<T, OrganizationTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationTypes and returns the data updated in the database.
     * @param {OrganizationTypeUpdateManyAndReturnArgs} args - Arguments to update many OrganizationTypes.
     * @example
     * // Update many OrganizationTypes
     * const organizationType = await prisma.organizationType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationTypes and only return the `id`
     * const organizationTypeWithIdOnly = await prisma.organizationType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationType.
     * @param {OrganizationTypeUpsertArgs} args - Arguments to update or create a OrganizationType.
     * @example
     * // Update or create a OrganizationType
     * const organizationType = await prisma.organizationType.upsert({
     *   create: {
     *     // ... data to create a OrganizationType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationType we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationTypeUpsertArgs>(args: SelectSubset<T, OrganizationTypeUpsertArgs<ExtArgs>>): Prisma__OrganizationTypeClient<$Result.GetResult<Prisma.$OrganizationTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeCountArgs} args - Arguments to filter OrganizationTypes to count.
     * @example
     * // Count the number of OrganizationTypes
     * const count = await prisma.organizationType.count({
     *   where: {
     *     // ... the filter for the OrganizationTypes we want to count
     *   }
     * })
    **/
    count<T extends OrganizationTypeCountArgs>(
      args?: Subset<T, OrganizationTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationTypeAggregateArgs>(args: Subset<T, OrganizationTypeAggregateArgs>): Prisma.PrismaPromise<GetOrganizationTypeAggregateType<T>>

    /**
     * Group by OrganizationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationTypeGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationType model
   */
  readonly fields: OrganizationTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legalEntities<T extends OrganizationType$legalEntitiesArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationType$legalEntitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationType model
   */
  interface OrganizationTypeFieldRefs {
    readonly id: FieldRef<"OrganizationType", 'String'>
    readonly name: FieldRef<"OrganizationType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationType findUnique
   */
  export type OrganizationTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationType to fetch.
     */
    where: OrganizationTypeWhereUniqueInput
  }

  /**
   * OrganizationType findUniqueOrThrow
   */
  export type OrganizationTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationType to fetch.
     */
    where: OrganizationTypeWhereUniqueInput
  }

  /**
   * OrganizationType findFirst
   */
  export type OrganizationTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationType to fetch.
     */
    where?: OrganizationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationTypes to fetch.
     */
    orderBy?: OrganizationTypeOrderByWithRelationInput | OrganizationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationTypes.
     */
    cursor?: OrganizationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationTypes.
     */
    distinct?: OrganizationTypeScalarFieldEnum | OrganizationTypeScalarFieldEnum[]
  }

  /**
   * OrganizationType findFirstOrThrow
   */
  export type OrganizationTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationType to fetch.
     */
    where?: OrganizationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationTypes to fetch.
     */
    orderBy?: OrganizationTypeOrderByWithRelationInput | OrganizationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationTypes.
     */
    cursor?: OrganizationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationTypes.
     */
    distinct?: OrganizationTypeScalarFieldEnum | OrganizationTypeScalarFieldEnum[]
  }

  /**
   * OrganizationType findMany
   */
  export type OrganizationTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationTypes to fetch.
     */
    where?: OrganizationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationTypes to fetch.
     */
    orderBy?: OrganizationTypeOrderByWithRelationInput | OrganizationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationTypes.
     */
    cursor?: OrganizationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationTypes.
     */
    skip?: number
    distinct?: OrganizationTypeScalarFieldEnum | OrganizationTypeScalarFieldEnum[]
  }

  /**
   * OrganizationType create
   */
  export type OrganizationTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationType.
     */
    data: XOR<OrganizationTypeCreateInput, OrganizationTypeUncheckedCreateInput>
  }

  /**
   * OrganizationType createMany
   */
  export type OrganizationTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationTypes.
     */
    data: OrganizationTypeCreateManyInput | OrganizationTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationType createManyAndReturn
   */
  export type OrganizationTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationTypes.
     */
    data: OrganizationTypeCreateManyInput | OrganizationTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationType update
   */
  export type OrganizationTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationType.
     */
    data: XOR<OrganizationTypeUpdateInput, OrganizationTypeUncheckedUpdateInput>
    /**
     * Choose, which OrganizationType to update.
     */
    where: OrganizationTypeWhereUniqueInput
  }

  /**
   * OrganizationType updateMany
   */
  export type OrganizationTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationTypes.
     */
    data: XOR<OrganizationTypeUpdateManyMutationInput, OrganizationTypeUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationTypes to update
     */
    where?: OrganizationTypeWhereInput
    /**
     * Limit how many OrganizationTypes to update.
     */
    limit?: number
  }

  /**
   * OrganizationType updateManyAndReturn
   */
  export type OrganizationTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationTypes.
     */
    data: XOR<OrganizationTypeUpdateManyMutationInput, OrganizationTypeUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationTypes to update
     */
    where?: OrganizationTypeWhereInput
    /**
     * Limit how many OrganizationTypes to update.
     */
    limit?: number
  }

  /**
   * OrganizationType upsert
   */
  export type OrganizationTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationType to update in case it exists.
     */
    where: OrganizationTypeWhereUniqueInput
    /**
     * In case the OrganizationType found by the `where` argument doesn't exist, create a new OrganizationType with this data.
     */
    create: XOR<OrganizationTypeCreateInput, OrganizationTypeUncheckedCreateInput>
    /**
     * In case the OrganizationType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationTypeUpdateInput, OrganizationTypeUncheckedUpdateInput>
  }

  /**
   * OrganizationType delete
   */
  export type OrganizationTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
    /**
     * Filter which OrganizationType to delete.
     */
    where: OrganizationTypeWhereUniqueInput
  }

  /**
   * OrganizationType deleteMany
   */
  export type OrganizationTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationTypes to delete
     */
    where?: OrganizationTypeWhereInput
    /**
     * Limit how many OrganizationTypes to delete.
     */
    limit?: number
  }

  /**
   * OrganizationType.legalEntities
   */
  export type OrganizationType$legalEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalEntity
     */
    select?: LegalEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalEntity
     */
    omit?: LegalEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalEntityInclude<ExtArgs> | null
    where?: LegalEntityWhereInput
    orderBy?: LegalEntityOrderByWithRelationInput | LegalEntityOrderByWithRelationInput[]
    cursor?: LegalEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegalEntityScalarFieldEnum | LegalEntityScalarFieldEnum[]
  }

  /**
   * OrganizationType without action
   */
  export type OrganizationTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationType
     */
    select?: OrganizationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationType
     */
    omit?: OrganizationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    type: 'type',
    isBlocked: 'isBlocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PhysicalPersonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    lastName: 'lastName',
    firstName: 'firstName',
    middleName: 'middleName',
    email: 'email',
    city: 'city',
    region: 'region',
    website: 'website',
    volunteerDocBytes: 'volunteerDocBytes'
  };

  export type PhysicalPersonScalarFieldEnum = (typeof PhysicalPersonScalarFieldEnum)[keyof typeof PhysicalPersonScalarFieldEnum]


  export const LegalEntityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    organizationName: 'organizationName',
    edrpouCode: 'edrpouCode',
    organizationTypeId: 'organizationTypeId',
    contactPerson: 'contactPerson',
    email: 'email',
    website: 'website',
    city: 'city',
    region: 'region',
    street: 'street',
    nonprofitDocBytes: 'nonprofitDocBytes',
    usesEDOViaVchasno: 'usesEDOViaVchasno'
  };

  export type LegalEntityScalarFieldEnum = (typeof LegalEntityScalarFieldEnum)[keyof typeof LegalEntityScalarFieldEnum]


  export const LocalUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isSuperAdmin: 'isSuperAdmin',
    email: 'email'
  };

  export type LocalUserScalarFieldEnum = (typeof LocalUserScalarFieldEnum)[keyof typeof LocalUserScalarFieldEnum]


  export const OrganizationTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OrganizationTypeScalarFieldEnum = (typeof OrganizationTypeScalarFieldEnum)[keyof typeof OrganizationTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    phone?: StringNullableFilter<"User"> | string | null
    physicalPerson?: XOR<PhysicalPersonNullableScalarRelationFilter, PhysicalPersonWhereInput> | null
    legalEntity?: XOR<LegalEntityNullableScalarRelationFilter, LegalEntityWhereInput> | null
    localUser?: XOR<LocalUserNullableScalarRelationFilter, LocalUserWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    physicalPerson?: PhysicalPersonOrderByWithRelationInput
    legalEntity?: LegalEntityOrderByWithRelationInput
    localUser?: LocalUserOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    physicalPerson?: XOR<PhysicalPersonNullableScalarRelationFilter, PhysicalPersonWhereInput> | null
    legalEntity?: XOR<LegalEntityNullableScalarRelationFilter, LegalEntityWhereInput> | null
    localUser?: XOR<LocalUserNullableScalarRelationFilter, LocalUserWhereInput> | null
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PhysicalPersonWhereInput = {
    AND?: PhysicalPersonWhereInput | PhysicalPersonWhereInput[]
    OR?: PhysicalPersonWhereInput[]
    NOT?: PhysicalPersonWhereInput | PhysicalPersonWhereInput[]
    id?: StringFilter<"PhysicalPerson"> | string
    userId?: StringFilter<"PhysicalPerson"> | string
    phone?: StringFilter<"PhysicalPerson"> | string
    lastName?: StringFilter<"PhysicalPerson"> | string
    firstName?: StringFilter<"PhysicalPerson"> | string
    middleName?: StringFilter<"PhysicalPerson"> | string
    email?: StringFilter<"PhysicalPerson"> | string
    city?: StringNullableFilter<"PhysicalPerson"> | string | null
    region?: StringNullableFilter<"PhysicalPerson"> | string | null
    website?: StringNullableFilter<"PhysicalPerson"> | string | null
    volunteerDocBytes?: BytesNullableFilter<"PhysicalPerson"> | Uint8Array | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhysicalPersonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    email?: SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    volunteerDocBytes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PhysicalPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    phone?: string
    AND?: PhysicalPersonWhereInput | PhysicalPersonWhereInput[]
    OR?: PhysicalPersonWhereInput[]
    NOT?: PhysicalPersonWhereInput | PhysicalPersonWhereInput[]
    lastName?: StringFilter<"PhysicalPerson"> | string
    firstName?: StringFilter<"PhysicalPerson"> | string
    middleName?: StringFilter<"PhysicalPerson"> | string
    email?: StringFilter<"PhysicalPerson"> | string
    city?: StringNullableFilter<"PhysicalPerson"> | string | null
    region?: StringNullableFilter<"PhysicalPerson"> | string | null
    website?: StringNullableFilter<"PhysicalPerson"> | string | null
    volunteerDocBytes?: BytesNullableFilter<"PhysicalPerson"> | Uint8Array | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "phone">

  export type PhysicalPersonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    email?: SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    volunteerDocBytes?: SortOrderInput | SortOrder
    _count?: PhysicalPersonCountOrderByAggregateInput
    _max?: PhysicalPersonMaxOrderByAggregateInput
    _min?: PhysicalPersonMinOrderByAggregateInput
  }

  export type PhysicalPersonScalarWhereWithAggregatesInput = {
    AND?: PhysicalPersonScalarWhereWithAggregatesInput | PhysicalPersonScalarWhereWithAggregatesInput[]
    OR?: PhysicalPersonScalarWhereWithAggregatesInput[]
    NOT?: PhysicalPersonScalarWhereWithAggregatesInput | PhysicalPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    userId?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    phone?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    lastName?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    firstName?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    middleName?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    email?: StringWithAggregatesFilter<"PhysicalPerson"> | string
    city?: StringNullableWithAggregatesFilter<"PhysicalPerson"> | string | null
    region?: StringNullableWithAggregatesFilter<"PhysicalPerson"> | string | null
    website?: StringNullableWithAggregatesFilter<"PhysicalPerson"> | string | null
    volunteerDocBytes?: BytesNullableWithAggregatesFilter<"PhysicalPerson"> | Uint8Array | null
  }

  export type LegalEntityWhereInput = {
    AND?: LegalEntityWhereInput | LegalEntityWhereInput[]
    OR?: LegalEntityWhereInput[]
    NOT?: LegalEntityWhereInput | LegalEntityWhereInput[]
    id?: StringFilter<"LegalEntity"> | string
    userId?: StringFilter<"LegalEntity"> | string
    phone?: StringFilter<"LegalEntity"> | string
    organizationName?: StringFilter<"LegalEntity"> | string
    edrpouCode?: StringFilter<"LegalEntity"> | string
    organizationTypeId?: StringFilter<"LegalEntity"> | string
    contactPerson?: StringFilter<"LegalEntity"> | string
    email?: StringFilter<"LegalEntity"> | string
    website?: StringFilter<"LegalEntity"> | string
    city?: StringFilter<"LegalEntity"> | string
    region?: StringFilter<"LegalEntity"> | string
    street?: StringFilter<"LegalEntity"> | string
    nonprofitDocBytes?: BytesNullableFilter<"LegalEntity"> | Uint8Array | null
    usesEDOViaVchasno?: BoolFilter<"LegalEntity"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organizationType?: XOR<OrganizationTypeScalarRelationFilter, OrganizationTypeWhereInput>
  }

  export type LegalEntityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    organizationName?: SortOrder
    edrpouCode?: SortOrder
    organizationTypeId?: SortOrder
    contactPerson?: SortOrder
    email?: SortOrder
    website?: SortOrder
    city?: SortOrder
    region?: SortOrder
    street?: SortOrder
    nonprofitDocBytes?: SortOrderInput | SortOrder
    usesEDOViaVchasno?: SortOrder
    user?: UserOrderByWithRelationInput
    organizationType?: OrganizationTypeOrderByWithRelationInput
  }

  export type LegalEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    phone?: string
    AND?: LegalEntityWhereInput | LegalEntityWhereInput[]
    OR?: LegalEntityWhereInput[]
    NOT?: LegalEntityWhereInput | LegalEntityWhereInput[]
    organizationName?: StringFilter<"LegalEntity"> | string
    edrpouCode?: StringFilter<"LegalEntity"> | string
    organizationTypeId?: StringFilter<"LegalEntity"> | string
    contactPerson?: StringFilter<"LegalEntity"> | string
    email?: StringFilter<"LegalEntity"> | string
    website?: StringFilter<"LegalEntity"> | string
    city?: StringFilter<"LegalEntity"> | string
    region?: StringFilter<"LegalEntity"> | string
    street?: StringFilter<"LegalEntity"> | string
    nonprofitDocBytes?: BytesNullableFilter<"LegalEntity"> | Uint8Array | null
    usesEDOViaVchasno?: BoolFilter<"LegalEntity"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organizationType?: XOR<OrganizationTypeScalarRelationFilter, OrganizationTypeWhereInput>
  }, "id" | "userId" | "phone">

  export type LegalEntityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    organizationName?: SortOrder
    edrpouCode?: SortOrder
    organizationTypeId?: SortOrder
    contactPerson?: SortOrder
    email?: SortOrder
    website?: SortOrder
    city?: SortOrder
    region?: SortOrder
    street?: SortOrder
    nonprofitDocBytes?: SortOrderInput | SortOrder
    usesEDOViaVchasno?: SortOrder
    _count?: LegalEntityCountOrderByAggregateInput
    _max?: LegalEntityMaxOrderByAggregateInput
    _min?: LegalEntityMinOrderByAggregateInput
  }

  export type LegalEntityScalarWhereWithAggregatesInput = {
    AND?: LegalEntityScalarWhereWithAggregatesInput | LegalEntityScalarWhereWithAggregatesInput[]
    OR?: LegalEntityScalarWhereWithAggregatesInput[]
    NOT?: LegalEntityScalarWhereWithAggregatesInput | LegalEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegalEntity"> | string
    userId?: StringWithAggregatesFilter<"LegalEntity"> | string
    phone?: StringWithAggregatesFilter<"LegalEntity"> | string
    organizationName?: StringWithAggregatesFilter<"LegalEntity"> | string
    edrpouCode?: StringWithAggregatesFilter<"LegalEntity"> | string
    organizationTypeId?: StringWithAggregatesFilter<"LegalEntity"> | string
    contactPerson?: StringWithAggregatesFilter<"LegalEntity"> | string
    email?: StringWithAggregatesFilter<"LegalEntity"> | string
    website?: StringWithAggregatesFilter<"LegalEntity"> | string
    city?: StringWithAggregatesFilter<"LegalEntity"> | string
    region?: StringWithAggregatesFilter<"LegalEntity"> | string
    street?: StringWithAggregatesFilter<"LegalEntity"> | string
    nonprofitDocBytes?: BytesNullableWithAggregatesFilter<"LegalEntity"> | Uint8Array | null
    usesEDOViaVchasno?: BoolWithAggregatesFilter<"LegalEntity"> | boolean
  }

  export type LocalUserWhereInput = {
    AND?: LocalUserWhereInput | LocalUserWhereInput[]
    OR?: LocalUserWhereInput[]
    NOT?: LocalUserWhereInput | LocalUserWhereInput[]
    id?: StringFilter<"LocalUser"> | string
    userId?: StringFilter<"LocalUser"> | string
    isSuperAdmin?: BoolFilter<"LocalUser"> | boolean
    email?: StringFilter<"LocalUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LocalUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isSuperAdmin?: SortOrder
    email?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LocalUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: LocalUserWhereInput | LocalUserWhereInput[]
    OR?: LocalUserWhereInput[]
    NOT?: LocalUserWhereInput | LocalUserWhereInput[]
    isSuperAdmin?: BoolFilter<"LocalUser"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "email">

  export type LocalUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isSuperAdmin?: SortOrder
    email?: SortOrder
    _count?: LocalUserCountOrderByAggregateInput
    _max?: LocalUserMaxOrderByAggregateInput
    _min?: LocalUserMinOrderByAggregateInput
  }

  export type LocalUserScalarWhereWithAggregatesInput = {
    AND?: LocalUserScalarWhereWithAggregatesInput | LocalUserScalarWhereWithAggregatesInput[]
    OR?: LocalUserScalarWhereWithAggregatesInput[]
    NOT?: LocalUserScalarWhereWithAggregatesInput | LocalUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocalUser"> | string
    userId?: StringWithAggregatesFilter<"LocalUser"> | string
    isSuperAdmin?: BoolWithAggregatesFilter<"LocalUser"> | boolean
    email?: StringWithAggregatesFilter<"LocalUser"> | string
  }

  export type OrganizationTypeWhereInput = {
    AND?: OrganizationTypeWhereInput | OrganizationTypeWhereInput[]
    OR?: OrganizationTypeWhereInput[]
    NOT?: OrganizationTypeWhereInput | OrganizationTypeWhereInput[]
    id?: StringFilter<"OrganizationType"> | string
    name?: StringFilter<"OrganizationType"> | string
    legalEntities?: LegalEntityListRelationFilter
  }

  export type OrganizationTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    legalEntities?: LegalEntityOrderByRelationAggregateInput
  }

  export type OrganizationTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationTypeWhereInput | OrganizationTypeWhereInput[]
    OR?: OrganizationTypeWhereInput[]
    NOT?: OrganizationTypeWhereInput | OrganizationTypeWhereInput[]
    name?: StringFilter<"OrganizationType"> | string
    legalEntities?: LegalEntityListRelationFilter
  }, "id">

  export type OrganizationTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OrganizationTypeCountOrderByAggregateInput
    _max?: OrganizationTypeMaxOrderByAggregateInput
    _min?: OrganizationTypeMinOrderByAggregateInput
  }

  export type OrganizationTypeScalarWhereWithAggregatesInput = {
    AND?: OrganizationTypeScalarWhereWithAggregatesInput | OrganizationTypeScalarWhereWithAggregatesInput[]
    OR?: OrganizationTypeScalarWhereWithAggregatesInput[]
    NOT?: OrganizationTypeScalarWhereWithAggregatesInput | OrganizationTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationType"> | string
    name?: StringWithAggregatesFilter<"OrganizationType"> | string
  }

  export type UserCreateInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonCreateNestedOneWithoutUserInput
    legalEntity?: LegalEntityCreateNestedOneWithoutUserInput
    localUser?: LocalUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonUncheckedCreateNestedOneWithoutUserInput
    legalEntity?: LegalEntityUncheckedCreateNestedOneWithoutUserInput
    localUser?: LocalUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUpdateOneWithoutUserNestedInput
    legalEntity?: LegalEntityUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUncheckedUpdateOneWithoutUserNestedInput
    legalEntity?: LegalEntityUncheckedUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhysicalPersonCreateInput = {
    id?: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city?: string | null
    region?: string | null
    website?: string | null
    volunteerDocBytes?: Uint8Array | null
    user: UserCreateNestedOneWithoutPhysicalPersonInput
  }

  export type PhysicalPersonUncheckedCreateInput = {
    id?: string
    userId: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city?: string | null
    region?: string | null
    website?: string | null
    volunteerDocBytes?: Uint8Array | null
  }

  export type PhysicalPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    user?: UserUpdateOneRequiredWithoutPhysicalPersonNestedInput
  }

  export type PhysicalPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type PhysicalPersonCreateManyInput = {
    id?: string
    userId: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city?: string | null
    region?: string | null
    website?: string | null
    volunteerDocBytes?: Uint8Array | null
  }

  export type PhysicalPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type PhysicalPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type LegalEntityCreateInput = {
    id?: string
    phone: string
    organizationName: string
    edrpouCode: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
    user: UserCreateNestedOneWithoutLegalEntityInput
    organizationType: OrganizationTypeCreateNestedOneWithoutLegalEntitiesInput
  }

  export type LegalEntityUncheckedCreateInput = {
    id?: string
    userId: string
    phone: string
    organizationName: string
    edrpouCode: string
    organizationTypeId: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLegalEntityNestedInput
    organizationType?: OrganizationTypeUpdateOneRequiredWithoutLegalEntitiesNestedInput
  }

  export type LegalEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    organizationTypeId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LegalEntityCreateManyInput = {
    id?: string
    userId: string
    phone: string
    organizationName: string
    edrpouCode: string
    organizationTypeId: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LegalEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    organizationTypeId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocalUserCreateInput = {
    id?: string
    isSuperAdmin?: boolean
    email: string
    user: UserCreateNestedOneWithoutLocalUserInput
  }

  export type LocalUserUncheckedCreateInput = {
    id?: string
    userId: string
    isSuperAdmin?: boolean
    email: string
  }

  export type LocalUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLocalUserNestedInput
  }

  export type LocalUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUserCreateManyInput = {
    id?: string
    userId: string
    isSuperAdmin?: boolean
    email: string
  }

  export type LocalUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationTypeCreateInput = {
    id?: string
    name: string
    legalEntities?: LegalEntityCreateNestedManyWithoutOrganizationTypeInput
  }

  export type OrganizationTypeUncheckedCreateInput = {
    id?: string
    name: string
    legalEntities?: LegalEntityUncheckedCreateNestedManyWithoutOrganizationTypeInput
  }

  export type OrganizationTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalEntities?: LegalEntityUpdateManyWithoutOrganizationTypeNestedInput
  }

  export type OrganizationTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalEntities?: LegalEntityUncheckedUpdateManyWithoutOrganizationTypeNestedInput
  }

  export type OrganizationTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type OrganizationTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PhysicalPersonNullableScalarRelationFilter = {
    is?: PhysicalPersonWhereInput | null
    isNot?: PhysicalPersonWhereInput | null
  }

  export type LegalEntityNullableScalarRelationFilter = {
    is?: LegalEntityWhereInput | null
    isNot?: LegalEntityWhereInput | null
  }

  export type LocalUserNullableScalarRelationFilter = {
    is?: LocalUserWhereInput | null
    isNot?: LocalUserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PhysicalPersonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    website?: SortOrder
    volunteerDocBytes?: SortOrder
  }

  export type PhysicalPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    website?: SortOrder
    volunteerDocBytes?: SortOrder
  }

  export type PhysicalPersonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    website?: SortOrder
    volunteerDocBytes?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type OrganizationTypeScalarRelationFilter = {
    is?: OrganizationTypeWhereInput
    isNot?: OrganizationTypeWhereInput
  }

  export type LegalEntityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    organizationName?: SortOrder
    edrpouCode?: SortOrder
    organizationTypeId?: SortOrder
    contactPerson?: SortOrder
    email?: SortOrder
    website?: SortOrder
    city?: SortOrder
    region?: SortOrder
    street?: SortOrder
    nonprofitDocBytes?: SortOrder
    usesEDOViaVchasno?: SortOrder
  }

  export type LegalEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    organizationName?: SortOrder
    edrpouCode?: SortOrder
    organizationTypeId?: SortOrder
    contactPerson?: SortOrder
    email?: SortOrder
    website?: SortOrder
    city?: SortOrder
    region?: SortOrder
    street?: SortOrder
    nonprofitDocBytes?: SortOrder
    usesEDOViaVchasno?: SortOrder
  }

  export type LegalEntityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    organizationName?: SortOrder
    edrpouCode?: SortOrder
    organizationTypeId?: SortOrder
    contactPerson?: SortOrder
    email?: SortOrder
    website?: SortOrder
    city?: SortOrder
    region?: SortOrder
    street?: SortOrder
    nonprofitDocBytes?: SortOrder
    usesEDOViaVchasno?: SortOrder
  }

  export type LocalUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isSuperAdmin?: SortOrder
    email?: SortOrder
  }

  export type LocalUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isSuperAdmin?: SortOrder
    email?: SortOrder
  }

  export type LocalUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isSuperAdmin?: SortOrder
    email?: SortOrder
  }

  export type LegalEntityListRelationFilter = {
    every?: LegalEntityWhereInput
    some?: LegalEntityWhereInput
    none?: LegalEntityWhereInput
  }

  export type LegalEntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PhysicalPersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PhysicalPersonCreateOrConnectWithoutUserInput
    connect?: PhysicalPersonWhereUniqueInput
  }

  export type LegalEntityCreateNestedOneWithoutUserInput = {
    create?: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalEntityCreateOrConnectWithoutUserInput
    connect?: LegalEntityWhereUniqueInput
  }

  export type LocalUserCreateNestedOneWithoutUserInput = {
    create?: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalUserCreateOrConnectWithoutUserInput
    connect?: LocalUserWhereUniqueInput
  }

  export type PhysicalPersonUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PhysicalPersonCreateOrConnectWithoutUserInput
    connect?: PhysicalPersonWhereUniqueInput
  }

  export type LegalEntityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalEntityCreateOrConnectWithoutUserInput
    connect?: LegalEntityWhereUniqueInput
  }

  export type LocalUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalUserCreateOrConnectWithoutUserInput
    connect?: LocalUserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhysicalPersonUpdateOneWithoutUserNestedInput = {
    create?: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PhysicalPersonCreateOrConnectWithoutUserInput
    upsert?: PhysicalPersonUpsertWithoutUserInput
    disconnect?: PhysicalPersonWhereInput | boolean
    delete?: PhysicalPersonWhereInput | boolean
    connect?: PhysicalPersonWhereUniqueInput
    update?: XOR<XOR<PhysicalPersonUpdateToOneWithWhereWithoutUserInput, PhysicalPersonUpdateWithoutUserInput>, PhysicalPersonUncheckedUpdateWithoutUserInput>
  }

  export type LegalEntityUpdateOneWithoutUserNestedInput = {
    create?: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalEntityCreateOrConnectWithoutUserInput
    upsert?: LegalEntityUpsertWithoutUserInput
    disconnect?: LegalEntityWhereInput | boolean
    delete?: LegalEntityWhereInput | boolean
    connect?: LegalEntityWhereUniqueInput
    update?: XOR<XOR<LegalEntityUpdateToOneWithWhereWithoutUserInput, LegalEntityUpdateWithoutUserInput>, LegalEntityUncheckedUpdateWithoutUserInput>
  }

  export type LocalUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalUserCreateOrConnectWithoutUserInput
    upsert?: LocalUserUpsertWithoutUserInput
    disconnect?: LocalUserWhereInput | boolean
    delete?: LocalUserWhereInput | boolean
    connect?: LocalUserWhereUniqueInput
    update?: XOR<XOR<LocalUserUpdateToOneWithWhereWithoutUserInput, LocalUserUpdateWithoutUserInput>, LocalUserUncheckedUpdateWithoutUserInput>
  }

  export type PhysicalPersonUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PhysicalPersonCreateOrConnectWithoutUserInput
    upsert?: PhysicalPersonUpsertWithoutUserInput
    disconnect?: PhysicalPersonWhereInput | boolean
    delete?: PhysicalPersonWhereInput | boolean
    connect?: PhysicalPersonWhereUniqueInput
    update?: XOR<XOR<PhysicalPersonUpdateToOneWithWhereWithoutUserInput, PhysicalPersonUpdateWithoutUserInput>, PhysicalPersonUncheckedUpdateWithoutUserInput>
  }

  export type LegalEntityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalEntityCreateOrConnectWithoutUserInput
    upsert?: LegalEntityUpsertWithoutUserInput
    disconnect?: LegalEntityWhereInput | boolean
    delete?: LegalEntityWhereInput | boolean
    connect?: LegalEntityWhereUniqueInput
    update?: XOR<XOR<LegalEntityUpdateToOneWithWhereWithoutUserInput, LegalEntityUpdateWithoutUserInput>, LegalEntityUncheckedUpdateWithoutUserInput>
  }

  export type LocalUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocalUserCreateOrConnectWithoutUserInput
    upsert?: LocalUserUpsertWithoutUserInput
    disconnect?: LocalUserWhereInput | boolean
    delete?: LocalUserWhereInput | boolean
    connect?: LocalUserWhereUniqueInput
    update?: XOR<XOR<LocalUserUpdateToOneWithWhereWithoutUserInput, LocalUserUpdateWithoutUserInput>, LocalUserUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPhysicalPersonInput = {
    create?: XOR<UserCreateWithoutPhysicalPersonInput, UserUncheckedCreateWithoutPhysicalPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhysicalPersonInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type UserUpdateOneRequiredWithoutPhysicalPersonNestedInput = {
    create?: XOR<UserCreateWithoutPhysicalPersonInput, UserUncheckedCreateWithoutPhysicalPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhysicalPersonInput
    upsert?: UserUpsertWithoutPhysicalPersonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhysicalPersonInput, UserUpdateWithoutPhysicalPersonInput>, UserUncheckedUpdateWithoutPhysicalPersonInput>
  }

  export type UserCreateNestedOneWithoutLegalEntityInput = {
    create?: XOR<UserCreateWithoutLegalEntityInput, UserUncheckedCreateWithoutLegalEntityInput>
    connectOrCreate?: UserCreateOrConnectWithoutLegalEntityInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationTypeCreateNestedOneWithoutLegalEntitiesInput = {
    create?: XOR<OrganizationTypeCreateWithoutLegalEntitiesInput, OrganizationTypeUncheckedCreateWithoutLegalEntitiesInput>
    connectOrCreate?: OrganizationTypeCreateOrConnectWithoutLegalEntitiesInput
    connect?: OrganizationTypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLegalEntityNestedInput = {
    create?: XOR<UserCreateWithoutLegalEntityInput, UserUncheckedCreateWithoutLegalEntityInput>
    connectOrCreate?: UserCreateOrConnectWithoutLegalEntityInput
    upsert?: UserUpsertWithoutLegalEntityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLegalEntityInput, UserUpdateWithoutLegalEntityInput>, UserUncheckedUpdateWithoutLegalEntityInput>
  }

  export type OrganizationTypeUpdateOneRequiredWithoutLegalEntitiesNestedInput = {
    create?: XOR<OrganizationTypeCreateWithoutLegalEntitiesInput, OrganizationTypeUncheckedCreateWithoutLegalEntitiesInput>
    connectOrCreate?: OrganizationTypeCreateOrConnectWithoutLegalEntitiesInput
    upsert?: OrganizationTypeUpsertWithoutLegalEntitiesInput
    connect?: OrganizationTypeWhereUniqueInput
    update?: XOR<XOR<OrganizationTypeUpdateToOneWithWhereWithoutLegalEntitiesInput, OrganizationTypeUpdateWithoutLegalEntitiesInput>, OrganizationTypeUncheckedUpdateWithoutLegalEntitiesInput>
  }

  export type UserCreateNestedOneWithoutLocalUserInput = {
    create?: XOR<UserCreateWithoutLocalUserInput, UserUncheckedCreateWithoutLocalUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocalUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLocalUserNestedInput = {
    create?: XOR<UserCreateWithoutLocalUserInput, UserUncheckedCreateWithoutLocalUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocalUserInput
    upsert?: UserUpsertWithoutLocalUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocalUserInput, UserUpdateWithoutLocalUserInput>, UserUncheckedUpdateWithoutLocalUserInput>
  }

  export type LegalEntityCreateNestedManyWithoutOrganizationTypeInput = {
    create?: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput> | LegalEntityCreateWithoutOrganizationTypeInput[] | LegalEntityUncheckedCreateWithoutOrganizationTypeInput[]
    connectOrCreate?: LegalEntityCreateOrConnectWithoutOrganizationTypeInput | LegalEntityCreateOrConnectWithoutOrganizationTypeInput[]
    createMany?: LegalEntityCreateManyOrganizationTypeInputEnvelope
    connect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
  }

  export type LegalEntityUncheckedCreateNestedManyWithoutOrganizationTypeInput = {
    create?: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput> | LegalEntityCreateWithoutOrganizationTypeInput[] | LegalEntityUncheckedCreateWithoutOrganizationTypeInput[]
    connectOrCreate?: LegalEntityCreateOrConnectWithoutOrganizationTypeInput | LegalEntityCreateOrConnectWithoutOrganizationTypeInput[]
    createMany?: LegalEntityCreateManyOrganizationTypeInputEnvelope
    connect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
  }

  export type LegalEntityUpdateManyWithoutOrganizationTypeNestedInput = {
    create?: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput> | LegalEntityCreateWithoutOrganizationTypeInput[] | LegalEntityUncheckedCreateWithoutOrganizationTypeInput[]
    connectOrCreate?: LegalEntityCreateOrConnectWithoutOrganizationTypeInput | LegalEntityCreateOrConnectWithoutOrganizationTypeInput[]
    upsert?: LegalEntityUpsertWithWhereUniqueWithoutOrganizationTypeInput | LegalEntityUpsertWithWhereUniqueWithoutOrganizationTypeInput[]
    createMany?: LegalEntityCreateManyOrganizationTypeInputEnvelope
    set?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    disconnect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    delete?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    connect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    update?: LegalEntityUpdateWithWhereUniqueWithoutOrganizationTypeInput | LegalEntityUpdateWithWhereUniqueWithoutOrganizationTypeInput[]
    updateMany?: LegalEntityUpdateManyWithWhereWithoutOrganizationTypeInput | LegalEntityUpdateManyWithWhereWithoutOrganizationTypeInput[]
    deleteMany?: LegalEntityScalarWhereInput | LegalEntityScalarWhereInput[]
  }

  export type LegalEntityUncheckedUpdateManyWithoutOrganizationTypeNestedInput = {
    create?: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput> | LegalEntityCreateWithoutOrganizationTypeInput[] | LegalEntityUncheckedCreateWithoutOrganizationTypeInput[]
    connectOrCreate?: LegalEntityCreateOrConnectWithoutOrganizationTypeInput | LegalEntityCreateOrConnectWithoutOrganizationTypeInput[]
    upsert?: LegalEntityUpsertWithWhereUniqueWithoutOrganizationTypeInput | LegalEntityUpsertWithWhereUniqueWithoutOrganizationTypeInput[]
    createMany?: LegalEntityCreateManyOrganizationTypeInputEnvelope
    set?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    disconnect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    delete?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    connect?: LegalEntityWhereUniqueInput | LegalEntityWhereUniqueInput[]
    update?: LegalEntityUpdateWithWhereUniqueWithoutOrganizationTypeInput | LegalEntityUpdateWithWhereUniqueWithoutOrganizationTypeInput[]
    updateMany?: LegalEntityUpdateManyWithWhereWithoutOrganizationTypeInput | LegalEntityUpdateManyWithWhereWithoutOrganizationTypeInput[]
    deleteMany?: LegalEntityScalarWhereInput | LegalEntityScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type PhysicalPersonCreateWithoutUserInput = {
    id?: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city?: string | null
    region?: string | null
    website?: string | null
    volunteerDocBytes?: Uint8Array | null
  }

  export type PhysicalPersonUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    lastName: string
    firstName: string
    middleName: string
    email: string
    city?: string | null
    region?: string | null
    website?: string | null
    volunteerDocBytes?: Uint8Array | null
  }

  export type PhysicalPersonCreateOrConnectWithoutUserInput = {
    where: PhysicalPersonWhereUniqueInput
    create: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
  }

  export type LegalEntityCreateWithoutUserInput = {
    id?: string
    phone: string
    organizationName: string
    edrpouCode: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
    organizationType: OrganizationTypeCreateNestedOneWithoutLegalEntitiesInput
  }

  export type LegalEntityUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    organizationName: string
    edrpouCode: string
    organizationTypeId: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityCreateOrConnectWithoutUserInput = {
    where: LegalEntityWhereUniqueInput
    create: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
  }

  export type LocalUserCreateWithoutUserInput = {
    id?: string
    isSuperAdmin?: boolean
    email: string
  }

  export type LocalUserUncheckedCreateWithoutUserInput = {
    id?: string
    isSuperAdmin?: boolean
    email: string
  }

  export type LocalUserCreateOrConnectWithoutUserInput = {
    where: LocalUserWhereUniqueInput
    create: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
  }

  export type PhysicalPersonUpsertWithoutUserInput = {
    update: XOR<PhysicalPersonUpdateWithoutUserInput, PhysicalPersonUncheckedUpdateWithoutUserInput>
    create: XOR<PhysicalPersonCreateWithoutUserInput, PhysicalPersonUncheckedCreateWithoutUserInput>
    where?: PhysicalPersonWhereInput
  }

  export type PhysicalPersonUpdateToOneWithWhereWithoutUserInput = {
    where?: PhysicalPersonWhereInput
    data: XOR<PhysicalPersonUpdateWithoutUserInput, PhysicalPersonUncheckedUpdateWithoutUserInput>
  }

  export type PhysicalPersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type PhysicalPersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type LegalEntityUpsertWithoutUserInput = {
    update: XOR<LegalEntityUpdateWithoutUserInput, LegalEntityUncheckedUpdateWithoutUserInput>
    create: XOR<LegalEntityCreateWithoutUserInput, LegalEntityUncheckedCreateWithoutUserInput>
    where?: LegalEntityWhereInput
  }

  export type LegalEntityUpdateToOneWithWhereWithoutUserInput = {
    where?: LegalEntityWhereInput
    data: XOR<LegalEntityUpdateWithoutUserInput, LegalEntityUncheckedUpdateWithoutUserInput>
  }

  export type LegalEntityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
    organizationType?: OrganizationTypeUpdateOneRequiredWithoutLegalEntitiesNestedInput
  }

  export type LegalEntityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    organizationTypeId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocalUserUpsertWithoutUserInput = {
    update: XOR<LocalUserUpdateWithoutUserInput, LocalUserUncheckedUpdateWithoutUserInput>
    create: XOR<LocalUserCreateWithoutUserInput, LocalUserUncheckedCreateWithoutUserInput>
    where?: LocalUserWhereInput
  }

  export type LocalUserUpdateToOneWithWhereWithoutUserInput = {
    where?: LocalUserWhereInput
    data: XOR<LocalUserUpdateWithoutUserInput, LocalUserUncheckedUpdateWithoutUserInput>
  }

  export type LocalUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPhysicalPersonInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    legalEntity?: LegalEntityCreateNestedOneWithoutUserInput
    localUser?: LocalUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhysicalPersonInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    legalEntity?: LegalEntityUncheckedCreateNestedOneWithoutUserInput
    localUser?: LocalUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhysicalPersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhysicalPersonInput, UserUncheckedCreateWithoutPhysicalPersonInput>
  }

  export type UserUpsertWithoutPhysicalPersonInput = {
    update: XOR<UserUpdateWithoutPhysicalPersonInput, UserUncheckedUpdateWithoutPhysicalPersonInput>
    create: XOR<UserCreateWithoutPhysicalPersonInput, UserUncheckedCreateWithoutPhysicalPersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhysicalPersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhysicalPersonInput, UserUncheckedUpdateWithoutPhysicalPersonInput>
  }

  export type UserUpdateWithoutPhysicalPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: LegalEntityUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhysicalPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: LegalEntityUncheckedUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutLegalEntityInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonCreateNestedOneWithoutUserInput
    localUser?: LocalUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLegalEntityInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonUncheckedCreateNestedOneWithoutUserInput
    localUser?: LocalUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLegalEntityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLegalEntityInput, UserUncheckedCreateWithoutLegalEntityInput>
  }

  export type OrganizationTypeCreateWithoutLegalEntitiesInput = {
    id?: string
    name: string
  }

  export type OrganizationTypeUncheckedCreateWithoutLegalEntitiesInput = {
    id?: string
    name: string
  }

  export type OrganizationTypeCreateOrConnectWithoutLegalEntitiesInput = {
    where: OrganizationTypeWhereUniqueInput
    create: XOR<OrganizationTypeCreateWithoutLegalEntitiesInput, OrganizationTypeUncheckedCreateWithoutLegalEntitiesInput>
  }

  export type UserUpsertWithoutLegalEntityInput = {
    update: XOR<UserUpdateWithoutLegalEntityInput, UserUncheckedUpdateWithoutLegalEntityInput>
    create: XOR<UserCreateWithoutLegalEntityInput, UserUncheckedCreateWithoutLegalEntityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLegalEntityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLegalEntityInput, UserUncheckedUpdateWithoutLegalEntityInput>
  }

  export type UserUpdateWithoutLegalEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLegalEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUncheckedUpdateOneWithoutUserNestedInput
    localUser?: LocalUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrganizationTypeUpsertWithoutLegalEntitiesInput = {
    update: XOR<OrganizationTypeUpdateWithoutLegalEntitiesInput, OrganizationTypeUncheckedUpdateWithoutLegalEntitiesInput>
    create: XOR<OrganizationTypeCreateWithoutLegalEntitiesInput, OrganizationTypeUncheckedCreateWithoutLegalEntitiesInput>
    where?: OrganizationTypeWhereInput
  }

  export type OrganizationTypeUpdateToOneWithWhereWithoutLegalEntitiesInput = {
    where?: OrganizationTypeWhereInput
    data: XOR<OrganizationTypeUpdateWithoutLegalEntitiesInput, OrganizationTypeUncheckedUpdateWithoutLegalEntitiesInput>
  }

  export type OrganizationTypeUpdateWithoutLegalEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationTypeUncheckedUpdateWithoutLegalEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutLocalUserInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonCreateNestedOneWithoutUserInput
    legalEntity?: LegalEntityCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocalUserInput = {
    id?: string
    type?: $Enums.UserType
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    physicalPerson?: PhysicalPersonUncheckedCreateNestedOneWithoutUserInput
    legalEntity?: LegalEntityUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocalUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocalUserInput, UserUncheckedCreateWithoutLocalUserInput>
  }

  export type UserUpsertWithoutLocalUserInput = {
    update: XOR<UserUpdateWithoutLocalUserInput, UserUncheckedUpdateWithoutLocalUserInput>
    create: XOR<UserCreateWithoutLocalUserInput, UserUncheckedCreateWithoutLocalUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocalUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocalUserInput, UserUncheckedUpdateWithoutLocalUserInput>
  }

  export type UserUpdateWithoutLocalUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUpdateOneWithoutUserNestedInput
    legalEntity?: LegalEntityUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocalUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    physicalPerson?: PhysicalPersonUncheckedUpdateOneWithoutUserNestedInput
    legalEntity?: LegalEntityUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LegalEntityCreateWithoutOrganizationTypeInput = {
    id?: string
    phone: string
    organizationName: string
    edrpouCode: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
    user: UserCreateNestedOneWithoutLegalEntityInput
  }

  export type LegalEntityUncheckedCreateWithoutOrganizationTypeInput = {
    id?: string
    userId: string
    phone: string
    organizationName: string
    edrpouCode: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityCreateOrConnectWithoutOrganizationTypeInput = {
    where: LegalEntityWhereUniqueInput
    create: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput>
  }

  export type LegalEntityCreateManyOrganizationTypeInputEnvelope = {
    data: LegalEntityCreateManyOrganizationTypeInput | LegalEntityCreateManyOrganizationTypeInput[]
    skipDuplicates?: boolean
  }

  export type LegalEntityUpsertWithWhereUniqueWithoutOrganizationTypeInput = {
    where: LegalEntityWhereUniqueInput
    update: XOR<LegalEntityUpdateWithoutOrganizationTypeInput, LegalEntityUncheckedUpdateWithoutOrganizationTypeInput>
    create: XOR<LegalEntityCreateWithoutOrganizationTypeInput, LegalEntityUncheckedCreateWithoutOrganizationTypeInput>
  }

  export type LegalEntityUpdateWithWhereUniqueWithoutOrganizationTypeInput = {
    where: LegalEntityWhereUniqueInput
    data: XOR<LegalEntityUpdateWithoutOrganizationTypeInput, LegalEntityUncheckedUpdateWithoutOrganizationTypeInput>
  }

  export type LegalEntityUpdateManyWithWhereWithoutOrganizationTypeInput = {
    where: LegalEntityScalarWhereInput
    data: XOR<LegalEntityUpdateManyMutationInput, LegalEntityUncheckedUpdateManyWithoutOrganizationTypeInput>
  }

  export type LegalEntityScalarWhereInput = {
    AND?: LegalEntityScalarWhereInput | LegalEntityScalarWhereInput[]
    OR?: LegalEntityScalarWhereInput[]
    NOT?: LegalEntityScalarWhereInput | LegalEntityScalarWhereInput[]
    id?: StringFilter<"LegalEntity"> | string
    userId?: StringFilter<"LegalEntity"> | string
    phone?: StringFilter<"LegalEntity"> | string
    organizationName?: StringFilter<"LegalEntity"> | string
    edrpouCode?: StringFilter<"LegalEntity"> | string
    organizationTypeId?: StringFilter<"LegalEntity"> | string
    contactPerson?: StringFilter<"LegalEntity"> | string
    email?: StringFilter<"LegalEntity"> | string
    website?: StringFilter<"LegalEntity"> | string
    city?: StringFilter<"LegalEntity"> | string
    region?: StringFilter<"LegalEntity"> | string
    street?: StringFilter<"LegalEntity"> | string
    nonprofitDocBytes?: BytesNullableFilter<"LegalEntity"> | Uint8Array | null
    usesEDOViaVchasno?: BoolFilter<"LegalEntity"> | boolean
  }

  export type LegalEntityCreateManyOrganizationTypeInput = {
    id?: string
    userId: string
    phone: string
    organizationName: string
    edrpouCode: string
    contactPerson: string
    email: string
    website: string
    city: string
    region: string
    street: string
    nonprofitDocBytes?: Uint8Array | null
    usesEDOViaVchasno?: boolean
  }

  export type LegalEntityUpdateWithoutOrganizationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLegalEntityNestedInput
  }

  export type LegalEntityUncheckedUpdateWithoutOrganizationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LegalEntityUncheckedUpdateManyWithoutOrganizationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    edrpouCode?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    nonprofitDocBytes?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    usesEDOViaVchasno?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
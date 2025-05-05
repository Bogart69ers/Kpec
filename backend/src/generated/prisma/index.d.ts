
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
 * Model gl_account
 * 
 */
export type gl_account = $Result.DefaultSelection<Prisma.$gl_accountPayload>
/**
 * Model journal_entry
 * 
 */
export type journal_entry = $Result.DefaultSelection<Prisma.$journal_entryPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model user_account
 * 
 */
export type user_account = $Result.DefaultSelection<Prisma.$user_accountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gl_accounts
 * const gl_accounts = await prisma.gl_account.findMany()
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
   * // Fetch zero or more Gl_accounts
   * const gl_accounts = await prisma.gl_account.findMany()
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
   * `prisma.gl_account`: Exposes CRUD operations for the **gl_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gl_accounts
    * const gl_accounts = await prisma.gl_account.findMany()
    * ```
    */
  get gl_account(): Prisma.gl_accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journal_entry`: Exposes CRUD operations for the **journal_entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journal_entries
    * const journal_entries = await prisma.journal_entry.findMany()
    * ```
    */
  get journal_entry(): Prisma.journal_entryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_account`: Exposes CRUD operations for the **user_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_accounts
    * const user_accounts = await prisma.user_account.findMany()
    * ```
    */
  get user_account(): Prisma.user_accountDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    gl_account: 'gl_account',
    journal_entry: 'journal_entry',
    roles: 'roles',
    user_account: 'user_account'
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
      modelProps: "gl_account" | "journal_entry" | "roles" | "user_account"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      gl_account: {
        payload: Prisma.$gl_accountPayload<ExtArgs>
        fields: Prisma.gl_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gl_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gl_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          findFirst: {
            args: Prisma.gl_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gl_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          findMany: {
            args: Prisma.gl_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>[]
          }
          create: {
            args: Prisma.gl_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          createMany: {
            args: Prisma.gl_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gl_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>[]
          }
          delete: {
            args: Prisma.gl_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          update: {
            args: Prisma.gl_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          deleteMany: {
            args: Prisma.gl_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gl_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gl_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>[]
          }
          upsert: {
            args: Prisma.gl_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gl_accountPayload>
          }
          aggregate: {
            args: Prisma.Gl_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGl_account>
          }
          groupBy: {
            args: Prisma.gl_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gl_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.gl_accountCountArgs<ExtArgs>
            result: $Utils.Optional<Gl_accountCountAggregateOutputType> | number
          }
        }
      }
      journal_entry: {
        payload: Prisma.$journal_entryPayload<ExtArgs>
        fields: Prisma.journal_entryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.journal_entryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.journal_entryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          findFirst: {
            args: Prisma.journal_entryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.journal_entryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          findMany: {
            args: Prisma.journal_entryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>[]
          }
          create: {
            args: Prisma.journal_entryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          createMany: {
            args: Prisma.journal_entryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.journal_entryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>[]
          }
          delete: {
            args: Prisma.journal_entryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          update: {
            args: Prisma.journal_entryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          deleteMany: {
            args: Prisma.journal_entryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.journal_entryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.journal_entryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>[]
          }
          upsert: {
            args: Prisma.journal_entryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journal_entryPayload>
          }
          aggregate: {
            args: Prisma.Journal_entryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournal_entry>
          }
          groupBy: {
            args: Prisma.journal_entryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Journal_entryGroupByOutputType>[]
          }
          count: {
            args: Prisma.journal_entryCountArgs<ExtArgs>
            result: $Utils.Optional<Journal_entryCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      user_account: {
        payload: Prisma.$user_accountPayload<ExtArgs>
        fields: Prisma.user_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          findFirst: {
            args: Prisma.user_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          findMany: {
            args: Prisma.user_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>[]
          }
          create: {
            args: Prisma.user_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          createMany: {
            args: Prisma.user_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>[]
          }
          delete: {
            args: Prisma.user_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          update: {
            args: Prisma.user_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          deleteMany: {
            args: Prisma.user_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>[]
          }
          upsert: {
            args: Prisma.user_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_accountPayload>
          }
          aggregate: {
            args: Prisma.User_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_account>
          }
          groupBy: {
            args: Prisma.user_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_accountCountArgs<ExtArgs>
            result: $Utils.Optional<User_accountCountAggregateOutputType> | number
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
    gl_account?: gl_accountOmit
    journal_entry?: journal_entryOmit
    roles?: rolesOmit
    user_account?: user_accountOmit
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
   * Count Type Gl_accountCountOutputType
   */

  export type Gl_accountCountOutputType = {
    journal_entry: number
  }

  export type Gl_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal_entry?: boolean | Gl_accountCountOutputTypeCountJournal_entryArgs
  }

  // Custom InputTypes
  /**
   * Gl_accountCountOutputType without action
   */
  export type Gl_accountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gl_accountCountOutputType
     */
    select?: Gl_accountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Gl_accountCountOutputType without action
   */
  export type Gl_accountCountOutputTypeCountJournal_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: journal_entryWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_account: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account?: boolean | RolesCountOutputTypeCountUser_accountArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_accountWhereInput
  }


  /**
   * Count Type User_accountCountOutputType
   */

  export type User_accountCountOutputType = {
    journal_entry: number
  }

  export type User_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal_entry?: boolean | User_accountCountOutputTypeCountJournal_entryArgs
  }

  // Custom InputTypes
  /**
   * User_accountCountOutputType without action
   */
  export type User_accountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_accountCountOutputType
     */
    select?: User_accountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_accountCountOutputType without action
   */
  export type User_accountCountOutputTypeCountJournal_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: journal_entryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model gl_account
   */

  export type AggregateGl_account = {
    _count: Gl_accountCountAggregateOutputType | null
    _avg: Gl_accountAvgAggregateOutputType | null
    _sum: Gl_accountSumAggregateOutputType | null
    _min: Gl_accountMinAggregateOutputType | null
    _max: Gl_accountMaxAggregateOutputType | null
  }

  export type Gl_accountAvgAggregateOutputType = {
    id: number | null
  }

  export type Gl_accountSumAggregateOutputType = {
    id: number | null
  }

  export type Gl_accountMinAggregateOutputType = {
    id: number | null
    gl_account: string | null
    name: string | null
    category: string | null
    subcategory: string | null
  }

  export type Gl_accountMaxAggregateOutputType = {
    id: number | null
    gl_account: string | null
    name: string | null
    category: string | null
    subcategory: string | null
  }

  export type Gl_accountCountAggregateOutputType = {
    id: number
    gl_account: number
    name: number
    category: number
    subcategory: number
    _all: number
  }


  export type Gl_accountAvgAggregateInputType = {
    id?: true
  }

  export type Gl_accountSumAggregateInputType = {
    id?: true
  }

  export type Gl_accountMinAggregateInputType = {
    id?: true
    gl_account?: true
    name?: true
    category?: true
    subcategory?: true
  }

  export type Gl_accountMaxAggregateInputType = {
    id?: true
    gl_account?: true
    name?: true
    category?: true
    subcategory?: true
  }

  export type Gl_accountCountAggregateInputType = {
    id?: true
    gl_account?: true
    name?: true
    category?: true
    subcategory?: true
    _all?: true
  }

  export type Gl_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gl_account to aggregate.
     */
    where?: gl_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gl_accounts to fetch.
     */
    orderBy?: gl_accountOrderByWithRelationInput | gl_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gl_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gl_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gl_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gl_accounts
    **/
    _count?: true | Gl_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gl_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gl_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gl_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gl_accountMaxAggregateInputType
  }

  export type GetGl_accountAggregateType<T extends Gl_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateGl_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGl_account[P]>
      : GetScalarType<T[P], AggregateGl_account[P]>
  }




  export type gl_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gl_accountWhereInput
    orderBy?: gl_accountOrderByWithAggregationInput | gl_accountOrderByWithAggregationInput[]
    by: Gl_accountScalarFieldEnum[] | Gl_accountScalarFieldEnum
    having?: gl_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gl_accountCountAggregateInputType | true
    _avg?: Gl_accountAvgAggregateInputType
    _sum?: Gl_accountSumAggregateInputType
    _min?: Gl_accountMinAggregateInputType
    _max?: Gl_accountMaxAggregateInputType
  }

  export type Gl_accountGroupByOutputType = {
    id: number
    gl_account: string | null
    name: string | null
    category: string | null
    subcategory: string | null
    _count: Gl_accountCountAggregateOutputType | null
    _avg: Gl_accountAvgAggregateOutputType | null
    _sum: Gl_accountSumAggregateOutputType | null
    _min: Gl_accountMinAggregateOutputType | null
    _max: Gl_accountMaxAggregateOutputType | null
  }

  type GetGl_accountGroupByPayload<T extends gl_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gl_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gl_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gl_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Gl_accountGroupByOutputType[P]>
        }
      >
    >


  export type gl_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gl_account?: boolean
    name?: boolean
    category?: boolean
    subcategory?: boolean
    journal_entry?: boolean | gl_account$journal_entryArgs<ExtArgs>
    _count?: boolean | Gl_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gl_account"]>

  export type gl_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gl_account?: boolean
    name?: boolean
    category?: boolean
    subcategory?: boolean
  }, ExtArgs["result"]["gl_account"]>

  export type gl_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gl_account?: boolean
    name?: boolean
    category?: boolean
    subcategory?: boolean
  }, ExtArgs["result"]["gl_account"]>

  export type gl_accountSelectScalar = {
    id?: boolean
    gl_account?: boolean
    name?: boolean
    category?: boolean
    subcategory?: boolean
  }

  export type gl_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gl_account" | "name" | "category" | "subcategory", ExtArgs["result"]["gl_account"]>
  export type gl_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal_entry?: boolean | gl_account$journal_entryArgs<ExtArgs>
    _count?: boolean | Gl_accountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gl_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gl_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gl_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gl_account"
    objects: {
      journal_entry: Prisma.$journal_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gl_account: string | null
      name: string | null
      category: string | null
      subcategory: string | null
    }, ExtArgs["result"]["gl_account"]>
    composites: {}
  }

  type gl_accountGetPayload<S extends boolean | null | undefined | gl_accountDefaultArgs> = $Result.GetResult<Prisma.$gl_accountPayload, S>

  type gl_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gl_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gl_accountCountAggregateInputType | true
    }

  export interface gl_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gl_account'], meta: { name: 'gl_account' } }
    /**
     * Find zero or one Gl_account that matches the filter.
     * @param {gl_accountFindUniqueArgs} args - Arguments to find a Gl_account
     * @example
     * // Get one Gl_account
     * const gl_account = await prisma.gl_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gl_accountFindUniqueArgs>(args: SelectSubset<T, gl_accountFindUniqueArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gl_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gl_accountFindUniqueOrThrowArgs} args - Arguments to find a Gl_account
     * @example
     * // Get one Gl_account
     * const gl_account = await prisma.gl_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gl_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, gl_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gl_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountFindFirstArgs} args - Arguments to find a Gl_account
     * @example
     * // Get one Gl_account
     * const gl_account = await prisma.gl_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gl_accountFindFirstArgs>(args?: SelectSubset<T, gl_accountFindFirstArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gl_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountFindFirstOrThrowArgs} args - Arguments to find a Gl_account
     * @example
     * // Get one Gl_account
     * const gl_account = await prisma.gl_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gl_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, gl_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gl_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gl_accounts
     * const gl_accounts = await prisma.gl_account.findMany()
     * 
     * // Get first 10 Gl_accounts
     * const gl_accounts = await prisma.gl_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gl_accountWithIdOnly = await prisma.gl_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gl_accountFindManyArgs>(args?: SelectSubset<T, gl_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gl_account.
     * @param {gl_accountCreateArgs} args - Arguments to create a Gl_account.
     * @example
     * // Create one Gl_account
     * const Gl_account = await prisma.gl_account.create({
     *   data: {
     *     // ... data to create a Gl_account
     *   }
     * })
     * 
     */
    create<T extends gl_accountCreateArgs>(args: SelectSubset<T, gl_accountCreateArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gl_accounts.
     * @param {gl_accountCreateManyArgs} args - Arguments to create many Gl_accounts.
     * @example
     * // Create many Gl_accounts
     * const gl_account = await prisma.gl_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gl_accountCreateManyArgs>(args?: SelectSubset<T, gl_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gl_accounts and returns the data saved in the database.
     * @param {gl_accountCreateManyAndReturnArgs} args - Arguments to create many Gl_accounts.
     * @example
     * // Create many Gl_accounts
     * const gl_account = await prisma.gl_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gl_accounts and only return the `id`
     * const gl_accountWithIdOnly = await prisma.gl_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gl_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, gl_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gl_account.
     * @param {gl_accountDeleteArgs} args - Arguments to delete one Gl_account.
     * @example
     * // Delete one Gl_account
     * const Gl_account = await prisma.gl_account.delete({
     *   where: {
     *     // ... filter to delete one Gl_account
     *   }
     * })
     * 
     */
    delete<T extends gl_accountDeleteArgs>(args: SelectSubset<T, gl_accountDeleteArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gl_account.
     * @param {gl_accountUpdateArgs} args - Arguments to update one Gl_account.
     * @example
     * // Update one Gl_account
     * const gl_account = await prisma.gl_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gl_accountUpdateArgs>(args: SelectSubset<T, gl_accountUpdateArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gl_accounts.
     * @param {gl_accountDeleteManyArgs} args - Arguments to filter Gl_accounts to delete.
     * @example
     * // Delete a few Gl_accounts
     * const { count } = await prisma.gl_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gl_accountDeleteManyArgs>(args?: SelectSubset<T, gl_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gl_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gl_accounts
     * const gl_account = await prisma.gl_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gl_accountUpdateManyArgs>(args: SelectSubset<T, gl_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gl_accounts and returns the data updated in the database.
     * @param {gl_accountUpdateManyAndReturnArgs} args - Arguments to update many Gl_accounts.
     * @example
     * // Update many Gl_accounts
     * const gl_account = await prisma.gl_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gl_accounts and only return the `id`
     * const gl_accountWithIdOnly = await prisma.gl_account.updateManyAndReturn({
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
    updateManyAndReturn<T extends gl_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, gl_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gl_account.
     * @param {gl_accountUpsertArgs} args - Arguments to update or create a Gl_account.
     * @example
     * // Update or create a Gl_account
     * const gl_account = await prisma.gl_account.upsert({
     *   create: {
     *     // ... data to create a Gl_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gl_account we want to update
     *   }
     * })
     */
    upsert<T extends gl_accountUpsertArgs>(args: SelectSubset<T, gl_accountUpsertArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gl_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountCountArgs} args - Arguments to filter Gl_accounts to count.
     * @example
     * // Count the number of Gl_accounts
     * const count = await prisma.gl_account.count({
     *   where: {
     *     // ... the filter for the Gl_accounts we want to count
     *   }
     * })
    **/
    count<T extends gl_accountCountArgs>(
      args?: Subset<T, gl_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gl_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gl_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gl_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gl_accountAggregateArgs>(args: Subset<T, Gl_accountAggregateArgs>): Prisma.PrismaPromise<GetGl_accountAggregateType<T>>

    /**
     * Group by Gl_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gl_accountGroupByArgs} args - Group by arguments.
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
      T extends gl_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gl_accountGroupByArgs['orderBy'] }
        : { orderBy?: gl_accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gl_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGl_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gl_account model
   */
  readonly fields: gl_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gl_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gl_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journal_entry<T extends gl_account$journal_entryArgs<ExtArgs> = {}>(args?: Subset<T, gl_account$journal_entryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the gl_account model
   */
  interface gl_accountFieldRefs {
    readonly id: FieldRef<"gl_account", 'Int'>
    readonly gl_account: FieldRef<"gl_account", 'String'>
    readonly name: FieldRef<"gl_account", 'String'>
    readonly category: FieldRef<"gl_account", 'String'>
    readonly subcategory: FieldRef<"gl_account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gl_account findUnique
   */
  export type gl_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter, which gl_account to fetch.
     */
    where: gl_accountWhereUniqueInput
  }

  /**
   * gl_account findUniqueOrThrow
   */
  export type gl_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter, which gl_account to fetch.
     */
    where: gl_accountWhereUniqueInput
  }

  /**
   * gl_account findFirst
   */
  export type gl_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter, which gl_account to fetch.
     */
    where?: gl_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gl_accounts to fetch.
     */
    orderBy?: gl_accountOrderByWithRelationInput | gl_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gl_accounts.
     */
    cursor?: gl_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gl_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gl_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gl_accounts.
     */
    distinct?: Gl_accountScalarFieldEnum | Gl_accountScalarFieldEnum[]
  }

  /**
   * gl_account findFirstOrThrow
   */
  export type gl_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter, which gl_account to fetch.
     */
    where?: gl_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gl_accounts to fetch.
     */
    orderBy?: gl_accountOrderByWithRelationInput | gl_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gl_accounts.
     */
    cursor?: gl_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gl_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gl_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gl_accounts.
     */
    distinct?: Gl_accountScalarFieldEnum | Gl_accountScalarFieldEnum[]
  }

  /**
   * gl_account findMany
   */
  export type gl_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter, which gl_accounts to fetch.
     */
    where?: gl_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gl_accounts to fetch.
     */
    orderBy?: gl_accountOrderByWithRelationInput | gl_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gl_accounts.
     */
    cursor?: gl_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gl_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gl_accounts.
     */
    skip?: number
    distinct?: Gl_accountScalarFieldEnum | Gl_accountScalarFieldEnum[]
  }

  /**
   * gl_account create
   */
  export type gl_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a gl_account.
     */
    data?: XOR<gl_accountCreateInput, gl_accountUncheckedCreateInput>
  }

  /**
   * gl_account createMany
   */
  export type gl_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gl_accounts.
     */
    data: gl_accountCreateManyInput | gl_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gl_account createManyAndReturn
   */
  export type gl_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * The data used to create many gl_accounts.
     */
    data: gl_accountCreateManyInput | gl_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gl_account update
   */
  export type gl_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a gl_account.
     */
    data: XOR<gl_accountUpdateInput, gl_accountUncheckedUpdateInput>
    /**
     * Choose, which gl_account to update.
     */
    where: gl_accountWhereUniqueInput
  }

  /**
   * gl_account updateMany
   */
  export type gl_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gl_accounts.
     */
    data: XOR<gl_accountUpdateManyMutationInput, gl_accountUncheckedUpdateManyInput>
    /**
     * Filter which gl_accounts to update
     */
    where?: gl_accountWhereInput
    /**
     * Limit how many gl_accounts to update.
     */
    limit?: number
  }

  /**
   * gl_account updateManyAndReturn
   */
  export type gl_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * The data used to update gl_accounts.
     */
    data: XOR<gl_accountUpdateManyMutationInput, gl_accountUncheckedUpdateManyInput>
    /**
     * Filter which gl_accounts to update
     */
    where?: gl_accountWhereInput
    /**
     * Limit how many gl_accounts to update.
     */
    limit?: number
  }

  /**
   * gl_account upsert
   */
  export type gl_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the gl_account to update in case it exists.
     */
    where: gl_accountWhereUniqueInput
    /**
     * In case the gl_account found by the `where` argument doesn't exist, create a new gl_account with this data.
     */
    create: XOR<gl_accountCreateInput, gl_accountUncheckedCreateInput>
    /**
     * In case the gl_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gl_accountUpdateInput, gl_accountUncheckedUpdateInput>
  }

  /**
   * gl_account delete
   */
  export type gl_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    /**
     * Filter which gl_account to delete.
     */
    where: gl_accountWhereUniqueInput
  }

  /**
   * gl_account deleteMany
   */
  export type gl_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gl_accounts to delete
     */
    where?: gl_accountWhereInput
    /**
     * Limit how many gl_accounts to delete.
     */
    limit?: number
  }

  /**
   * gl_account.journal_entry
   */
  export type gl_account$journal_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    where?: journal_entryWhereInput
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    cursor?: journal_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Journal_entryScalarFieldEnum | Journal_entryScalarFieldEnum[]
  }

  /**
   * gl_account without action
   */
  export type gl_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
  }


  /**
   * Model journal_entry
   */

  export type AggregateJournal_entry = {
    _count: Journal_entryCountAggregateOutputType | null
    _avg: Journal_entryAvgAggregateOutputType | null
    _sum: Journal_entrySumAggregateOutputType | null
    _min: Journal_entryMinAggregateOutputType | null
    _max: Journal_entryMaxAggregateOutputType | null
  }

  export type Journal_entryAvgAggregateOutputType = {
    id: number | null
    gl_account_id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type Journal_entrySumAggregateOutputType = {
    id: number | null
    gl_account_id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type Journal_entryMinAggregateOutputType = {
    id: number | null
    entry_date: Date | null
    description: string | null
    gl_account_id: number | null
    amount: Decimal | null
    created_by: number | null
    created_at: Date | null
  }

  export type Journal_entryMaxAggregateOutputType = {
    id: number | null
    entry_date: Date | null
    description: string | null
    gl_account_id: number | null
    amount: Decimal | null
    created_by: number | null
    created_at: Date | null
  }

  export type Journal_entryCountAggregateOutputType = {
    id: number
    entry_date: number
    description: number
    gl_account_id: number
    amount: number
    created_by: number
    created_at: number
    _all: number
  }


  export type Journal_entryAvgAggregateInputType = {
    id?: true
    gl_account_id?: true
    amount?: true
    created_by?: true
  }

  export type Journal_entrySumAggregateInputType = {
    id?: true
    gl_account_id?: true
    amount?: true
    created_by?: true
  }

  export type Journal_entryMinAggregateInputType = {
    id?: true
    entry_date?: true
    description?: true
    gl_account_id?: true
    amount?: true
    created_by?: true
    created_at?: true
  }

  export type Journal_entryMaxAggregateInputType = {
    id?: true
    entry_date?: true
    description?: true
    gl_account_id?: true
    amount?: true
    created_by?: true
    created_at?: true
  }

  export type Journal_entryCountAggregateInputType = {
    id?: true
    entry_date?: true
    description?: true
    gl_account_id?: true
    amount?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type Journal_entryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journal_entry to aggregate.
     */
    where?: journal_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journal_entries to fetch.
     */
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: journal_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journal_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journal_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned journal_entries
    **/
    _count?: true | Journal_entryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Journal_entryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Journal_entrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Journal_entryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Journal_entryMaxAggregateInputType
  }

  export type GetJournal_entryAggregateType<T extends Journal_entryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournal_entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournal_entry[P]>
      : GetScalarType<T[P], AggregateJournal_entry[P]>
  }




  export type journal_entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: journal_entryWhereInput
    orderBy?: journal_entryOrderByWithAggregationInput | journal_entryOrderByWithAggregationInput[]
    by: Journal_entryScalarFieldEnum[] | Journal_entryScalarFieldEnum
    having?: journal_entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Journal_entryCountAggregateInputType | true
    _avg?: Journal_entryAvgAggregateInputType
    _sum?: Journal_entrySumAggregateInputType
    _min?: Journal_entryMinAggregateInputType
    _max?: Journal_entryMaxAggregateInputType
  }

  export type Journal_entryGroupByOutputType = {
    id: number
    entry_date: Date
    description: string | null
    gl_account_id: number | null
    amount: Decimal | null
    created_by: number | null
    created_at: Date | null
    _count: Journal_entryCountAggregateOutputType | null
    _avg: Journal_entryAvgAggregateOutputType | null
    _sum: Journal_entrySumAggregateOutputType | null
    _min: Journal_entryMinAggregateOutputType | null
    _max: Journal_entryMaxAggregateOutputType | null
  }

  type GetJournal_entryGroupByPayload<T extends journal_entryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Journal_entryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Journal_entryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Journal_entryGroupByOutputType[P]>
            : GetScalarType<T[P], Journal_entryGroupByOutputType[P]>
        }
      >
    >


  export type journal_entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry_date?: boolean
    description?: boolean
    gl_account_id?: boolean
    amount?: boolean
    created_by?: boolean
    created_at?: boolean
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }, ExtArgs["result"]["journal_entry"]>

  export type journal_entrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry_date?: boolean
    description?: boolean
    gl_account_id?: boolean
    amount?: boolean
    created_by?: boolean
    created_at?: boolean
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }, ExtArgs["result"]["journal_entry"]>

  export type journal_entrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry_date?: boolean
    description?: boolean
    gl_account_id?: boolean
    amount?: boolean
    created_by?: boolean
    created_at?: boolean
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }, ExtArgs["result"]["journal_entry"]>

  export type journal_entrySelectScalar = {
    id?: boolean
    entry_date?: boolean
    description?: boolean
    gl_account_id?: boolean
    amount?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type journal_entryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entry_date" | "description" | "gl_account_id" | "amount" | "created_by" | "created_at", ExtArgs["result"]["journal_entry"]>
  export type journal_entryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }
  export type journal_entryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }
  export type journal_entryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account?: boolean | journal_entry$user_accountArgs<ExtArgs>
    gl_account?: boolean | journal_entry$gl_accountArgs<ExtArgs>
  }

  export type $journal_entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "journal_entry"
    objects: {
      user_account: Prisma.$user_accountPayload<ExtArgs> | null
      gl_account: Prisma.$gl_accountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entry_date: Date
      description: string | null
      gl_account_id: number | null
      amount: Prisma.Decimal | null
      created_by: number | null
      created_at: Date | null
    }, ExtArgs["result"]["journal_entry"]>
    composites: {}
  }

  type journal_entryGetPayload<S extends boolean | null | undefined | journal_entryDefaultArgs> = $Result.GetResult<Prisma.$journal_entryPayload, S>

  type journal_entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<journal_entryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Journal_entryCountAggregateInputType | true
    }

  export interface journal_entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['journal_entry'], meta: { name: 'journal_entry' } }
    /**
     * Find zero or one Journal_entry that matches the filter.
     * @param {journal_entryFindUniqueArgs} args - Arguments to find a Journal_entry
     * @example
     * // Get one Journal_entry
     * const journal_entry = await prisma.journal_entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends journal_entryFindUniqueArgs>(args: SelectSubset<T, journal_entryFindUniqueArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journal_entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {journal_entryFindUniqueOrThrowArgs} args - Arguments to find a Journal_entry
     * @example
     * // Get one Journal_entry
     * const journal_entry = await prisma.journal_entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends journal_entryFindUniqueOrThrowArgs>(args: SelectSubset<T, journal_entryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal_entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryFindFirstArgs} args - Arguments to find a Journal_entry
     * @example
     * // Get one Journal_entry
     * const journal_entry = await prisma.journal_entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends journal_entryFindFirstArgs>(args?: SelectSubset<T, journal_entryFindFirstArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal_entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryFindFirstOrThrowArgs} args - Arguments to find a Journal_entry
     * @example
     * // Get one Journal_entry
     * const journal_entry = await prisma.journal_entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends journal_entryFindFirstOrThrowArgs>(args?: SelectSubset<T, journal_entryFindFirstOrThrowArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journal_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journal_entries
     * const journal_entries = await prisma.journal_entry.findMany()
     * 
     * // Get first 10 Journal_entries
     * const journal_entries = await prisma.journal_entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journal_entryWithIdOnly = await prisma.journal_entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends journal_entryFindManyArgs>(args?: SelectSubset<T, journal_entryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journal_entry.
     * @param {journal_entryCreateArgs} args - Arguments to create a Journal_entry.
     * @example
     * // Create one Journal_entry
     * const Journal_entry = await prisma.journal_entry.create({
     *   data: {
     *     // ... data to create a Journal_entry
     *   }
     * })
     * 
     */
    create<T extends journal_entryCreateArgs>(args: SelectSubset<T, journal_entryCreateArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journal_entries.
     * @param {journal_entryCreateManyArgs} args - Arguments to create many Journal_entries.
     * @example
     * // Create many Journal_entries
     * const journal_entry = await prisma.journal_entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends journal_entryCreateManyArgs>(args?: SelectSubset<T, journal_entryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journal_entries and returns the data saved in the database.
     * @param {journal_entryCreateManyAndReturnArgs} args - Arguments to create many Journal_entries.
     * @example
     * // Create many Journal_entries
     * const journal_entry = await prisma.journal_entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journal_entries and only return the `id`
     * const journal_entryWithIdOnly = await prisma.journal_entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends journal_entryCreateManyAndReturnArgs>(args?: SelectSubset<T, journal_entryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Journal_entry.
     * @param {journal_entryDeleteArgs} args - Arguments to delete one Journal_entry.
     * @example
     * // Delete one Journal_entry
     * const Journal_entry = await prisma.journal_entry.delete({
     *   where: {
     *     // ... filter to delete one Journal_entry
     *   }
     * })
     * 
     */
    delete<T extends journal_entryDeleteArgs>(args: SelectSubset<T, journal_entryDeleteArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journal_entry.
     * @param {journal_entryUpdateArgs} args - Arguments to update one Journal_entry.
     * @example
     * // Update one Journal_entry
     * const journal_entry = await prisma.journal_entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends journal_entryUpdateArgs>(args: SelectSubset<T, journal_entryUpdateArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journal_entries.
     * @param {journal_entryDeleteManyArgs} args - Arguments to filter Journal_entries to delete.
     * @example
     * // Delete a few Journal_entries
     * const { count } = await prisma.journal_entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends journal_entryDeleteManyArgs>(args?: SelectSubset<T, journal_entryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journal_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journal_entries
     * const journal_entry = await prisma.journal_entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends journal_entryUpdateManyArgs>(args: SelectSubset<T, journal_entryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journal_entries and returns the data updated in the database.
     * @param {journal_entryUpdateManyAndReturnArgs} args - Arguments to update many Journal_entries.
     * @example
     * // Update many Journal_entries
     * const journal_entry = await prisma.journal_entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Journal_entries and only return the `id`
     * const journal_entryWithIdOnly = await prisma.journal_entry.updateManyAndReturn({
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
    updateManyAndReturn<T extends journal_entryUpdateManyAndReturnArgs>(args: SelectSubset<T, journal_entryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Journal_entry.
     * @param {journal_entryUpsertArgs} args - Arguments to update or create a Journal_entry.
     * @example
     * // Update or create a Journal_entry
     * const journal_entry = await prisma.journal_entry.upsert({
     *   create: {
     *     // ... data to create a Journal_entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journal_entry we want to update
     *   }
     * })
     */
    upsert<T extends journal_entryUpsertArgs>(args: SelectSubset<T, journal_entryUpsertArgs<ExtArgs>>): Prisma__journal_entryClient<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journal_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryCountArgs} args - Arguments to filter Journal_entries to count.
     * @example
     * // Count the number of Journal_entries
     * const count = await prisma.journal_entry.count({
     *   where: {
     *     // ... the filter for the Journal_entries we want to count
     *   }
     * })
    **/
    count<T extends journal_entryCountArgs>(
      args?: Subset<T, journal_entryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Journal_entryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journal_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Journal_entryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Journal_entryAggregateArgs>(args: Subset<T, Journal_entryAggregateArgs>): Prisma.PrismaPromise<GetJournal_entryAggregateType<T>>

    /**
     * Group by Journal_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journal_entryGroupByArgs} args - Group by arguments.
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
      T extends journal_entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: journal_entryGroupByArgs['orderBy'] }
        : { orderBy?: journal_entryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, journal_entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournal_entryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the journal_entry model
   */
  readonly fields: journal_entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for journal_entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__journal_entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_account<T extends journal_entry$user_accountArgs<ExtArgs> = {}>(args?: Subset<T, journal_entry$user_accountArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gl_account<T extends journal_entry$gl_accountArgs<ExtArgs> = {}>(args?: Subset<T, journal_entry$gl_accountArgs<ExtArgs>>): Prisma__gl_accountClient<$Result.GetResult<Prisma.$gl_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the journal_entry model
   */
  interface journal_entryFieldRefs {
    readonly id: FieldRef<"journal_entry", 'Int'>
    readonly entry_date: FieldRef<"journal_entry", 'DateTime'>
    readonly description: FieldRef<"journal_entry", 'String'>
    readonly gl_account_id: FieldRef<"journal_entry", 'Int'>
    readonly amount: FieldRef<"journal_entry", 'Decimal'>
    readonly created_by: FieldRef<"journal_entry", 'Int'>
    readonly created_at: FieldRef<"journal_entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * journal_entry findUnique
   */
  export type journal_entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter, which journal_entry to fetch.
     */
    where: journal_entryWhereUniqueInput
  }

  /**
   * journal_entry findUniqueOrThrow
   */
  export type journal_entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter, which journal_entry to fetch.
     */
    where: journal_entryWhereUniqueInput
  }

  /**
   * journal_entry findFirst
   */
  export type journal_entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter, which journal_entry to fetch.
     */
    where?: journal_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journal_entries to fetch.
     */
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for journal_entries.
     */
    cursor?: journal_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journal_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journal_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of journal_entries.
     */
    distinct?: Journal_entryScalarFieldEnum | Journal_entryScalarFieldEnum[]
  }

  /**
   * journal_entry findFirstOrThrow
   */
  export type journal_entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter, which journal_entry to fetch.
     */
    where?: journal_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journal_entries to fetch.
     */
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for journal_entries.
     */
    cursor?: journal_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journal_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journal_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of journal_entries.
     */
    distinct?: Journal_entryScalarFieldEnum | Journal_entryScalarFieldEnum[]
  }

  /**
   * journal_entry findMany
   */
  export type journal_entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter, which journal_entries to fetch.
     */
    where?: journal_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journal_entries to fetch.
     */
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing journal_entries.
     */
    cursor?: journal_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journal_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journal_entries.
     */
    skip?: number
    distinct?: Journal_entryScalarFieldEnum | Journal_entryScalarFieldEnum[]
  }

  /**
   * journal_entry create
   */
  export type journal_entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * The data needed to create a journal_entry.
     */
    data: XOR<journal_entryCreateInput, journal_entryUncheckedCreateInput>
  }

  /**
   * journal_entry createMany
   */
  export type journal_entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many journal_entries.
     */
    data: journal_entryCreateManyInput | journal_entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * journal_entry createManyAndReturn
   */
  export type journal_entryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * The data used to create many journal_entries.
     */
    data: journal_entryCreateManyInput | journal_entryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * journal_entry update
   */
  export type journal_entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * The data needed to update a journal_entry.
     */
    data: XOR<journal_entryUpdateInput, journal_entryUncheckedUpdateInput>
    /**
     * Choose, which journal_entry to update.
     */
    where: journal_entryWhereUniqueInput
  }

  /**
   * journal_entry updateMany
   */
  export type journal_entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update journal_entries.
     */
    data: XOR<journal_entryUpdateManyMutationInput, journal_entryUncheckedUpdateManyInput>
    /**
     * Filter which journal_entries to update
     */
    where?: journal_entryWhereInput
    /**
     * Limit how many journal_entries to update.
     */
    limit?: number
  }

  /**
   * journal_entry updateManyAndReturn
   */
  export type journal_entryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * The data used to update journal_entries.
     */
    data: XOR<journal_entryUpdateManyMutationInput, journal_entryUncheckedUpdateManyInput>
    /**
     * Filter which journal_entries to update
     */
    where?: journal_entryWhereInput
    /**
     * Limit how many journal_entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * journal_entry upsert
   */
  export type journal_entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * The filter to search for the journal_entry to update in case it exists.
     */
    where: journal_entryWhereUniqueInput
    /**
     * In case the journal_entry found by the `where` argument doesn't exist, create a new journal_entry with this data.
     */
    create: XOR<journal_entryCreateInput, journal_entryUncheckedCreateInput>
    /**
     * In case the journal_entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<journal_entryUpdateInput, journal_entryUncheckedUpdateInput>
  }

  /**
   * journal_entry delete
   */
  export type journal_entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    /**
     * Filter which journal_entry to delete.
     */
    where: journal_entryWhereUniqueInput
  }

  /**
   * journal_entry deleteMany
   */
  export type journal_entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journal_entries to delete
     */
    where?: journal_entryWhereInput
    /**
     * Limit how many journal_entries to delete.
     */
    limit?: number
  }

  /**
   * journal_entry.user_account
   */
  export type journal_entry$user_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    where?: user_accountWhereInput
  }

  /**
   * journal_entry.gl_account
   */
  export type journal_entry$gl_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gl_account
     */
    select?: gl_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gl_account
     */
    omit?: gl_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gl_accountInclude<ExtArgs> | null
    where?: gl_accountWhereInput
  }

  /**
   * journal_entry without action
   */
  export type journal_entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_account?: boolean | roles$user_accountArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account?: boolean | roles$user_accountArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      user_account: Prisma.$user_accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
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
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_account<T extends roles$user_accountArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data?: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.user_account
   */
  export type roles$user_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    where?: user_accountWhereInput
    orderBy?: user_accountOrderByWithRelationInput | user_accountOrderByWithRelationInput[]
    cursor?: user_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model user_account
   */

  export type AggregateUser_account = {
    _count: User_accountCountAggregateOutputType | null
    _avg: User_accountAvgAggregateOutputType | null
    _sum: User_accountSumAggregateOutputType | null
    _min: User_accountMinAggregateOutputType | null
    _max: User_accountMaxAggregateOutputType | null
  }

  export type User_accountAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    status: number | null
  }

  export type User_accountSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    status: number | null
  }

  export type User_accountMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role_id: number | null
    status: number | null
    date_created: Date | null
  }

  export type User_accountMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role_id: number | null
    status: number | null
    date_created: Date | null
  }

  export type User_accountCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role_id: number
    status: number
    date_created: number
    _all: number
  }


  export type User_accountAvgAggregateInputType = {
    id?: true
    role_id?: true
    status?: true
  }

  export type User_accountSumAggregateInputType = {
    id?: true
    role_id?: true
    status?: true
  }

  export type User_accountMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
    status?: true
    date_created?: true
  }

  export type User_accountMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
    status?: true
    date_created?: true
  }

  export type User_accountCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
    status?: true
    date_created?: true
    _all?: true
  }

  export type User_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_account to aggregate.
     */
    where?: user_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: user_accountOrderByWithRelationInput | user_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_accounts
    **/
    _count?: true | User_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_accountMaxAggregateInputType
  }

  export type GetUser_accountAggregateType<T extends User_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_account[P]>
      : GetScalarType<T[P], AggregateUser_account[P]>
  }




  export type user_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_accountWhereInput
    orderBy?: user_accountOrderByWithAggregationInput | user_accountOrderByWithAggregationInput[]
    by: User_accountScalarFieldEnum[] | User_accountScalarFieldEnum
    having?: user_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_accountCountAggregateInputType | true
    _avg?: User_accountAvgAggregateInputType
    _sum?: User_accountSumAggregateInputType
    _min?: User_accountMinAggregateInputType
    _max?: User_accountMaxAggregateInputType
  }

  export type User_accountGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    email: string | null
    role_id: number | null
    status: number | null
    date_created: Date | null
    _count: User_accountCountAggregateOutputType | null
    _avg: User_accountAvgAggregateOutputType | null
    _sum: User_accountSumAggregateOutputType | null
    _min: User_accountMinAggregateOutputType | null
    _max: User_accountMaxAggregateOutputType | null
  }

  type GetUser_accountGroupByPayload<T extends user_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_accountGroupByOutputType[P]>
            : GetScalarType<T[P], User_accountGroupByOutputType[P]>
        }
      >
    >


  export type user_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    status?: boolean
    date_created?: boolean
    journal_entry?: boolean | user_account$journal_entryArgs<ExtArgs>
    roles?: boolean | user_account$rolesArgs<ExtArgs>
    _count?: boolean | User_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type user_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    status?: boolean
    date_created?: boolean
    roles?: boolean | user_account$rolesArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type user_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    status?: boolean
    date_created?: boolean
    roles?: boolean | user_account$rolesArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type user_accountSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    status?: boolean
    date_created?: boolean
  }

  export type user_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role_id" | "status" | "date_created", ExtArgs["result"]["user_account"]>
  export type user_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal_entry?: boolean | user_account$journal_entryArgs<ExtArgs>
    roles?: boolean | user_account$rolesArgs<ExtArgs>
    _count?: boolean | User_accountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | user_account$rolesArgs<ExtArgs>
  }
  export type user_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | user_account$rolesArgs<ExtArgs>
  }

  export type $user_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_account"
    objects: {
      journal_entry: Prisma.$journal_entryPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      email: string | null
      role_id: number | null
      status: number | null
      date_created: Date | null
    }, ExtArgs["result"]["user_account"]>
    composites: {}
  }

  type user_accountGetPayload<S extends boolean | null | undefined | user_accountDefaultArgs> = $Result.GetResult<Prisma.$user_accountPayload, S>

  type user_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_accountCountAggregateInputType | true
    }

  export interface user_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_account'], meta: { name: 'user_account' } }
    /**
     * Find zero or one User_account that matches the filter.
     * @param {user_accountFindUniqueArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_accountFindUniqueArgs>(args: SelectSubset<T, user_accountFindUniqueArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_accountFindUniqueOrThrowArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, user_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountFindFirstArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_accountFindFirstArgs>(args?: SelectSubset<T, user_accountFindFirstArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountFindFirstOrThrowArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, user_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_accounts
     * const user_accounts = await prisma.user_account.findMany()
     * 
     * // Get first 10 User_accounts
     * const user_accounts = await prisma.user_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_accountWithIdOnly = await prisma.user_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_accountFindManyArgs>(args?: SelectSubset<T, user_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_account.
     * @param {user_accountCreateArgs} args - Arguments to create a User_account.
     * @example
     * // Create one User_account
     * const User_account = await prisma.user_account.create({
     *   data: {
     *     // ... data to create a User_account
     *   }
     * })
     * 
     */
    create<T extends user_accountCreateArgs>(args: SelectSubset<T, user_accountCreateArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_accounts.
     * @param {user_accountCreateManyArgs} args - Arguments to create many User_accounts.
     * @example
     * // Create many User_accounts
     * const user_account = await prisma.user_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_accountCreateManyArgs>(args?: SelectSubset<T, user_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_accounts and returns the data saved in the database.
     * @param {user_accountCreateManyAndReturnArgs} args - Arguments to create many User_accounts.
     * @example
     * // Create many User_accounts
     * const user_account = await prisma.user_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_accounts and only return the `id`
     * const user_accountWithIdOnly = await prisma.user_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, user_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_account.
     * @param {user_accountDeleteArgs} args - Arguments to delete one User_account.
     * @example
     * // Delete one User_account
     * const User_account = await prisma.user_account.delete({
     *   where: {
     *     // ... filter to delete one User_account
     *   }
     * })
     * 
     */
    delete<T extends user_accountDeleteArgs>(args: SelectSubset<T, user_accountDeleteArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_account.
     * @param {user_accountUpdateArgs} args - Arguments to update one User_account.
     * @example
     * // Update one User_account
     * const user_account = await prisma.user_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_accountUpdateArgs>(args: SelectSubset<T, user_accountUpdateArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_accounts.
     * @param {user_accountDeleteManyArgs} args - Arguments to filter User_accounts to delete.
     * @example
     * // Delete a few User_accounts
     * const { count } = await prisma.user_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_accountDeleteManyArgs>(args?: SelectSubset<T, user_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_accounts
     * const user_account = await prisma.user_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_accountUpdateManyArgs>(args: SelectSubset<T, user_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_accounts and returns the data updated in the database.
     * @param {user_accountUpdateManyAndReturnArgs} args - Arguments to update many User_accounts.
     * @example
     * // Update many User_accounts
     * const user_account = await prisma.user_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_accounts and only return the `id`
     * const user_accountWithIdOnly = await prisma.user_account.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, user_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_account.
     * @param {user_accountUpsertArgs} args - Arguments to update or create a User_account.
     * @example
     * // Update or create a User_account
     * const user_account = await prisma.user_account.upsert({
     *   create: {
     *     // ... data to create a User_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_account we want to update
     *   }
     * })
     */
    upsert<T extends user_accountUpsertArgs>(args: SelectSubset<T, user_accountUpsertArgs<ExtArgs>>): Prisma__user_accountClient<$Result.GetResult<Prisma.$user_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountCountArgs} args - Arguments to filter User_accounts to count.
     * @example
     * // Count the number of User_accounts
     * const count = await prisma.user_account.count({
     *   where: {
     *     // ... the filter for the User_accounts we want to count
     *   }
     * })
    **/
    count<T extends user_accountCountArgs>(
      args?: Subset<T, user_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_accountAggregateArgs>(args: Subset<T, User_accountAggregateArgs>): Prisma.PrismaPromise<GetUser_accountAggregateType<T>>

    /**
     * Group by User_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountGroupByArgs} args - Group by arguments.
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
      T extends user_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_accountGroupByArgs['orderBy'] }
        : { orderBy?: user_accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_account model
   */
  readonly fields: user_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journal_entry<T extends user_account$journal_entryArgs<ExtArgs> = {}>(args?: Subset<T, user_account$journal_entryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journal_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends user_account$rolesArgs<ExtArgs> = {}>(args?: Subset<T, user_account$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_account model
   */
  interface user_accountFieldRefs {
    readonly id: FieldRef<"user_account", 'Int'>
    readonly username: FieldRef<"user_account", 'String'>
    readonly password: FieldRef<"user_account", 'String'>
    readonly email: FieldRef<"user_account", 'String'>
    readonly role_id: FieldRef<"user_account", 'Int'>
    readonly status: FieldRef<"user_account", 'Int'>
    readonly date_created: FieldRef<"user_account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_account findUnique
   */
  export type user_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter, which user_account to fetch.
     */
    where: user_accountWhereUniqueInput
  }

  /**
   * user_account findUniqueOrThrow
   */
  export type user_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter, which user_account to fetch.
     */
    where: user_accountWhereUniqueInput
  }

  /**
   * user_account findFirst
   */
  export type user_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter, which user_account to fetch.
     */
    where?: user_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: user_accountOrderByWithRelationInput | user_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_accounts.
     */
    cursor?: user_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_accounts.
     */
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * user_account findFirstOrThrow
   */
  export type user_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter, which user_account to fetch.
     */
    where?: user_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: user_accountOrderByWithRelationInput | user_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_accounts.
     */
    cursor?: user_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_accounts.
     */
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * user_account findMany
   */
  export type user_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where?: user_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: user_accountOrderByWithRelationInput | user_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_accounts.
     */
    cursor?: user_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * user_account create
   */
  export type user_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a user_account.
     */
    data?: XOR<user_accountCreateInput, user_accountUncheckedCreateInput>
  }

  /**
   * user_account createMany
   */
  export type user_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_accounts.
     */
    data: user_accountCreateManyInput | user_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_account createManyAndReturn
   */
  export type user_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * The data used to create many user_accounts.
     */
    data: user_accountCreateManyInput | user_accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_account update
   */
  export type user_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a user_account.
     */
    data: XOR<user_accountUpdateInput, user_accountUncheckedUpdateInput>
    /**
     * Choose, which user_account to update.
     */
    where: user_accountWhereUniqueInput
  }

  /**
   * user_account updateMany
   */
  export type user_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_accounts.
     */
    data: XOR<user_accountUpdateManyMutationInput, user_accountUncheckedUpdateManyInput>
    /**
     * Filter which user_accounts to update
     */
    where?: user_accountWhereInput
    /**
     * Limit how many user_accounts to update.
     */
    limit?: number
  }

  /**
   * user_account updateManyAndReturn
   */
  export type user_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * The data used to update user_accounts.
     */
    data: XOR<user_accountUpdateManyMutationInput, user_accountUncheckedUpdateManyInput>
    /**
     * Filter which user_accounts to update
     */
    where?: user_accountWhereInput
    /**
     * Limit how many user_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_account upsert
   */
  export type user_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the user_account to update in case it exists.
     */
    where: user_accountWhereUniqueInput
    /**
     * In case the user_account found by the `where` argument doesn't exist, create a new user_account with this data.
     */
    create: XOR<user_accountCreateInput, user_accountUncheckedCreateInput>
    /**
     * In case the user_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_accountUpdateInput, user_accountUncheckedUpdateInput>
  }

  /**
   * user_account delete
   */
  export type user_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
    /**
     * Filter which user_account to delete.
     */
    where: user_accountWhereUniqueInput
  }

  /**
   * user_account deleteMany
   */
  export type user_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_accounts to delete
     */
    where?: user_accountWhereInput
    /**
     * Limit how many user_accounts to delete.
     */
    limit?: number
  }

  /**
   * user_account.journal_entry
   */
  export type user_account$journal_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journal_entry
     */
    select?: journal_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the journal_entry
     */
    omit?: journal_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: journal_entryInclude<ExtArgs> | null
    where?: journal_entryWhereInput
    orderBy?: journal_entryOrderByWithRelationInput | journal_entryOrderByWithRelationInput[]
    cursor?: journal_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Journal_entryScalarFieldEnum | Journal_entryScalarFieldEnum[]
  }

  /**
   * user_account.roles
   */
  export type user_account$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }

  /**
   * user_account without action
   */
  export type user_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_account
     */
    select?: user_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_account
     */
    omit?: user_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_accountInclude<ExtArgs> | null
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


  export const Gl_accountScalarFieldEnum: {
    id: 'id',
    gl_account: 'gl_account',
    name: 'name',
    category: 'category',
    subcategory: 'subcategory'
  };

  export type Gl_accountScalarFieldEnum = (typeof Gl_accountScalarFieldEnum)[keyof typeof Gl_accountScalarFieldEnum]


  export const Journal_entryScalarFieldEnum: {
    id: 'id',
    entry_date: 'entry_date',
    description: 'description',
    gl_account_id: 'gl_account_id',
    amount: 'amount',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type Journal_entryScalarFieldEnum = (typeof Journal_entryScalarFieldEnum)[keyof typeof Journal_entryScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const User_accountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role_id: 'role_id',
    status: 'status',
    date_created: 'date_created'
  };

  export type User_accountScalarFieldEnum = (typeof User_accountScalarFieldEnum)[keyof typeof User_accountScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type gl_accountWhereInput = {
    AND?: gl_accountWhereInput | gl_accountWhereInput[]
    OR?: gl_accountWhereInput[]
    NOT?: gl_accountWhereInput | gl_accountWhereInput[]
    id?: IntFilter<"gl_account"> | number
    gl_account?: StringNullableFilter<"gl_account"> | string | null
    name?: StringNullableFilter<"gl_account"> | string | null
    category?: StringNullableFilter<"gl_account"> | string | null
    subcategory?: StringNullableFilter<"gl_account"> | string | null
    journal_entry?: Journal_entryListRelationFilter
  }

  export type gl_accountOrderByWithRelationInput = {
    id?: SortOrder
    gl_account?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    journal_entry?: journal_entryOrderByRelationAggregateInput
  }

  export type gl_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gl_account?: string
    AND?: gl_accountWhereInput | gl_accountWhereInput[]
    OR?: gl_accountWhereInput[]
    NOT?: gl_accountWhereInput | gl_accountWhereInput[]
    name?: StringNullableFilter<"gl_account"> | string | null
    category?: StringNullableFilter<"gl_account"> | string | null
    subcategory?: StringNullableFilter<"gl_account"> | string | null
    journal_entry?: Journal_entryListRelationFilter
  }, "id" | "gl_account">

  export type gl_accountOrderByWithAggregationInput = {
    id?: SortOrder
    gl_account?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    _count?: gl_accountCountOrderByAggregateInput
    _avg?: gl_accountAvgOrderByAggregateInput
    _max?: gl_accountMaxOrderByAggregateInput
    _min?: gl_accountMinOrderByAggregateInput
    _sum?: gl_accountSumOrderByAggregateInput
  }

  export type gl_accountScalarWhereWithAggregatesInput = {
    AND?: gl_accountScalarWhereWithAggregatesInput | gl_accountScalarWhereWithAggregatesInput[]
    OR?: gl_accountScalarWhereWithAggregatesInput[]
    NOT?: gl_accountScalarWhereWithAggregatesInput | gl_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gl_account"> | number
    gl_account?: StringNullableWithAggregatesFilter<"gl_account"> | string | null
    name?: StringNullableWithAggregatesFilter<"gl_account"> | string | null
    category?: StringNullableWithAggregatesFilter<"gl_account"> | string | null
    subcategory?: StringNullableWithAggregatesFilter<"gl_account"> | string | null
  }

  export type journal_entryWhereInput = {
    AND?: journal_entryWhereInput | journal_entryWhereInput[]
    OR?: journal_entryWhereInput[]
    NOT?: journal_entryWhereInput | journal_entryWhereInput[]
    id?: IntFilter<"journal_entry"> | number
    entry_date?: DateTimeFilter<"journal_entry"> | Date | string
    description?: StringNullableFilter<"journal_entry"> | string | null
    gl_account_id?: IntNullableFilter<"journal_entry"> | number | null
    amount?: DecimalNullableFilter<"journal_entry"> | Decimal | DecimalJsLike | number | string | null
    created_by?: IntNullableFilter<"journal_entry"> | number | null
    created_at?: DateTimeNullableFilter<"journal_entry"> | Date | string | null
    user_account?: XOR<User_accountNullableScalarRelationFilter, user_accountWhereInput> | null
    gl_account?: XOR<Gl_accountNullableScalarRelationFilter, gl_accountWhereInput> | null
  }

  export type journal_entryOrderByWithRelationInput = {
    id?: SortOrder
    entry_date?: SortOrder
    description?: SortOrderInput | SortOrder
    gl_account_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_account?: user_accountOrderByWithRelationInput
    gl_account?: gl_accountOrderByWithRelationInput
  }

  export type journal_entryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: journal_entryWhereInput | journal_entryWhereInput[]
    OR?: journal_entryWhereInput[]
    NOT?: journal_entryWhereInput | journal_entryWhereInput[]
    entry_date?: DateTimeFilter<"journal_entry"> | Date | string
    description?: StringNullableFilter<"journal_entry"> | string | null
    gl_account_id?: IntNullableFilter<"journal_entry"> | number | null
    amount?: DecimalNullableFilter<"journal_entry"> | Decimal | DecimalJsLike | number | string | null
    created_by?: IntNullableFilter<"journal_entry"> | number | null
    created_at?: DateTimeNullableFilter<"journal_entry"> | Date | string | null
    user_account?: XOR<User_accountNullableScalarRelationFilter, user_accountWhereInput> | null
    gl_account?: XOR<Gl_accountNullableScalarRelationFilter, gl_accountWhereInput> | null
  }, "id">

  export type journal_entryOrderByWithAggregationInput = {
    id?: SortOrder
    entry_date?: SortOrder
    description?: SortOrderInput | SortOrder
    gl_account_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: journal_entryCountOrderByAggregateInput
    _avg?: journal_entryAvgOrderByAggregateInput
    _max?: journal_entryMaxOrderByAggregateInput
    _min?: journal_entryMinOrderByAggregateInput
    _sum?: journal_entrySumOrderByAggregateInput
  }

  export type journal_entryScalarWhereWithAggregatesInput = {
    AND?: journal_entryScalarWhereWithAggregatesInput | journal_entryScalarWhereWithAggregatesInput[]
    OR?: journal_entryScalarWhereWithAggregatesInput[]
    NOT?: journal_entryScalarWhereWithAggregatesInput | journal_entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"journal_entry"> | number
    entry_date?: DateTimeWithAggregatesFilter<"journal_entry"> | Date | string
    description?: StringNullableWithAggregatesFilter<"journal_entry"> | string | null
    gl_account_id?: IntNullableWithAggregatesFilter<"journal_entry"> | number | null
    amount?: DecimalNullableWithAggregatesFilter<"journal_entry"> | Decimal | DecimalJsLike | number | string | null
    created_by?: IntNullableWithAggregatesFilter<"journal_entry"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"journal_entry"> | Date | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringNullableFilter<"roles"> | string | null
    user_account?: User_accountListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    user_account?: user_accountOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    user_account?: User_accountListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringNullableWithAggregatesFilter<"roles"> | string | null
  }

  export type user_accountWhereInput = {
    AND?: user_accountWhereInput | user_accountWhereInput[]
    OR?: user_accountWhereInput[]
    NOT?: user_accountWhereInput | user_accountWhereInput[]
    id?: IntFilter<"user_account"> | number
    username?: StringNullableFilter<"user_account"> | string | null
    password?: StringNullableFilter<"user_account"> | string | null
    email?: StringNullableFilter<"user_account"> | string | null
    role_id?: IntNullableFilter<"user_account"> | number | null
    status?: IntNullableFilter<"user_account"> | number | null
    date_created?: DateTimeNullableFilter<"user_account"> | Date | string | null
    journal_entry?: Journal_entryListRelationFilter
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }

  export type user_accountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    date_created?: SortOrderInput | SortOrder
    journal_entry?: journal_entryOrderByRelationAggregateInput
    roles?: rolesOrderByWithRelationInput
  }

  export type user_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_accountWhereInput | user_accountWhereInput[]
    OR?: user_accountWhereInput[]
    NOT?: user_accountWhereInput | user_accountWhereInput[]
    username?: StringNullableFilter<"user_account"> | string | null
    password?: StringNullableFilter<"user_account"> | string | null
    email?: StringNullableFilter<"user_account"> | string | null
    role_id?: IntNullableFilter<"user_account"> | number | null
    status?: IntNullableFilter<"user_account"> | number | null
    date_created?: DateTimeNullableFilter<"user_account"> | Date | string | null
    journal_entry?: Journal_entryListRelationFilter
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }, "id">

  export type user_accountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    date_created?: SortOrderInput | SortOrder
    _count?: user_accountCountOrderByAggregateInput
    _avg?: user_accountAvgOrderByAggregateInput
    _max?: user_accountMaxOrderByAggregateInput
    _min?: user_accountMinOrderByAggregateInput
    _sum?: user_accountSumOrderByAggregateInput
  }

  export type user_accountScalarWhereWithAggregatesInput = {
    AND?: user_accountScalarWhereWithAggregatesInput | user_accountScalarWhereWithAggregatesInput[]
    OR?: user_accountScalarWhereWithAggregatesInput[]
    NOT?: user_accountScalarWhereWithAggregatesInput | user_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_account"> | number
    username?: StringNullableWithAggregatesFilter<"user_account"> | string | null
    password?: StringNullableWithAggregatesFilter<"user_account"> | string | null
    email?: StringNullableWithAggregatesFilter<"user_account"> | string | null
    role_id?: IntNullableWithAggregatesFilter<"user_account"> | number | null
    status?: IntNullableWithAggregatesFilter<"user_account"> | number | null
    date_created?: DateTimeNullableWithAggregatesFilter<"user_account"> | Date | string | null
  }

  export type gl_accountCreateInput = {
    gl_account?: string | null
    name?: string | null
    category?: string | null
    subcategory?: string | null
    journal_entry?: journal_entryCreateNestedManyWithoutGl_accountInput
  }

  export type gl_accountUncheckedCreateInput = {
    id?: number
    gl_account?: string | null
    name?: string | null
    category?: string | null
    subcategory?: string | null
    journal_entry?: journal_entryUncheckedCreateNestedManyWithoutGl_accountInput
  }

  export type gl_accountUpdateInput = {
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    journal_entry?: journal_entryUpdateManyWithoutGl_accountNestedInput
  }

  export type gl_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    journal_entry?: journal_entryUncheckedUpdateManyWithoutGl_accountNestedInput
  }

  export type gl_accountCreateManyInput = {
    id?: number
    gl_account?: string | null
    name?: string | null
    category?: string | null
    subcategory?: string | null
  }

  export type gl_accountUpdateManyMutationInput = {
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gl_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type journal_entryCreateInput = {
    entry_date: Date | string
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    user_account?: user_accountCreateNestedOneWithoutJournal_entryInput
    gl_account?: gl_accountCreateNestedOneWithoutJournal_entryInput
  }

  export type journal_entryUncheckedCreateInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    gl_account_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type journal_entryUpdateInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account?: user_accountUpdateOneWithoutJournal_entryNestedInput
    gl_account?: gl_accountUpdateOneWithoutJournal_entryNestedInput
  }

  export type journal_entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gl_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type journal_entryCreateManyInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    gl_account_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type journal_entryUpdateManyMutationInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type journal_entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gl_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesCreateInput = {
    name?: string | null
    user_account?: user_accountCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name?: string | null
    user_account?: user_accountUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_account?: user_accountUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_account?: user_accountUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type rolesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_accountCreateInput = {
    username?: string | null
    password?: string | null
    email?: string | null
    status?: number | null
    date_created?: Date | string | null
    journal_entry?: journal_entryCreateNestedManyWithoutUser_accountInput
    roles?: rolesCreateNestedOneWithoutUser_accountInput
  }

  export type user_accountUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    email?: string | null
    role_id?: number | null
    status?: number | null
    date_created?: Date | string | null
    journal_entry?: journal_entryUncheckedCreateNestedManyWithoutUser_accountInput
  }

  export type user_accountUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    journal_entry?: journal_entryUpdateManyWithoutUser_accountNestedInput
    roles?: rolesUpdateOneWithoutUser_accountNestedInput
  }

  export type user_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    journal_entry?: journal_entryUncheckedUpdateManyWithoutUser_accountNestedInput
  }

  export type user_accountCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    email?: string | null
    role_id?: number | null
    status?: number | null
    date_created?: Date | string | null
  }

  export type user_accountUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type Journal_entryListRelationFilter = {
    every?: journal_entryWhereInput
    some?: journal_entryWhereInput
    none?: journal_entryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type journal_entryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gl_accountCountOrderByAggregateInput = {
    id?: SortOrder
    gl_account?: SortOrder
    name?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
  }

  export type gl_accountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gl_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    gl_account?: SortOrder
    name?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
  }

  export type gl_accountMinOrderByAggregateInput = {
    id?: SortOrder
    gl_account?: SortOrder
    name?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
  }

  export type gl_accountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type User_accountNullableScalarRelationFilter = {
    is?: user_accountWhereInput | null
    isNot?: user_accountWhereInput | null
  }

  export type Gl_accountNullableScalarRelationFilter = {
    is?: gl_accountWhereInput | null
    isNot?: gl_accountWhereInput | null
  }

  export type journal_entryCountOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    description?: SortOrder
    gl_account_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type journal_entryAvgOrderByAggregateInput = {
    id?: SortOrder
    gl_account_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
  }

  export type journal_entryMaxOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    description?: SortOrder
    gl_account_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type journal_entryMinOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    description?: SortOrder
    gl_account_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type journal_entrySumOrderByAggregateInput = {
    id?: SortOrder
    gl_account_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type User_accountListRelationFilter = {
    every?: user_accountWhereInput
    some?: user_accountWhereInput
    none?: user_accountWhereInput
  }

  export type user_accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesNullableScalarRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type user_accountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
    status?: SortOrder
    date_created?: SortOrder
  }

  export type user_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    status?: SortOrder
  }

  export type user_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
    status?: SortOrder
    date_created?: SortOrder
  }

  export type user_accountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
    status?: SortOrder
    date_created?: SortOrder
  }

  export type user_accountSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    status?: SortOrder
  }

  export type journal_entryCreateNestedManyWithoutGl_accountInput = {
    create?: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput> | journal_entryCreateWithoutGl_accountInput[] | journal_entryUncheckedCreateWithoutGl_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutGl_accountInput | journal_entryCreateOrConnectWithoutGl_accountInput[]
    createMany?: journal_entryCreateManyGl_accountInputEnvelope
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
  }

  export type journal_entryUncheckedCreateNestedManyWithoutGl_accountInput = {
    create?: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput> | journal_entryCreateWithoutGl_accountInput[] | journal_entryUncheckedCreateWithoutGl_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutGl_accountInput | journal_entryCreateOrConnectWithoutGl_accountInput[]
    createMany?: journal_entryCreateManyGl_accountInputEnvelope
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type journal_entryUpdateManyWithoutGl_accountNestedInput = {
    create?: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput> | journal_entryCreateWithoutGl_accountInput[] | journal_entryUncheckedCreateWithoutGl_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutGl_accountInput | journal_entryCreateOrConnectWithoutGl_accountInput[]
    upsert?: journal_entryUpsertWithWhereUniqueWithoutGl_accountInput | journal_entryUpsertWithWhereUniqueWithoutGl_accountInput[]
    createMany?: journal_entryCreateManyGl_accountInputEnvelope
    set?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    disconnect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    delete?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    update?: journal_entryUpdateWithWhereUniqueWithoutGl_accountInput | journal_entryUpdateWithWhereUniqueWithoutGl_accountInput[]
    updateMany?: journal_entryUpdateManyWithWhereWithoutGl_accountInput | journal_entryUpdateManyWithWhereWithoutGl_accountInput[]
    deleteMany?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type journal_entryUncheckedUpdateManyWithoutGl_accountNestedInput = {
    create?: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput> | journal_entryCreateWithoutGl_accountInput[] | journal_entryUncheckedCreateWithoutGl_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutGl_accountInput | journal_entryCreateOrConnectWithoutGl_accountInput[]
    upsert?: journal_entryUpsertWithWhereUniqueWithoutGl_accountInput | journal_entryUpsertWithWhereUniqueWithoutGl_accountInput[]
    createMany?: journal_entryCreateManyGl_accountInputEnvelope
    set?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    disconnect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    delete?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    update?: journal_entryUpdateWithWhereUniqueWithoutGl_accountInput | journal_entryUpdateWithWhereUniqueWithoutGl_accountInput[]
    updateMany?: journal_entryUpdateManyWithWhereWithoutGl_accountInput | journal_entryUpdateManyWithWhereWithoutGl_accountInput[]
    deleteMany?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
  }

  export type user_accountCreateNestedOneWithoutJournal_entryInput = {
    create?: XOR<user_accountCreateWithoutJournal_entryInput, user_accountUncheckedCreateWithoutJournal_entryInput>
    connectOrCreate?: user_accountCreateOrConnectWithoutJournal_entryInput
    connect?: user_accountWhereUniqueInput
  }

  export type gl_accountCreateNestedOneWithoutJournal_entryInput = {
    create?: XOR<gl_accountCreateWithoutJournal_entryInput, gl_accountUncheckedCreateWithoutJournal_entryInput>
    connectOrCreate?: gl_accountCreateOrConnectWithoutJournal_entryInput
    connect?: gl_accountWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_accountUpdateOneWithoutJournal_entryNestedInput = {
    create?: XOR<user_accountCreateWithoutJournal_entryInput, user_accountUncheckedCreateWithoutJournal_entryInput>
    connectOrCreate?: user_accountCreateOrConnectWithoutJournal_entryInput
    upsert?: user_accountUpsertWithoutJournal_entryInput
    disconnect?: user_accountWhereInput | boolean
    delete?: user_accountWhereInput | boolean
    connect?: user_accountWhereUniqueInput
    update?: XOR<XOR<user_accountUpdateToOneWithWhereWithoutJournal_entryInput, user_accountUpdateWithoutJournal_entryInput>, user_accountUncheckedUpdateWithoutJournal_entryInput>
  }

  export type gl_accountUpdateOneWithoutJournal_entryNestedInput = {
    create?: XOR<gl_accountCreateWithoutJournal_entryInput, gl_accountUncheckedCreateWithoutJournal_entryInput>
    connectOrCreate?: gl_accountCreateOrConnectWithoutJournal_entryInput
    upsert?: gl_accountUpsertWithoutJournal_entryInput
    disconnect?: gl_accountWhereInput | boolean
    delete?: gl_accountWhereInput | boolean
    connect?: gl_accountWhereUniqueInput
    update?: XOR<XOR<gl_accountUpdateToOneWithWhereWithoutJournal_entryInput, gl_accountUpdateWithoutJournal_entryInput>, gl_accountUncheckedUpdateWithoutJournal_entryInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_accountCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput> | user_accountCreateWithoutRolesInput[] | user_accountUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_accountCreateOrConnectWithoutRolesInput | user_accountCreateOrConnectWithoutRolesInput[]
    createMany?: user_accountCreateManyRolesInputEnvelope
    connect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
  }

  export type user_accountUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput> | user_accountCreateWithoutRolesInput[] | user_accountUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_accountCreateOrConnectWithoutRolesInput | user_accountCreateOrConnectWithoutRolesInput[]
    createMany?: user_accountCreateManyRolesInputEnvelope
    connect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
  }

  export type user_accountUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput> | user_accountCreateWithoutRolesInput[] | user_accountUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_accountCreateOrConnectWithoutRolesInput | user_accountCreateOrConnectWithoutRolesInput[]
    upsert?: user_accountUpsertWithWhereUniqueWithoutRolesInput | user_accountUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_accountCreateManyRolesInputEnvelope
    set?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    disconnect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    delete?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    connect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    update?: user_accountUpdateWithWhereUniqueWithoutRolesInput | user_accountUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_accountUpdateManyWithWhereWithoutRolesInput | user_accountUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_accountScalarWhereInput | user_accountScalarWhereInput[]
  }

  export type user_accountUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput> | user_accountCreateWithoutRolesInput[] | user_accountUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_accountCreateOrConnectWithoutRolesInput | user_accountCreateOrConnectWithoutRolesInput[]
    upsert?: user_accountUpsertWithWhereUniqueWithoutRolesInput | user_accountUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_accountCreateManyRolesInputEnvelope
    set?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    disconnect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    delete?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    connect?: user_accountWhereUniqueInput | user_accountWhereUniqueInput[]
    update?: user_accountUpdateWithWhereUniqueWithoutRolesInput | user_accountUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_accountUpdateManyWithWhereWithoutRolesInput | user_accountUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_accountScalarWhereInput | user_accountScalarWhereInput[]
  }

  export type journal_entryCreateNestedManyWithoutUser_accountInput = {
    create?: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput> | journal_entryCreateWithoutUser_accountInput[] | journal_entryUncheckedCreateWithoutUser_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutUser_accountInput | journal_entryCreateOrConnectWithoutUser_accountInput[]
    createMany?: journal_entryCreateManyUser_accountInputEnvelope
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
  }

  export type rolesCreateNestedOneWithoutUser_accountInput = {
    create?: XOR<rolesCreateWithoutUser_accountInput, rolesUncheckedCreateWithoutUser_accountInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_accountInput
    connect?: rolesWhereUniqueInput
  }

  export type journal_entryUncheckedCreateNestedManyWithoutUser_accountInput = {
    create?: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput> | journal_entryCreateWithoutUser_accountInput[] | journal_entryUncheckedCreateWithoutUser_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutUser_accountInput | journal_entryCreateOrConnectWithoutUser_accountInput[]
    createMany?: journal_entryCreateManyUser_accountInputEnvelope
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
  }

  export type journal_entryUpdateManyWithoutUser_accountNestedInput = {
    create?: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput> | journal_entryCreateWithoutUser_accountInput[] | journal_entryUncheckedCreateWithoutUser_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutUser_accountInput | journal_entryCreateOrConnectWithoutUser_accountInput[]
    upsert?: journal_entryUpsertWithWhereUniqueWithoutUser_accountInput | journal_entryUpsertWithWhereUniqueWithoutUser_accountInput[]
    createMany?: journal_entryCreateManyUser_accountInputEnvelope
    set?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    disconnect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    delete?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    update?: journal_entryUpdateWithWhereUniqueWithoutUser_accountInput | journal_entryUpdateWithWhereUniqueWithoutUser_accountInput[]
    updateMany?: journal_entryUpdateManyWithWhereWithoutUser_accountInput | journal_entryUpdateManyWithWhereWithoutUser_accountInput[]
    deleteMany?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
  }

  export type rolesUpdateOneWithoutUser_accountNestedInput = {
    create?: XOR<rolesCreateWithoutUser_accountInput, rolesUncheckedCreateWithoutUser_accountInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_accountInput
    upsert?: rolesUpsertWithoutUser_accountInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_accountInput, rolesUpdateWithoutUser_accountInput>, rolesUncheckedUpdateWithoutUser_accountInput>
  }

  export type journal_entryUncheckedUpdateManyWithoutUser_accountNestedInput = {
    create?: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput> | journal_entryCreateWithoutUser_accountInput[] | journal_entryUncheckedCreateWithoutUser_accountInput[]
    connectOrCreate?: journal_entryCreateOrConnectWithoutUser_accountInput | journal_entryCreateOrConnectWithoutUser_accountInput[]
    upsert?: journal_entryUpsertWithWhereUniqueWithoutUser_accountInput | journal_entryUpsertWithWhereUniqueWithoutUser_accountInput[]
    createMany?: journal_entryCreateManyUser_accountInputEnvelope
    set?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    disconnect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    delete?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    connect?: journal_entryWhereUniqueInput | journal_entryWhereUniqueInput[]
    update?: journal_entryUpdateWithWhereUniqueWithoutUser_accountInput | journal_entryUpdateWithWhereUniqueWithoutUser_accountInput[]
    updateMany?: journal_entryUpdateManyWithWhereWithoutUser_accountInput | journal_entryUpdateManyWithWhereWithoutUser_accountInput[]
    deleteMany?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type journal_entryCreateWithoutGl_accountInput = {
    entry_date: Date | string
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    user_account?: user_accountCreateNestedOneWithoutJournal_entryInput
  }

  export type journal_entryUncheckedCreateWithoutGl_accountInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type journal_entryCreateOrConnectWithoutGl_accountInput = {
    where: journal_entryWhereUniqueInput
    create: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput>
  }

  export type journal_entryCreateManyGl_accountInputEnvelope = {
    data: journal_entryCreateManyGl_accountInput | journal_entryCreateManyGl_accountInput[]
    skipDuplicates?: boolean
  }

  export type journal_entryUpsertWithWhereUniqueWithoutGl_accountInput = {
    where: journal_entryWhereUniqueInput
    update: XOR<journal_entryUpdateWithoutGl_accountInput, journal_entryUncheckedUpdateWithoutGl_accountInput>
    create: XOR<journal_entryCreateWithoutGl_accountInput, journal_entryUncheckedCreateWithoutGl_accountInput>
  }

  export type journal_entryUpdateWithWhereUniqueWithoutGl_accountInput = {
    where: journal_entryWhereUniqueInput
    data: XOR<journal_entryUpdateWithoutGl_accountInput, journal_entryUncheckedUpdateWithoutGl_accountInput>
  }

  export type journal_entryUpdateManyWithWhereWithoutGl_accountInput = {
    where: journal_entryScalarWhereInput
    data: XOR<journal_entryUpdateManyMutationInput, journal_entryUncheckedUpdateManyWithoutGl_accountInput>
  }

  export type journal_entryScalarWhereInput = {
    AND?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
    OR?: journal_entryScalarWhereInput[]
    NOT?: journal_entryScalarWhereInput | journal_entryScalarWhereInput[]
    id?: IntFilter<"journal_entry"> | number
    entry_date?: DateTimeFilter<"journal_entry"> | Date | string
    description?: StringNullableFilter<"journal_entry"> | string | null
    gl_account_id?: IntNullableFilter<"journal_entry"> | number | null
    amount?: DecimalNullableFilter<"journal_entry"> | Decimal | DecimalJsLike | number | string | null
    created_by?: IntNullableFilter<"journal_entry"> | number | null
    created_at?: DateTimeNullableFilter<"journal_entry"> | Date | string | null
  }

  export type user_accountCreateWithoutJournal_entryInput = {
    username?: string | null
    password?: string | null
    email?: string | null
    status?: number | null
    date_created?: Date | string | null
    roles?: rolesCreateNestedOneWithoutUser_accountInput
  }

  export type user_accountUncheckedCreateWithoutJournal_entryInput = {
    id?: number
    username?: string | null
    password?: string | null
    email?: string | null
    role_id?: number | null
    status?: number | null
    date_created?: Date | string | null
  }

  export type user_accountCreateOrConnectWithoutJournal_entryInput = {
    where: user_accountWhereUniqueInput
    create: XOR<user_accountCreateWithoutJournal_entryInput, user_accountUncheckedCreateWithoutJournal_entryInput>
  }

  export type gl_accountCreateWithoutJournal_entryInput = {
    gl_account?: string | null
    name?: string | null
    category?: string | null
    subcategory?: string | null
  }

  export type gl_accountUncheckedCreateWithoutJournal_entryInput = {
    id?: number
    gl_account?: string | null
    name?: string | null
    category?: string | null
    subcategory?: string | null
  }

  export type gl_accountCreateOrConnectWithoutJournal_entryInput = {
    where: gl_accountWhereUniqueInput
    create: XOR<gl_accountCreateWithoutJournal_entryInput, gl_accountUncheckedCreateWithoutJournal_entryInput>
  }

  export type user_accountUpsertWithoutJournal_entryInput = {
    update: XOR<user_accountUpdateWithoutJournal_entryInput, user_accountUncheckedUpdateWithoutJournal_entryInput>
    create: XOR<user_accountCreateWithoutJournal_entryInput, user_accountUncheckedCreateWithoutJournal_entryInput>
    where?: user_accountWhereInput
  }

  export type user_accountUpdateToOneWithWhereWithoutJournal_entryInput = {
    where?: user_accountWhereInput
    data: XOR<user_accountUpdateWithoutJournal_entryInput, user_accountUncheckedUpdateWithoutJournal_entryInput>
  }

  export type user_accountUpdateWithoutJournal_entryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneWithoutUser_accountNestedInput
  }

  export type user_accountUncheckedUpdateWithoutJournal_entryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gl_accountUpsertWithoutJournal_entryInput = {
    update: XOR<gl_accountUpdateWithoutJournal_entryInput, gl_accountUncheckedUpdateWithoutJournal_entryInput>
    create: XOR<gl_accountCreateWithoutJournal_entryInput, gl_accountUncheckedCreateWithoutJournal_entryInput>
    where?: gl_accountWhereInput
  }

  export type gl_accountUpdateToOneWithWhereWithoutJournal_entryInput = {
    where?: gl_accountWhereInput
    data: XOR<gl_accountUpdateWithoutJournal_entryInput, gl_accountUncheckedUpdateWithoutJournal_entryInput>
  }

  export type gl_accountUpdateWithoutJournal_entryInput = {
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gl_accountUncheckedUpdateWithoutJournal_entryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gl_account?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_accountCreateWithoutRolesInput = {
    username?: string | null
    password?: string | null
    email?: string | null
    status?: number | null
    date_created?: Date | string | null
    journal_entry?: journal_entryCreateNestedManyWithoutUser_accountInput
  }

  export type user_accountUncheckedCreateWithoutRolesInput = {
    id?: number
    username?: string | null
    password?: string | null
    email?: string | null
    status?: number | null
    date_created?: Date | string | null
    journal_entry?: journal_entryUncheckedCreateNestedManyWithoutUser_accountInput
  }

  export type user_accountCreateOrConnectWithoutRolesInput = {
    where: user_accountWhereUniqueInput
    create: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput>
  }

  export type user_accountCreateManyRolesInputEnvelope = {
    data: user_accountCreateManyRolesInput | user_accountCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type user_accountUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_accountWhereUniqueInput
    update: XOR<user_accountUpdateWithoutRolesInput, user_accountUncheckedUpdateWithoutRolesInput>
    create: XOR<user_accountCreateWithoutRolesInput, user_accountUncheckedCreateWithoutRolesInput>
  }

  export type user_accountUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_accountWhereUniqueInput
    data: XOR<user_accountUpdateWithoutRolesInput, user_accountUncheckedUpdateWithoutRolesInput>
  }

  export type user_accountUpdateManyWithWhereWithoutRolesInput = {
    where: user_accountScalarWhereInput
    data: XOR<user_accountUpdateManyMutationInput, user_accountUncheckedUpdateManyWithoutRolesInput>
  }

  export type user_accountScalarWhereInput = {
    AND?: user_accountScalarWhereInput | user_accountScalarWhereInput[]
    OR?: user_accountScalarWhereInput[]
    NOT?: user_accountScalarWhereInput | user_accountScalarWhereInput[]
    id?: IntFilter<"user_account"> | number
    username?: StringNullableFilter<"user_account"> | string | null
    password?: StringNullableFilter<"user_account"> | string | null
    email?: StringNullableFilter<"user_account"> | string | null
    role_id?: IntNullableFilter<"user_account"> | number | null
    status?: IntNullableFilter<"user_account"> | number | null
    date_created?: DateTimeNullableFilter<"user_account"> | Date | string | null
  }

  export type journal_entryCreateWithoutUser_accountInput = {
    entry_date: Date | string
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    gl_account?: gl_accountCreateNestedOneWithoutJournal_entryInput
  }

  export type journal_entryUncheckedCreateWithoutUser_accountInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    gl_account_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type journal_entryCreateOrConnectWithoutUser_accountInput = {
    where: journal_entryWhereUniqueInput
    create: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput>
  }

  export type journal_entryCreateManyUser_accountInputEnvelope = {
    data: journal_entryCreateManyUser_accountInput | journal_entryCreateManyUser_accountInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUser_accountInput = {
    name?: string | null
  }

  export type rolesUncheckedCreateWithoutUser_accountInput = {
    id?: number
    name?: string | null
  }

  export type rolesCreateOrConnectWithoutUser_accountInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_accountInput, rolesUncheckedCreateWithoutUser_accountInput>
  }

  export type journal_entryUpsertWithWhereUniqueWithoutUser_accountInput = {
    where: journal_entryWhereUniqueInput
    update: XOR<journal_entryUpdateWithoutUser_accountInput, journal_entryUncheckedUpdateWithoutUser_accountInput>
    create: XOR<journal_entryCreateWithoutUser_accountInput, journal_entryUncheckedCreateWithoutUser_accountInput>
  }

  export type journal_entryUpdateWithWhereUniqueWithoutUser_accountInput = {
    where: journal_entryWhereUniqueInput
    data: XOR<journal_entryUpdateWithoutUser_accountInput, journal_entryUncheckedUpdateWithoutUser_accountInput>
  }

  export type journal_entryUpdateManyWithWhereWithoutUser_accountInput = {
    where: journal_entryScalarWhereInput
    data: XOR<journal_entryUpdateManyMutationInput, journal_entryUncheckedUpdateManyWithoutUser_accountInput>
  }

  export type rolesUpsertWithoutUser_accountInput = {
    update: XOR<rolesUpdateWithoutUser_accountInput, rolesUncheckedUpdateWithoutUser_accountInput>
    create: XOR<rolesCreateWithoutUser_accountInput, rolesUncheckedCreateWithoutUser_accountInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_accountInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_accountInput, rolesUncheckedUpdateWithoutUser_accountInput>
  }

  export type rolesUpdateWithoutUser_accountInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesUncheckedUpdateWithoutUser_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type journal_entryCreateManyGl_accountInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type journal_entryUpdateWithoutGl_accountInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account?: user_accountUpdateOneWithoutJournal_entryNestedInput
  }

  export type journal_entryUncheckedUpdateWithoutGl_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type journal_entryUncheckedUpdateManyWithoutGl_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_accountCreateManyRolesInput = {
    id?: number
    username?: string | null
    password?: string | null
    email?: string | null
    status?: number | null
    date_created?: Date | string | null
  }

  export type user_accountUpdateWithoutRolesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    journal_entry?: journal_entryUpdateManyWithoutUser_accountNestedInput
  }

  export type user_accountUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    journal_entry?: journal_entryUncheckedUpdateManyWithoutUser_accountNestedInput
  }

  export type user_accountUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type journal_entryCreateManyUser_accountInput = {
    id?: number
    entry_date: Date | string
    description?: string | null
    gl_account_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type journal_entryUpdateWithoutUser_accountInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gl_account?: gl_accountUpdateOneWithoutJournal_entryNestedInput
  }

  export type journal_entryUncheckedUpdateWithoutUser_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gl_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type journal_entryUncheckedUpdateManyWithoutUser_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gl_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
declare namespace Express {
  export interface Request {
    user_id: string;
    slug: string;
  }

  export type BoolNullableListFilter = {
    equals?: Enumerable<boolean> | null
    has?: boolean | null
    hasEvery?: Enumerable<boolean>
    hasSome?: Enumerable<boolean>
    isEmpty?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }
}
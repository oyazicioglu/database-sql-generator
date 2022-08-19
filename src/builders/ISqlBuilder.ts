interface ISqlBuilder<T> {
    Select(): SelectResult<T>;
    Insert(): WhereResult<T>;
    Delete(): WhereResult<T>;
    Update(): WhereResult<T>;
    Joint(): JoinResult<T>;
}

interface SelectResult<T> {
    Join(): JoinResult<T>;
    Where(): WhereResult<T>;
}

interface JoinResult<T> {
    Where(): WhereResult<T>;
}

interface WhereResult<T> {
    Order(): OrderResult<T>;
}

interface OrderResult<T> {
    LimitResult(): SqlResult<T>;
}

interface SqlResult<T> {
    Build(): string;
}

export { ISqlBuilder, JoinResult, SelectResult, WhereResult, OrderResult, SqlResult };

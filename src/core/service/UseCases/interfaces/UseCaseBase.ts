export default interface UseCaseBase<T, TResponse> {

    execute(payload: T) : Promise<TResponse>
}
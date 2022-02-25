import {AxiosInstance, AxiosPromise} from "axios";
import {RecurrenceRule, RecurrenceSpecDateRange, RecurrenceSpecObjLit} from "./IRecurrenceRule";

type arbitary = any[];
type TDynamicObject = { [K:string]: number | string };
export interface IApi {
    axios: AxiosInstance;
    extra_headers: object;
    token: string;
    get(endpoint: string, data?: object): AxiosPromise;
    post(endpoint:string,data:object): AxiosPromise;
    put(endpoint:string, data:object): AxiosPromise;
}
export interface IDebug {
    error(...param:arbitary):void;
    info(...param:arbitary):void;
    done(...param:arbitary):void;
    tag: string;
}
export interface ILiveObject {
    write():void;
    delete():void;
    save():void;
    get_identifiers(): string;
}
export interface ICollection<T extends ILiveObject>{
    limit: number;
    filter: TDynamicObject;
    order_by: string;
    select(done:(response: boolean | T[])=>void):void;
    delete(done:(response: boolean)=>void):void;
    forEach(cb:(item: T, index:number)=>void):void;
    get(): T[];
}
export interface IApp {
    log: IDebug,
    dir: string;
    collection: ICollection<ILiveObject>;
    get_collection:(collection: ICollection<ILiveObject>)=>void;
    api: IApi
}
export type TInstallConfigUnit = {
    type: string,
    time: object | string
}
export type TInstallConfigUnitRange = {
    dayOfWeek: (string|number)[] | string | number,
    hour: string | number,
    minute: string | number
}
export type TSchedule = string|Date|number|RecurrenceRule|RecurrenceSpecDateRange|RecurrenceSpecObjLit;
export default interface IPlugin{
    getClassName():string;
    onRun(app: IApp):void;
    schema: {
        modules: string[],
        schedule: TSchedule[] | string[],
        recurrence: TInstallConfigUnit[] | string[],
        range: TInstallConfigUnitRange[]
    }
}

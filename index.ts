import IPlugin,{IApp,IDebug,ICollection,ILiveObject, IApi} from "./interfaces/IPlugin";
const COLLECTIONS = {
    LOG: "console_log",
    VARIABLE: "variables"
}
export { IPlugin, IApp, IDebug, ICollection, ILiveObject, COLLECTIONS as Collections, IApi };

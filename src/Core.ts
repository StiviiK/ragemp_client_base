// Util
import { StaticImplements } from "./util/decorator/StaticImplements";
import { Singleton } from "./util/Singleton";

@StaticImplements<Singleton<Core>>()
export class Core {
    public static instance: Core;
    public static getInstance(): Core {
        if (Core.instance === undefined) {
            Core.instance = new Core();
        }

        return Core.instance;
    }

    private constructor() {
        
    }
}

import { Core } from "./Core";

export class Main {
    public static entrypoint(): void {
        Core.getInstance();
    }

}

// Call entrypoint
Main.entrypoint();

import { EventEmitter } from "@angular/core";
export declare class LoadingBarService {
    onStart: EventEmitter<{}>;
    onStop: EventEmitter<{}>;
    onComplete: EventEmitter<{}>;
    onReset: EventEmitter<{}>;
    onSet: EventEmitter<{}>;
    start(): void;
    stop(): void;
    complete(): void;
    reset(): void;
    set(): void;
    fill(): void;
}

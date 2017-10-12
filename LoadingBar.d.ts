import { OnInit, OnDestroy } from "@angular/core";
import { LoadingBarService } from "./LoadingBarService";
export declare class LoadingBar implements OnInit, OnDestroy {
    private loadingBarService;
    color: string;
    height: number;
    animationTime: number;
    runInterval: number;
    progress: number;
    visible: boolean;
    private runningInterval;
    constructor(loadingBarService: LoadingBarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    set(any): void;
    reset(): void;
    complete(): void;
    fill(): void;
}

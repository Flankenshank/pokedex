export type CacheEntry<T> = {
createdAt: number;
val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    add<T>(key: string, val: T) {
        const entry: CacheEntry<T> = { createdAt: Date.now(), val };
        this.#cache.set(key, entry);
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        return entry ? entry.val : undefined;
    }

    #reap() {
        for (const [key, entry] of this.#cache.entries()) {
            if (Date.now() - entry.createdAt >= this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}


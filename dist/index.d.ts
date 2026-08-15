import { QuartzComponent } from '@quartz-community/types';

interface FileTrieNode {
    slugSegment?: string;
    slugSegments?: string[];
    displayName?: string;
    isFolder: boolean;
    data: Record<string, unknown> | null;
    children: FileTrieNode[];
}
interface ExplorerOptions {
    title?: string;
    folderDefaultState: "collapsed" | "open";
    folderClickBehavior: "collapse" | "link";
    useSavedState: boolean;
    sortFn?: (a: FileTrieNode, b: FileTrieNode) => number;
    filterFn?: (node: FileTrieNode) => boolean;
    mapFn?: (node: FileTrieNode) => FileTrieNode;
    order?: Array<"filter" | "map" | "sort">;
    /**
     * Slash-joined folder path (e.g. "posts") to root the tree at. Only that
     * folder's children are shown, rendered flat at the top level with no
     * folder wrapper/collapse UI of their own — the rest of the site (other
     * folders, the root index, tags, ...) is left out of the sidebar entirely.
     */
    rootFolder?: string;
}
declare const _default: (userOpts?: Partial<ExplorerOptions>) => QuartzComponent;

export { _default as Explorer, type ExplorerOptions };

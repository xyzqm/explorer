import { describe, expect, it } from "vitest";
import Explorer from "../src/components/Explorer";
import type { QuartzComponentProps } from "@quartz-community/types";

const testProps = { cfg: { locale: "en-US" } } as unknown as QuartzComponentProps;

function getDataFns(vnode: unknown): Record<string, unknown> {
  const { props } = vnode as { props: Record<string, unknown> };
  return JSON.parse(props["data-data-fns"] as string) as Record<string, unknown>;
}

describe("Explorer Component", () => {
  it("should create an Explorer component with default options", () => {
    const component = Explorer({});

    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });

  it("should create an Explorer component with custom options", () => {
    const component = Explorer({
      title: "Custom Explorer",
      folderDefaultState: "open",
      folderClickBehavior: "collapse",
      useSavedState: false,
    });

    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });

  it("should export component with css property", () => {
    const component = Explorer({});

    expect(component.css).toBeDefined();
    expect(typeof component.css).toBe("string");
  });

  it("should export component with afterDOMLoaded script", () => {
    const component = Explorer({});

    expect(component.afterDOMLoaded).toBeDefined();
    expect(typeof component.afterDOMLoaded).toBe("string");
  });

  it("includes rootFolder in data-data-fns when provided", () => {
    const component = Explorer({ rootFolder: "posts" });
    const dataFns = getDataFns(component(testProps));
    expect(dataFns.rootFolder).toBe("posts");
  });

  it("omits rootFolder from data-data-fns when not provided", () => {
    const component = Explorer({});
    const dataFns = getDataFns(component(testProps));
    expect(dataFns.rootFolder).toBeUndefined();
  });
});

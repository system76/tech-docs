import type { StarlightUserConfig } from "@astrojs/starlight/types";
import { readFileSync } from "fs";
import type { Link, List, ListItem, Root } from "mdast";
import { remark } from "remark";

type Sidebar = NonNullable<StarlightUserConfig["sidebar"]>;
type SidebarItem = Sidebar[number];

/** Strip the `.md` extension and lowercase the path for Astro routing. */
function toAstroPath(p: string): string {
    return p.replace(/\.md$/, "").toLowerCase();
}

function resolveLabel(label: string, link: string): string {
    const filename = link.split("/").pop() ?? "";
    return filename.toLowerCase() === "specs.md" ? "Specifications" : label;
}

/**
 * Pull the first `[label](url)` link out of a list item's paragraph node.
 * Returns null if the item doesn't follow that pattern (e.g. plain text, no link).
 */
function extractLink(item: ListItem): { label: string; link: string } | null {
    const para = item.children[0];
    if (para?.type !== "paragraph") return null;
    const linkNode = para.children.find((n): n is Link => n.type === "link");
    if (!linkNode) return null;
    const text = linkNode.children[0];
    if (text?.type !== "text") return null;
    return { label: text.value, link: linkNode.url };
}

/** Level 3 — a single page leaf. README links are labelled "Overview". */
function buildPageItem(item: ListItem): SidebarItem | null {
    const page = extractLink(item);
    if (!page) return null;
    return { label: resolveLabel(page.label, page.link), link: toAstroPath(page.link) };
}

/**
 * Level 2 — a model (e.g. "Lemur Pro (lemp13)").
 * If the model has sub-pages, returns a group whose first entry is the model's
 * own README labelled "Overview" so it remains directly linkable.
 * If there are no sub-pages, returns a direct link with the model's original label.
 */
function buildModelItem(item: ListItem): SidebarItem | null {
    const model = extractLink(item);
    if (!model) return null;

    const pageList = item.children.find((n): n is List => n.type === "list");
    if (!pageList)
        return {
            label: model.label,
            link: toAstroPath(model.link),
            attrs: { class: "group-label large" },
        };

    const pages = pageList.children.map(buildPageItem).filter(Boolean) as SidebarItem[];
    return {
        label: model.label,
        items: [
            {
                label: resolveLabel(model.label, model.link),
                link: toAstroPath(model.link),
            },
            ...pages,
        ],
    };
}

/**
 * Level 1 — a top-level section (e.g. "Current Models", "Previous Models").
 * "Previous Models" is collapsed by default to keep the sidebar tidy.
 */
function buildSectionItem(item: ListItem): SidebarItem | null {
    const section = extractLink(item);
    if (!section) return null;

    const modelList = item.children.find((n): n is List => n.type === "list");
    if (!modelList) return null;

    const models = modelList.children
        .map(buildModelItem)
        .filter(Boolean) as SidebarItem[];
    return {
        label: section.label,
        collapsed: section.label === "Previous Models",
        items: models,
    };
}

/**
 * Parse `src/SUMMARY.md` at the given path and convert it to a Starlight sidebar config.
 * The SUMMARY uses a three-level nested list: section → model → pages.
 */
export function generateSidebar(summaryPath: string): Sidebar {
    const tree = remark().parse(readFileSync(summaryPath, "utf-8")) as Root;
    const topList = tree.children.find((n): n is List => n.type === "list");
    if (!topList) return [];
    return topList.children.map(buildSectionItem).filter(Boolean) as Sidebar;
}

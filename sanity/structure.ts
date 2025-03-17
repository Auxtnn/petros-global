import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Samchukwu Properties Admin Dashboard")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("property").title("Properties"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "property"].includes(item.getId()!)
      ),
    ]);

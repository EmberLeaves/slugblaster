const api = foundry.application.api;
const sheets = foundry.applications.sheets;

export default class slugblasterCharacterSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        tag: "form",
        classes: ["slugblaster", "sheet", "characterSheet"],
        actions: {

        },
        position: {
            width: 650
        }
    }

    static PARTS = {
        header: { template: "systems/slugblaster/templates/sheets/character/header.hbs"},
        sidebar: { template: "systems/slugblaster/templates/sheets/character/sidebar.hbs"}
    }

    get title() {
        return this.actor.name;
    }
}
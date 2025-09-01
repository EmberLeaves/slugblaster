const api = foundry.application.api;
const sheets = foundry.applications.sheets;

export default class slugblasterCharacterSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        tag: "form",
        classes: ["slugblaster", "sheet", "characterSheet"],
        actions: {

        },
        form: {
            submitOnChange: true,
            closeOnSubmit: false,
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

    /** @override */
    _configureRenderOptions(options) {
        super._configureRenderOptions(options);

        // If only limited view, only header
        if (this.document.limited)
            options.parts = ["header"]
        else
            options.parts = ["header", "sidebar"]
    }

    /** @override */
    async _prepareContext(options) {
        // Creates basic datamodel, which is used to fill the HTML together with Handelbars with Data

        const baseData = await super._prepareContext();

        const context = {
            // Set General Values
            owner: baseData.document.isOwner,
            editable: baseData.editable,
            actor: baseData.document,
            system: baseData.document.system,
            items: baseData.document.items,
            config: CONFIG.SLUGBLASTER,
            isGM: baseData.user.isGM,
            effects: baseData.document.effects,
        }

        this.sheetContext = context;

        return context;
    }

    /** @override */
    // One of last metheds exectuted when showing sheet
    _onRender(context, options) {
        // Setting up tabs
        const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
        tabs.bind(this.element);

        const tabs2 = new foundry.applications.ux.Tabs({navSelector: ".tabs2", contentSelector: ".content", initial: "tab2-1"});
        tabs2.bind(this.element);
    }
}
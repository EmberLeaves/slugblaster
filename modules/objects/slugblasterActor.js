export default class slugblasterActor extends Actor {
    prepareDate() {
        // In case some steps need to be overwritten later
        super.prepareData();
    }

    prepareDerivedDate() {
        const actorData = this.system;

        // Add possability for switch statement on the different Actor types
        this._preparePlayerCharacterData(actorData);
    }

    _preparePlayerCharacterData(actorData) {
        // Calculation of the Base Character Values
        this._setCharacterValues(actorData);
    }

    async _setCharacterValues(data) {
        // Calculate values here!
    }

    setNote(note) {
        // Method to update Character Notes
        this.update({ "system.note":note });
    }

    addLogEntry(Entry) {
        // Add a log entry to the character event log
        let log = this.system.log;
        log.push(Entry);
        this.update({ "system.log":log });
    }
}

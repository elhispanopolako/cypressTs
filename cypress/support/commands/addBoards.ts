export { }
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @param name String name of the board
             * @example
             * //this command
             * cy.addBoard('new Board')
             */
            addBoard(name: String): Chainable<any>
        }
    }
}
Cypress.Commands.add('addBoard', (name: string) => {

    Cypress.log({
        displayName: 'addBoard',
        message: name,
        consoleProps() {
            return {
                name
            }
        }
    })
    return cy.request('POST', '/api/boards', { name }).its('body')
})
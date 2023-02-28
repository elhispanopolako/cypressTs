export { }
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @param body SRecord<stringbody oRecord<stringboard
             * @example
             * //this command
             * cy.editBoard(1)
             */
            editBoard(body: Record<string, any>): Chainable<any>
        }
    }
}
Cypress.Commands.add('editBoard', (body: Record<string, any>) => {

    Cypress.log({
        displayName: 'editBoard',
        consoleProps() {
            return {
                id: body.id
            }
        }
    })
    return cy.request('PATCH', `/api/boards${body.id}`, body).its('body')
})
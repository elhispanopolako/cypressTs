it('Create a new board', () => {
    cy.addBoard('new board').then((body) => {
        expect(body.id).to.exist
        expect(body.starred).to.be.false
        expect(body.name).to.eq('new board')
    })
})
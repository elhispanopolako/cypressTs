it('Create a new board', () => {
    cy.addBoard('new board')
    cy.editBoard({
        id: 1,
        name: 'Edit board',
        starred: true
    })
})
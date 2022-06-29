/* eslint-disable no-undef */
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

/* eslint-disable no-undef */
describe('Visit home page', () => {
  it('Page loaded successfully', () => {
    cy.visit('/')
  })

  it('add and delete Tasks',()=>{
    cy.get('[id="addTaskToListId"]').click()
    cy.get('[id="taskName"]').type("Unit Tesing")
    cy.get('[id="taskHours"]').type(4)
    cy.get('[id="addTaskId"]').click()
    cy.get('[id="displayedList"]').should('have.length',5)
    cy.get('[id="deleteTaskId"]').click({multiple:true, force:true})
    cy.get('[id="deleteAllTasks"]').click()
    cy.get('[id="displayedList"]').should('have.length',0)
  })
})
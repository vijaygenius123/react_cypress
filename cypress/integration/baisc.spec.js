/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Basic Tests", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.get("[data-test-id='todo-list'")

        cy.get("[data-test-id='todo-heading'")
            .contains("Todo List")
    })
})

describe("Add An Empty Todo", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.get("[data-test-id='todo-add'")
            .click()

        cy.get("[data-test-class='todo-item'")
            .should('have.length',0)
    })
})

describe("Add An  Todo with content", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")

        cy.get("[data-test-id='todo-input'")
            .type("Task 1")
        cy.get("[data-test-id='todo-add'")
            .click()

        cy.get("[data-test-class='todo-item'")
            .should('have.length',1)
    })
})

describe("Add Two Todo with content", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")

        cy.get("[data-test-id='todo-input'")
            .type("Task 1")
        cy.get("[data-test-id='todo-add'")
            .click()

        cy.get("[data-test-id='todo-input'")
            .type("Task 2")
        cy.get("[data-test-id='todo-add'")
            .click()

        cy.get("[data-test-class='todo-item'")
            .should('have.length',1)
    })
})

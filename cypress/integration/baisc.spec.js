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

describe("Add A Todo", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.get("[data-test-id='todo-list'")

        cy.get("[data-test-id='todo-heading'")
            .contains("Todo List")
    })
})

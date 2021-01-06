/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Basic Tests", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.getByTestId("todo-list")

        cy.getByTestId("todo-heading")
            .contains("Todo List")
    })
})

describe("Add An Empty Todo", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.getByTestId("todo-add")
            .click()

        cy.getByTestClass("todo-item")
            .should('have.length',0)
    })
})

describe("Add An  Todo with content", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")

        cy.getByTestId("todo-input")
            .type("Task 1")
        cy.getByTestId("todo-add")
            .click()

        cy.getByTestClass("todo-item")
            .should('have.length',1)
    })
})

describe("Add Two Todo with content", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")

        cy.getByTestId("todo-input")
            .type("Task 1")
        cy.getByTestId("todo-add")
            .click()

        cy.getByTestId("todo-input")
            .type("Task 2")
        cy.getByTestId("todo-add")
            .click()

        cy.getByTestClass("todo-item")
            .should('have.length',2)
    })
})

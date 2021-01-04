/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Basic Tests", () => {

    it("opens the app", () => {

        cy.visit("http://localhost:3000")
        cy.get('.App-link').contains("Learn React")

    })
})

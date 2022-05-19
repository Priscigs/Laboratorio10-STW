/**
 * @test-environmet jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import StartApp from '.././StartApp';

describe("Testing Component StartApp", () => {

    // TEST DENTRO DEL COMPONENTE DESCRITO PREVIAMENTE
    it("Testing Component StartApp", () => {
        render(<StartApp></StartApp>)

        // BUSCAR ELEMENTO EN DOM CON ID ESPECÍFICO
        const testElement = screen.getByTestId("input-text-test");
        expect(testElement).toBeInTheDocument();
    });
});
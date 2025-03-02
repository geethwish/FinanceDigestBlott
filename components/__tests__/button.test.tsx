import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '@/components/shared/button/Button';


describe('Button component', () => {

    const mockClick = jest.fn();

    it('renders button correctly', () => {
        const { getByText } = render(<Button label='Ok' onPress={mockClick} />);
        expect(getByText('Ok')).toBeTruthy();
    });

    it('calls onPress event when button is pressed', () => {
        const { getByText } = render(<Button label='Ok' onPress={mockClick} />);
        const button = getByText('Ok');
        fireEvent.press(button);
        expect(mockClick).toHaveBeenCalled();
    });
});
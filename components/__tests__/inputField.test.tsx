import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '@/components/shared/button/Button';
import InputField from '../shared/form/InputField';


describe('Input Field component', () => {

    const mockBlur = jest.fn();
    const mockChangeTest = jest.fn();

    it('renders button correctly', () => {
        const { getByPlaceholderText } = render(<InputField value='Test' onBlur={mockBlur} onChangeText={mockChangeTest} placeholder='Test Component' name='test' error='' touched />);
        const inputField = getByPlaceholderText('Test Component');
        expect(inputField.props.value).toBe('Test');
    });

    it('calls onChangeText event when input is changed', () => {
        const { getByPlaceholderText } = render(<InputField value='Test' onBlur={mockBlur} onChangeText={mockChangeTest} placeholder='Test Component' name='test' error='' touched />);
        const inputField = getByPlaceholderText('Test Component');
        fireEvent.changeText(inputField, 'Test Changed');
        expect(mockChangeTest).toHaveBeenCalled();
    });
});


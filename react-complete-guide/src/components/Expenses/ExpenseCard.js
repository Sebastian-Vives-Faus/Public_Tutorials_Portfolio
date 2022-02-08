import React from 'react'

import { Wrapper } from '../UI/ExpenseItem_Style';

export const ExpenseCard = (props) => {
        return (
            <Wrapper>
                {props.children}
            </Wrapper>
        );
}
/* eslint-disable react/prop-types */
import React from 'react';

// Assets
import { PaginationField } from './pagination.style';
import { Pagination } from '@mui/material';

const PaginationComponent = ({ pageState, setPageState }) => {
    return (
        <PaginationField>
            <Pagination
                count={pageState?.total}
                page={pageState?.current}
                size='small'
                onChange={(_, value) =>
                    setPageState({
                        ...pageState,
                        current: value
                    })
                }
            />
        </PaginationField>
    );
};

export default PaginationComponent;

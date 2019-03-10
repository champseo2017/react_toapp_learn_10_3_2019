import React from 'react';
import styled from 'styled-components';

const Bordered = styled.div`
        border: 2px gray solid;
`
export default WrappedComponent => props => <Bordered>
        <WrappedComponent {...props} />
</Bordered>
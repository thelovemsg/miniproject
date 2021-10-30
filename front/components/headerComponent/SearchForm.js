/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Input } from 'antd';

const inputSearchStyle = css`
    margin-top: 17px;
    margin-left: 15%;
    width: 70%;
`;

const SearchForm = () => {
    return(
        <Input.Search css={inputSearchStyle}/>
    );
}

export default SearchForm;  
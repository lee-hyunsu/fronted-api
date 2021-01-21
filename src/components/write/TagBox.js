import React from 'react';
import {useState, useCallback} from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4{
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid ${palette.gray[9]};
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
    }

    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

//React.memo를 사용하여 tag값이 바뀔 때만 리렌더링 되도록 처리
const TagItem = React.memo(({tag, onRemove}) => 
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>)

//React.memo를 사용하여 tags값이 바뀔 ㄸ만 리렌더링 되도록 처리
const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlock>
));

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    condt

    return (
        <TagBoxBlock>
            <h4>서치서치서치</h4>
            <TagForm>
                <input placeholder="뭐 찾아볼까..."/>
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={['주식', '지도', '머신러닝']}/>
        </TagBoxBlock>
    );
};

export default TagBox;
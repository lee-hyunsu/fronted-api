import React, {useEffect, useCallback} from 'react';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
    const dispatch = dispatch()

    return () => {
        dispatch(initialize());
    };
}